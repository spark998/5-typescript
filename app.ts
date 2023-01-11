interface User {
	login: string,
	password?: string
}

const user: User = {
	login: 'fsfs@da',
	password: '1312'
}

function multiply(first: number, second?: number): number {
	if (!second) {
		return first * first;
	}
	return first * second;
}
multiply(5);

interface User1 {
	login: string,
	password?: {
		type: 'primory' | 'secondary'
	}
}
function testPass(user: User1) {
	const t = user.password?.type;
}

function test(param?: string) {
	const t = param ?? multiply(5);
}