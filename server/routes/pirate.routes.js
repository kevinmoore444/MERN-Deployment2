const PirateController = require('../controllers/pirate.controller')

module.exports = (app) => {
    // Test
    app.get('/api/test', PirateController.testApi)
    
    // Create One
    app.post("/api/pirates", PirateController.addPirate)

    // Display All
    app.get("/api/pirates", PirateController.allPirates)

    // Display One
    app.get("/api/pirate/:id", PirateController.onePirate)
    
    // Update One
    app.put("/api/pirate/:id", PirateController.updatePirate)

    // Delete One
    app.delete("/api/pirate/:id", PirateController.deletePirate)

}