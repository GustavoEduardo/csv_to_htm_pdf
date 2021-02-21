const Reader = require("./Reader");
const Processor = require("./Processor")
const Table = require("./Table");

const leitor = new Reader();

async function main(){

	var dados = await leitor.read("./funcionarios.csv")//read é async e não static, por isso preciso ser chamado através de leitor

	var dadosProcessados = Processor.process(dados)//process é static por isso posso chamar direto sem um objeto

	const usuarios = new Table(dadosProcessados);

	//usuarios.rows.push(["João","65","Analista","Porto Alegre"]) Adicionando uma linha a tabela. Campos virtuais!

	console.log("Linhas: "+usuarios.rowCount)
	console.log("Colunas: "+usuarios.columnCount)




}


main()
 