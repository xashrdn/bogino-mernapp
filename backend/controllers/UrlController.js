const {
  urlCreateQuery,
  allUrl,
  urlReadById,
  urlUpdateQuery,
  urlDeleteQuery,
  getidUrlQueary,
} = require("../query/UrlQuery");

exports.urlById = async (req, res) => {
  try {
    const result = await urlReadById(req);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.urlAll = async (req, res) => {
  try {
    const result = await allUrl();
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.urlCreate = async (req, res) => {
  try {
    const result = await urlCreateQuery(req);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.urlUpdate = async (req, res) => {
  try {
    await urlUpdateQuery(req);
    res.status(200).send(`SUCCESSFULLY UPDATED`);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.urlDelete = async (req, res) => {
  try {
    await urlDeleteQuery(req);
    res.status(200).send(`SUCCESSFULLY DELETED`);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.urlReadById123 = async (req, res) => {
  try {
    const result = await getidUrlQueary(req);
    res.status(200).send({ result });
  } catch (err) {
    res.status(400).send(err.message);
  }
};
