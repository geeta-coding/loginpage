import "./styles.css";

export default function App() {
  return (
    <>
      <div className="container">
        <h1>LOGIN</h1>
        <form>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="USERNAME"
            id="username"
            placeholder="Enter Username"
            pattern="^[A-Za-z0-9]{6,}$"
            title="Username must be at least 6 characters long and contain only letters or numbers"
            required
          />
          <br />

          <label htmlFor="pass">Password: </label>
          <input
            type="password"
            name="pass"
            id="pass"
            placeholder="Enter Password"
            required
            pattern="^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$"
            title="Password must be at least 8 characters long and include at least one special character (!@#$%^&*)"
          />
          <br />

          <input type="submit" id="submit" value="Sign in" className="btn" />
          <p>
            Dont't have an account <code id="code"> Sign up </code>
          </p>
        </form>
      </div>
    </>
  );
}
