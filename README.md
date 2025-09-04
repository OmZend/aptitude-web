# 🧠 Aptitude Preparation & Mock Test Website

A web app to practice aptitude questions, take mock tests, and track performance.
Built with **React.js**, **Spring Boot**, and **MySQL**.

---

## 🚀 Features

* User registration & login
* Categorized aptitude questions
* Mock tests with timer & instant results

---

## 🏗️ Tech Stack

* **Frontend:** React.js, Axios, Bootstrap/Tailwind
* **Backend:** Spring Boot, Hibernate, REST APIs
* **Database:** MySQL
* **Tools:** GitHub, Postman

---

## ⚡ Setup

1. **Clone repo**

   ```bash
   git clone https://github.com/your-username/aptitude-prep.git
   ```
2. **Database**

   ```sql
   CREATE DATABASE aptitude;
   ```

   Configure `application.properties` with your DB credentials.
3. **Run Backend**

   ```bash
   cd backend
   mvn spring-boot:run
   ```
4. **Run Frontend**

   ```bash
   cd frontend
   npm install
   npm start
   ```

---

## 📌 API Samples

* `POST /api/users/create` → Register user
* `GET /api/questions/getAll` → Fetch questions
* `POST /api/tests/create` → Create test

---
