"use strict";
const user = {
    login: 'fsfs@da',
    password: '1312'
};
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    return first * second;
}
multiply(5);
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
function test(param) {
    const t = param !== null && param !== void 0 ? param : multiply(5);
}
