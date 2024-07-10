"use client";

import { useState } from "react";
import Link from "next/link";

const Dashboard = () => {
  const userName = "John Doe"; // Placeholder for user's name
  const walletID = "1234-5678-9101-1121"; // Placeholder for wallet ID

  const transactions = [
    {
      name: "Bangkok Bank",
      description: "Withdraw to bank account",
      time: "03:00 PM",
      date: "10 Mar 2022",
      status: "In Progress",
      amount: "-$520",
      fees: "$3.0",
    },
    {
      name: "Envato Pty Ltd",
      description: "Marketplace Payment Received",
      time: "04:30 PM",
      date: "01 Mar 2022",
      status: "Completed",
      amount: "+$450",
      fees: "No Fees",
    },
    {
      name: "Mailchimp",
      description: "Subscription Service Payment",
      time: "01:15 PM",
      date: "25 Mar 2022",
      status: "Completed",
      amount: "-$100",
      fees: "No Fees",
    },
    {
      name: "Facebook Ads",
      description: "Ads Service",
      time: "07:05 PM",
      date: "15 Mar 2022",
      status: "Pending",
      amount: "$200",
      fees: "No Fees",
    },
    {
      name: "Upwork Escrow Inc",
      description: "Payment",
      time: "04:02 PM",
      date: "10 Mar 2022",
      status: "Completed",
      amount: "$450",
      fees: "$.5",
    },
    {
      name: "Ron Stewart",
      description: "Payment Refund",
      time: "11:00 PM",
      date: "21 Mar 2022",
      status: "Cancelled",
      amount: "+$450",
      fees: "No Fees",
    },
  ];

  const paymentAnalytics = [
    {
      name: "Phil King",
      time: "08:00 AM",
      date: "19 August",
      status: "Payment",
      amount: "+$345",
    },
    {
      name: "Debra Wilson",
      time: "08:00 AM",
      date: "19 August",
      status: "Refund",
      amount: "-$850",
    },
    {
      name: "Philip Henry",
      time: "08:00 AM",
      date: "19 August",
      status: "Payment",
      amount: "+$2,050",
    },
    {
      name: "Erin Garcia",
      time: "08:00 AM",
      date: "19 August",
      status: "Payment",
      amount: "+$900",
    },
  ];

  const transactionHistory = [
    {
      time: "03:00 PM",
      date: "17 Oct, 2020",
      amount: "$160.48",
      type: "Withdraw",
    },
    {
      time: "01:09 PM",
      date: "15 Oct, 2021",
      amount: "$106.58",
      type: "Withdraw",
    },
    {
      time: "04:00 PM",
      date: "12 Oct, 2020",
      amount: "$176.58",
      type: "Withdraw",
    },
    {
      time: "06:00 PM",
      date: "25 Oct, 2020",
      amount: "$167.85",
      type: "Withdraw",
    },
  ];

  return (
    <div className="vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Fintech MVP
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
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" legacyBehavior>
                  <a className="nav-link">Profile</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" legacyBehavior>
                  <a className="nav-link">Settings</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" legacyBehavior>
                  <a className="nav-link">Logout</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-4">Hi, {userName}!</h1>
          <div className="wallet-id">
            <h5>Wallet ID: {walletID}</h5>
          </div>
        </div>
        <p className="lead">Welcome to your dashboard.</p>

        <div className="row mb-4">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">USD Account</h5>
                <p className="card-text">Manage your USD account.</p>
                <button className="btn btn-primary">Create USD Account</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">GBP Account</h5>
                <p className="card-text">Manage your GBP account.</p>
                <button className="btn btn-primary">Create GBP Account</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">NGN Account</h5>
                <p className="card-text">Manage your NGN account.</p>
                <button className="btn btn-primary">Create NGN Account</button>
              </div>
            </div>
          </div>
        </div>

        <div className="transactions">
          <h2>Transactions</h2>
          <p>Updated every several minutes</p>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4>Latest</h4>
            <button className="btn btn-secondary">View All</button>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name/Business</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
                <th>Fees</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>
                    {transaction.name}
                    <br />
                    <small>{transaction.description}</small>
                  </td>
                  <td>
                    {transaction.time}
                    <br />
                    <small>{transaction.date}</small>
                  </td>
                  <td>{transaction.status}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.fees}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="linked-payment-system my-4">
          <h2>Linked Payment System</h2>
          <p>Manage your linked payment systems.</p>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Paylio Payment Card</h5>
              <p>Linked: 01 Jun 2021</p>
              <button className="btn btn-primary">Set transfer limit</button>
              <button className="btn btn-danger ms-2">
                Remove from Linked
              </button>
            </div>
            <div className="card-footer">
              <h6>Transaction History: 20</h6>
              <ul className="list-unstyled">
                {transactionHistory.map((transaction, index) => (
                  <li key={index}>
                    {transaction.time} {transaction.date} - {transaction.amount}{" "}
                    {transaction.type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="payment-analytics my-4">
          <h2>Payment Analytics</h2>
          <p>Monthly Recipients</p>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4>Recent Payments</h4>
            <button className="btn btn-secondary">View All</button>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Date</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {paymentAnalytics.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.name}</td>
                  <td>{payment.time}</td>
                  <td>{payment.date}</td>
                  <td>{payment.status}</td>
                  <td>{payment.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="virtual-card my-4">
          <h2>Virtual Card</h2>
          <p>Manage your virtual cards.</p>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Add New Card</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="5890 - 6858 - 6332 - 9843"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Card Holder</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Alfred Davis"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Month</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="12"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Year</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="2025"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Add Card
                </button>
              </form>
            </div>
          </div>
        </div>

        <style jsx>{`
          .container-fluid {
            max-width: 1200px;
          }
          .display-4 {
            font-weight: bold;
            margin-top: 20px;
          }
          .lead {
            font-size: 1.25rem;
            font-weight: 300;
            margin-bottom: 20px;
          }
          .wallet-id {
            text-align: right;
          }
          .card {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
          }
          .card:hover {
            transform: translateY(-5px);
          }
          .card-title {
            font-weight: bold;
          }
          .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
          }
          .transactions {
            margin-top: 40px;
          }
          .table {
            margin-top: 20px;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Dashboard;
