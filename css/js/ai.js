function generateAI(message){


let text =
message.toLowerCase();



let command =
runCommand(message);



if(command){

return command;

}



if(text.includes("hello")
||
text.includes("hi")){

return "Hello! I am GamerXD AI. Ready to help.";

}



if(text.includes("minecraft")){

return "Minecraft is great! I can help with servers, plugins, and ideas.";

}



if(text.includes("code")
||
text.includes("coding")){

return "I can help you create websites, games, and projects.";

}



if(text.includes("game")){

return "Game development is awesome. We can build worlds, mechanics, and systems.";

}



if(text.includes("who are you")){

return "I am GamerXD AI v1.0, your offline assistant.";

}



return "I am still learning. Try asking about coding, games, or Minecraft.";

}