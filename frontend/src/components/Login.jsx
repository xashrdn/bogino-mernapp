import React from "react";
import logo from "../assets/logo/logo-default.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await axios({
        url: `https://boginoo-v1000.vercel.app/login`,
        method: "POST",
        data: {
          email: email,
          password: pw,
        },
        headers: {
          // authorization: `Bearer ${token}`,
        },
      });
      const token = await res?.data?.token;
      console.log(res?.data?.token);
      console.log(res);
      localStorage.setItem("token", token);
      localStorage.setItem("username", email);
      localStorage.setItem("id", res?.data?._id);
      if (res.status === 200) {
        window.location.href = "/";
      }
      setToken(res?.data?.token);
    } catch (err) {
      console.log(err);
    }
  };

  const checkUser = () => {
    const user = localStorage.getItem("token");
    if (user) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col h-[90vh]">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div
        className="text-[#02B589] text-4xl mt-8 font-semibold"
        style={{ fontFamily: "inherit" }}
      >
        Нэвтрэх
      </div>
      <div>
        <div className="ml-2 mt-8">Цахим хаяг</div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="mail"
          placeholder="name@mail.domain"
          className="p-4 w-96 mt-1 block px-1 py-2 bg-white border border-slate-300 rounded-2xl  shadow-sm placeholder-zinc-500 text-sm"
        />
        <div className="ml-2 mt-4">Нууц үг</div>
        <input
          onChange={(e) => setPw(e.target.value)}
          type=""
          placeholder="password"
          className="p-4 w-96 mt-1 block px-1 py-2 bg-white border border-slate-300 rounded-2xl shadow-sm placeholder-zinc-500 text-sm"
        />

        <div className="justify-between flex mt-4">
          <div className="text-[#02B589] font-semibold flex items-center">
            <input
              type="checkbox"
              className="mr-2 text-[#02B589]"
              name="намайг сана"
              id=""
            />
            намайг сана
          </div>
          <Link to="/forgetpw">
            <div className=" font-semibold">Нууц үгээ мартсан</div>
          </Link>
        </div>
        <button
          onClick={loginUser}
          className="mt-8 text-2xl font-semibold text-white rounded-full w-full bg-[#02B589] p-2 px-12"
        >
          {" "}
          Нэвтрэх{" "}
        </button>
      </div>
      <Link className="mt-8 text-[#02B589] font-semibold" to="/signup">
        Шинэ хэрэглэгч бол энд дарна уу?
      </Link>
    </div>
  );
};

export default Login;
