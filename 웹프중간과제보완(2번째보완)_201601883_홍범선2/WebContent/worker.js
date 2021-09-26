onmessage = error;
function error(event) {
    if (event.data.indexOf("@") == -1) {
        postMessage(["'@'포함하여 이메일 주소를 입력해주세요",false,"red"]);
        
    }
    else {
        postMessage(["멋진 아이디네요!", true,"limegreen"]);
        
    }
}

