import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-[5vh] w-[100vw]  justify-end  ">
      <div className="flex justify-evenly items-center w-[25vw]">
        <button className="w-[274px] h-[23px] text-[#02B589] font-bold text-xl">
          ХЭРХЭН АЖИЛЛАДАГ ВЭ?
        </button>
        <Link to="/login">
          <button className="w-[183px] h-[44px] text-[#fff] font-bold text-xl bg-[#02B589] rounded-full">
            НЭВТРЭХ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
