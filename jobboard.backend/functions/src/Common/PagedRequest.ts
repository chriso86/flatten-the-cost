export class PagedRequest {
	public pageSize: number;
	public pageNo: number;
	public get noToSkip() {
		return (this.pageNo - 1) * this.pageSize;
	}

	constructor(request: any) {
		this.pageSize = request.pageSize;
		this.pageNo = request.pageNo;
	}
}
