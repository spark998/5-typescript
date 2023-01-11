interface User {
	name: string,
	age: number,
	skills: string[],

	log: (id:number) => string;
}

interface UserWithPole extends User {
	roleId: number
}

let user: UserWithPole = {
	name: 'Vanya',
	age: 20,
	skills: ['react','ts','js'],
	roleId: 1,
	log(id) {
		return '';
	}
};
interface UserDic {
	[index: number]: User
}