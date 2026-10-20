# Task 2 — Gym Membership System (Schema Types & Validators)

You are building a Gym Membership System using Mongoose.

Before a member is added to the gym's database, the application must verify that all information is valid. Complete the Mongoose schema by defining the appropriate Schema Types, applying built-in validators, and implementing the required Custom Validator.

## Functional Requirements

Complete the `MemberSchema` with the following fields. **Each error message must match exactly as written.**

### 1. memberName

- Type: `String`
- Required, with the message `Member name is required`
- Minimum 3 characters, with the message `Member name must be at least 3 characters`

### 2. age

- Type: `Number`
- Required, with the message `Age is required`
- Minimum value 16, with the message `Age must be at least 16`

### 3. plan

- Type: `String`
- Allowed values: `Monthly`, `Quarterly`, `Yearly`
- Any other value gives the message `Plan must be Monthly, Quarterly, or Yearly`

### 4. fee

- Type: `Number`
- Required, with the message `Fee is required`
- Minimum value 999, with the message `Fee must be at least 999`

### 5. hasPersonalTrainer

- Type: `Boolean`
- Default value: `false`

### 6. startDate

- Type: `Date`
- Default value: the current date

### 7. phone

- Type: `String`
- Required, with the message `Phone number is required`
- Must pass a **Custom Validator**, with the message `Phone must be exactly 10 digits`

## Custom Validation Rule

The phone value must be exactly **10 characters** long.

**Valid Examples**

```
9876543210
7012345678
5432109876
```

**Invalid Examples**

```
98765          - fewer than 10
98765432101    - more than 10
+919876543210  - more than 10
```
