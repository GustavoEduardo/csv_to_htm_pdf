var pdf = require("html-pdf");

class PDFWriter{
	static WritePDF(filename, html){
		pdf.create(html,{}).toFile(filename,(err)=>{})//posso passar algumas opções no json e o callback é obrigatorio
	}
}

module.exports = PDFWriter;