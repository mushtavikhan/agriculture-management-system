// API Base URL
const API_URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port || '3002'}/api`;

// ====== FARMERS API CALLS ======

async function fetchFarmers() {
    try {
        const response = await fetch(`${API_URL}/farmers`);
        if (!response.ok) throw new Error('Failed to fetch farmers');
        return await response.json();
    } catch (error) {
        console.error('Error fetching farmers:', error);
        throw error;
    }
}

async function fetchFarmer(farmerId) {
    try {
        const response = await fetch(`${API_URL}/farmers/${farmerId}`);
        if (!response.ok) throw new Error('Farmer not found');
        return await response.json();
    } catch (error) {
        console.error('Error fetching farmer:', error);
        throw error;
    }
}

async function createFarmer(farmerData) {
    try {
        const response = await fetch(`${API_URL}/farmers`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(farmerData)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to create farmer');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating farmer:', error);
        throw error;
    }
}

async function updateFarmer(farmerId, farmerData) {
    try {
        const response = await fetch(`${API_URL}/farmers/${farmerId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(farmerData)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to update farmer');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating farmer:', error);
        throw error;
    }
}

async function deleteFarmer(farmerId) {
    try {
        const response = await fetch(`${API_URL}/farmers/${farmerId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to delete farmer');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting farmer:', error);
        throw error;
    }
}

// ====== CROPS API CALLS ======

async function fetchCrops() {
    try {
        const response = await fetch(`${API_URL}/crops`);
        if (!response.ok) throw new Error('Failed to fetch crops');
        return await response.json();
    } catch (error) {
        console.error('Error fetching crops:', error);
        throw error;
    }
}

async function fetchCrop(cropId) {
    try {
        const response = await fetch(`${API_URL}/crops/${cropId}`);
        if (!response.ok) throw new Error('Crop not found');
        return await response.json();
    } catch (error) {
        console.error('Error fetching crop:', error);
        throw error;
    }
}

async function createCrop(cropData) {
    try {
        const response = await fetch(`${API_URL}/crops`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cropData)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to create crop');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating crop:', error);
        throw error;
    }
}

async function updateCrop(cropId, cropData) {
    try {
        const response = await fetch(`${API_URL}/crops/${cropId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cropData)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to update crop');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating crop:', error);
        throw error;
    }
}

async function deleteCrop(cropId) {
    try {
        const response = await fetch(`${API_URL}/crops/${cropId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to delete crop');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting crop:', error);
        throw error;
    }
}

// ====== LAND API CALLS ======

async function fetchLand() {
    try {
        const response = await fetch(`${API_URL}/land`);
        if (!response.ok) throw new Error('Failed to fetch land');
        return await response.json();
    } catch (error) {
        console.error('Error fetching land:', error);
        throw error;
    }
}

async function createLand(landData) {
    try {
        const response = await fetch(`${API_URL}/land`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(landData)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to create land');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating land:', error);
        throw error;
    }
}

async function updateLand(landId, landData) {
    try {
        const response = await fetch(`${API_URL}/land/${landId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(landData)
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to update land');
        }
        return await response.json();
    } catch (error) {
        console.error('Error updating land:', error);
        throw error;
    }
}

async function deleteLand(landId) {
    try {
        const response = await fetch(`${API_URL}/land/${landId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error || 'Failed to delete land');
        }
        return await response.json();
    } catch (error) {
        console.error('Error deleting land:', error);
        throw error;
    }
}
