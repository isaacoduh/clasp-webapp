"use client";

import React, { useState } from "react";
import Head from "next/head";

type Props = {
  recipientEmail?: string;
  amount?: number;
  description?: string;
};

const RecipientPaymentLink = () => {
  const recipientEmail = "ufuomaoduh@mail.com";
  const amount = 300;
  const description = "Basically";
  const [paymentStatus, setPaymentStatus] = useState("pending"); // 'pending', 'paid', 'cancelled'

  const handlePayWithWallet = () => {
    // Implement logic to process payment with recipient's wallet
    setPaymentStatus("paid");
    // Simulate payment processing
    setTimeout(() => {
      alert("Payment successfully completed!");
    }, 2000);
  };

  const handlePayWithCard = () => {
    // Implement logic to process payment with card
    setPaymentStatus("paid");
    // Simulate payment processing
    setTimeout(() => {
      alert("Payment successfully completed!");
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <Head>
        <title>Payment Link Details</title>
      </Head>
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">Payment Link Details</h3>
        </div>
        <div className="card-body">
          <h5>Recipient Email:</h5>
          <p>{recipientEmail}</p>
          <h5>Amount:</h5>
          <p>${amount}</p>
          <h5>Description:</h5>
          <p>{description}</p>
          {paymentStatus === "pending" && (
            <div>
              <button
                className="btn btn-primary me-2"
                onClick={handlePayWithWallet}
              >
                Pay with Wallet
              </button>
              <button className="btn btn-primary" onClick={handlePayWithCard}>
                Pay with Card
              </button>
            </div>
          )}
          {paymentStatus === "paid" && (
            <div className="alert alert-success mt-3" role="alert">
              Payment has been successfully processed!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipientPaymentLink;
