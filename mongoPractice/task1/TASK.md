# Task 1 — Employee Onboarding System (Mongoose Hooks)

You are building an Employee Onboarding System using Mongoose.

Whenever a new employee is saved, the application should automatically generate an employee ID before saving, and display a confirmation message after the employee has been stored.

Complete the application by implementing the required Mongoose hooks in `index.js`.

## Functional Requirements

### 1. Employee Schema

The schema is already provided and contains the following fields:

| Field      | Type   |
| ---------- | ------ |
| name       | String |
| department | String |
| employeeId | String |

### 2. Pre Save Hook

Create a `pre("save")` hook on the employee schema.

- The hook must run **before** an employee document is saved
- Generate an `employeeId` and assign it to the document being saved
- The employee ID must follow this format: `EMP-5001`
- The numeric part starts at **5001** for the first employee and increases by 1 for each employee saved after that:
  - First employee → `EMP-5001`
  - Second employee → `EMP-5002`
  - Third employee → `EMP-5003`
- The number must be derived from how many employee documents already exist in the collection — it must **not** be a fixed value
- The hook must only generate an ID for **new** documents

### 3. Post Save Hook

Create a `post("save")` hook on the employee schema.

- The hook must run **after** an employee document has been saved
- Print the following message to the console, using the `employeeId` and `department` from the saved document:

```
Employee EMP-5001 has joined the Marketing team.
```

### 4. Save the Employee

The provided code creates and saves this employee:

| Name  | Department |
| ----- | ---------- |
| Kavya | Marketing  |

After the hooks are implemented, the saved document must contain:

- name: `Kavya`
- department: `Marketing`
- employeeId: `EMP-5001`

## Expected Output

```
Database Connected
Employee EMP-5001 has joined the Marketing team.
Stored Employee
Kavya
Marketing
EMP-5001
```

## Run

```bash
npm run task1
```

> Requires MongoDB running locally on `127.0.0.1:27017`.
