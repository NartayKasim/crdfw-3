const sortItems = require("../inventoryHelpers").sortItems;

module.exports = {
   search: async (req, res) => {
      const { term } = req.params;
      let items;
      if (term === "none") {
         const db = req.app.get("db").inventory;
         items = await db.get_inventory();
      } else {
         const db = req.app.get("db").inventory.search;
         items = await db.search([term]);
      }
      res.status(200).send(items);
   },
};
