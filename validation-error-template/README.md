# Validation & Error Handling Template

## Status

 COMPLETE (v1.0)

---

# Purpose

This template provides a reusable validation and error handling architecture for Express.js applications.

The goal is to avoid writing repetitive validation logic inside controllers and centralize error handling across the application.

Instead of:

```js
if (!email) {
    return res.status(400).json({
        message: "Email is required"
    });
}
```

inside every controller, validation is handled through reusable middleware and Joi schemas.

---

# Tech Stack

* Node.js
* Express.js
* Joi

---

# Folder Structure

```text
src/

├── middleware/
│   ├── validate.middleware.js
│   └── error.middleware.js
│
├── validators/
│   └── auth.validator.js
│
├── utils/
│   └── AppError.js
│
├── routes/
│   └── auth.route.js
│
└── app.js
```

---

# Architecture

```text
Request
↓
Validation Middleware
↓
Joi Validation
↓
AppError
↓
Error Middleware
↓
Response
```

---

# Components

## 1. Joi Schemas

Schemas define the validation rules.

Example:

```js
const registerSchema = joi.object({
    name: joi.string().min(3).max(50).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
});
```

Schemas act as the rulebook for incoming requests.

---

## 2. Validation Middleware

Reusable middleware:

```js
validate(schema)
```

Usage:

```js
router.post(
    "/register",
    validate(registerSchema),
    registerController
);
```

Responsibilities:

* Validate request body
* Reject invalid requests
* Sanitize request data
* Forward validation errors to AppError

---

## 3. AppError

Custom error class.

Example:

```js
throw new AppError(
    "User Not Found",
    404
);
```

Provides:

* message
* statusCode
* status
* operational error identification

---

## 4. Error Middleware

Centralized error handling.

Example:

```js
app.use(errorMiddleware);
```

Responsibilities:

* Receive errors from anywhere in the application
* Generate consistent API responses
* Prevent duplicate error response logic

---

# Validation Flow

Example Request:

```json
{
    "password": "123"
}
```

Flow:

```text
Request
↓
validate(registerSchema)
↓
Joi Validation
↓
Validation Error
↓
AppError
↓
errorMiddleware
↓
400 Response
```

Response:

```json
{
    "success": false,
    "status": "fail",
    "message": "\"name\" is required, \"email\" is required, \"password\" length must be at least 8 characters long"
}
```

---

# Joi Features Implemented

## abortEarly: false

Collects all validation errors instead of stopping at the first one.

Without:

```text
"name" is required
```

With:

```text
"name" is required
"email" is required
"password" length must be at least 8 characters long
```

---

## stripUnknown: true

Automatically removes fields not defined in the schema.

Input:

```json
{
    "name":"John",
    "email":"john@gmail.com",
    "password":"12345678",
    "role":"admin"
}
```

After Validation:

```json
{
    "name":"John",
    "email":"john@gmail.com",
    "password":"12345678"
}
```

---

# Main Learning Outcomes

## Middleware Factory Pattern

```js
validate(schema)
```

returns:

```js
(req,res,next)=>{}
```

This allows one middleware to work with multiple schemas.

---

## Error Propagation

```js
next(error)
```

sends errors directly to:

```js
errorMiddleware
```

without manually generating responses.

---

## Separation of Concerns

Validation Middleware:

```text
Checks Data
```

AppError:

```text
Creates Structured Errors
```

Error Middleware:

```text
Sends Responses
```

Each component has one responsibility.

---

# Why This Template Matters

Controllers should focus on business logic.

Bad:

```js
Validate Data
↓
Check Rules
↓
Business Logic
↓
Send Response
```

Good:

```text
Validation Middleware
↓
Controller
↓
Business Logic
```

This architecture keeps controllers clean and maintainable.

---

# Future Improvements

## v1.1

* Custom Joi Error Messages
* Better Validation Error Formatting
* Field-wise Validation Responses

Example:

```json
{
    "errors": [
        {
            "field": "email",
            "message": "Email is required"
        }
    ]
}
```

---

## v1.2

Centralized Handling For:

* JWT Errors
* MongoDB Errors
* Mongoose Validation Errors
* Duplicate Key Errors
* Cast Errors
* Multer Errors

---

## v1.3

Environment-Based Error Responses

Development:

```json
{
    "message": "...",
    "stack": "..."
}
```

Production:

```json
{
    "message": "Something went wrong"
}
```

---

## v2.0

Production Error Architecture

* Error Logging
* Request Tracking
* Structured Error Codes
* Monitoring Integration

---

# Testing Completed

 Register Validation

 Login Validation

 Update Profile Validation

 AppError Integration

 Error Middleware Integration

 Multiple Validation Errors

 Unknown Field Stripping

 Request Sanitization

---

# Template Completion

Version:

```text
v1.0
```

Status:

```text
COMPLETE
```

---

```
