import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState(""); 
  const { signinUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handlerSubmitLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signinUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        setError(""); 
      })
      .catch((err) => {
        setError(err.code); 
      });
  };

  return (
    <div className="card bg-base-100 py-6 w-6/12 mx-auto mt-5 shrink-0 shadow-2xl">
      <h1 className="text-3xl border-b pb-8 text-center font-bold">
        Login your account
      </h1>
      <form onSubmit={handlerSubmitLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          {error && (
            <p className="text-red-500 mt-2">{error}</p> 
          )}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">
        You don't have an account; please create an account first{" "}
        <Link className="text-red-500 underline" to="/auth/register">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
