"use strict";
var lbsToString = (weight) => {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) / 2.2;
};
console.log(lbsToString(30));
console.log(lbsToString('30kg'));
//# sourceMappingURL=index.js.map