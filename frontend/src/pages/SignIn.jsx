import React, { useState, useContext } from "react";
// Custom hooks
import useAuthen from "../hooks/useAuthen";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [username, setUsername] = useState("");
  const { user, signIn, signOut } = useAuthen();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      alert("โปรดกรอก username");
      return;
    }

    signIn({
      username,
    });
    
    navigate("/dashboard")
  };

  return (
    <div className=" mt-6 max-w-[20em] w-full mx-auto">
      {user.isAuthen && <p className="text-red-500">{user?.profile?.username}</p>}
      <form onSubmit={handleSubmit} className="bg-slate-50 p-4 flex flex-col items-center rounded">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-white roudned border border-slate-300 outline-none px-4 py-2"
        />
        <button type="submit" className="px-3 py-2 bg-blue-500 text-white mt-4">
          Signin
        </button>
      </form>
    </div>
  );
};

export default SignIn;
