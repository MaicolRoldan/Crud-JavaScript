import { CRUD } from "./CRUD.js";

function app(){
	let nombre = new CRUD("ejemplo");
    nombre.create(["maicol", "andres", "roldan"]);

    let crud2 = new CRUD("ejemplo");
    console.log(nombre.readAll());
}
app();