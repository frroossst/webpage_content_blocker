console.log("starting blocker.js");

window.addEventListener("load", function() {
    console.log("web page loaded")
    block_logic();
})

function block_logic(){

    const blocked_keywords = ["BLOCKED"];

    let content_inner = document.documentElement.innerHTML;
    let content_outer = document.documentElement.outerHTML;
    
    let contains_blocked = false;

    for (let i = 0; i < blocked_keywords.length; i ++){
        if (content_inner.includes(blocked_keywords[i])){
            contains_blocked = true;
            break;
        }
        else if (content_outer.includes(blocked_keywords[i])){
            contains_blocked = true;
            break;
        }
    }
    
    //console.log(contains_blocked);
    
    if (contains_blocked == true || contains_blocked == 'true'){
        location.replace("blocked_page.html");       
    }
}
