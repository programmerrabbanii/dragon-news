import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUSer,updateUserProfile,setUser } = useContext(AuthContext);

  const handlerSubmitLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");

    const passwordRegex = /^(?=.*[!@#$%^&*])(?=.{6,})/; 
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long and include a special character!",
      });
      return;
    }

    createUSer(email, password)
      .then((result) => {
        setUser(result?.user)
        console.log(result);
        updateUserProfile({
          displayName: name, photoURL: photoURL,
        }).then(()=>{
         navigate("/")

        }).catch(err=>{
          console.log(err);
        })
        navigate('/auth/login');
        Swal.fire({
          title: "Register Successfully, thank you!",
          icon: "success",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
        });
      })
      .catch((error) => {
        console.log("Error", error);
       
      });
  };

  return (
    <div className="card bg-base-100 w-6/12 mx-auto py-6  shrink-0 shadow-2xl">
      <h1 className="text-3xl font-bold text-center">Register your account</h1>
      <form onSubmit={handlerSubmitLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input
            name="photoURL"
            type="text"
            placeholder="PhotoURL"
            className="input input-bordered"
            required
          />
        </div>

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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control">
          <label className="label justify-start gap-3 cursor-pointer">
            <span className="label-text">Accept Term & Conditions</span>
            <input type="checkbox" className="checkbox" />
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">
        have a account please go to{" "}
        <Link className="text-red-500 underline" to="/auth/login">
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default Register;
