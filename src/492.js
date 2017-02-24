var constructRectangle = function (area) {
    if (area < 0)
        return;
    var w = Math.sqrt(area);
    while (area % w != 0)
        w--;
    return [area / w, w];
};
//# sourceMappingURL=492.js.map