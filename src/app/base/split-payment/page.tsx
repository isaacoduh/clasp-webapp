"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";

const SplitPaymentPage = () => {
  const [totalAmount, setTotalAmount] = useState("");
  const [recipients, setRecipients] = useState([]);
  const [evidenceDocument, setEvidenceDocument] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentDetails, setPaymentDetails] = useState(null);

  useEffect(() => {
    // Fetch payment details based on `id` from backend API
    // Replace with actual API call
    const mockPaymentDetails = {
      totalAmount: 1000,
      recipients: [
        { email: "recipient1@example.com", share: 300 },
        { email: "recipient2@example.com", share: 500 },
        { email: "recipient3@example.com", share: 200 },
      ],
      evidenceDocument: "invoice.pdf",
    };
    setPaymentDetails(mockPaymentDetails);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setEvidenceDocument(file);
  };

  const handleAddRecipient = () => {
    setRecipients([...recipients, { email: "", share: "" }]);
  };

  const handleRecipientChange = (index, key, value) => {
    const updatedRecipients = [...recipients];
    updatedRecipients[index][key] = value;
    setRecipients(updatedRecipients);
  };

  const handleSubmitRequest = (event) => {
    event.preventDefault();
    // Implement backend logic to handle form submission
    console.log("Form submitted with:", {
      totalAmount,
      recipients,
      evidenceDocument,
    });
    setCurrentStep(2); // Move to step 2 after form submission
  };

  const handlePayWithWallet = () => {
    // Implement logic for paying with wallet
    console.log("Paying with wallet...");
    setCurrentStep(3); // Move to step 3 after payment
  };

  const handlePayWithCard = () => {
    // Implement logic for paying with card
    console.log("Paying with card...");
    setCurrentStep(3); // Move to step 3 after payment
  };

  return (
    <div className="container mt-5">
      <Head>
        <title>Split Payment</title>
      </Head>

      {currentStep === 1 && (
        <div>
          <h2>Create Split Payment Request</h2>
          <form onSubmit={handleSubmitRequest}>
            <div className="mb-3">
              <label htmlFor="totalAmount" className="form-label">
                Total Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="totalAmount"
                value={totalAmount}
                onChange={(e) => setTotalAmount(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="evidenceDocument" className="form-label">
                Upload Evidence Document
              </label>
              <input
                type="file"
                className="form-control"
                id="evidenceDocument"
                onChange={handleFileUpload}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="recipients" className="form-label">
                Recipients
              </label>
              {recipients.map((recipient, index) => (
                <div key={index} className="row mb-2">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={recipient.email}
                      onChange={(e) =>
                        handleRecipientChange(index, "email", e.target.value)
                      }
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Share Amount"
                      value={recipient.share}
                      onChange={(e) =>
                        handleRecipientChange(index, "share", e.target.value)
                      }
                      required
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddRecipient}
            >
              Add Recipient
            </button>
            <button type="submit" className="btn btn-success ms-2">
              Submit Request
            </button>
          </form>
        </div>
      )}

      {currentStep === 2 && paymentDetails && (
        <div>
          <h2>Split Payment Details</h2>
          <h3>Total Amount: ${paymentDetails.totalAmount}</h3>

          <div className="mt-4">
            <h4>Recipients:</h4>
            <ul className="list-group">
              {paymentDetails.recipients.map((recipient, index) => (
                <li key={index} className="list-group-item">
                  <div>Email: {recipient.email}</div>
                  <div>Share Amount: ${recipient.share}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4>Evidence Document:</h4>
            <div>{paymentDetails.evidenceDocument}</div>
          </div>

          <div className="mt-4">
            <h4>Payment Options:</h4>
            <button
              className="btn btn-primary me-2"
              onClick={handlePayWithWallet}
            >
              Pay with Wallet
            </button>
            <button className="btn btn-success" onClick={handlePayWithCard}>
              Pay with Card
            </button>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h2>Payment Processing</h2>
          <p>Payment successful!</p>
        </div>
      )}
    </div>
  );
};

export default SplitPaymentPage;
