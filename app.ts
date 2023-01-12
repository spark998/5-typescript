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

interface IPayment {
	sum: number,
	from: number,
	to: number
}
interface IPaymentRequest extends IPayment {}

enum PaymentStatus {
	Succes = 'success',
	Failed = 'failed'
}

interface IDataSuccess extends IPayment {
	databaseId: number
}

interface IDataFailed {
	errorMessage: string,
	errorCode: number
}

interface IResponseSuccess {
	status: PaymentStatus.Succes,
	data: IDataSuccess	
	
}

interface IResponseFailed {
	status: PaymentStatus.Failed,
	data: IDataFailed
}

function get(): IResponseSuccess | IResponseFailed {
	
}
