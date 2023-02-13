import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [menu, setMenu] = useState(false);

  const shalgah = () => {
    if (localStorage.getItem("username")) {
      setUser(true);
    }
  };

  useEffect(() => {
    shalgah();
  }, shalgah);

  const menuShow = () => {
    setMenu(true);
    if (menu == false) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  const logOut = () => {
    localStorage.clear();
    window.location = "/login";
  };

  // setUser(localStorage.getItem("username"));
  return (
    <div className="flex h-[5vh] w-[100vw]  justify-end  ">
      <div className="flex justify-evenly items-center w-[30vw]">
        <button
          onClick={() =>
            (window.location = "https://www.youtube.com/watch?v=xqgH9j3x2OE")
          }
          className="w-[274px] h-[23px] text-[#02B589] font-bold text-xl"
        >
          ХЭРХЭН АЖИЛЛАДАГ ВЭ?
        </button>

        {user ? (
          <div className="ml-5 cursor-pointer" onClick={() => menuShow()}>
            {localStorage.getItem("username")}
          </div>
        ) : (
          <Link to="/login">
            <button className="w-[183px] h-[44px] text-[#fff] font-bold text-xl bg-[#02B589] rounded-full">
              НЭВТРЭХ
            </button>
          </Link>
        )}

        {menu ? (
          <div className="flex justify-evenly  px-4 py-4 w-64">
            <Link to="/history">
              <button className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out">
                History
              </button>
            </Link>
            <button
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() => logOut()}
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
