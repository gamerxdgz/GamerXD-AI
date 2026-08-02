function runCommand(message){


if(!message.startsWith("/"))
return null;



let command =
message.toLowerCase();



if(command === "/help"){

return `
Commands:

/help
/about
/clear
/time

`;

}



if(command === "/about"){

return `
I am GamerXD AI v1.0.
An assistant built on GitHub.
`;

}



if(command === "/time"){

return new Date()
.toLocaleTimeString();

}



if(command === "/clear"){

memory.clear();

location.reload();

}



return "Unknown command.";

}