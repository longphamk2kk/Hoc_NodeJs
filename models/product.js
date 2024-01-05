const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category"
    }
  },
  {
    versionkey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
