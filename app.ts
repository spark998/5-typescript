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
enum StatusCode {
	SUCCESS = 1,
	IN_PROCESS = 'p',
	FAILED = 'f'
}



const res = {
	message: 'Платёж успешен',
	statusCode: StatusCode.SUCCESS
};

function action(status: StatusCode) {

}

action(StatusCode.SUCCESS);
action(1);
//action('p');

/*enum Roles {
	ADMIN = 1,
	USER = 2;
}*/

/*function test(x: {ADMIN: number}) {

}
test(Roles);*/

const enum Roles {
	ADMIN = 1,
	USER = 2
}

const res2 = Roles.ADMIN;