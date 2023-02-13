import logo from "../assets/logo/logo-default.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Header = () => {
  const navigate = useNavigate();
  const [shortUrl, setShortUrl] = useState("");
  const [longUrl, setLongUrl] = useState("");
  const [check, setChecker] = useState(false);

  const checkUser = () => {
    const user = localStorage.getItem("token");
    if (!user) navigate("/login");
  };

  const urlGen = async () => {
    const result = await axios.post("https://boginoo-v1000.vercel.app/url/", {
      longUrl: longUrl,
      id: localStorage.getItem("id"),
    });
    setShortUrl(result?.data?.shortUrl);
    setChecker(true);
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <div className=" h-[90vh]">
        <div className="w-[100vw] h-[90vh] flex justify-center items-center flex-col">
          <img src={logo} alt="logo" />
          <div className="mt-5 flex justify-evenly w-[20vw]">
            <input
              type="text"
              onChange={(e) => setLongUrl(e.target.value)}
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
                <div>{longUrl}</div>
              </div>
              <div>
                <div className="text-zinc-500">Богино холбоос:</div>
                <div className="flex flex-row">
                  <a
                    target="_blank"
                    href={`http://localhost:8000/conv/${shortUrl}`}
                  >
                    http://localhost:8000/conv/{shortUrl}
                  </a>
                  <div className="text-emerald-600 ml-2">Дараад үсэрнэ үү</div>
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
