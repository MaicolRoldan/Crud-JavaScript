export class CRUD{
	#tableName = null;//se crean propiedades privadas(solo se pueden editar desde la clasa) en la cual se guardaran el nombre de la tabla y los datos de ella,
    #data = null;//estas dos propiedades van a estar vacias inicialmente
	constructor(tableName = undefined){
 		this.#setTableName(tableName);
      	this.#setData();
  	}

	#setTableName(tableName){
		this.#tableNameValidate(tableName);
        this.#tableName = tableName;
	}
    
    #setData(){
    	let dataRepository = this.#get(this.#tableName);
        this.#data = dataRepository === null ? [] : dataRepository;
	}
    
    #tableNameValidate(tableName){
		if(tableName == undefined) throw new Error("Table name required");
	}

    #save(){
        let dataToSave = JSON.stringify(this.#data);
        sessionStorage.setItem(this.#tableName, dataToSave);
    }

    #get(key){
        let data = sessionStorage.getItem(key);
        return JSON.parse(data);
    }

    #existElementWithId(id) {
        return this.#data[id] === undefined ? false : true;
    }
    
    #checkThatElementExistsWithId(id){
        if (!this.#existElementWithId(id))
            throw new Error("Este elemnto no existe");
    }
    
    create(data){
        this.#data.push(data);
        this.#save();
        return this.#data.lenghth;
    }

	read(id){
        this.#checkThatElementExistsWithId(id);
        return this.#data[id];
    }

    readAll(){
        return this.#data;
    }

	update(id, data){
        this.#checkThatElementExistsWithId(id);
        this.#data[id] = data;
        this.#save();
        return true;
    }

	delete(id){
        this.#checkThatElementExistsWithId(id);
        this.#data.splice(id, 1);
        this.#save();
        return true;
    }
  
}