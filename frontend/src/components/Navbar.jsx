import { Link } from "react-router-dom";

export default function Navbar(){
  return (
    <nav className="nav container">
      <div className="brand">Pinoctober Portal</div>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
