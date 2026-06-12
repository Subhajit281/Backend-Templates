# Express Mongo Starter

A reusable Express.js + MongoDB backend starter template built with MVC architecture, Service Layer pattern, and centralized error handling.

This template serves as the foundation for all future backend projects and templates.

---

# Purpose

The goal of this project is to eliminate repetitive backend setup work.

Instead of recreating Express configuration, MongoDB connections, routing structure, controllers, services, and error handling for every project, this starter provides a clean and scalable foundation.

Projects such as:

* JWT Authentication
* Ecommerce APIs
* Blog APIs
* Task Managers
* Portfolio CMS
* URL Shorteners
* File Upload Services

can all start from this template.

---

# Features

## Express Setup

* Express server configuration
* Environment variable support
* Modular project structure

## MongoDB Integration

* Mongoose connection setup
* Centralized database configuration
* Environment-based connection strings

## MVC Architecture

Clear separation of concerns:

```text
Request
 ↓
Route
 ↓
Controller
 ↓
Service
 ↓
Model
 ↓
MongoDB
```

### Routes

Responsible for:

* Defining API endpoints
* Connecting middleware and controllers

### Controllers

Responsible for:

* Receiving requests
* Sending responses
* Calling services

### Services

Responsible for:

* Business logic
* Database operations
* Reusable application logic

### Models

Responsible for:

* Database schemas
* MongoDB collections

---

## Global Error Handling

Centralized error middleware:

```text
throw error
 ↓
next(error)
 ↓
errorMiddleware
 ↓
JSON Response
```

Benefits:

* Consistent error responses
* Cleaner controllers
* Easier debugging

---

## Health Check Route

Built-in health endpoint:

```http
GET /health
```

Used for:

* Server monitoring
* Deployment checks
* Load balancer health checks

---

# Project Structure

```text
src/
├── config/
│   └── db.js
│
├── controllers/
│
├── middleware/
│   └── error.middleware.js
│
├── models/
│
├── routes/
│   └── health.route.js
│
├── services/
│
└── app.js

server.js
.env
README.md
```

---

# Getting Started

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create:

```text
.env
```

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## Run Server

```bash
node server.js
```

Expected Output:

```text
MongoDB connected successfully
Server running on PORT 5000
```

---

# Example Development Flow

When building a feature:

```text
Route
 ↓
Controller
 ↓
Service
 ↓
Model
 ↓
Database
```

Example:

```text
Create Note
 ↓
note.route.js
 ↓
note.controller.js
 ↓
note.service.js
 ↓
Note Model
 ↓
MongoDB
```

---

# Design Principles

## Separation of Concerns

Each layer has a single responsibility.

Controllers should not contain database logic.

Services should contain business logic.

Models should only describe data structure.

---

## Reusability

The starter is designed to be copied and extended for future templates.

Examples:

```text
express-mongo-starter
        ↓
jwt-auth-template
        ↓
file-upload-template
        ↓
email-service-template
```

---

# What Was Built Using This Starter

## JWT Auth Template

Built directly on top of this starter.

Features:

* Register User
* Login User
* JWT Authentication
* Protected Routes
* Profile Management
* Update Profile
* Delete Profile

---

# Future Improvements

## Validation Template

Add reusable validation middleware using:

* Joi
* Zod
* Express Validator

---

## File Upload Template

Add:

* Multer
* Upload Middleware
* File Validation
* Image Upload APIs

---

## Email Service Template

Add:

* Nodemailer
* Email Queueing
* OTP Support

---

## Socket.IO Template

Add:

* Real-time communication
* Chat support
* Notifications

---

## Security Improvements

Potential future additions:

* Helmet
* Rate Limiting
* Request Sanitization
* Logging
* API Versioning

---

# Learning Outcomes

This project was built to understand:

* Express Application Structure
* MongoDB Integration
* MVC Architecture
* Service Layer Pattern
* Middleware Flow
* Error Handling
* Backend Scalability Principles

---

# Status

Version: v0.1

Current Status:

 Complete

