var islandPerimeter = function (grid) {
    var island = 0, neighbours = 0;
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                island++;
                if (i < grid.length - 1 && grid[i + 1][j] == 1)
                    neighbours++;
                if (j < grid[i].length - 1 && grid[i][j + 1] == 1)
                    neighbours++;
            }
        }
    }
    return island * 4 - neighbours * 2;
};
//# sourceMappingURL=463.js.map