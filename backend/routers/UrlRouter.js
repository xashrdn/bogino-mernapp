const express = require("express");
const {
  urlAll,
  urlById,
  urlCreate,
  urlDelete,
  urlUpdate,
} = require("../controllers/UrlController");

const UrlRouter = express
  .Router()
  .post("/url", urlCreate)
  .get("/url/:id", urlById)
  .get("/urls", urlAll)
  .patch("/url/:id", urlUpdate)
  .delete("/url/:id", urlDelete);

module.exports = UrlRouter;
// tockencheck(req, res, next){
//   req.headers.authorization
// }
