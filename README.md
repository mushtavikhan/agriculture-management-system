🌾 Agriculture Management System

The "Agriculture Management System" is a web-based system designed to help small farmers manage their farming activities and important agricultural information in one place.

The main idea behind this project is to solve some common problems faced by farmers. For example, agricultural equipment can be expensive to buy, farming records are often difficult to maintain, finding suitable markets can be challenging, and farmers may not always have a clear idea about how much profit they are making.

This project mainly focuses on the database design and implementation of the Agriculture Management System. It includes the relational database structure, SQL scripts, ER diagram documentation, sample data, and different database queries.

---

📌 About the Project

The Agriculture Management System, is a database-based project developed as part of the "CSE 3104 Project" at "Ahsanullah University of Science and Technology".

The purpose of the system is to keep important agricultural information organized in a single database. Instead of maintaining different records separately, farmers can use the system to store and manage information related to their land, crops, equipment, fertilizers, weather, harvesting, sales, and markets.

The main areas covered by the system are:

* Equipment rental
* Farmer and land management
* Crop management
* Fertilizer usage
* Weather information
* Planting records
* Harvest management
* Agricultural sales
* Market information
* Profit calculation
* Report generation

The database is developed using **MySQL** as the relational database management system.

---

🌱 Purpose of the Project

The main purpose of the Agriculture Management System is to make agricultural information easier to manage and keep track of.

Small farmers often face different problems in their daily farming activities. Buying agricultural equipment can be costly, farming records may be kept manually or in different places, and it can be difficult to calculate the actual profit from a farming season. Farmers may also have problems finding suitable markets or keeping track of market prices.

This project tries to solve these problems by keeping the necessary information in one centralized system. By organizing the data properly, the system can make farming records easier to maintain and can also help farmers make better decisions.

---

🤝 Social Benefits

The Agriculture Management System can provide several practical benefits to farmers.

* Affordable access to agricultural equipment:** Farmers can rent equipment instead of having to buy expensive machines.
* Centralized farming records:** Important farming information can be stored in one place instead of depending on paper records or scattered files.
* Better farm management:** Information about land, crops, planting, fertilizers, and weather can be managed more easily.
* Better decision making:** Farmers can use the stored information to understand their farming activities and make better decisions.
* Improved market access:** Market and sales information can help farmers understand where and how their crops are being sold.
* Better understanding of profit:** Harvest and sales records can be used to understand the revenue and profit from farming activities.
* Time saving:** Keeping information in a database makes searching and updating records easier.
* Support for small farmers:** The system can be especially useful for farmers who have limited access to expensive equipment and proper record-management systems.

---

🎯 Project Goals

The main goals of the Agriculture Management System are:

* To provide farmers with affordable access to shared agricultural equipment.
* To keep important farming information in one centralized system.
* To improve access to market information and price visibility.
* To help farmers make better decisions using their stored data.

---

🎯 Project Objectives

The system is designed to support the following objectives:

* Allow users to search for agricultural equipment and request rentals.
* Keep track of land and crop information.
* Store weather information for individual pieces of land.
* Record planting, harvesting, and sales information.
* Calculate the profit of different farming seasons.
* Generate useful reports from the stored agricultural data.

---

⚙️ Main Functionalities

 🚜 Equipment Rental System

The equipment rental part of the system is used to manage agricultural equipment and its rental process.

It keeps information about:

* Equipment owners
* Agricultural equipment
* Farmers
* Rental requests
* Rentals

Through this part of the system, farmers can request equipment when they need it instead of having to purchase the equipment themselves. The database also keeps track of rental-related information.

---

  🌾 Farm and Crop Management

The farm and crop management section deals with the basic information related to farming.

It manages:

* Farmers
* Land
* Crops
* Planting records
* Fertilizers
* Fertilizer usage
* Weather information

This part helps keep track of which farmer owns or manages a particular piece of land, which crops are planted there, what fertilizers are used, and other information related to farming activities.

---

  🌦️ Weather Logging

Weather information is stored in relation to individual land records.

The system can store information such as:

* Date
* Temperature
* Rainfall
* Humidity
* Notes

Keeping weather records can help maintain a history of the weather conditions experienced by a particular piece of land.

---

  🌽 Harvest Management

The harvest section is used to store information about crops collected from planting activities.

The database records information such as:

* Harvest ID
* Planting ID
* Harvest date
* Quantity
* Quality
* Notes

This allows the system to connect a harvest with the specific planting record from which it came.

---

  💰 Sales and Market Management

The sales section connects harvested crops with their sales.

It manages information about:

* Sales
* Markets
* Sale dates
* Total sale amounts
* Market information
* Additional notes

The information stored in this section can later be used to calculate revenue and understand the profitability of different farming activities.

---

  📊 Profit Calculation and Reports

The system is also designed to support profit calculation and report generation.

The stored information about harvesting and sales can be used for:

* Seasonal profit calculation
* Revenue tracking
* Agricultural reports
* Data-based decision making

By combining information from different parts of the database, the system can give a better overall picture of a farmer's farming activities.

---

 🗄️ Database Design

The Agriculture Management System is designed as a **relational database using MySQL**.

The database design mainly focuses on keeping the data organized and avoiding unnecessary duplication.

Some of the important database concepts used in the design are:

* Primary keys
* Foreign keys
* Referential integrity
* One-to-many relationships
* Reduced data redundancy
* Data consistency
* Organized relational data
* Scalable database structure

The database structure is based on the ER model that was prepared for the project proposal.


---


🔗 Integrated ER Model

The database contains several different functional areas, but they are all connected to each other.

For example, a farmer can have land, and that land can have crops and planting records. The planting records can later be connected to harvest records. The harvested crops can then be connected to sales and markets.

Overall, the database connects the major activities of farming, starting from the farmer and land and continuing through crop planting, fertilizer usage, weather records, harvesting, sales, and markets. The equipment rental section is also connected to farmers so that they can access agricultural equipment when required.

The main purpose of connecting all these parts is to keep the agricultural information together and make it easier to manage, search, update, and use for future reports and profit calculations.
