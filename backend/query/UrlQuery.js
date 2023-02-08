const UrlSchema = require("../database/model/Url");
const mongoose = require("mongoose");

exports.allUrl = async () => {
  const result = await UrlSchema.find().limit(10);
  return result;
};

exports.urlReadById = async (req) => {
  const { userid } = req.params;
  const result = await UrlSchema.find({ userid });
  return result;
};

exports.urlCreateQuery = async (req) => {
  const { id, longUrl } = req.body;
  function makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const allurl = await UrlSchema.find();
  let newshorty = makeid(5);
  allurl.map((el) => {
    if (newshorty == el.shortUrl) {
      newshorty = makeid(5);
      shalgah();
    }
  });
  const shalgah = () => {
    allurl.map((el) => {
      if (newshorty == el.shortUrl) {
        newshorty = makeid(5);
      }
    });
  };

  const result = await new UrlSchema({
    userid: id,
    longUrl: longUrl,
    shortUrl: newshorty,
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

exports.deleteAll = async (req, res) => {
  const result = await UrlSchema.deleteMany({});
  res.send(result);
};

exports.urlConvert = async (req, res) => {
  const { shortUrl } = await req.params;
  const url = await UrlSchema.findOne({ shortUrl: shortUrl });
  res.redirect(url.longUrl);
};
