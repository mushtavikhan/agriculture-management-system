-- Agriculture Management System Database Schema

CREATE DATABASE IF NOT EXISTS agriculture_db;
USE agriculture_db;

-- Farmers Table
CREATE TABLE IF NOT EXISTS farmers (
    farmer_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    address VARCHAR(255),
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(10),
    country VARCHAR(100),
    experience_years INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Land Table
CREATE TABLE IF NOT EXISTS land (
    land_id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_id INT NOT NULL,
    land_name VARCHAR(100),
    area DECIMAL(10, 2),
    area_unit VARCHAR(20),
    soil_type VARCHAR(50),
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (farmer_id) REFERENCES farmers(farmer_id) ON DELETE CASCADE
);

-- Crops Table
CREATE TABLE IF NOT EXISTS crops (
    crop_id INT AUTO_INCREMENT PRIMARY KEY,
    crop_name VARCHAR(100) NOT NULL,
    crop_type VARCHAR(50),
    description TEXT,
    planting_season VARCHAR(50),
    harvest_season VARCHAR(50),
    avg_yield_per_area DECIMAL(10, 2),
    yield_unit VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Planting Records Table
CREATE TABLE IF NOT EXISTS planting_records (
    planting_id INT AUTO_INCREMENT PRIMARY KEY,
    land_id INT NOT NULL,
    crop_id INT NOT NULL,
    planting_date DATE NOT NULL,
    expected_harvest_date DATE,
    quantity_planted DECIMAL(10, 2),
    quantity_unit VARCHAR(20),
    fertilizer_used VARCHAR(100),
    fertilizer_amount DECIMAL(10, 2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (land_id) REFERENCES land(land_id) ON DELETE CASCADE,
    FOREIGN KEY (crop_id) REFERENCES crops(crop_id)
);

-- Harvest Table
CREATE TABLE IF NOT EXISTS harvest (
    harvest_id INT AUTO_INCREMENT PRIMARY KEY,
    planting_id INT NOT NULL,
    harvest_date DATE NOT NULL,
    quantity_harvested DECIMAL(10, 2),
    quantity_unit VARCHAR(20),
    quality VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (planting_id) REFERENCES planting_records(planting_id) ON DELETE CASCADE
);

-- Markets Table
CREATE TABLE IF NOT EXISTS markets (
    market_id INT AUTO_INCREMENT PRIMARY KEY,
    market_name VARCHAR(100) NOT NULL,
    location VARCHAR(255),
    contact_person VARCHAR(100),
    phone VARCHAR(15),
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sales Table
CREATE TABLE IF NOT EXISTS sales (
    sale_id INT AUTO_INCREMENT PRIMARY KEY,
    harvest_id INT NOT NULL,
    market_id INT,
    sale_date DATE NOT NULL,
    quantity_sold DECIMAL(10, 2),
    quantity_unit VARCHAR(20),
    price_per_unit DECIMAL(10, 2),
    total_sale_amount DECIMAL(12, 2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (harvest_id) REFERENCES harvest(harvest_id) ON DELETE CASCADE,
    FOREIGN KEY (market_id) REFERENCES markets(market_id)
);

-- Weather Information Table
CREATE TABLE IF NOT EXISTS weather (
    weather_id INT AUTO_INCREMENT PRIMARY KEY,
    land_id INT NOT NULL,
    weather_date DATE NOT NULL,
    temperature_min DECIMAL(5, 2),
    temperature_max DECIMAL(5, 2),
    rainfall DECIMAL(10, 2),
    humidity DECIMAL(5, 2),
    wind_speed DECIMAL(5, 2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (land_id) REFERENCES land(land_id) ON DELETE CASCADE
);

-- Equipment Table
CREATE TABLE IF NOT EXISTS equipment (
    equipment_id INT AUTO_INCREMENT PRIMARY KEY,
    equipment_name VARCHAR(100) NOT NULL,
    equipment_type VARCHAR(50),
    owner_name VARCHAR(100),
    rental_price_per_day DECIMAL(10, 2),
    description TEXT,
    availability BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Equipment Rental Table
CREATE TABLE IF NOT EXISTS equipment_rental (
    rental_id INT AUTO_INCREMENT PRIMARY KEY,
    farmer_id INT NOT NULL,
    equipment_id INT NOT NULL,
    rental_start_date DATE NOT NULL,
    rental_end_date DATE NOT NULL,
    total_cost DECIMAL(10, 2),
    status VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (farmer_id) REFERENCES farmers(farmer_id) ON DELETE CASCADE,
    FOREIGN KEY (equipment_id) REFERENCES equipment(equipment_id)
);

-- Sample Data for Farmers
INSERT INTO farmers (first_name, last_name, email, phone, address, city, state, postal_code, country, experience_years) VALUES
('Mohammad', 'Khan', 'khan.mohammad@email.com', '01712345678', '123 Farm Lane', 'Dhaka', 'Dhaka', '1206', 'Bangladesh', 10),
('Fatima', 'Ahmed', 'fatima.ahmed@email.com', '01812345679', '456 Village Road', 'Chittagong', 'Chittagong', '4100', 'Bangladesh', 8),
('Rajib', 'Das', 'rajib.das@email.com', '01912345680', '789 Green Field', 'Sylhet', 'Sylhet', '3100', 'Bangladesh', 5);

-- Sample Data for Crops
INSERT INTO crops (crop_name, crop_type, description, planting_season, harvest_season, avg_yield_per_area, yield_unit) VALUES
('Rice', 'Cereal', 'Staple food crop', 'June-July', 'November-December', 50, 'kg/hectare'),
('Wheat', 'Cereal', 'Winter crop', 'October-November', 'March-April', 40, 'kg/hectare'),
('Tomato', 'Vegetable', 'High demand vegetable', 'September-October', 'December-January', 30, 'tons/hectare'),
('Potato', 'Vegetable', 'Staple vegetable crop', 'August-September', 'November-December', 25, 'tons/hectare');

-- Sample Data for Land
INSERT INTO land (farmer_id, land_name, area, area_unit, soil_type, location) VALUES
(1, 'North Field', 5, 'hectare', 'Loamy', 'Dhaka District'),
(1, 'South Field', 3, 'hectare', 'Clay', 'Dhaka District'),
(2, 'Coastal Land', 4, 'hectare', 'Sandy Loam', 'Chittagong District'),
(3, 'Hillside Field', 2, 'hectare', 'Silty Loam', 'Sylhet District');
