const knex = require("knex")(require("../knexfile"));

const getAllStores = async (_req, res) => {
  try {
    const data = await knex("stores");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving stores: ${err}`);
  }
};

const getStorebyId = async (req, res) => {
  const storeId = req.params.id;
  try {
    const store = await knex("stores").where({ id: storeId });
    if (store.length === 0) {
      return res.status(404).json({
        message: `Store with ID ${storeId} not found`,
      });
    }
    const storeData = store[0];
    res.json(storeData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrive user data for store with ID ${storeId}`,
    });
  }
};
const getFilteredStores = async (req, res) => {
  console.log("req.query", req.query);
  const categories = req.query.categories;
  const categoriesString =
    categories.split(",").length === 1
      ? `"${categories}"`
      : categories.split(",").map((category) => {
          return `"${category}"`;
        });
  // if we pass one category we add double quotes
  // taking categories and spliting the string into an array (every word that's sparated by a comma)
  try {
    const stores = await knex("stores").whereRaw(
      `JSON_CONTAINS(categories,'[${categoriesString}]')`
    );
    res.status(200).json(stores);
  } catch (err) {
    res.status(400).send(`Error filtering stores: ${err}`);
  }
};

const addStore = async (req, res) => {
  try {
    const data = await knex("stores").insert(req.body);
    res.status(200).json({ message: "New store added" });
  } catch (err) {
    res.status(400).send(`Error Adding store: ${err}`);
  }
};

module.exports = {
  getAllStores,
  getStorebyId,
  addStore,
  getFilteredStores,
};
