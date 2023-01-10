"use strict";
/*enum StatusCode {
    SUCCESS,
    IN_PROCESS,
    FAILED
}*/
/*Числовой enum
enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS = 2,
    FAILED = 4
}*/
/*Cтроковый enum
enum StatusCode {
    SUCCESS = 's',
    IN_PROCESS = 'p',
    FAILED = 'f'
}*/
//Гетерогенные enum
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROCESS"] = "p";
    StatusCode["FAILED"] = "f";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Платёж успешен',
    statusCode: StatusCode.SUCCESS
};
function action(status) {
}
action(StatusCode.SUCCESS);
action(1);
const res2 = 1 /* Roles.ADMIN */;
