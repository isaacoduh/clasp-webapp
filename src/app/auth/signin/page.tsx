"use client";
import axios from "axios";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import SecureLS from "secure-ls";
export default function SignIn() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    const ls = new SecureLS();
    e.preventDefault();
    setLoading(true);
    await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, userDetails)
      .then((response) => {
        if (response?.data?.success === true) {
          ls.set("user", response?.data?.user);
          ls.set("token", response?.data?.token);
          toast.success(response?.data?.message, { duration: 4000 });
          setUserDetails({ email: "", password: "" });
          setLoading(false);
          setTimeout(() => router.push("/dashboard"), 3000);
        }
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error?.response?.data?.message, { duration: 3000 });
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
              Don not have an account?{" "}
              <Link href="/auth/signup">
                <strong>
                  <span className="text-white text-bold">Register here</span>
                </strong>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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
                className="btn btn-primary mt-3"
              >
                {loading ? "Processing...." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
