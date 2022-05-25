console.log("starting blocker.js");

window.addEventListener("load", function() {
    console.log("web page loaded")
    block_logic();
})

function block_logic(){

    let data0 = "";
    const blocked_keywords_promise = browser.storage.local.get(["keywords_stored"], function(result) {looper(JSON.stringify(result))});
    //blocked_keywords_promise.then((results) => {let k = Object.keys(results)})
}

function looper(res){
    
    const res_obj = JSON.parse(res);
    res_arr = res_obj["keywords_stored"].split(",")

    let content_inner = document.documentElement.innerHTML;
    let content_outer = document.documentElement.outerHTML;
    
    let contains_blocked = false;

    for (let i = 0; i < res_arr.length; i ++){
        console.log(res_arr[i])
        if (content_inner.includes(res_arr[i])){
            contains_blocked = true;
            break;
        }
        else if (content_outer.includes(res_arr[i])){
            contains_blocked = true;
            break;
        }
    }

    if (contains_blocked == true || contains_blocked == 'true'){
        console.log("loading blocked page");
        location.replace("https://htmlpreview.github.io/?https://github.com/frroossst/webpage_content_blocker/blob/master/blocked_page.html")
    }
}
