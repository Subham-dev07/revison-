const mongoose = require("mongoose");
const Member = require("./index");

const testMembers = [
  {
    label: "Valid member",
    data: {
      memberName: "Rahul",
      age: 22,
      plan: "Monthly",
      fee: 1499,
      phone: "9876543210",
    },
  },
  {
    label: "Empty member (all required fields missing)",
    data: {},
  },
  {
    label: "Invalid values",
    data: {
      memberName: "Al",
      age: 14,
      plan: "Weekly",
      fee: 500,
      phone: "98765",
    },
  },
  {
    label: "Phone with country code",
    data: {
      memberName: "Sneha",
      age: 30,
      plan: "Yearly",
      fee: 4999,
      phone: "+919876543210",
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
