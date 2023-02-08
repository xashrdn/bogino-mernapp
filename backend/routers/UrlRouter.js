const express = require("express");
const {
  urlAll,
  urlById,
  urlCreate,
  urlUpdate,
} = require("../controllers/UrlController");
const { deleteAll, urlConvert } = require("../query/UrlQuery");

const UrlRouter = express
  .Router()
  .post("/url", urlCreate)
  .get("/url/:userid", urlById)
  .get("/urls", urlAll)
  .patch("/url/:id", urlUpdate)
  .delete("/url", deleteAll)
  .get("/conv/:shortUrl", urlConvert);

module.exports = UrlRouter;
