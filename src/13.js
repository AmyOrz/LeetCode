var romanToInt = function(s) {
    var len = s.length;
    var hash = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    // var lastChar = hash[s.charAt(0)];
    var lastChar = hash[s[0]];
    var r = 0;

    for (var i = 0; i< len; i++) {
        var currentChar = hash[s.charAt(i)];
        if (lastChar < currentChar) {
            r  = r - (lastChar * 2) + currentChar;
        } else {
            r += currentChar;
        }
        lastChar = currentChar;
    }
    return r;
};
console.log(romanToInt("XM"));
