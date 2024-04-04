import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <form>
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="enter your email address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-center"> Don't have an account? <Link className="text-red-600" to="/register">Register</Link></p>
      </form>
        </div>
    );
};

export default Login;