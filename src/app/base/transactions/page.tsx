"use client";

import React, { useState } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";

const TransactionsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Sample transaction data
  const transactions = [
    {
      id: 1,
      name: "Bangkok Bank",
      description: "Withdraw to bank account",
      amount: "-$520",
      status: "In Progress",
    },
    {
      id: 2,
      name: "Envato Pty Ltd",
      description: "Marketplace Payment Received",
      amount: "+$450",
      status: "Completed",
    },
    {
      id: 3,
      name: "Mailchimp",
      description: "Subscription Service Payment",
      amount: "-$100",
      status: "Completed",
    },
    {
      id: 4,
      name: "Facebook Ads",
      description: "Ads Service",
      amount: "$200",
      status: "Pending",
    },
    {
      id: 5,
      name: "Upwork Escrow Inc",
      description: "Payment payment",
      amount: "$450",
      status: "Completed",
    },
    {
      id: 6,
      name: "Ron Stewart",
      description: "Payment Refund",
      amount: "+$450",
      status: "Cancelled",
    },
  ];

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle clicking on a transaction
  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
    document.body.classList.add("modal-open"); // Add the class to body for modal-open
  };

  // Function to handle closing the modal
  const handleCloseModal = () => {
    setSelectedTransaction(null);
    document.body.classList.remove("modal-open"); // Remove the class from body
  };

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mt-5">
      <Head>
        <title>Transactions</title>
      </Head>

      {/* Transactions list */}
      <h2>Transactions</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name/ Business</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.name}</td>
              <td>{new Date().toLocaleDateString()}</td>
              <td>{transaction.status}</td>
              <td>{transaction.amount}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleTransactionClick(transaction)}
                >
                  Transaction Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for transaction details */}
      {selectedTransaction && (
        <>
          {/* Blur effect container */}
          <div className="modal-backdrop fade show"></div>

          {/* Modal */}
          <div
            className="modal d-block"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Transaction Details</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <h6>{selectedTransaction.name}</h6>
                  <p>Date: {new Date().toLocaleDateString()}</p>
                  <p>Amount: {selectedTransaction.amount}</p>
                  <p>Status: {selectedTransaction.status}</p>
                  <p>Description: {selectedTransaction.description}</p>
                  <p>Transaction ID: {selectedTransaction.id}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TransactionsPage;
