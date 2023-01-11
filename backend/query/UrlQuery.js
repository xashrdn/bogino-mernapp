const UrlSchema = require("../database/model/Url");
const mongoose = require("mongoose");

exports.allUrl = async () => {
  const result = await UrlSchema.find();
  return result;
};

exports.urlReadById = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UrlSchema.findById({ _id: objId });
  return result;
};

exports.urlCreateQuery = async (req) => {
  const { shortUrl, longUrl } = req.body;
  const result = await new UrlSchema({
    longUrl: longUrl,
    shortUrl: shortUrl,
  }).save();
  return result;
};

exports.urlUpdateQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UrlSchema.findById({ _id: objId });
  const { shortUrl, longUrl } = req.body;
  await UrlSchema.findByIdAndUpdate(result, {
    longUrl: longUrl,
    shortUrl: shortUrl,
  });
};

exports.urlDeleteQuery = async (req) => {
  const { id } = req.params;
  const objId = new mongoose.Types.ObjectId(id);
  const result = await UrlSchema.findById({ _id: objId });
  await UrlSchema.findByIdAndRemove(result);
};
