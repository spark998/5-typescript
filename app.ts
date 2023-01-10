type User = {
	name: string,
	age: number,
	skills: string[],
	id: number
}

type Role = {
	name: string,
	id: number
}

type UserWithRole = {
	user: User,
	role: Role
}
const user: UserWithRole = {
	user: {
		name: 'Vanya',
		age: 20,
		skills: ['react','ts','js'],
		id: 1
	},
	role: {
		id: 1,
		name: 'developer'
	}
}


/*type User = {
	name: string,
	age: number,
	skills: string[]
}

type Role = {
	id: number;
}

type UserWithRole = User & Role

let user: UserWithRole = {
	name: 'adada',
	age: 22,
	skills: ['1', '2'],
	id: 1
}*/