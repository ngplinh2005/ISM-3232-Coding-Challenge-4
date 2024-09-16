// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
];

// Task 2: Create a Function to Display Product Details

function displayProductDetails(product) {
    const stockStatus = product.quantity <= product.lowStockLevel ? "Low Stock" : "In Stock"
    const details = `Name: ${product.name}, Price: ${prodcut.price}, Quantity in stock: ${product.quantity}, Stock status: ${stockStatus}`
    return details
}

// Task 3: Create a Function to Update Product Stock After Sales

function updateStock(product, unitsSold) {
    product.quantity -= unitsSold
    if (product.quantity <= 0) {
        return `${product.name} is now out of stock.`
    }
    else if (product.quantity <= product.lowStockLevel) {
        return `${product.name} is now low stock.`
    }
    else {
        return `Product: ${product.name}. Current quantity: ${product.quantity}`
    }
}