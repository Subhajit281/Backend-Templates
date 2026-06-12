# Backend Templates Collection

A collection of reusable backend templates built using Node.js, Express.js, MongoDB, Mongoose, and Socket.IO.

The purpose of this repository is to build commonly used backend features once and reuse them across future projects.

---

# Goal

* Learn backend engineering through implementation
* Understand backend architecture patterns
* Create reusable backend modules
* Reduce development time for future projects
* Build production-inspired backend foundations

---

# Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Socket.IO
* Nodemailer
* Joi

---

# Collection Structure

```text
backend-templates/

├── express-mongo-starter/
├── jwt-auth-template/
├── file-upload-template/
├── validation-error-template/
├── email-service-template/
└── socketio-template/
```

---

# Backend Architecture

## Request Based Architecture

```text
Request
↓
Route
↓
Controller
↓
Service
↓
Database / External Resource
↓
Response
```

---

## Middleware Flow

```text
Request
↓
Middleware
↓
Controller
↓
Service
↓
Response
```

---

## Socket.IO Architecture

```text
Client
↓
Socket Event
↓
Handler
↓
Service
↓
Utility Layer
↓
Response Event
```

---

# Common Folder Structure

```text
src/

├── config/
├── controllers/
├── services/
├── routes/
├── middlewares/
├── models/
├── validators/
├── handlers/
├── sockets/
├── utils/
└── server.js
```

---

# Template 1 - Express Mongo Starter

## Features

* Express Setup
* MongoDB Connection
* Mongoose Integration
* MVC Structure
* Service Layer
* Health Check Route
* Environment Variables
* Global Error Handling
* Centralized Configuration

---

# Template 2 - JWT Authentication

## Features

* User Registration
* User Login
* User Profile
* Update Profile
* Delete Profile
* JWT Authentication
* Protected Routes
* Password Hashing
* bcrypt Integration
* Duplicate Email Prevention
* Authentication Middleware
* User Context Injection
* Password Field Protection

---

# Template 3 - File Upload

## Features

* Multer Integration
* Single File Upload
* Multiple File Upload
* Dynamic Folder Routing
* File Type Segregation
* Static File Serving
* File Size Limits
* Automatic Folder Creation
* Upload Validation
* Organized Upload Structure

---

# Template 4 - Validation & Error Handling

## Features

* Joi Validation
* Validation Middleware
* Middleware Factory Pattern
* AppError Class
* Operational Error Handling
* Centralized Error Middleware
* Request Validation
* Custom Error Responses
* Consistent API Responses

---

# Template 5 - Email Service

## Features

* SMTP Configuration
* Nodemailer Integration
* Reusable Email Service
* Welcome Email Template
* OTP Email Template
* Email Validation
* Error Handling
* Modular Template System
* Dynamic Email Sending

---

# Template 6 - Socket.IO

## Features

* Socket.IO Server Setup
* Connection Handling
* Disconnection Handling
* User Registration
* Online User Tracking
* Socket Mapping
* Private Messaging
* Typing Indicators
* Room Joining
* Room Leaving
* Room Messaging
* Room Isolation
* Event Driven Architecture
* Handler Layer
* Service Layer
* Utility Layer
* Test Client

---

# Concepts Covered

## Express Fundamentals

* Routing
* Middleware
* Controllers
* Services
* Error Handling
* Environment Variables

---

## Authentication

* JWT
* Password Hashing
* Protected Routes
* User Authorization

---

## File Handling

* Upload Processing
* File Storage
* Static Serving
* Dynamic Routing

---

## Validation

* Schema Validation
* Middleware Factories
* Request Sanitization

---

## Email Systems

* SMTP
* Transactional Emails
* OTP Workflows
* Template Management

---

## Real-Time Communication

* Persistent Connections
* Events
* Emit / Listen
* Online Presence
* Private Messaging
* Typing Indicators
* Rooms
* Broadcasting

---

# Architectural Patterns Learned

## MVC Pattern

```text
Route
↓
Controller
↓
Service
↓
Database
```

---

## Service Layer Pattern

```text
Controller
↓
Service
↓
External Resource
```

---

## Middleware Pattern

```text
Request
↓
Middleware
↓
Next Middleware
↓
Controller
```

---

## Middleware Factory Pattern

```text
Factory Function
↓
Returns Middleware
↓
Execution
```

---

## Event Driven Pattern

```text
Client Event
↓
Handler
↓
Service
↓
Response Event
```

---

# Skills Covered

* REST API Development
* Authentication Systems
* File Management
* Input Validation
* Error Handling
* Email Integration
* Real-Time Communication
* Layered Architecture
* Backend Design Patterns
* Reusable Module Design

---

# Future Templates

* Redis Caching
* BullMQ Queues
* Background Jobs
* Swagger Documentation
* Logging System
* Rate Limiting
* Payment Gateway Integration
* Push Notifications
* Docker Setup
* Testing Setup
* Microservices Foundation

---

# Current Progress

```text
 Express Mongo Starter
 JWT Authentication
 File Upload
 Validation & Error Handling
 Email Service
 Socket.IO

Backend Templates Collection v1.0 Complete
```

---

# Philosophy

```text
Build Once.
Understand Deeply.
Reuse Everywhere.
```
