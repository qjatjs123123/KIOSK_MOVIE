onmessage = error;

function error(event) {
    if (event.data.indexOf("@") == -1) {
        postMessage(false);
    }
    else {
        postMessage(true);

    }
}
