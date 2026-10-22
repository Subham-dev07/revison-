const mongoose = require("mongoose");
const Member = require("./index");

const testMembers = [
  {
    label: "Valid member",
    data: {
      memberName: "Vikram",
      age: 25,
      plan: "Gold",
      fee: 2499,
      phone: "8123456789",
    },
  },
  {
    label: "Empty member (all required fields missing)",
    data: {},
  },
  {
    label: "Invalid values",
    data: {
      memberName: "Raj",
      age: 17,
      plan: "Diamond",
      fee: 1500,
      phone: "81234",
    },
  },
  {
    label: "Phone with country code",
    data: {
      memberName: "Ananya",
      age: 28,
      plan: "Platinum",
      fee: 5999,
      phone: "+918123456789",
    },
  },
];

async function run() {
  await mongoose.connect("mongodb://127.0.0.1:27017/gym");
  console.log("Database Connected");

  await Member.deleteMany({});

  for (const { label, data } of testMembers) {
    console.log(`\n--- ${label} ---`);

    try {
      const member = await new Member(data).save();
      const stored = await Member.findById(member._id).lean();

      console.log("Saved Member");
      console.log(stored);
    } catch (err) {
      if (err.name !== "ValidationError") throw err;

      console.log("Validation Failed");
      for (const field in err.errors) {
        console.log(`${field}: ${err.errors[field].message}`);
      }
    }
  }

  await mongoose.connection.close();
}

run().catch(async (err) => {
  console.error(err);
  await mongoose.connection.close();
});
