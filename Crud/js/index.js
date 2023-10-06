import { CRUD } from "./CRUD.js";

function app(){
	let nombre = new CRUD("ejemplo");
    nombre.create(["maicol"]);
    console.log(nombre.readAll());
    nombre.update("ANDRES");
    nombre.delete(0)
}
app();