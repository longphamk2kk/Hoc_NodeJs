const accountRouter = require("./accountRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");

module.exports = (app) => {
  app.use("/api/account", accountRouter);
  app.use("/api/categories", categoryRouter);
  app.use("/api/products", productRouter);
};
