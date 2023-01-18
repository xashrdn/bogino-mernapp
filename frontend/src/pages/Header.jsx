import logo from "../assets/logo/logo-default.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  const [val, setVal] = useState("");
  const [check, setChecker] = useState(false);

  const checkUser = () => {
    const user = localStorage.getItem("token");
    if (!user) navigate("/login");
  };

  // useEffect(() => {
  //   checkUser();
  // });

  useEffect(() => {
    checkUser();
  }, []);

  let boloo;
  const myArray = val.split("https://");
  if (myArray[1] == null) {
    boloo = "https://" + myArray[0];
  } else {
    boloo = "https://" + myArray[1];
  }

  const urlGen = async () => {
    setChecker(true);
    await axios
      .post("http://localhost:8000/url/", {
        id: localStorage.getItem("id"),
        longUrl: boloo,
      })
      .then((response) => {
        console.log(response);
        setUrl("/" + response?.data?.shortUrl);
        console.log("SUCCEsS");
      });
  };

  return (
    <>
      <div className=" h-[90vh]">
        <div className="w-[100vw] h-[90vh] flex justify-center items-center flex-col">
          <img src={logo} alt="logo" />
          <div className="mt-5 flex justify-evenly w-[20vw]">
            <input
              type="text"
              onChange={(e) => setVal(e.target.value)}
              placeholder="https://www.web.huudas.com"
              className="outline-none w-[240px] h-[44px] rounded-full p-5 bg-[#fff]"
            />
            <button
              className="w-[160px] h-[44px] text-[#fff] font-bold text-xl bg-[#02B589] rounded-full"
              onClick={() => urlGen()}
            >
              БОГИНОСГОХ
            </button>
          </div>
          {check ? (
            <div className="flex justify-center items-start h-[10vh] w-[18vw] bg-[#E5E5E5] flex-col mt-2">
              <div>
                <div className="text-zinc-500">Өгөгдсөн холбоос:</div>
                <div>{boloo}</div>
              </div>
              <div>
                <div className="text-zinc-500">Богино холбоос:</div>
                <div className="flex flex-row">
                  <div>http://localhost:5173{url}</div>
                  <div className="text-emerald-600 ml-2">Хуулж авах</div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Header;
