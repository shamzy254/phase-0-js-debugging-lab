function calculateDiscountedPrice(quantity, pricePerItem) {
    let totalPrice = 0;

    // Fix: Start at i = 0 instead of i = 1
    for (let i = 0; i < quantity; i++) { 
        totalPrice += pricePerItem;
    }

    if (quantity >= 10) {
        totalPrice *= 0.9; // Apply 10% discount
    }

    return totalPrice;
}
