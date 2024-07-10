"use client";

import React, { useState } from "react";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvc, setCvc] = useState("");

  const handleCardNumberChange = (e: any) => setCardNumber(e.target.value);
  const handleCardHolderChange = (e: any) => setCardHolder(e.target.value);
  const handleExpiryMonthChange = (e: any) => setExpiryMonth(e.target.value);
  const handleExpiryYearChange = (e: any) => setExpiryYear(e.target.value);
  const handleCvcChange = (e: any) => setCvc(e.target.value);

  return (
    <div className="cc__main__container container">
      <form className="form-group">
        <div className="inputBox mb-3">
          <label htmlFor="cardNumber" className="form-label">
            Card Number
          </label>
          <input
            type="text"
            className="form-control"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            placeholder="1234 - 5678 - 9012 - 3456"
          />
        </div>
        <div className="inputBox mb-3">
          <label htmlFor="cardHolder" className="form-label">
            Card Holder
          </label>
          <input
            type="text"
            className="form-control"
            id="cardHolder"
            value={cardHolder}
            onChange={handleCardHolderChange}
            placeholder="John Doe"
          />
        </div>
        <div className="multi__box d-flex mb-3">
          <div className="inputBox me-3">
            <label htmlFor="expiryMonth" className="form-label">
              Month
            </label>
            <input
              type="text"
              className="form-control"
              id="expiryMonth"
              value={expiryMonth}
              onChange={handleExpiryMonthChange}
              placeholder="MM"
            />
          </div>
          <div className="inputBox me-3">
            <label htmlFor="expiryYear" className="form-label">
              Year
            </label>
            <input
              type="text"
              className="form-control"
              id="expiryYear"
              value={expiryYear}
              onChange={handleExpiryYearChange}
              placeholder="YY"
            />
          </div>
          <div className="inputBox">
            <label htmlFor="cvc" className="form-label">
              CVC
            </label>
            <input
              type="text"
              className="form-control"
              id="cvc"
              value={cvc}
              onChange={handleCvcChange}
              placeholder="123"
            />
          </div>
        </div>
      </form>

      <div className="card__main">
        <div className="Front_card card shadow">
          <div className="top_card d-flex justify-content-between align-items-center p-2">
            <span className="visa">Visa</span>
            <div className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/23/Verve_Image.png"
                className="logo img-fluid"
                alt="logo"
              />
            </div>
          </div>
          <div className="middle_card d-flex justify-content-between align-items-center mt-4 p-2">
            <span className="chip"></span>
            <div className="card_number">
              {cardNumber || "•••• •••• •••• ••••"}
            </div>
          </div>
          <div className="bottom_card d-flex justify-content-between align-items-center p-2">
            <div className="card_info">
              <div className="card_holder_name">{cardHolder || "John Doe"}</div>
            </div>
            <div className="cardf_info d-flex align-items-center">
              <span className="expire_month">{expiryMonth || "MM"}</span>
              <span className="slash mx-1">/</span>
              <span className="expire_year">{expiryYear || "YY"}</span>
            </div>
          </div>
        </div>
        <div className="back_card card shadow">
          <div className="top_card position-relative w-100 h-100">
            <span className="black_strip position-absolute top-0 start-0 w-100 h-25 bg-black"></span>
            <div className="cvc_strip position-absolute bottom-0 end-0 bg-white w-75 h-25 d-flex align-items-center justify-content-end px-3">
              <span className="cvc_number">{cvc || "•••"}</span>
            </div>
          </div>
          <div className="bottom_card d-flex justify-content-between align-items-center p-2">
            <span className="sticker bg-gradient"></span>
            <div className="logo1 d-flex align-items-center">
              <span className="bg-primary rounded-circle"></span>
              <span className="bg-success rounded-circle mx-2"></span>
              <span className="bg-info rounded-circle"></span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cc__main__container form {
          width: 500px;
          padding: 30px;
          flex-flow: column;
          padding-bottom: 60px;
        }

        .cc__main__container form .inputBox {
          margin-top: 40px;
        }

        .cc__main__container form .inputBox span {
          display: block;
          font-size: 15px;
          text-transform: uppercase;
          color: rgb(97, 97, 97);
          padding: 5px 0;
        }

        .cc__main__container form .inputBox input {
          width: 100%;
          font-size: 20px;
          color: rgb(116, 116, 116);
          padding: 10px;
          box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
            rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
          border: 1px solid transparent;
          border-radius: 5px;
        }

        .cc__main__container form .inputBox input::placeholder {
          color: rgb(203, 203, 203);
        }

        .cc__main__container form .multi__box {
          display: flex;
          gap: 20px;
        }

        .card__main {
          position: relative;
          width: 400px;
          height: 200px;
          margin-top: 20px;
        }

        .Front_card {
          width: 100%;
          height: 100%;
          outline: none;
          border: none;
          background: linear-gradient(248.61deg, #01c2ff 0.03%, #2d0067 99.03%);
          border-radius: 10px;
          backface-visibility: hidden;
          transform: perspective(1000px) rotateY(0deg);
          transition: transform 0.4s ease-out;
        }

        .back_card {
          position: absolute;
          top: 0;
          left: 0;
          outline: none;
          border: none;
          width: 100%;
          height: 100%;
          background: linear-gradient(248.61deg, #01c2ff 0.03%, #2d0067 99.03%);
          border-radius: 10px;
          backface-visibility: hidden;
          transform: perspective(1000px) rotateY(180deg);
          transition: transform 0.4s ease-out;
        }

        .visa {
          font-weight: 700;
          font-size: 20px;
          font-style: italic;
          color: #ffffff;
          text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
        }

        .logo {
          width: 140px;
          height: 30px;
        }

        .middle_card .chip {
          background-color: #281830;
          width: 60px;
          height: 30px;
          border-radius: 10px;
          box-shadow: inset 0px 0px 20px #505050;
        }

        .middle_card .card_number {
          font-size: 15px;
          letter-spacing: 3px;
          color: white;
          text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
        }

        .bottom_card .card_info {
          font-size: 17px;
          text-transform: uppercase;
          color: white;
          text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
        }

        .black_strip {
          height: 70px;
        }

        .cvc_strip span {
          font-size: 25px;
        }

        .sticker {
          width: 100px;
          height: 60px;
          background: linear-gradient(
            251.7deg,
            #999999 2.53%,
            #dcdcdc 53.8%,
            #8b8b8b 100%
          );
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default CreditCard;
