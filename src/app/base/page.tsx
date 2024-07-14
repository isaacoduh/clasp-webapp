import Link from "next/link";

const BasePageComponent = () => {
  return (
    <div className="container">
      <h1 className="mt-4">Base Page List</h1>
      <hr />
      <ul>
        <li>
          <Link href="/base/account">Account</Link>
        </li>
        <li>
          <Link href="/base/creditcard">CreditCard</Link>
        </li>
        <li>
          <Link href="/base/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/base/escrow">Escrow</Link>
        </li>
        <li>
          <Link href="/base/invoice">Invoice</Link>
        </li>
        <li>
          <Link href="/base/invoice/view">View Single Invoice</Link>
        </li>
        <li>
          <Link href="/base/login">Login</Link>
        </li>
        <li>
          <Link href="/base/payment">Payment</Link>
        </li>
        <li>
          <Link href="/base/payment-link">Payment Link</Link>
        </li>
        <li>
          <Link href="/base/payment-link/view">View Single Payment Link</Link>
        </li>
        <li>
          <Link href="/base/register">Register</Link>
        </li>
        <li>
          <Link href="/base/request-payment">Request Payment</Link>
        </li>
        <li>
          <Link href="/base/split-payment">Split Payment</Link>
        </li>
        <li>
          <Link href="/base/transactions">Transactions</Link>
        </li>
      </ul>
    </div>
  );
};

export default BasePageComponent;
