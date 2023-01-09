"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
for (const skill of skills) {
    console.log(skill.toUpperCase());
}
const res = skills.filter((s) => s !== 'DevOps')
    .map(s => s + '! ')
    .reduce((a, b) => a + b);
console.log(res);
const res1 = skills.filter((s) => s !== 'DevOps')
    .map(s => { return 1; })
    .reduce((a, b) => a + b);
console.log(res1);
