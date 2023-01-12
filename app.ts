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

/*function get(): IResponseSuccess | IResponseFailed {
	
}*/
