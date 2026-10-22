# Task 2 — Gym Membership System (Schema Types & Validators)

You are building a Gym Membership System using Mongoose.

Before a member is added to the gym's database, the application must verify that all information is valid. Complete the Mongoose schema by defining the appropriate Schema Types, applying built-in validators, and implementing the required Custom Validator.

## Functional Requirements

Complete the `MemberSchema` with the following fields. **Each error message must match exactly as written.**

### 1. memberName

- Type: `String`
- Required, with the message `Member name is required`
- Minimum 4 characters, with the message `Member name must be at least 4 characters`

### 2. age

- Type: `Number`
- Required, with the message `Age is required`
- Minimum value 18, with the message `Age must be at least 18`

### 3. plan

- Type: `String`
- Allowed values: `Silver`, `Gold`, `Platinum`
- Any other value gives the message `Plan must be Silver, Gold, or Platinum`

### 4. fee

- Type: `Number`
- Required, with the message `Fee is required`
- Minimum value 1999, with the message `Fee must be at least 1999`

### 5. hasLockerAccess

- Type: `Boolean`
- Default value: `false`

### 6. joinDate

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
8123456789
9012345678
6789012345
```

**Invalid Examples**

```
81234          - fewer than 10
81234567890    - more than 10
+918123456789  - more than 10
```
