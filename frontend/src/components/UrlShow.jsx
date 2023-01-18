import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

export const U = () => {
  const location = useLocation();

  const bairshil = location.pathname;
  useEffect(() => {
    const dataRetriever = async () => {
      await axios
        .get(`http://localhost:8000/urlid${bairshil}`)
        .then((response) => {
          console.log(response);
          if (response?.data) {
            window.location.href = response?.data?.result;
          }
        });
    };
    if (
      bairshil != "/" ||
      bairshil != "login" ||
      bairshil != "/signup" ||
      bairshil != "/forgotpass"
    ) {
      dataRetriever();
    }
  }, [bairshil]);

  return <div></div>;
};
