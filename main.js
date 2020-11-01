let show = document.getElementById('show');
let formSection = document.getElementById('formSection');
let send = document.getElementById('send');
let SentSuccessfully = document.getElementById('SentSuccessfully');

show.onclick = function(){
    formSection.style.display = 'block';
    show.style.display = 'none';
}

send.onclick = function(){
    SentSuccessfully.style.display = 'block';
    send.style.display = 'none';
    formSection.style.display = 'none';
    let name = document.getElementById('name').value;
    let number = document.getElementById('number').value;
    let message = document.getElementById('message').value;
    console.log(name)
    console.log(number)
    console.log(message)

    let postInfo = new XMLHttpRequest();
    postInfo.open('GET', `https://api.telegram.org/bot1315017521:AAGGgQKBs-w50ZID0fVgPTy0RwOp0qeWvm8/sendMessage?text=Name:${name}\n number:${number}\n Message:${message}&chat_id=-401283729`, false);
    postInfo.send();
}