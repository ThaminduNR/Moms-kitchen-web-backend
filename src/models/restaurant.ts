import mongoose, { Schema } from "mongoose";

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const restaurantSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  restaurantName: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  deliveryPrice: { type: String, required: true },
  estimateddeliveryTime: { type: String, required: true },
  cuisines: [{ type: String, required: true }],
  menuItem: [menuItemSchema],
  imageUrl: { type: String, required: true },
  lastUpdate: { type: Date, required: true },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

export default Restaurant;
