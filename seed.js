const mongoose = require("mongoose");
const argon2 = require("argon2");
const User = require("./models/User");

const seed = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/media", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await User.deleteMany({});

    const hashedPassword = await argon2.hash("123123123");

    await User.create({ name: "admin", password: hashedPassword });

    console.log("✅ Admin user created");
  } catch (error) {
    console.error("❌ Error seeding user:", error);
  } finally {
    mongoose.connection.close();
  }
};

seed();
