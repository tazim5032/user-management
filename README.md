# AuthMaster

**AuthMaster** is a user management web application with registration, login, and user management features. It uses **React** for the frontend, **Express** and **Node.js** for the backend, and **MongoDB** for data storage. **JWT** is used for authentication, and the application allows users to block, unblock, and delete themselves or others.

## Live Demo
[AuthMaster - Live Link](https://auth-master.netlify.app/)

## Server-Side Repository
[Server-Side Code - GitHub](https://github.com/tazim5032/user-management-server)

---

## Features
- **User Registration**: Users can register with any password (even a single character).
- **User Login**: Users authenticate using JWT after logging in.
- **User Management Panel**: Only authenticated users have access to the admin panel, which displays a list of users.
- **Table Actions**:
  - Block users (blocked users cannot log in).
  - Unblock users.
  - Delete users (deleted users can re-register).
- **Status Handling**: The status column shows whether a user is active or blocked.
- **Security**: Blocked users are redirected to the login page if they attempt to access the admin panel.

## Technologies Used
- **Frontend**: React
- **Backend**: Express, Node.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **CSS Framework**: Tailwind

## Prerequisites
- **Node.js**
- **MongoDB**
- **npm** or **yarn**

---

## Setup Instructions

### 1. Clone the Repositories

#### Frontend
```bash
git clone https://github.com/tazim5032/user-management
cd user-management
```

#### Backend
```bash
git clone https://github.com/tazim5032/user-management-server
cd user-management-server
```

---

### 2. Install Dependencies

#### Backend
```bash
npm install
```

#### Frontend
```bash
npm install
```

---

### 3. Environment Setup

#### Backend
Create a `.env` file in the **server-side** directory and set the following environment variables:

```env
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
PORT=5000
```

#### Frontend
Create a `.env` file in the **client-side** directory with the following content:

```env
REACT_APP_BACKEND_URL=http://localhost:5000
```

---

### 4. Run the Application

#### Backend
```bash
cd user-management-server
npm run server
```

#### Frontend
```bash
cd user-management-client
npm start
```

---

## Unique Index
The backend creates a **unique index** for the `email` field to ensure that no duplicate registrations occur in MongoDB:
```javascript
userSchema.index({ email: 1 }, { unique: true });
```

---

## User Management Panel

- The panel contains the following columns:
  - **ID**
  - **Name**
  - **Email**
  - **Last Login Time**
  - **Registration Time**
  - **Status** (Active/Blocked)
- The **leftmost column** contains checkboxes for selecting multiple users, and there’s a checkbox in the header to select or deselect all users at once.
- Actions available:
  - **Block**: Red button with text.
  - **Unblock**: Button with an icon.
  - **Delete**: Button with an icon.

---

## License
This project is licensed under the MIT License.
