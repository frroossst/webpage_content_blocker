console.log("running options.js");

function saveOptions(e){
    console.log(document.querySelector("#keywords_input").value)
    browser.storage.local.set({"keywords_stored" : document.querySelector("#keywords_input").value});
    console.log("saving : ",document.querySelector("#keywords_input").value)
    e.preventDefault();
}

document.querySelector("form").addEventListener("submit",saveOptions);
