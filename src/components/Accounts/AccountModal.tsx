"use client";

import { useState } from "react";

const AccountModal = ({ show, handleClose, createAccount }: any) => {
  const [currency, setCurrency] = useState<String | null>("GBP");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const accountData = { currency };
    await createAccount(accountData);
  };

  return (
    <div
      className={`modal ${show ? "d-block modal-backdrop fade" : "d-none"}`}
      tabIndex={-1}
      role="dialog"
      style={{ display: "block", opacity: 0.95 }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create An Account</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="currency" className="form-label">
                  Currency
                </label>
                <select
                  className="form-control"
                  id="currency"
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  <option className="form-control-item" value="">
                    Select A Currency
                  </option>
                  <option value="ngn">NGN</option>
                  <option value="gbp">GBP</option>
                  <option value="usd">USD</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
