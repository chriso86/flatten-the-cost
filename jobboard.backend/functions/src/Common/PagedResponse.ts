export class PagedResponse<T> {
	public data: T;
	public pageNo: number;
	public pageSize: number;
	public get firstRowNo() {
		return ((this.pageNo - 1) * this.pageSize) + 1;
	}
	public get lastRowNo() {
		return this.pageNo * this.pageSize;
	}

	constructor(
		data: T,
		pageNo: number,
		pageSize: number
	) {
		this.data = data;
		this.pageNo = pageNo;
		this.pageSize = pageSize;
	}
}
