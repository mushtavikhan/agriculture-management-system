// ====== MAIN APPLICATION ENTRY POINT ======

/**
 * Initialize application on DOM ready
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Agriculture Management System loaded');
    
    // Load initial data
    loadFarmers();
});

// Export global functions for onclick handlers
// (These are used in the HTML onclick attributes)
window.switchTab = switchTab;
window.addOrUpdateFarmer = addOrUpdateFarmer;
window.resetFarmerForm = resetFarmerForm;
window.editFarmer = editFarmer;
window.deleteFarmerConfirm = deleteFarmerConfirm;

window.addOrUpdateCrop = addOrUpdateCrop;
window.resetCropForm = resetCropForm;
window.editCrop = editCrop;
window.deleteCropConfirm = deleteCropConfirm;

window.addOrUpdateLand = addOrUpdateLand;
window.resetLandForm = resetLandForm;
window.editLand = editLand;
window.deleteLandConfirm = deleteLandConfirm;
