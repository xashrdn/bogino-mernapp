import axios from "axios";
import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { EmailContext } from "./Context";
import logo from "../assets/logo/logo-default.png";
import { useNavigate } from "react-router-dom";

const History = () => {
  const [hist, setHist] = useState([]);
  const { shortId } = useContext(EmailContext);
  const navigate = useNavigate();

  const id = localStorage.getItem("id");

  const getHistory = async () => {
    const res = await axios.get(`https://boginoo-v1000.vercel.app/${id}`, {});
    setHist(res?.data);
  };
  getHistory();

  const getUrl = async () => {
    const a = await axios.get(
      `https://boginoo-v1000.vercel.app/conv/${shortId}`
    );
    console.log(a);
  };

  return (
    <div className="h-[89vh]">
      <div className="flex justify-center items-center">
        <img
          className="cursor-pointer"
          onClick={() => navigate("/")}
          src={logo}
          alt="logo"
        />
      </div>

      {hist.map((el, key) => {
        return (
          <div
            key={key}
            className="flex justify-between items-center h-[8vh] w-[100%] bg-[#E5E5E5] flex-row mt-2"
          >
            <div className="ml-[10vw]">
              <div className="text-zinc-500">Өгөгдсөн холбоос:</div>
              <div>{el?.longUrl}</div>
            </div>
            <div className="mr-[10vw]">
              <div className="text-zinc-500">Богино холбоос:</div>
              <div className="flex ">
                <a
                  target="_blank"
                  href={`http://localhost:8000/conv/${el?.shortUrl}`}
                >
                  http://localhost:8000/conv/{el?.shortUrl}
                </a>
                <div className="text-emerald-600 ml-2">Дараад үсэрнэ үү</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default History;
