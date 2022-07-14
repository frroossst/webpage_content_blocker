console.log("[content-web-blocker] starting blocker.js");

window.addEventListener("load", function() {
    console.log("[content-web-blocker] web page loaded")
    block_logic();
})

function onGot(item) {
    looper(item)
}

function onError(error){
    console.log(error);
}

function block_logic(){

    storageGetter = browser.storage.local.get()
    storageGetter.then(onGot, onError)
    //console.log("storageBox" ,browser.storage.local.get("storageBox")
    //const blocked_keywords_promise = browser.storage.local.get(["storageBox"], function(result) {looper(JSON.stringify(result))});
    //console.log(blocked_keywords_promise,"----");
    //blocked_keywords_promise.then((results) => {let k = Object.keys(results)})
}

function looper(res){

    console.log("[content-web-blocker] The following keywords are blocked : ");
    console.log(JSON.parse(JSON.stringify(res)));

    //const res_obj = JSON.parse(res);
    res_arr = res["keywords_stored"].split(",")
    url_arr = res["websites_stored"].split(",")

    console.log(res_arr)
    console.log(url_arr)

    curr_URL = document.URL
    console.log(curr_URL);

    let contains_blocked = false;

    for (let i = 0; i < url_arr.length; i++)
        {
        if curr_URL.includes(url_arr[i])
            contains_blocked = true;
            console.error("contains url : ",url_arr[i]);
            break;
        }

    if (contains_blocked == true || contains_blocked == 'true'){
        console.log("loading blocked page");
        location.replace("https://htmlpreview.github.io/?https://github.com/frroossst/webpage_content_blocker/blob/master/blocked_page.html")
        }

    let content_inner = document.documentElement.innerHTML.toLowerCase();
    let content_outer = document.documentElement.outerHTML.toLowerCase();
    
    let contains_blocked = false;

    for (let i = 0; i < res_arr.length; i ++){

        if (content_inner.includes(res_arr[i])){
            contains_blocked = true;
            console.error("contains keyword : ",res_arr[i]);
            break;
        }
        else if (content_outer.includes(res_arr[i])){
            contains_blocked = true;
            console.error("contains keyword : ",res_arr[i]);
            break;
        }
    }

    if (contains_blocked == true || contains_blocked == 'true'){
        console.log("loading blocked page");
        location.replace("https://htmlpreview.github.io/?https://github.com/frroossst/webpage_content_blocker/blob/master/blocked_page.html")
    }

}
