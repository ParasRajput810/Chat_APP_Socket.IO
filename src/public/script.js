var socket = io();

let btn = document.getElementById("newid");
btn.onclick = function (){
    socket.emit("from_client" , "new message sent");
}


socket.on("hello", (arg) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = arg;
    div.appendChild(p);
    document.body.appendChild(div);
    
});