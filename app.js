"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Антон',
    surname: 'Ларин',
    city: 'Moscow',
    age: 33,
    skills: {
        dev: true,
        devops: true
    }
};
console.log(getFullName(user));
