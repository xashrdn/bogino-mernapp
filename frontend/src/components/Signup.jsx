import { useContext } from "react";
import logo from "../assets/logo/logo-default.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { EmailContext } from "./Context";

const Signup = () => {
  const {
    emailValue,
    setEmailValue,
    pwValue,
    setPwValue,
    pwMatchValue,
    setPwMatchValue,
  } = useContext(EmailContext);

  console.log(url);

  const fetchUser = async () => {
    try {
      if (pwMatchValue === pwValue) {
        await axios.post(`http://localhost:8000/user`, {
          email: emailValue,
          password: pwValue,
        });
        alert("SUCCESS");
      } else {
        console.log("ERR");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
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
        Бүртгүүлэх
      </div>
      <div>
        <div className="ml-2 mt-8">Цахим хаяг</div>
        <input
          onChange={(e) => setEmailValue(e.target.value)}
          type="mail"
          placeholder="name@mail.domain"
          className="p-4 w-96 mt-1 block px-1 py-2 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-zinc-500 "
        />
        <div className="ml-2 mt-4">Нууц үг</div>
        <input
          onChange={(e) => setPwValue(e.target.value)}
          type="password"
          placeholder="password"
          className="p-4 w-96 mt-1 block px-1 py-2 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-zinc-500 "
        />
        <div className="ml-2 mt-4">Нууц үг давтна уу?</div>
        <input
          onChange={(e) => setPwMatchValue(e.target.value)}
          type="password"
          placeholder="password"
          className="p-4 w-96 mt-1 block px-1 py-2 bg-white border border-slate-300 rounded-2xl text-sm shadow-sm placeholder-zinc-500 "
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
          onClick={fetchUser}
          className="mt-8 text-2xl font-semibold text-white rounded-full w-full bg-[#02B589] p-2 px-12"
        >
          Бүртгүүлэх
        </button>
      </div>
    </div>
  );
};

export default Signup;
