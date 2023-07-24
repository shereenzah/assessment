// Style
import { FunctionComponent, useState } from "react";
import "./index.scss";

const Task5: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e:any) => {
    // If you want to do something with form submit
    e.preventDefault();
    alert(`Email: ${email} \nPassword: ${password}`);
  };

  return (
    <div id="task-5">
      <form onSubmit={onSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            onChange={(event) => setEmail(event.currentTarget.value)}
            value={email}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            onChange={(event) => setPassword(event.currentTarget.value)}
            value={password}
            type="password"
          />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Task5;
