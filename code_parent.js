function domtokenlist2array(domtokenlist){
    let ary = []
    for(let i = 0; i < domtokenlist.length; i++){
        ary.push(domtokenlist[i])
    }
    return ary
}

function c_parent(){
    let codes = document.getElementsByTagName("pre")
    for(let i = 0; i < codes.length; i++){
        let iscode = domtokenlist2array(codes[i].classList).includes("code")
        if(iscode){
            let code_parent = document.createElement("div")
            code_parent.classList.add("code_parent")
            code_parent.innerHTML = codes[i].outerHTML
            codes[i].outerHTML = code_parent.outerHTML
        }
    }
}

c_parent()
