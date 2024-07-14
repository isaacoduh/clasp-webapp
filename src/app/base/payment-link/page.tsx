"use client";
import React, { useState } from "react";
import Head from "next/head";

const PaymentLinkForm = () => {
  const [recipientEmail, setRecipientEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [paymentLink, setPaymentLink] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Generate payment link logic - replace with actual implementation
    const generatedLink = `https://example.com/pay?recipient=${recipientEmail}&amount=${amount}&description=${encodeURIComponent(
      description
    )}`;
    setPaymentLink(generatedLink);
  };

  return (
    <div className="container mt-5">
      <Head>
        <title>Generate Payment Link</title>
      </Head>
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">Generate Payment Link</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="recipientEmail" className="form-label">
                Recipient Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="recipientEmail"
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label">
                Amount:
              </label>
              <div className="input-group">
                <span className="input-group-text">$</span>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <textarea
                className="form-control"
                id="description"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Generate Payment Link
            </button>
          </form>
        </div>
        {paymentLink && (
          <div className="card-footer">
            <h5>Payment Link:</h5>
            <p>
              <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                {paymentLink}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentLinkForm;
