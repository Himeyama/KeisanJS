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

$(function(){
    // 投稿日時を和暦に変更
    let postDateElement = $(".date.entry-date.first time")[0]
    let postDate = new Era(postDateElement.dateTime)
    let postWareki = postDate.getWareki()
    $(postDateElement).html(postWareki)

    let e = $("pre")
    for(let i = 0; i < e.length; i++){
        let n = $("pre").eq(i)
        let r = n.html().match(/.*\n/g)
        for(let j = 0; j < r.length; j++){
            r[j] = `<code>${r[j].replace(/\r?\n/g,"")}</code>\n`
        }
        n.html(r.join(""))
    }

    // ブログタイトルアニメーション
    let title_text = $("#title a").text()
    let title_text_i = 0
    setInterval(function(){
        if(title_text_i <= title_text.length){
            $("#title a").text(title_text.slice(0,title_text_i+1))
            title_text_i++
        }
    },200)
})

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
