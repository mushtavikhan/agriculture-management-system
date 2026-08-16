# 🌾 Agriculture Management System

The **Agriculture Management System** is a web-based, database-driven system designed to help small farmers manage their farming activities and agricultural information in one place.

The project focuses on common problems such as the high cost of agricultural equipment, difficulty maintaining farming records, limited market access, and difficulty calculating actual farming profit.

The database part of the project includes the **MySQL relational database, SQL scripts, ER diagram, sample data, and database queries**. It was developed as part of the **CSE 3104 Project** at **Ahsanullah University of Science and Technology**.

---

## 📌 About the Project

The system provides a centralized platform for storing and managing information related to:

* Farmers and land
* Crops and planting
* Agricultural equipment and rentals
* Fertilizers and fertilizer usage
* Weather information
* Harvests
* Sales and markets
* Profit calculation
* Reports

The database is implemented using **MySQL** and is designed to keep agricultural data organized, consistent, and easy to manage.

---

## 🌱 Purpose of the Project

The main purpose of this project is to make farming information easier to store, manage, and access.

Small farmers may have difficulty purchasing expensive equipment, maintaining proper records, finding suitable markets, and understanding their actual profit. This system keeps the important information in one centralized database so that farmers can manage their activities more efficiently and make better decisions.

---

## 🤝 Social Benefits

The system can provide several benefits to farmers:

* **Affordable equipment access:** Farmers can rent equipment instead of purchasing expensive machines.
* **Centralized records:** Farming information can be kept in one place instead of using paper or scattered records.
* **Better farm management:** Land, crops, planting, fertilizer, and weather information can be managed easily.
* **Better decision making:** Organized data can help farmers understand their farming activities.
* **Improved market access:** Market and sales information can help farmers understand where and how crops are sold.
* **Profit tracking:** Harvest and sales records can help calculate revenue and profit.
* **Time saving:** Searching and updating information becomes easier.
* **Support for small farmers:** The system provides a simple way to manage important farming information and resources.

---

## 🎯 Project Goals

The main goals are to:

* Provide affordable access to shared agricultural equipment.
* Keep farming information in one centralized system.
* Improve access to market information and price visibility.
* Help farmers make better decisions using stored data.

---

## 🎯 Project Objectives

The system aims to:

* Search for and request agricultural equipment rentals.
* Manage farmer, land, and crop information.
* Store weather information for individual lands.
* Record planting, harvesting, and sales information.
* Calculate profit for different farming seasons.
* Generate useful agricultural reports.

---

# ⚙️ Main Functionalities

## 🚜 Equipment Rental

The equipment rental section manages:

* Equipment owners
* Agricultural equipment
* Farmers
* Rental requests
* Rentals

Farmers can request agricultural equipment when needed instead of buying expensive equipment, while the database keeps the related rental information.

---

## 🌾 Farm and Crop Management

This section manages:

* Farmers
* Land
* Crops
* Planting records
* Fertilizers
* Fertilizer usage
* Weather information

It helps track which farmer manages a particular land, what crops are planted, and what fertilizers and other farming activities are involved.

---

## 🌦️ Weather Logging

Weather information is linked with individual land records.

The system stores:

* Date
* Temperature
* Rainfall
* Humidity
* Notes

This provides a history of weather conditions for the related land.

---

## 🌽 Harvest Management

The harvest section stores information about crops collected from planting activities, including:

* Harvest ID
* Planting ID
* Harvest date
* Quantity
* Quality
* Notes

This connects each harvest with its related planting record.

---

## 💰 Sales and Market Management

The sales section connects harvested crops with their sales and markets.

It manages:

* Sales
* Markets
* Sale dates
* Total sale amounts
* Market information
* Additional notes

This information can be used to track revenue and calculate farming profitability.

---

## 📊 Profit Calculation and Reports

The system can combine harvest and sales information to support:

* Seasonal profit calculation
* Revenue tracking
* Agricultural reports
* Data-based decision making

This gives farmers a clearer idea of their overall farming performance.

---

# 🗄️ Database Design

The system is designed as a **relational database using MySQL**.

The database focuses on:

* Primary keys
* Foreign keys
* Referential integrity
* One-to-many relationships
* Reduced data redundancy
* Data consistency
* Organized relational data
* Scalable database structure

The database design is based on the **ER model prepared for the project proposal**.

---

# 🔗 Integrated ER Model

All the functional areas are connected parts of **one Agriculture Management System database**, not separate databases.

The system connects the main farming activities, starting from **farmers and land** and continuing through **crops, planting, fertilizers, weather, harvesting, sales, and markets**. Equipment rental is also connected to farmers.

The main purpose of this integrated design is to keep agricultural information together and make it easier to **store, manage, search, update, generate reports, and calculate farming profit**.
