console.log("starting blocker.js");

window.addEventListener("load", function() {
    console.log("web page loaded")
    block_logic();
})

function block_logic(){

    const blocked_keywords_promise = browser.storage.local.get(["keywords_stored"], function(result) {console.log(result)});
    //blocked_keywords_promise.then((results) => {let k = Object.keys(results)})
    console.log("looking for blocked keywords : ",blocked_keywords_promise);

    let content_inner = document.documentElement.innerHTML;
    let content_outer = document.documentElement.outerHTML;
    
    let contains_blocked = false;

    for (let i = 0; i < blocked_keywords.length; i ++){
        console.log(i);
        if (content_inner.includes(blocked_keywords[i])){
            contains_blocked = true;
            console.log(contains_blocked[i]);
            break;
        }
        else if (content_outer.includes(blocked_keywords[i])){
            contains_blocked = true;
            break;
        }
    }

    if (contains_blocked == true || contains_blocked == 'true'){
        console.log("loading blocked page");
        location.replace("https://htmlpreview.github.io/?https://github.com/frroossst/webpage_content_blocker/blob/master/blocked_page.html")
    }
}
