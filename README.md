
# TaskLink: Hyperlocal Digital Marketplace

TaskLink is a mobile-responsive web application designed to connect community residents who need assistance with daily chores to individuals seeking flexible, short-term earning opportunities within localized geofenced areas.

**College of Information Technology and Computer Learning Sciences**
*Integrated System Development Project*

## 🛠️ Tech Stack
* **Frontend:** React.js, Tailwind CSS, Vite
* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL

---

## ⚙️ Local Setup Instructions

To run this prototype application locally, ensure you have **Node.js** and **PostgreSQL** installed on your machine.

### 1. Database Configuration (PostgreSQL)
1. Open pgAdmin or SQL Shell (`psql`).
2. Create a new database named `tasklink`:
   ```sql
   CREATE DATABASE tasklink;

```

3. Connect to the database and create the `Tasks` table:
```sql
CREATE TABLE "Tasks" (
    id SERIAL PRIMARY KEY,
    poster_id INTEGER NOT NULL,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) DEFAULT 'Open',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```



*(Note: Ensure your PostgreSQL credentials in `tasklink-backend/config/database.js` match your local setup).*

### 2. Backend Setup

1. Open a terminal and navigate to the backend directory:
```bash
cd tasklink-backend

```


2. Install the required dependencies:
```bash
npm install

```


3. Start the Node.js server:
```bash
node server.js

```


*(The server will run on `http://localhost:5000`)*

### 3. Frontend Setup

1. Open a new terminal tab and navigate to the frontend directory:
```bash
cd tasklink-frontend

```


2. Install the React dependencies:
```bash
npm install

```


3. Start the Vite development server:
```bash
npm run dev

```


*(The application will be accessible at `http://localhost:5173`)*

---

## 📱 Core Features

* **Post a Local Task:** Requesters can post localized chores with specific budgets.
* **Browse Tasks:** A dynamic feed displays only tasks available within the geofenced area.
* **Real-Time Match/Chat:** Users can communicate securely to coordinate details.

