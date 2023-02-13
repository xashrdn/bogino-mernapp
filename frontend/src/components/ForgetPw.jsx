import logo from "../assets/logo/logo-default.png";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ForgetPw = () => {
  const [number, setNumber] = useState("");
  const [to, setTo] = useState("");
  const [value, setValue] = useState(11);
  const [check, setCheck] = useState(false);

  const message = () => {
    const minm = 100000;
    const maxm = 999999;
    const output = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    return output;
  };

  console.log(number);

  const shalgah = () => {
    if (value == number) {
      window.location.href = "/login";
    }
  };

  const email = () => {
    const too = message();
    setNumber(too);
    try {
      setCheck(true);
      emailjs.send(
        "service_e8ek7tz",
        "template_jgwqnaq",
        {
          from_name: "boginoo",
          to_name: to,
          message: number,
          send_to: to,
        },
        "CDvE89GhGtFzXkrIs"
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center flex-col w-[100vw] h-[90vh]">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div className="flex flex-col justify-center items-center mb-10 mt-5">
        <p className="text-[#02B589] text-2xl font-semibold">НУУЦ ҮГ СЭРГЭЭХ</p>
        <p>Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</p>
      </div>
      {check ? (
        <input
          onChange={(e) => setValue(e.target.value)}
          type="number"
          placeholder="number"
          className="p-4 w-96 mt-1 block px-1 py-2 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-zinc-500 "
        />
      ) : (
        <input
          onChange={(e) => setTo(e.target.value)}
          type="mail"
          placeholder="name@mail.domain"
          className="p-4 w-96 mt-1 block px-1 py-2 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-zinc-500 "
        />
      )}
      {check ? (
        <button
          onClick={shalgah}
          className="w-96 h-[44px] text-[#fff] font-bold text-xl bg-[#02B589] rounded-full mt-[1vh]"
        >
          СОЛИХ
        </button>
      ) : (
        <button
          onClick={email}
          className="w-96 h-[44px] text-[#fff] font-bold text-xl bg-[#02B589] rounded-full mt-[1vh]"
        >
          ИЛГЭЭХ
        </button>
      )}
    </div>
  );
};

export default ForgetPw;
