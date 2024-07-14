"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RequestPaymentComponent = () => {
  const [step, setStep] = useState(1);
  const [recipient, setRecipient] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    amount: "",
    currency: "USD",
    description: "",
    dueDate: "",
    requestedBy: "Kevin Martin",
  });
  const [documents, setDocuments] = useState([]);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleRecipientChange = (recipient: any) => setRecipient(recipient);
  const handlePaymentDetailsChange = (details: any) =>
    setPaymentDetails(details);
  const handleDocumentsChange = (docs: any) => setDocuments(docs);

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Request a Payment</h3>
          <p>Step {step} of 4</p>
        </div>
        <div className="card-body">
          {step === 1 && (
            <Step1ChooseRecipient
              nextStep={nextStep}
              handleRecipientChange={handleRecipientChange}
            />
          )}
          {step === 2 && (
            <Step2PaymentDetails
              recipient={recipient}
              nextStep={nextStep}
              prevStep={prevStep}
              handlePaymentDetailsChange={handlePaymentDetailsChange}
            />
          )}
          {step === 3 && (
            <Step3AttachDocuments
              recipient={recipient}
              paymentDetails={paymentDetails}
              nextStep={nextStep}
              prevStep={prevStep}
              handleDocumentsChange={handleDocumentsChange}
            />
          )}
          {step === 4 && (
            <Step4ConfirmTransfer
              recipient={recipient}
              paymentDetails={paymentDetails}
              documents={documents}
              prevStep={prevStep}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Step1ChooseRecipient = ({ nextStep, handleRecipientChange }: any) => {
  const recipients = [
    {
      name: "Herman Tran",
      email: "herman.tran@example.com",
      lastPayment: "17 Jul 2022",
      amount: "200.00 USD",
    },
    {
      name: "Morris Lucas",
      email: "morris.lucas@example.com",
      lastPayment: "17 Jul 2022",
      amount: "200.00 USD",
    },
    {
      name: "Willard Lyons",
      email: "willard.lyons@example.com",
      lastPayment: "17 Jul 2022",
      amount: "200.00 USD",
    },
  ];

  const selectRecipient = (recipient: any) => {
    handleRecipientChange(recipient);
    nextStep();
  };

  return (
    <div>
      <h5>Choose Recipient</h5>
      <div className="mb-3">
        <label htmlFor="recipientSearch" className="form-label">
          Enter email, name or company
        </label>
        <input type="text" className="form-control" id="recipientSearch" />
      </div>
      <div className="list-group">
        {recipients.map((recipient, index) => (
          <button
            key={index}
            className="list-group-item list-group-item-action"
            onClick={() => selectRecipient(recipient)}
          >
            <h6>{recipient.name}</h6>
            <p>{recipient.email}</p>
            <p>
              Last Payment on {recipient.lastPayment} | {recipient.amount}
            </p>
          </button>
        ))}
      </div>
      <button className="btn btn-secondary mt-3" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

const Step2PaymentDetails = ({
  recipient,
  nextStep,
  prevStep,
  handlePaymentDetailsChange,
}: any) => {
  const [details, setDetails] = useState({
    amount: "",
    currency: "USD",
    description: "",
    dueDate: "",
    requestedBy: "Kevin Martin",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const submitDetails = () => {
    handlePaymentDetailsChange(details);
    nextStep();
  };

  return (
    <div>
      <h5>Payment Details</h5>
      <div className="mb-3">
        <label className="form-label">You Send</label>
        <input
          type="number"
          className="form-control"
          name="amount"
          value={details.amount}
          onChange={handleChange}
        />
        <select
          className="form-select mt-2"
          name="currency"
          value={details.currency}
          onChange={handleChange}
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          className="form-control"
          name="description"
          value={details.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Payment due by</label>
        <input
          type="date"
          className="form-control"
          name="dueDate"
          value={details.dueDate}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-secondary" onClick={prevStep}>
        Previous Step
      </button>
      <button className="btn btn-primary" onClick={submitDetails}>
        Next
      </button>
    </div>
  );
};

const Step3AttachDocuments = ({
  recipient,
  paymentDetails,
  nextStep,
  prevStep,
  handleDocumentsChange,
}: any) => {
  const [selectedFiles, setSelectedFiles] = useState<any[]>([]);

  const handleFileChange = (e: any) => {
    setSelectedFiles([...selectedFiles, ...e.target.files]);
  };

  const submitDocuments = () => {
    handleDocumentsChange(selectedFiles);
    nextStep();
  };

  return (
    <div>
      <h5>Attach Documents</h5>
      <div className="mb-3">
        <input
          type="file"
          className="form-control"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <button className="btn btn-secondary" onClick={prevStep}>
        Previous Step
      </button>
      <button className="btn btn-primary" onClick={submitDocuments}>
        Next
      </button>
    </div>
  );
};

const Step4ConfirmTransfer = ({
  recipient,
  paymentDetails,
  documents,
  prevStep,
}: any) => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (e: any) => {
    setVerificationCode(e.target.value);
  };

  const submitTransfer = () => {
    // Implement transfer logic here
    alert("Transfer confirmed!");
  };

  return (
    <div>
      <h5>Confirm Transfer</h5>
      <div className="mb-3">
        <label className="form-label">Verification Code</label>
        <input
          type="text"
          className="form-control"
          value={verificationCode}
          onChange={handleChange}
        />
      </div>
      <button className="btn btn-secondary" onClick={prevStep}>
        Previous Step
      </button>
      <button className="btn btn-primary" onClick={submitTransfer}>
        Confirm Transfer
      </button>
    </div>
  );
};

export default RequestPaymentComponent;
