console.log("running options.js");

function saveOptions(e){
    browser.storage.local.set({"keywords_stored" : document.querySelector("#keywords_input").value});
    e.preventDefault();
}

document.getElementById("user-form").addEventListener("submit",saveOptions);
