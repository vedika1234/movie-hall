import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="billing-screen">
      <button onClick={() => navigate("/")}>Return to Hall</button>
    </div>
  );
};

export default Error;
