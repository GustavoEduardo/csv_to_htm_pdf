const fs = require("fs");
const util = require("util");


class Writer{
	constructor(){
		this.writer = util.promisify(fs.writeFile);
	}


	async Writer(filename,data){
		try{
			await this.writer(filename,data);//se não existir arquivo com esse nome ele será criado
			return true;
		}catch(err){
			return false;
		}
	}

}

module.exports = Writer;