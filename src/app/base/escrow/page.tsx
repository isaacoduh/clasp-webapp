"use client";

import React, { useState } from "react";
import Head from "next/head";

// SearchUser component for searching a user
const SearchUser = ({ onSelectUser }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Mock search results - replace with actual API call
    const mockResults = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Mike Johnson" },
    ];
    setSearchResults(mockResults);
  };

  const handleSelectUser = (user) => {
    onSelectUser(user);
    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div>
      <h2>Search User</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter user name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>
          Search
        </button>
      </div>
      <ul className="list-group">
        {searchResults.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {user.name}
            <button
              className="btn btn-success"
              onClick={() => handleSelectUser(user)}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// AddMoneyToEscrow component for adding money to escrow session
const AddMoneyToEscrow = ({ onAddMoney }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddMoney(parseFloat(amount));
    setAmount("");
  };

  return (
    <div>
      <h2>Add Money to Escrow</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount:
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Money
        </button>
      </form>
    </div>
  );
};

// AddNotes component for adding notes to escrow session
const AddNotes = ({ onAddNotes }) => {
  const [notes, setNotes] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddNotes(notes);
    setNotes("");
  };

  return (
    <div>
      <h2>Add Notes</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Notes:
          </label>
          <textarea
            className="form-control"
            id="notes"
            rows="3"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Notes
        </button>
      </form>
    </div>
  );
};

// AgreeToRelease component for agreeing to release payments
const AgreeToRelease = ({ onAgreeRelease }) => {
  const handleAgree = () => {
    onAgreeRelease();
  };

  return (
    <div>
      <h2>Agree to Release Payments</h2>
      <p>
        By clicking the button below, you agree to release the escrowed funds.
      </p>
      <button className="btn btn-success" onClick={handleAgree}>
        Agree to Release
      </button>
    </div>
  );
};

const EscrowDemoPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [escrowAmount, setEscrowAmount] = useState(0);
  const [escrowNotes, setEscrowNotes] = useState("");
  const [agreedToRelease, setAgreedToRelease] = useState(false);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
  };

  const handleAddMoneyToEscrow = (amount) => {
    setEscrowAmount((prevAmount) => prevAmount + amount);
  };

  const handleAddNotes = (notes) => {
    setEscrowNotes(notes);
  };

  const handleAgreeRelease = () => {
    // Implement logic for agreeing to release payments
    setAgreedToRelease(true);
  };

  return (
    <div className="container mt-5">
      <Head>
        <title>Escrow Demo</title>
      </Head>

      {!selectedUser && <SearchUser onSelectUser={handleSelectUser} />}

      {selectedUser && !escrowAmount && (
        <AddMoneyToEscrow onAddMoney={handleAddMoneyToEscrow} />
      )}

      {escrowAmount > 0 && !escrowNotes && (
        <AddNotes onAddNotes={handleAddNotes} />
      )}

      {escrowAmount > 0 && escrowNotes && !agreedToRelease && (
        <AgreeToRelease onAgreeRelease={handleAgreeRelease} />
      )}

      {agreedToRelease && (
        <div>
          <h2>Escrow Completed</h2>
          <p>Payments have been released from escrow.</p>
        </div>
      )}
    </div>
  );
};

export default EscrowDemoPage;
