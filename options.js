console.log("running options.js");

function saveOptions(e){
    let storageObj = {
        "keywords_stored" : document.querySelector("#keywords_input").value,
        "websites_stored" : document.querySelector("#websites_input").value
        }
    browser.storage.local.set(storageObj);
//    window.content.localStorage.setItem("test",{"a" : {"b" : 0, "c" : 1}});
    e.preventDefault();
}

document.getElementById("user-form").addEventListener("submit",saveOptions);
