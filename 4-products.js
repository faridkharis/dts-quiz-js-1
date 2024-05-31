let products = [
	{id: 1, name: 'Product A', price: 1000, points: 10},
	{id: 2, name: 'Product B', price: 2000, points: 25},
	{id: 3, name: 'Product C', price: 5000, points: 50},
	{id: 4, name: 'Product D', price: 8000, points: 100},
];
let availablePoints = 150;
let purchasedProducts = [];
let totalSpent = 0;

function getMaxPointsProduct() {
    let maxPointsProduct = products.reduce((prev, current) => {
        return prev.points > current.points ? prev : current;
    });
    return maxPointsProduct;
}

function calculateRemainingPoints() {
    let maxPointsProduct = getMaxPointsProduct();
    let remainingPoints = availablePoints - maxPointsProduct.points;
    return remainingPoints;
}

function redeemProducts() {
    let sortedProducts = products.sort((a, b) => b.points - a.points);

    sortedProducts.forEach((product) => {
        if (availablePoints >= product.points) {
            purchasedProducts.push(product);
            totalSpent += product.points;
        } else {
            return false;
        }
        availablePoints -= product.points;
    });
    console.log("purchasedProducts:");
    console.log(purchasedProducts);
    console.log(`totalSpent: ${totalSpent}`);
}

// console.log(getMaxPointsProduct());
console.log(calculateRemainingPoints());
// redeemProducts();