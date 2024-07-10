import Link from "next/link";

const Register = () => {
  return (
    <div className="container-fluid vh-100 d-flex">
      <div className="row w-100">
        <div className="col-md-6 bg-primary text-white d-flex align-items-center justify-content-center">
          <div className="text-center">
            <h1>Welcome to Clasp Finance</h1>
            <p>Manage your finances with ease and security.</p>
            <p>
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-white">Login here</span>
              </Link>
            </p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2>Register</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter full name"
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
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
