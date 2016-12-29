var findContentChildren = function (g, s) {
    // if sort in ascending order,  for loop needs to be changed as well
    var compare = function (a, b) { return b - a; };
    g.sort(compare);
    s.sort(compare);
    var j = 0;
    for (var i = 0; i < g.length; i++) {
        if (g[i] <= s[j])
            j++;
    }
    return j;
};
//# sourceMappingURL=455.js.map