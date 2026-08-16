require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./backend/db');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from frontend folder
app.use(express.static('frontend'));

// ====== FARMERS CRUD OPERATIONS ======

// GET all farmers
app.get('/api/farmers', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [farmers] = await connection.query('SELECT * FROM farmers ORDER BY farmer_id DESC');
    connection.release();
    res.json(farmers);
  } catch (error) {
    console.error('Error fetching farmers:', error);
    res.status(500).json({ error: 'Failed to fetch farmers', details: error.message });
  }
});

// GET single farmer by ID
app.get('/api/farmers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();
    const [farmers] = await connection.query('SELECT * FROM farmers WHERE farmer_id = ?', [id]);
    connection.release();
    
    if (farmers.length === 0) {
      return res.status(404).json({ error: 'Farmer not found' });
    }
    res.json(farmers[0]);
  } catch (error) {
    console.error('Error fetching farmer:', error);
    res.status(500).json({ error: 'Failed to fetch farmer', details: error.message });
  }
});

// CREATE new farmer
app.post('/api/farmers', async (req, res) => {
  try {
    const { first_name, last_name, email, phone, address, city, state, postal_code, country, experience_years } = req.body;
    
    // Validation
    if (!first_name || !last_name) {
      return res.status(400).json({ error: 'First name and last name are required' });
    }
    
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO farmers (first_name, last_name, email, phone, address, city, state, postal_code, country, experience_years) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [first_name, last_name, email || null, phone || null, address || null, city || null, state || null, postal_code || null, country || null, experience_years || 0]
    );
    connection.release();
    
    res.status(201).json({
      success: true,
      message: 'Farmer created successfully',
      farmer_id: result.insertId
    });
  } catch (error) {
    console.error('Error creating farmer:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Failed to create farmer', details: error.message });
  }
});

// UPDATE farmer
app.put('/api/farmers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, email, phone, address, city, state, postal_code, country, experience_years } = req.body;
    
    // Validation
    if (!first_name || !last_name) {
      return res.status(400).json({ error: 'First name and last name are required' });
    }
    
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'UPDATE farmers SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?, city = ?, state = ?, postal_code = ?, country = ?, experience_years = ? WHERE farmer_id = ?',
      [first_name, last_name, email || null, phone || null, address || null, city || null, state || null, postal_code || null, country || null, experience_years || 0, id]
    );
    connection.release();
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Farmer not found' });
    }
    
    res.json({
      success: true,
      message: 'Farmer updated successfully'
    });
  } catch (error) {
    console.error('Error updating farmer:', error);
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Email already exists' });
    }
    res.status(500).json({ error: 'Failed to update farmer', details: error.message });
  }
});

// DELETE farmer
app.delete('/api/farmers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();
    const [result] = await connection.query('DELETE FROM farmers WHERE farmer_id = ?', [id]);
    connection.release();
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Farmer not found' });
    }
    
    res.json({
      success: true,
      message: 'Farmer deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting farmer:', error);
    res.status(500).json({ error: 'Failed to delete farmer', details: error.message });
  }
});

// ====== CROPS CRUD OPERATIONS ======

// GET all crops
app.get('/api/crops', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [crops] = await connection.query('SELECT * FROM crops ORDER BY crop_id DESC');
    connection.release();
    res.json(crops);
  } catch (error) {
    console.error('Error fetching crops:', error);
    res.status(500).json({ error: 'Failed to fetch crops', details: error.message });
  }
});

// CREATE new crop
app.post('/api/crops', async (req, res) => {
  try {
    const { crop_name, crop_type, description, planting_season, harvest_season, avg_yield_per_area, yield_unit } = req.body;
    
    if (!crop_name) {
      return res.status(400).json({ error: 'Crop name is required' });
    }
    
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO crops (crop_name, crop_type, description, planting_season, harvest_season, avg_yield_per_area, yield_unit) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [crop_name, crop_type || null, description || null, planting_season || null, harvest_season || null, avg_yield_per_area || null, yield_unit || null]
    );
    connection.release();
    
    res.status(201).json({
      success: true,
      message: 'Crop created successfully',
      crop_id: result.insertId
    });
  } catch (error) {
    console.error('Error creating crop:', error);
    res.status(500).json({ error: 'Failed to create crop', details: error.message });
  }
});

// UPDATE crop
app.put('/api/crops/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { crop_name, crop_type, description, planting_season, harvest_season, avg_yield_per_area, yield_unit } = req.body;
    
    if (!crop_name) {
      return res.status(400).json({ error: 'Crop name is required' });
    }
    
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'UPDATE crops SET crop_name = ?, crop_type = ?, description = ?, planting_season = ?, harvest_season = ?, avg_yield_per_area = ?, yield_unit = ? WHERE crop_id = ?',
      [crop_name, crop_type || null, description || null, planting_season || null, harvest_season || null, avg_yield_per_area || null, yield_unit || null, id]
    );
    connection.release();
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Crop not found' });
    }
    
    res.json({
      success: true,
      message: 'Crop updated successfully'
    });
  } catch (error) {
    console.error('Error updating crop:', error);
    res.status(500).json({ error: 'Failed to update crop', details: error.message });
  }
});

// DELETE crop
app.delete('/api/crops/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();
    const [result] = await connection.query('DELETE FROM crops WHERE crop_id = ?', [id]);
    connection.release();
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Crop not found' });
    }
    
    res.json({
      success: true,
      message: 'Crop deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting crop:', error);
    res.status(500).json({ error: 'Failed to delete crop', details: error.message });
  }
});

// ====== LAND CRUD OPERATIONS ======

// GET all land
app.get('/api/land', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const [lands] = await connection.query(`
      SELECT l.*, f.first_name, f.last_name 
      FROM land l 
      JOIN farmers f ON l.farmer_id = f.farmer_id
      ORDER BY l.land_id DESC
    `);
    connection.release();
    res.json(lands);
  } catch (error) {
    console.error('Error fetching land:', error);
    res.status(500).json({ error: 'Failed to fetch land', details: error.message });
  }
});

// CREATE new land
app.post('/api/land', async (req, res) => {
  try {
    const { farmer_id, land_name, area, area_unit, soil_type, location } = req.body;
    
    if (!farmer_id || !area) {
      return res.status(400).json({ error: 'Farmer ID and area are required' });
    }
    
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'INSERT INTO land (farmer_id, land_name, area, area_unit, soil_type, location) VALUES (?, ?, ?, ?, ?, ?)',
      [farmer_id, land_name || null, area, area_unit || 'hectare', soil_type || null, location || null]
    );
    connection.release();
    
    res.status(201).json({
      success: true,
      message: 'Land created successfully',
      land_id: result.insertId
    });
  } catch (error) {
    console.error('Error creating land:', error);
    res.status(500).json({ error: 'Failed to create land', details: error.message });
  }
});

// UPDATE land
app.put('/api/land/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { farmer_id, land_name, area, area_unit, soil_type, location } = req.body;
    
    if (!farmer_id || !area) {
      return res.status(400).json({ error: 'Farmer ID and area are required' });
    }
    
    const connection = await pool.getConnection();
    const [result] = await connection.query(
      'UPDATE land SET farmer_id = ?, land_name = ?, area = ?, area_unit = ?, soil_type = ?, location = ? WHERE land_id = ?',
      [farmer_id, land_name || null, area, area_unit || 'hectare', soil_type || null, location || null, id]
    );
    connection.release();
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Land not found' });
    }
    
    res.json({
      success: true,
      message: 'Land updated successfully'
    });
  } catch (error) {
    console.error('Error updating land:', error);
    res.status(500).json({ error: 'Failed to update land', details: error.message });
  }
});

// DELETE land
app.delete('/api/land/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await pool.getConnection();
    const [result] = await connection.query('DELETE FROM land WHERE land_id = ?', [id]);
    connection.release();
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Land not found' });
    }
    
    res.json({
      success: true,
      message: 'Land deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting land:', error);
    res.status(500).json({ error: 'Failed to delete land', details: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Agriculture Management System API running on http://localhost:${PORT}`);
  console.log('Frontend available at http://localhost:' + PORT);
});
