"use client";
import AccountModal from "@/components/Accounts/AccountModal";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SecureLS from "secure-ls";

const getTimeOfDayGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good morning";
  } else if (currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

interface Account {
  account_balance: string;
  account_number: string;
  currency: string;
}

export default function Dashboard() {
  const greeting = getTimeOfDayGreeting();
  const { user, logout } = useAuthContext();
  const router = useRouter();
  const ls = new SecureLS();
  const token = ls.get("token");
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [showModal, setShowModal] = useState(false);

  const fetchDashboardData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/dashboard`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setAccounts(response?.data?.data?.accounts);

    // console.log(response?.data?.data?.accounts);
  };

  const createAccount = async (accountData: any) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/accounts/create`,
        accountData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 201) {
        fetchDashboardData();
        setShowModal(false);
      }
    } catch (error) {
      console.log("Error creating account: ", error);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);
  return (
    <div className="vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Clasp Finance
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="#" legacyBehavior>
                  <button
                    className="nav-link"
                    onClick={() => {
                      setTimeout(() => {
                        logout();
                        router.push("/auth/signin");
                      }, 100);
                    }}
                  >
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="">
            {greeting}, {user?.username}
          </h3>
          <div className="wallet-id">
            <h5>Wallet ID: </h5>
          </div>
        </div>
        <p className="lead">Welcome to your dashboard.</p>
        {accounts && accounts.length ? (
          <div>
            <div className="d-flex justify-content-between">
              <div>You have {accounts.length} accounts</div>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Create Account
              </button>
            </div>
            <hr />
            <div className="row mb-4">
              {accounts.map((account, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card">
                    <div className="card-body">
                      <h5>Balance: {account?.account_balance}</h5>
                      <p className="card-title">
                        Account:{" "}
                        {account?.currency
                          ? account.currency.toUpperCase()
                          : ""}
                      </p>
                      <p>Account Number: {account?.account_number}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p>No accounts yet</p>{" "}
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(true)}
            >
              Create Account
            </button>
          </div>
        )}
      </div>
      <AccountModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        createAccount={createAccount}
      />
    </div>
  );
}
