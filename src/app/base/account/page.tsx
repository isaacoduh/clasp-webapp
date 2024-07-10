"use client";

import React from "react";
import { useState } from "react";

const AccountComponent = () => {
  const [user, setUser] = useState({
    firstName: "Alfred",
    lastName: "Davis",
    email: "alfred6598@gmail.com",
    phone: "(316) 555-0116",
    address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    avatar: null,
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">User</h5>
              <p className="card-text">
                Kevin Martin
                <br />
                Wallet ID: 6264849965
              </p>
              <a href="#" className="btn btn-primary">
                Settings
              </a>
              <a href="#" className="btn btn-danger mt-2">
                Logout
              </a>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Invite your friend and get $25</h5>
              <a href="#" className="btn btn-success">
                Invite Now
              </a>
            </div>
          </div>
          <div className="list-group mt-3">
            <a href="#" className="list-group-item list-group-item-action">
              Dashboard
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Transactions
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Pay
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Receive
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Exchange
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Recipients
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Crypto
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Deposit Money
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Withdraw Money
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Account
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Support
            </a>
            <a href="#" className="list-group-item list-group-item-action">
              Quit
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-header">
              <h3>Account</h3>
            </div>
            <div className="card-body">
              <form>
                {/* Profile Section */}
                <h5>Profile</h5>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={user.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                  <span className="badge bg-warning text-dark">
                    E-mail confirmation pending
                  </span>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={user.phone}
                    onChange={handleInputChange}
                  />
                  <span className="badge bg-success">
                    Phone number confirmed
                  </span>
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={user.address}
                    onChange={handleInputChange}
                  />
                </div>

                {/* Security Section */}
                <h5>Security</h5>
                <div className="mb-3">
                  <label htmlFor="currentPassword" className="form-label">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    name="currentPassword"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="newPassword" className="form-label">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="newPassword"
                    name="newPassword"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmNewPassword" className="form-label">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmNewPassword"
                    name="confirmNewPassword"
                  />
                </div>
                <button type="button" className="btn btn-primary">
                  Update Password
                </button>

                {/* Payment Methods Section */}
                <h5 className="mt-5">Payment Methods</h5>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">
                    Card Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cardHolder" className="form-label">
                    Card Holder
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardHolder"
                    name="cardHolder"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryMonth" className="form-label">
                    Month
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryMonth"
                    name="expiryMonth"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryYear" className="form-label">
                    Year
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expiryYear"
                    name="expiryYear"
                  />
                </div>
                <button type="button" className="btn btn-primary">
                  Add Card
                </button>
              </form>

              {/* Linked Payment Systems Section */}
              <h5 className="mt-5">Linked Payment Systems</h5>
              <div className="mb-3">
                <img src="/path/to/logo1.png" alt="Payment System 1" />
                <img src="/path/to/logo2.png" alt="Payment System 2" />
                <img src="/path/to/logo3.png" alt="Payment System 3" />
              </div>

              {/* Notifications Section */}
              <h5 className="mt-5">Notifications</h5>
              <div className="mb-3">
                <label className="form-label">Send Payment</label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="sendPayment"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Receive a Payment</label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="receivePayment"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Request Payment</label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="requestPayment"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Special Offers</label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="specialOffers"
                />
              </div>

              {/* Devices Section */}
              <h5 className="mt-5">Your Devices</h5>
              <div className="mb-3">
                <p>Iphone 13 Pro Max - New York City · June 20 at 14:00</p>
                <button className="btn btn-danger">Log out</button>
              </div>
              <div className="mb-3">
                <p>iPad Pro - New York City · June 20 at 14:00</p>
                <button className="btn btn-danger">Log out</button>
              </div>
              <div className="mb-3">
                <p>iMac OSX - New York City · June 20 at 14:00</p>
                <button className="btn btn-danger">Log out</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountComponent;
