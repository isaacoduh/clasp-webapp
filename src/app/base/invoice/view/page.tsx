"use client";

import React from "react";
import Head from "next/head";

// Sample Invoice Data
const sampleInvoiceData: any = {
  invoiceNumber: "INV-2023-001",
  recipientName: "John Doe",
  dueDate: "2023-08-31",
  items: [
    { itemName: "Web Development Services", quantity: 2, price: 350 },
    { itemName: "Graphic Design", quantity: 1, price: 150 },
    { itemName: "Consulting", quantity: 3, price: 200 },
  ],
};

// Calculate subtotal
sampleInvoiceData.subtotal = sampleInvoiceData.items.reduce(
  (total: any, item: any) => {
    return total + item.quantity * item.price;
  },
  0
);

// Calculate total (considering any taxes or discounts)
sampleInvoiceData.total = sampleInvoiceData.subtotal;

const ViewInvoice = () => {
  const handlePayWithWallet = () => {
    // Handle payment with wallet logic
    alert("Paying with wallet");
  };

  const handlePayWithCard = () => {
    // Handle payment with card logic
    alert("Paying with card");
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">View Invoice</h3>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="invoiceNumber" className="form-label">
              Invoice Number
            </label>
            <input
              type="text"
              className="form-control"
              id="invoiceNumber"
              value={sampleInvoiceData.invoiceNumber}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="recipientName" className="form-label">
              Recipient Name
            </label>
            <input
              type="text"
              className="form-control"
              id="recipientName"
              value={sampleInvoiceData.recipientName}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dueDate" className="form-label">
              Due Date
            </label>
            <input
              type="date"
              className="form-control"
              id="dueDate"
              value={sampleInvoiceData.dueDate}
              readOnly
            />
          </div>
          <hr />
          <h5>Invoice Items</h5>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price ($)</th>
                <th scope="col">Total ($)</th>
              </tr>
            </thead>
            <tbody>
              {sampleInvoiceData.items.map((item: any, index: any) => (
                <tr key={index}>
                  <td>{item.itemName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>{(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mb-3">
            <label htmlFor="subtotal" className="form-label">
              Subtotal
            </label>
            <input
              type="text"
              className="form-control"
              id="subtotal"
              value={sampleInvoiceData.subtotal.toFixed(2)}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="total" className="form-label">
              Total
            </label>
            <input
              type="text"
              className="form-control"
              id="total"
              value={sampleInvoiceData.total.toFixed(2)}
              readOnly
            />
          </div>
          <div className="mb-3">
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
        </div>
      </div>
    </div>
  );
};

export default ViewInvoice;
