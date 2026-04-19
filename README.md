# 🏨 LankaStay — Hotel & Apartment Booking Platform

A full-stack web application that allows users to browse, book, and manage hotel rooms and apartments. The platform supports guest reservations, property listings, and user authentication with role-based access.

---

## 👥 Group Members

| Name 
| --- 
| Altynbek Kenzhe 
| Murat Alikhan 
| Myktybek Aksungkar 

---

## 🧰 Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | Angular + CSS |
| Backend | Django + Django REST Framework |
| Database | PostgreSQL |
| Auth | JWT (SimpleJWT) |
| API Testing | Postman |

---

## 📁 Project Structure

```
Web_Project_week14/
├── README.md
└── Project/                 # Angular application
    ├── angular.json
    ├── package.json
    ├── public/
    │   └── favicon.ico
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── footer/
    │   │   │   ├── hotel-card/
    │   │   │   ├── navbar/
    │   │   │   └── search-bar/
    │   │   ├── pages/
    │   │   │   ├── auth/
    │   │   │   │   ├── login/
    │   │   │   │   ├── register-owner/
    │   │   │   │   └── register-user/
    │   │   │   ├── booking/
    │   │   │   │   ├── booking-info/
    │   │   │   │   ├── payment/
    │   │   │   │   └── payment-success/
    │   │   │   ├── dashboard/
    │   │   │   │   ├── admin/
    │   │   │   │   ├── owner/
    │   │   │   │   └── user/
    │   │   │   ├── home/
    │   │   │   └── hotel-details/
    │   │   ├── services/
    │   │   │   ├── auth.ts
    │   │   │   ├── booking.ts
    │   │   │   └── hotel.ts
    │   │   ├── app.config.ts
    │   │   ├── app.routes.ts
    │   │   └── app.ts
    │   ├── index.html
    │   ├── main.ts
    │   └── styles.css
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json
```

---

## 🚀 Getting Started

### Frontend

```
cd frontend
npm install
ng serve
```

### Backend

```
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

---

## 📌 Key Features

* Browse and filter available hotels and apartments
* Detailed property pages with descriptions and pricing
* Create, view, and cancel bookings
* JWT-based user authentication (login / logout)
* HTTP interceptor for attaching auth tokens
* Admin management for properties and reservations
* Full CRUD operations via REST API
* CORS configured for Angular dev server

---

## 📬 Postman Collection

A full Postman collection with all API requests and example responses is available in the `/postman` directory of this repository.
