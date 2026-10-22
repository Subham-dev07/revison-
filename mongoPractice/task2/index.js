const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({

  // TODO: Define the memberName field as described in the task

  // TODO: Define the age field as described in the task

  // TODO: Define the plan field as described in the task

  // TODO: Define the fee field as described in the task

  // TODO: Define the hasLockerAccess field as described in the task

  // TODO: Define the joinDate field as described in the task

  // TODO: Define the phone field as described in the task

});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
