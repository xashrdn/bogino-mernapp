import logo from "../assets/logo/logo-default.png";
import { useState } from "react";
import UrlShow from "../components/UrlShow";

const Header = () => {
  const [check, setChecker] = useState(false);

  const show = () => {
    setChecker(true);
  };

  return (
    <>
      <div className=" h-[90vh]">
        <div className="w-[100vw] h-[90vh] flex justify-center items-center flex-col">
          <img src={logo} alt="logo" />
          <div className="mt-5 flex justify-evenly w-[20vw]">
            <input
              type="text"
              placeholder="https://www.web.huudas.com"
              className="outline-none w-[240px] h-[44px] rounded-full p-5 bg-[#fff]"
            />
            <button
              className="w-[160px] h-[44px] text-[#fff] font-bold text-xl bg-[#02B589] rounded-full"
              onClick={() => show()}
            >
              БОГИНОСГОХ
            </button>
          </div>
          {check ? <UrlShow /> : null}
        </div>
      </div>
    </>
  );
};

export default Header;
