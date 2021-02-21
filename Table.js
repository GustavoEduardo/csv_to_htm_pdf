class Table{
	constructor(arr){
		this.header = arr[0];
		arr.shift()//remove a primeira lilha do array
		this.rows = arr
	}

	//get transforma a função em uma variave.(mais ou menos isso!)
	get rowCount(){
		return this.rows.length;
	}

	get columnCount(){
		return this.header.length;
	}
}

module.exports = Table;