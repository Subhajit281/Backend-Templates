# JWT Auth Template v0.1

## Goal

A reusable Express + MongoDB + JWT authentication boilerplate following MVC architecture and separation of concerns.

---

## Architecture

```text
src/
├── config/
├── controllers/
├── middleware/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── validate.middleware.js
├── models/
├── routes/
├── services/
└── app.js
```

---

## Responsibilities

### Controller

Responsible for:

* Receiving requests
* Extracting request data
* Calling services
* Sending responses
* Passing errors to error middleware

Should NOT:

* Talk directly to MongoDB
* Hash passwords
* Generate JWTs

---

### Service

Responsible for:

* Business logic
* MongoDB operations
* Password hashing
* JWT generation
* Validation of business rules

Examples:

* Register User
* Login User
* Update User
* Delete User

---

### Middleware

#### Auth Middleware

Responsibilities:

* Read Authorization header
* Verify JWT
* Fetch authenticated user
* Attach user to req.user

Flow:

Request
↓
JWT Verify
↓
Find User
↓
req.user
↓
next()

---

#### Error Middleware

Responsibilities:

* Catch application errors
* Return consistent JSON responses
* Prevent server crashes

Flow:

throw error
↓
next(error)
↓
errorMiddleware
↓
JSON response

---

## Features Implemented

### Authentication

* Register User
* Login User
* JWT Generation
* JWT Verification

### Profile

* Get Profile
* Update Profile
* Delete Profile

### Security

* bcrypt password hashing
* Protected routes
* Duplicate email protection
* User existence validation
* Password update prevention through profile route

### Validation

* Registration validation middleware

---

## Routes

POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile

PATCH /api/auth/update

DELETE /api/auth/delete

---

## Important Lessons Learned

### Request Flow

Request
↓
Route
↓
Middleware
↓
Controller
↓
Service
↓
Model
↓
MongoDB

---

### Error Flow

Service
↓
throw error
↓
Controller
↓
next(error)
↓
Error Middleware
↓
Response

---

### Authentication Flow

Login
↓
Verify Password
↓
Generate JWT
↓
Send Token

Protected Route
↓
Verify Token
↓
Find User
↓
req.user
↓
Controller

---

## Edge Cases Fixed

### Deleted User With Valid Token

Problem:

JWT still valid after user deletion.

Solution:

After JWT verification:

```js
const user = await User.findById(decoded.id);

if (!user) {
    throw new Error('User Not Found');
}
```

---

### Password Update Bug

Problem:

User could update password through profile route.

Risk:

Plain text password stored in database.

Solution:

```js
const { password, ...safeUpdateData } = updateData;
```

Ignore password updates from profile endpoint.

Future password updates should happen through a dedicated route.

---

## Future Improvements (v0.2)

### Change Password

PATCH /api/auth/change-password

Requirements:

* Current password
* New password
* Verify current password
* Hash new password
* Save updated password

---

### Better Validation

* Email format validation
* Password length validation
* Name validation

Possible tools:

* Joi
* Zod
* Express Validator

---

### Standardized Error Class

Instead of:

```js
const error = new Error('Invalid Credentials');
error.statusCode = 401;
```

Create reusable AppError class.

---

## Future Improvements (v0.3)

* Forgot Password
* Reset Password
* Email Verification
* OTP Verification
* Refresh Tokens

---

## Future Improvements (v1.0)

* Role Based Access Control
* Admin/User Roles
* Permission Middleware
* Security Hardening
* Full Documentation

---

## Final Status

JWT Auth Template v0.1

Status: COMPLETE 

All End-to-End Tests Passed:

* Register
* Login
* Profile
* Update
* Delete
* JWT Verification
* Error Handling

Result:

Reusable authentication boilerplate ready for future projects.
