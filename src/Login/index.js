import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData({ ...data, [name]: value });
  };
  const handleClick = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.email,
          password: data.password,
        }),
      });
      const dataa = await response.json();
      toast.success("Successfully Logged IN!");
      localStorage.setItem("Token", dataa.token);
      navigate("/product-page");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  console.log(localStorage.getItem("Token"));

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Log In</h1>

        <div
          style={{
            border: "2px solid #d8d9da",
            borderRadius: "16px",
            padding: "60px",
            backgroundColor: "#d8d9da",
          }}
        >
          <div>
            <h1 style={{ fontWeight: "400", fontSize: "20px" }}>Email</h1>
            <input
              style={{
                width: "260px",
                borderRadius: "10px",
                padding: "8px",
                height: "auto",
              }}
              type="text"
              placeholder="Enter email ..."
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <h1 style={{ fontWeight: "400", fontSize: "20px" }}>Password</h1>
            <input
              style={{
                width: "260px",
                borderRadius: "10px",
                padding: "8px",
                height: "auto",
              }}
              type="text"
              placeholder="Enter password ..."
              name="password"
              onChange={handleChange}
            />
          </div>
          <div style={{ marginTop: "16px" }}>
            <button
              style={{
                width: "90px",
                padding: "8px",
                backgroundColor: "green",
                borderRadius: "8px",
                color: "white",
              }}
              onClick={handleClick}
            >
              Log IN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
