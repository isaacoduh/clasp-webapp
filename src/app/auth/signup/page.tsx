"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { createUser } from "@/services/auth";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
export default function SignUp() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, userDetails)
      .then((response) => {
        if (response?.data?.success === true) {
          toast.success(response?.data?.message, { duration: 4000 });
          setTimeout(() => router.push("/auth/signin"), 3000);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="row w-100">
        <div className="col-md-6 bg-primary text-white d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1>Welcome to Clasp Finance</h1>
            <p>Manage your finances with ease and security.</p>
            <p>
              Already have an account?{" "}
              <Link href="/auth/signin">
                <strong>
                  <span className="text-white">Login here</span>
                </strong>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter username"
                  name="username"
                  value={userDetails.username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  name="password"
                  value={userDetails.password}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                disabled={loading}
                className="btn btn-primary mt-3"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
