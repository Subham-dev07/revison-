const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  employeeId: String,
});

// const count = await Employee.countDocuments(); use this to get
// the existing count of employee
// TODO: Add the pre("save") hook to generate an employee ID
// only for new documents. 5001 + Count to generate ID
// Employee IDs should follow EMP-5001, EMP-5002, EMP-5003, and so on.


// TODO: Add the post("save") hook to display the employee
// onboarding confirmation message using the saved document
// (it must include both the employeeId and the department).


const Employee = mongoose.model("Employee", employeeSchema);

async function run() {
  await mongoose.connect("mongodb://127.0.0.1:27017/onboarding");
  console.log("Database Connected");

  const employee = new Employee({
    name: "Kavya",
    department: "Marketing",
  });

  await employee.save();

  const stored = await Employee.findById(employee._id);

  console.log("Stored Employee");
  console.log(stored.name);
  console.log(stored.department);
  console.log(stored.employeeId);

  await mongoose.connection.close();
}

run();
