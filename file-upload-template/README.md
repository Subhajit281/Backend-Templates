# File Upload Template

## Status

 COMPLETE (v1.0)

---

# Goal

Build a reusable backend file upload template using:

* Node.js
* Express.js
* Multer

The objective is to understand how file uploads work in Express applications and create a production-style boilerplate that can be reused across future projects.

---

# Learning Objectives

This template was built to learn:

* Multer Middleware
* File Upload Architecture
* Single File Upload
* Multiple File Upload
* Dynamic File Storage
* Static File Serving
* File Size Limits
* Global Error Handling
* Node File System Operations

---

# Architecture

Request Flow:

```text
Request
↓
Upload Middleware
↓
req.file / req.files
↓
Controller
↓
Service
↓
Response
```

Comparison with JWT Template:

```text
JWT Template

Request
↓
Auth Middleware
↓
req.user
↓
Controller
↓
Service
↓
Response
```

```text
File Upload Template

Request
↓
Upload Middleware
↓
req.file / req.files
↓
Controller
↓
Service
↓
Response
```

The major learning was understanding how middleware can modify the request object before it reaches the controller.

---

# Folder Structure

```text
src/

├── controllers/
│   └── upload.controller.js

├── middleware/
│   ├── upload.middleware.js
│   └── error.middleware.js

├── routes/
│   └── upload.route.js

├── services/
│   └── upload.service.js

├── uploads/
│   ├── images/
│   ├── videos/
│   ├── documents/
│   ├── zips/
│   └── others/

└── app.js
```

---

# Features Implemented

## 1. Single File Upload

Route:

```http
POST /api/upload/file
```

Middleware:

```js
upload.single('file')
```

Creates:

```js
req.file
```

---

## 2. Multiple File Upload

Route:

```http
POST /api/upload/files
```

Middleware:

```js
upload.array('files', 5)
```

Creates:

```js
req.files
```

Supports up to 5 files in a single request.

---

## 3. Dynamic Folder Routing

Files are categorized using file extensions.

Examples:

```text
.jpg
.jpeg
.png
.webp
```

↓

```text
uploads/images
```

---

```text
.pdf
.doc
.docx
.txt
.csv
.xlsx
```

↓

```text
uploads/documents
```

---

```text
.mp4
.mov
.avi
.mkv
```

↓

```text
uploads/videos
```

---

```text
.zip
.rar
```

↓

```text
uploads/zips
```

---

Unknown extensions:

↓

```text
uploads/others
```

---

# Auto Folder Creation

Folders are automatically created if they do not exist.

Implemented using:

```js
fs.existsSync()
fs.mkdirSync()
```

with:

```js
{
    recursive: true
}
```

This allows the template to work without manually creating upload folders.

---

# Static File Serving

Implemented using:

```js
app.use(
    '/uploads',
    express.static('src/uploads')
);
```

Example:

```text
http://localhost:8080/uploads/images/file.jpg
```

Files can now be accessed directly from the browser.

---

# File Size Limits

Implemented using:

```js
limits: {
    fileSize: 10 * 1024 * 1024
}
```

Current limit:

```text
10 MB per file
```

---

# Error Handling

Global error middleware handles:

```text
Multer Errors
File Size Errors
Application Errors
```

Example:

```text
LIMIT_FILE_SIZE
```

returns a user-friendly response instead of a server crash.

---

# Important Concepts Learned

## req.file

Created by:

```js
upload.single()
```

Represents one uploaded file.

---

## req.files

Created by:

```js
upload.array()
```

Represents multiple uploaded files.

---

## diskStorage()

Used to:

1. Decide upload destination.
2. Decide filename generation.

---

## express.static()

Difference between:

```text
Saving Files
```

and

```text
Serving Files
```

A file saved on disk is not automatically accessible through the browser.

Static serving exposes those files through URLs.

---

# Future Improvements

## v1.1

* Custom File Type Validation
* Download API
* Delete Uploaded Files

---

## v1.2

* Memory Storage
* MIME Type Based Routing
* Better File Naming Strategy

---

## v1.3

* Cloudinary Integration
* AWS S3 Integration
* Google Cloud Storage Integration

---

## v2.0

Production Enhancements:

* Virus Scanning
* Image Compression
* Thumbnail Generation
* Signed URLs
* CDN Integration

---

# Testing Completed

Successfully Tested:

 Single Image Upload

 Multiple File Upload

 PDF Upload

 ZIP Upload

 Dynamic Folder Routing

 Static File Access

 Error Middleware

 Auto Folder Creation

---

# Final Result

A reusable Express + Multer file upload boilerplate capable of:

* Single Uploads
* Multiple Uploads
* Dynamic Categorization
* Static File Serving
* Error Handling

This template can be reused as the base upload module in future backend projects.

---

# Next Template

Template 4: Validation & Error Handling Template

Focus:

* Joi Validation
* AppError Class
* Global Error Architecture
* Validation Middleware
* Reusable Error Handling Patterns

Reason:

Validation and error handling will be reused across every backend template and future project.
