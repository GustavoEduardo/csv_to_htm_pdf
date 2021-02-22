class Processor{

	static process(data){
		var d = data.split("\r\n");
		var rows = [];
	
		d.forEach(row =>{
			var arr = row.split(";")

			rows.push(arr)
		})

		return rows;

	}
}


module.exports = Processor;