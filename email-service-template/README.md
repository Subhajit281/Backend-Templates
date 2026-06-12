# Email Service Template

A reusable backend email infrastructure built using **Node.js**, **Express.js**, **Nodemailer**, and **SMTP**.

This template is part of the **Backend Templates Collection** and is designed to provide a plug-and-play email service architecture that can be integrated into future projects such as authentication systems, e-commerce applications, SaaS products, portfolio contact forms, and notification services.

---

# Purpose

Instead of configuring email delivery from scratch in every project, this template provides a reusable architecture for:

* Sending Emails
* Email Validation
* Error Handling
* SMTP Configuration
* Email Template Generation
* Future OTP & Verification Systems

---

# Features

## SMTP Configuration

Supports any SMTP provider through environment variables.

Examples:

* Gmail
* Outlook
* Zoho
* Mailtrap
* SendGrid SMTP
* AWS SES SMTP

Configuration is provider-agnostic.

---

## Reusable Email Service

Centralized email delivery service:

```js
await sendEmail({
    to,
    subject,
    text,
    html
});
```

The service layer is independent of routes and controllers, making it reusable throughout future projects.

---

## Email Templates

Reusable HTML template generators.

Implemented:

```js
welcomeTemplate(name)

otpTemplate(otp)
```

Purpose:

* Welcome Emails
* OTP Verification Emails
* Future Verification Emails
* Password Reset Emails

---

## Validation

Joi validation integrated.

Validation rules include:

```js
to
subject
text
html
```

Features:

* Required field validation
* Email format validation
* Multiple error reporting
* Unknown field stripping

---

## Error Handling

Centralized error architecture using:

```js
AppError
```

and

```js
errorMiddleware
```

Provides structured API responses.

Example:

```json
{
    "success": false,
    "status": "fail",
    "message": "\"to\" is required"
}
```

---

# Folder Structure

```text
src/

├── config/
│   └── email.config.js
│
├── controllers/
│   └── email.controller.js
│
├── middleware/
│   ├── validator.middleware.js
│   └── error.middleware.js
│
├── routes/
│   └── email.route.js
│
├── services/
│   └── email.service.js
│
├── validators/
│   └── email.validator.js
│
├── utils/
│   ├── AppError.js
│   └── emailTemplates.js
│
├── app.js
└── server.js
```

---

# Architecture Flow

Generic Email Flow

```text
Request
↓
Route
↓
Validation Middleware
↓
Controller
↓
Email Service
↓
SMTP Provider
↓
Response
```

Template Email Flow

```text
Request
↓
Controller
↓
Email Template
↓
Email Service
↓
SMTP Provider
↓
Inbox
```

---

# API Endpoints

## Send Custom Email

```http
POST /api/email/send
```

Request:

```json
{
    "to": "user@gmail.com",
    "subject": "Test Email",
    "text": "Hello World"
}
```

---

## Send Welcome Email

```http
POST /api/email/welcome
```

Request:

```json
{
    "to": "user@gmail.com",
    "name": "John"
}
```

---

## Send OTP Email

```http
POST /api/email/otp
```

Request:

```json
{
    "to": "user@gmail.com"
}
```

Current implementation uses a static OTP for demonstration purposes.

---

# Environment Variables

```env
PORT=8080

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

EMAIL_FROM=your_email@gmail.com
```

---

# Main Concepts Learned

## External Service Integration

Unlike previous templates that interacted with MongoDB, this template communicates with an external SMTP server.

Architecture:

```text
Application
↓
SMTP Server
↓
Recipient Inbox
```

---

## Service Layer Reusability

The service layer does not depend on:

* Express
* Routes
* Controllers

It only accepts data and performs email delivery.

Example:

```js
sendEmail({
    to,
    subject,
    text,
    html
});
```

---

## Separation Of Concerns

Email Service:

```text
Responsible For:
Email Delivery
```

Email Templates:

```text
Responsible For:
Email Content Generation
```

Validation Middleware:

```text
Responsible For:
Request Validation
```

Error Middleware:

```text
Responsible For:
Error Responses
```

---

# Testing Completed

## SMTP Testing

* SMTP Authentication
* SMTP Verification
* Gmail Integration

## Email Delivery Testing

* Generic Email
* Welcome Email
* OTP Email

## Validation Testing

* Missing Fields
* Invalid Email Format
* Multiple Validation Errors
* Unknown Field Stripping

## Error Handling Testing

* AppError
* Validation Errors
* Error Middleware Responses

---

# Future Improvements

## Email Verification System

Add:

```js
verificationTemplate(token)
```

Flow:

```text
Register User
↓
Generate Verification Token
↓
Send Verification Email
↓
Verify Account
```

---

## Forgot Password System

Add:

```js
resetPasswordTemplate(token)
```

Flow:

```text
Forgot Password
↓
Generate OTP / Token
↓
Send Email
↓
Reset Password
```

---

## Dynamic OTP Generation

Current:

```js
const otp = 123456;
```

Future:

```js
Math.floor(
    100000 + Math.random() * 900000
);
```

---

## Attachments Support

Future API:

```js
sendEmail({
    to,
    subject,
    html,
    attachments
});
```

Useful for:

* Invoices
* Reports
* PDFs

---

## Email Queue System

Current:

```text
Request
↓
Send Email Immediately
```

Future:

```text
Request
↓
Queue
↓
Worker
↓
Send Email
```

Using:

* BullMQ
* Redis

---

## HTML Email Design System

Future:

```text
Header Component
Footer Component
Button Component
Branding Component
```

Reusable across all email templates.

---

# Integration With Other Templates

## JWT Authentication Template

Future Integration:

```text
Forgot Password
↓
Generate OTP
↓
Send OTP Email
↓
Reset Password
```

and

```text
Register User
↓
Send Verification Email
↓
Verify Account
```

---

# Version

```text
Email Service Template
Version: 1.0
Status: COMPLETE
```

Part of:

```text
Backend Templates Collection
```
