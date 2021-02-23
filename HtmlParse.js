const ejs = require("ejs");

class HtmlParse{
	static async parse(table){
		return await ejs.renderFile("./table.ejs",{header: table.header, rows: table.rows})//retorna uma string
	}
}

module.exports = HtmlParse;