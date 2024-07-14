"use client";
import React, { useState } from "react";
import Head from "next/head";

const CreateInvoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    invoiceNumber: "",
    recipientName: "",
    dueDate: "",
    items: [],
    subtotal: 0,
    total: 0,
    description: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInvoiceData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleItemChange = (index: any, e: any) => {
    const { name, value } = e.target;
    const newItems: any[] = [...invoiceData.items];
    newItems[index] = { ...newItems[index], [name]: value };
    setInvoiceData((prevData: any) => ({
      ...prevData,
      items: newItems,
      subtotal: calculateSubtotal(newItems),
      total: calculateTotal(calculateSubtotal(newItems)),
    }));
  };

  const handleAddItem = () => {
    setInvoiceData((prevData: any) => ({
      ...prevData,
      items: [...prevData.items, { itemName: "", quantity: 1, price: 0 }],
    }));
  };

  const calculateSubtotal = (items: any) => {
    return items.reduce((total: any, item: any) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  const calculateTotal = (subtotal: any) => {
    // Implement any tax or additional fees calculation if needed
    return subtotal;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Implement logic to save invoice data (e.g., API call)
    console.log("Invoice Data:", invoiceData);
    // Reset form after submission (optional)
    setInvoiceData({
      invoiceNumber: "",
      recipientName: "",
      dueDate: "",
      items: [],
      subtotal: 0,
      total: 0,
      description: "",
    });
  };

  return (
    <div className="container mt-5">
      <Head>
        <title>Create Invoice</title>
      </Head>
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">Create Invoice</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="invoiceNumber" className="form-label">
                Invoice Number
              </label>
              <input
                type="text"
                className="form-control"
                id="invoiceNumber"
                name="invoiceNumber"
                value={invoiceData.invoiceNumber}
                onChange={handleChange}
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
                name="recipientName"
                value={invoiceData.recipientName}
                onChange={handleChange}
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
                name="dueDate"
                value={invoiceData.dueDate}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows={3}
                value={invoiceData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <hr />
            <h5>Invoice Items</h5>
            {invoiceData.items.map((item: any, index: any) => (
              <div key={index} className="mb-3">
                <div className="row">
                  <div className="col">
                    <label htmlFor={`itemName-${index}`} className="form-label">
                      Item Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`itemName-${index}`}
                      name="itemName"
                      value={item.itemName}
                      onChange={(e) => handleItemChange(index, e)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor={`quantity-${index}`} className="form-label">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id={`quantity-${index}`}
                      name="quantity"
                      value={item.quantity}
                      onChange={(e) => handleItemChange(index, e)}
                    />
                  </div>
                  <div className="col">
                    <label htmlFor={`price-${index}`} className="form-label">
                      Price ($)
                    </label>
                    <input
                      type="number"
                      step="0.01"
                      className="form-control"
                      id={`price-${index}`}
                      name="price"
                      value={item.price}
                      onChange={(e) => handleItemChange(index, e)}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleAddItem}
            >
              Add Item
            </button>
            <hr />
            <div className="mb-3">
              <label htmlFor="subtotal" className="form-label">
                Subtotal
              </label>
              <input
                type="text"
                className="form-control"
                id="subtotal"
                value={invoiceData.subtotal.toFixed(2)}
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
                value={invoiceData.total.toFixed(2)}
                readOnly
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Generate Invoice
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
