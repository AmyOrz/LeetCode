var maxProfit = function (prices) {
    var total = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i])
            total += prices[i + 1] - prices[i];
    }
    return total;
};
//# sourceMappingURL=122.js.map