const memory = {

save(key,value){

localStorage.setItem(
key,
JSON.stringify(value)
);

},


get(key){

let data =
localStorage.getItem(key);


return data
?
JSON.parse(data)
:
null;

},


clear(){

localStorage.clear();

}

};