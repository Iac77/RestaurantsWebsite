const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "..", "data", "restaurants.json");


function getStoredRestaurants() {

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);
    
    return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
    fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

//need to specify which functions are exported and available
module.exports = {
    getStoredRestaurants: getStoredRestaurants,
    storeRestaurants: storeRestaurants
};