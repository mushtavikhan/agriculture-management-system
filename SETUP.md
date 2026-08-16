# 🌾 Agriculture Management System - Setup Guide

A simple web-based Agriculture Management System with CRUD operations for MySQL database. This guide will help you set up and run the application locally.

## ✅ Prerequisites

Before you start, make sure you have the following installed on your machine:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MySQL Server** (v5.7 or higher) - [Download here](https://www.mysql.com/downloads/)
- **Git** (optional) - For cloning the repository

---

## 🚀 Quick Start Setup

### Step 1: Create MySQL Database

1. **Open MySQL Command Line** or **MySQL Workbench**
2. Copy and run all the SQL commands from `database/schema.sql`

**Option A: Using MySQL Command Line**
```bash
mysql -u root -p
# Enter your MySQL password when prompted
# Then copy-paste all content from database/schema.sql
# Or run:
mysql -u root -p < database/schema.sql
```

**Option B: Using MySQL Workbench**
- Open MySQL Workbench
- Connect to your MySQL server
- File → Open SQL Script → Select `database/schema.sql`
- Execute (Ctrl+Shift+Enter)

---

### Step 2: Configure Database Connection

Edit the `.env` file in the project root:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=             # Leave empty if no password, otherwise enter your MySQL password
DB_NAME=agriculture_db
DB_PORT=3306

# Server Configuration
PORT=3001
NODE_ENV=development
```

**Important:** Make sure:
- `DB_HOST` matches your MySQL host (usually `localhost`)
- `DB_USER` matches your MySQL username (default is `root`)
- `DB_PASSWORD` matches your MySQL password
- `DB_NAME` is `agriculture_db` (created by the schema)

---

### Step 3: Install Dependencies

Navigate to the project directory and install Node.js dependencies:

```bash
cd agriculture-management-system
npm install
```

This will install:
- **express** - Web server framework
- **mysql2** - MySQL database driver
- **cors** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management
- **body-parser** - JSON request parsing
- **nodemon** - Auto-restart during development

---

### Step 4: Start the Server

Run the following command:

```bash
npm start
```

Or for development mode with auto-reload:

```bash
npm run dev
```

You should see:
```
Agriculture Management System API running on http://localhost:3001
Frontend available at http://localhost:3001
```

---

### Step 5: Open in Browser

Open your web browser and navigate to:

```
http://localhost:3001
```

---

## 📋 Features & CRUD Operations

The application includes full CRUD (Create, Read, Update, Delete) operations for:

### 1. **👨‍🌾 Farmers Management**
- **Create**: Add new farmer records with personal information
- **Read**: View all farmers in a table format
- **Update**: Edit farmer details
- **Delete**: Remove farmer records

**Fields:**
- First Name & Last Name
- Email, Phone, Address
- City, State, Postal Code, Country
- Experience (years)

### 2. **🌽 Crops Management**
- **Create**: Add new crop types
- **Read**: View all available crops
- **Update**: Edit crop information
- **Delete**: Remove crop records

**Fields:**
- Crop Name, Crop Type
- Description
- Planting & Harvest Seasons
- Average Yield & Yield Unit

### 3. **🏞️ Land Management**
- **Create**: Add land associated with farmers
- **Read**: View all land records
- **Update**: Edit land details
- **Delete**: Remove land records

**Fields:**
- Farmer (linked)
- Land Name, Area, Area Unit
- Soil Type
- Location

---

## 🗄️ Database Schema

The database includes the following tables:

```
farmers
├── farmer_id (Primary Key)
├── first_name, last_name
├── email, phone
├── address, city, state, postal_code, country
├── experience_years
└── timestamps

crops
├── crop_id (Primary Key)
├── crop_name
├── crop_type
├── planting_season, harvest_season
├── avg_yield_per_area, yield_unit
└── timestamps

land
├── land_id (Primary Key)
├── farmer_id (Foreign Key → farmers)
├── land_name, area, area_unit
├── soil_type, location
└── timestamps

planting_records
├── planting_id (Primary Key)
├── land_id, crop_id (Foreign Keys)
├── planting_date, expected_harvest_date
└── timestamps

harvest, weather, equipment, equipment_rental, markets, sales
[Additional tables for comprehensive management]
```

---

## 🔌 API Endpoints

### Farmers Endpoints
```
GET    /api/farmers           - Get all farmers
GET    /api/farmers/:id       - Get specific farmer
POST   /api/farmers           - Create new farmer
PUT    /api/farmers/:id       - Update farmer
DELETE /api/farmers/:id       - Delete farmer
```

### Crops Endpoints
```
GET    /api/crops             - Get all crops
POST   /api/crops             - Create new crop
PUT    /api/crops/:id         - Update crop
DELETE /api/crops/:id         - Delete crop
```

### Land Endpoints
```
GET    /api/land              - Get all land
POST   /api/land              - Create new land
PUT    /api/land/:id          - Update land
DELETE /api/land/:id          - Delete land
```

---

## 🧪 Testing the CRUD Operations

### Using the Web Interface (Recommended)
1. Navigate to `http://localhost:3001`
2. Use the tab navigation to switch between Farmers, Crops, and Land
3. Fill in the form fields and click "Save" to add records
4. View records in the table below
5. Click "Edit" to modify existing records
6. Click "Delete" to remove records

### Using cURL (Command Line)

**Create a Farmer:**
```bash
curl -X POST http://localhost:3001/api/farmers \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "experience_years": 5
  }'
```

**Get All Farmers:**
```bash
curl http://localhost:3001/api/farmers
```

**Update a Farmer:**
```bash
curl -X PUT http://localhost:3001/api/farmers/1 \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Jane",
    "last_name": "Doe",
    "phone": "0987654321"
  }'
```

**Delete a Farmer:**
```bash
curl -X DELETE http://localhost:3001/api/farmers/1
```

---

## 📁 Project Structure

```
agriculture-management-system/
├── backend/
│   └── db.js                 # Database connection module
├── frontend/
│   └── index.html            # Main web interface (HTML/CSS/JS)
├── database/
│   └── schema.sql            # MySQL database schema
├── server.js                 # Express server with API routes
├── package.json              # Node.js dependencies
├── .env                      # Environment configuration
└── README.md                 # Project documentation
```

---

## 🐛 Troubleshooting

### Issue: "Error: connect ECONNREFUSED"
**Solution:** 
- Check if MySQL is running: `mysql -u root -p`
- Verify `.env` file has correct database credentials
- Make sure port 3306 is not blocked

### Issue: "Error: Access denied for user 'root'@'localhost'"
**Solution:**
- Update `.env` with correct MySQL username and password
- If you don't have a password: leave `DB_PASSWORD=` empty
- If you forgot your password, reset it in MySQL

### Issue: "database does not exist"
**Solution:**
- Run the SQL schema file: `mysql -u root -p < database/schema.sql`
- Or manually execute the CREATE DATABASE commands

### Issue: "Cannot GET /"
**Solution:**
- Make sure the server is running: `npm start`
- Check if the frontend file exists at `frontend/index.html`
- Try accessing `http://localhost:3001` instead of just `localhost`

### Issue: CORS Errors
**Solution:**
- The server includes CORS middleware by default
- Make sure you're accessing from `http://localhost:3001` (not `127.0.0.1`)
- Clear browser cache and cookies

---

## 📚 Sample Data

The database schema includes sample data for:
- 3 Farmers (Mohammad Khan, Fatima Ahmed, Rajib Das)
- 4 Crops (Rice, Wheat, Tomato, Potato)
- 4 Land records (linked to farmers)

This data is automatically inserted when you run the schema.sql file.

---

## 🚀 Next Steps

After setup, you can:

1. **Add more CRUD operations** for other tables (harvest, weather, equipment, etc.)
2. **Create an admin dashboard** for statistics and analytics
3. **Add authentication** for user login/registration
4. **Implement data validation** on both frontend and backend
5. **Add search and filter** functionality
6. **Create reports** for profit calculation
7. **Deploy to cloud** (Heroku, AWS, etc.)

---

## 📞 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Ensure MySQL is running
4. Check browser console for errors (F12)
5. Check server console for error messages

---

## 📝 License

This project is part of the Agriculture Management System from Ahsanullah University of Science and Technology.

---

## 🎯 Quick Command Reference

```bash
# Install dependencies
npm install

# Start server
npm start

# Development mode (with auto-reload)
npm run dev

# Database setup (from project directory)
mysql -u root -p < database/schema.sql
```

Happy farming! 🌾
