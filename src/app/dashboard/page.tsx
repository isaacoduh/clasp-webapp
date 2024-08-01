"use client";
import { useAuthContext } from "@/context/AuthContext/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

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

export default function Dashboard() {
  const greeting = getTimeOfDayGreeting();
  const { user, logout } = useAuthContext();
  const router = useRouter();
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
      </div>
    </div>
  );
}
