const Reader = require("./Reader");
const Processor = require("./Processor")
const Table = require("./Table");
const HtmlParse = require("./HtmlParse")
const Writer = require("./Writer")
const PDFWriter = require("./PDFWriter")

const leitor = new Reader();
const escritor = new Writer();

async function main(){

	var dados = await leitor.read("./funcionarios.csv")//read não é static, por isso preciso ser chamado através de leitor

	var dadosProcessados = Processor.process(dados)//process é static por isso posso chamar direto sem um objeto

	const usuarios = new Table(dadosProcessados); //usuarios.rows.push(["João","65","Analista","Porto Alegre"]) Adicionando uma linha a tabela. Campos virtuais!

	var html = await HtmlParse.parse(usuarios);

	escritor.writer(Date.now()+".html",html);//nome aleatório com a data atual
	PDFWriter.WritePDF(Date.now()+".pdf",html)

}


main()
 