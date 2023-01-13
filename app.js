"use strict";
function logId(id) {
    console.log(id);
}
const a = logId(1);
const f1 = () => {
};
const f2 = () => {
    return true;
};
const b = f2();
const skills = ['Dev', 'DevOps'];
const user = {
    s: ['s']
};
skills.forEach((skill) => user.s.push(skill));
