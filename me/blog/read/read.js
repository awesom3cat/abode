const include = document.getElementById("include");

function getParameters() {
    let urlString = document.URL;
    let paramString = urlString.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    for(let pair of queryString.entries()) {
        console.log("Key is:" + pair[0]);
        console.log("Value is:" + pair[1]);
        include.setAttribute('w3-include-HTML', pair[1]);
    }
}

getParameters();
w3.includeHTML();
