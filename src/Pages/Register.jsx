import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const Register = () => {
  const {createUSer}=useContext(AuthContext)
  const handlerSubmitLogin=e=>{
    e.preventDefault();
    const form=new FormData(e.target);
    const name= form.get("name");
    const email= form.get("email")
    const photo= form.get("photo")
    const password=form.get("password")
    console.log({name,email,photo,password});
    createUSer(email,password)
    .then((result)=>{
      console.log(result.user);
      
    })
    .catch(errro=>{
      console.log("Errro", errro);
    })


  }
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
            name="photo"
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
          <label className="label justify-start gap-3 cursor-pointer ">
            <span className="label-text">Accept Term & Conditions</span>
            <input type="checkbox"  className="checkbox" />
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
