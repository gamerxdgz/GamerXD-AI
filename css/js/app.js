const chat =
document.getElementById("chat");


const input =
document.getElementById("input");


const send =
document.getElementById("send");


const clear =
document.getElementById("clear");



function addMessage(text,type){


let div =
document.createElement("div");


div.className =
"message " + type;


div.innerText =
text;


chat.appendChild(div);


chat.scrollTop =
chat.scrollHeight;


}



function sendMessage(){


let message =
input.value.trim();



if(!message)
return;



addMessage(
message,
"user"
);



input.value="";



setTimeout(()=>{


let reply =
generateAI(message);



addMessage(
reply,
"bot"
);



},500);


}



send.onclick =
sendMessage;



input.addEventListener(
"keydown",
(e)=>{


if(e.key==="Enter"){

sendMessage();

}


});



clear.onclick=()=>{

chat.innerHTML="";

};