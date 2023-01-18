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

exports.getidUrlQueary = async (req) => {
  const { id } = req.params;
  const get = await UrlSchema.find();
  let heh;
  get.map((el) => {
    if (el.shortUrl == id) {
      heh = el.longUrl;
    }
  });
  return heh;
};
exports.historyUrlQueary = async (req) => {
  const { userid } = req.params;
  const get = await UrlSchema.find();
  let heh = [];
  get.map((el) => {
    if (el.userid == userid) {
      heh.push(el);
    }
  });
  return heh;
};
