// OS判定
function getOS(){
    let ua = window.navigator.userAgent
    let osList = [
        "Android",
        "Linux",
        "Windows",
        "iPhone",
        "Macintosh"
    ]
    let os
    for(i in osList){
        if(ua.includes(osList[i])){
            os = osList[i]
            break
        }
    }
    return os
}

// 数秒後に実行
setTimeout(function(){
    // 月別アーカイブを和暦に
    let archiveMYT = $(".archive-module-year-title")
    for(let i = 0; i < archiveMYT.length; i++){
        let tmp = $(archiveMYT[i]).text().match(/(\d{4})\s+\((\d+)\)/i)
        let y = parseInt(tmp[1])
        let n = parseInt(tmp[2])
        let e = (new Era(y, 0, 1)).getEraDate()
        let str = e[0] + (e[1] == 1 ? "元" : e[1]) + "年" + " (" + n + "件)"
        $(archiveMYT[i]).text(str)
    }

    let archiveMMT = $(".archive-module-month-title")
    for(let i = 0; i < archiveMMT.length; i++){
        let tmp = $(archiveMMT[i]).text().match(/(\d{4})\s+\/\s+(\d+)\s+\((\d+)\)/i)
        let y = parseInt(tmp[1])
        let m = parseInt(tmp[2])
        let n = parseInt(tmp[3])
        let e = (new Era(y, m - 1, 1)).getEraDate()
        let str = e[0] + (e[1] == 1 ? "元" : e[1]) + "年" + e[2] + "月 (" + n + "件)"
        $(archiveMMT[i]).text(str)
    }

    let ad = [".ad", ".adx-responsive-mode"]
    for(let i = 0; i < ad.length; i++) $(ad[i]).css("display", "none")
}, 2000)


// ヘッダーメニュー
if(location.pathname == "/"){
    document.getElementById("top-editarea")
    .children[0]
    .children[0]
    .children[0]
    .style
    .borderBottom 
    = "solid 3px dodgerblue"
}
let os = getOS()
if(os == "Android" || os == "iPhone"){
    document.getElementById("top-editarea").remove()
}

// コード番号
let codes = document.getElementsByTagName("pre")
for(let i = 0; i < codes.length; i++){
    let n = codes[i]
    let r = n.innerHTML.match(/.*\n/g)
    for(let j = 0; j < r.length; j++){
        r[j] = `<code>${r[j].replace(/\r?\n/g, "")}</code>\n`
    }
    n.innerHTML = r.join("")
}

// 和暦
let postDateElement = document.getElementsByClassName("date entry-date first")[0].getElementsByTagName("time")[0]
let postDate = new Era(postDateElement.dateTime)
let postWareki = postDate.getWareki()
postDateElement.innerHTML = postWareki

// 次のページ
var nextBtn = document.getElementById("top-editarea").getElementsByTagName("a")[1]
nextBtn.href = document.getElementsByClassName("pager-next")[0].children[0].href
