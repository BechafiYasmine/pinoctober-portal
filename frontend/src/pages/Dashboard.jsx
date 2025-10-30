export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return (
      <div className="container">
        <div className="card">
          <h2>Please login first.</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>Welcome, {user.username}!</h1>
          <div className="role-pill">{user.role}</div>
        </div>
        <p>Simple mini dashboard for Pinoctober Portal.</p>
        <button
          className="btn secondary"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
