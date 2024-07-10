"use client";
import React, { useState } from "react";

const PaymentForm = () => {
  const [step, setStep] = useState(1);
  const [senderAccount, setSenderAccount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const accounts = [
    { id: 1, accountNumber: "1234567890", accountName: "John Doe" },
    { id: 2, accountNumber: "0987654321", accountName: "Jane Smith" },
  ];

  const recipients = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Mike Johnson", email: "mike.johnson@example.com" },
  ];

  const handleSenderAccountChange = (e: any) => {
    setSenderAccount(e.target.value);
  };

  const handleRecipientChange = (e: any) => {
    setRecipient(e.target.value);
  };

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Process the payment or navigate to success page
    console.log("Payment submitted:", {
      senderAccount,
      recipient,
      amount,
      description,
    });
    // Reset form or navigate to success page
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Make a Payment</h3>
            </div>
            <div className="card-body">
              {step === 1 && (
                <form onSubmit={nextStep}>
                  {/* Step 1: Sender's Account */}
                  <div className="mb-3">
                    <label htmlFor="senderAccount" className="form-label">
                      From Account
                    </label>
                    <select
                      className="form-select"
                      id="senderAccount"
                      value={senderAccount}
                      onChange={handleSenderAccountChange}
                      required
                    >
                      <option value="">Select sender's account</option>
                      {accounts.map((acc) => (
                        <option key={acc.id} value={acc.accountNumber}>
                          {acc.accountName} - {acc.accountNumber}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Next
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <form onSubmit={nextStep}>
                  {/* Step 2: Recipient Information */}
                  <div className="mb-3">
                    <label htmlFor="recipient" className="form-label">
                      To Account or Recipient
                    </label>
                    <select
                      className="form-select"
                      id="recipient"
                      value={recipient}
                      onChange={handleRecipientChange}
                      required
                    >
                      <option value="">
                        Select recipient or enter account number
                      </option>
                      {recipients.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.name} - {r.email}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-secondary mr-3"
                      onClick={prevStep}
                    >
                      Previous
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Next
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <form onSubmit={nextStep}>
                  {/* Step 3: Payment Details */}
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">
                      Amount
                    </label>
                    <div className="input-group">
                      <input
                        type="number"
                        className="form-control"
                        id="amount"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={handleAmountChange}
                        required
                      />
                      <span className="input-group-text">$</span>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      rows="3"
                      placeholder="Enter payment description"
                      value={description}
                      onChange={handleDescriptionChange}
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-secondary mr-3"
                      onClick={prevStep}
                    >
                      Previous
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Next
                    </button>
                  </div>
                </form>
              )}

              {step === 4 && (
                <form onSubmit={handleSubmit}>
                  {/* Step 4: Final Confirmation */}
                  <h5 className="mb-4">Final Confirmation</h5>
                  <p>
                    <strong>From Account:</strong>{" "}
                    {
                      accounts.find(
                        (acc) => acc.accountNumber === senderAccount
                      )?.accountName
                    }{" "}
                    - {senderAccount}
                  </p>
                  <p>
                    <strong>To Account or Recipient:</strong>{" "}
                    {recipients.find((r) => r.id === parseInt(recipient))?.name}
                  </p>
                  <p>
                    <strong>Amount:</strong> ${amount}
                  </p>
                  <p>
                    <strong>Description:</strong> {description}
                  </p>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-secondary mr-3"
                      onClick={prevStep}
                    >
                      Previous
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Confirm Payment
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
