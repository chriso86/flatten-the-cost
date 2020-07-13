export class Exception {
	public code: string;
	public name: string;
	public message: string;
	public stack?: string;
	public entity?: string;
	public method?: string;

	constructor(
		code: string = '',
		name: string = '',
		message: string = '',
		stack: string = '',
		entity: string = '',
		method: string = ''
	) {
		this.code = code;
		this.name = name;
		this.message = message;
		this.stack = stack;
		this.entity = entity;
		this.method = method;
	}
}
