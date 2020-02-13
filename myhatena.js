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
// setTimeout(function(){
//     // 月別アーカイブを和暦に
//     let archiveMYT = $(".archive-module-year-title")
//     for(let i = 0; i < archiveMYT.length; i++){
//         let tmp = $(archiveMYT[i]).text().match(/(\d{4})\s+\((\d+)\)/i)
//         let y = parseInt(tmp[1])
//         let n = parseInt(tmp[2])
//         let e = (new Era(y, 0, 1)).getEraDate()
//         let str = e[0] + (e[1] == 1 ? "元" : e[1]) + "年" + " (" + n + "件)"
//         $(archiveMYT[i]).text(str)
//     }

//     let archiveMMT = $(".archive-module-month-title")
//     for(let i = 0; i < archiveMMT.length; i++){
//         let tmp = $(archiveMMT[i]).text().match(/(\d{4})\s+\/\s+(\d+)\s+\((\d+)\)/i)
//         let y = parseInt(tmp[1])
//         let m = parseInt(tmp[2])
//         let n = parseInt(tmp[3])
//         let e = (new Era(y, m - 1, 1)).getEraDate()
//         let str = e[0] + (e[1] == 1 ? "元" : e[1]) + "年" + e[2] + "月 (" + n + "件)"
//         $(archiveMMT[i]).text(str)
//     }

//     let ad = [".ad", ".adx-responsive-mode"]
//     for(let i = 0; i < ad.length; i++) $(ad[i]).css("display", "none")
// }, 2000)


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
if(document.getElementsByClassName("date entry-date first").length){
    let postDateElement = document.getElementsByClassName("date entry-date first")[0].getElementsByTagName("time")[0]
    let postDate = new Era(postDateElement.dateTime)
    let postWareki = postDate.getWareki()
    postDateElement.innerHTML = postWareki
}

// 次のページ
let nextBtn = document.getElementById("top-editarea").getElementsByTagName("a")[1]
if(document.getElementsByClassName("pager-next")[0]){
    nextBtn.href = document.getElementsByClassName("pager-next")[0].children[0].href
}else{
    document.getElementById("top-editarea").getElementsByTagName("li")[1].style.display = "none"
}

// 隠しウィンドウ
Window.zIndex = 10000
document
.getElementById("top-editarea")
.getElementsByTagName("li")[2]
.onclick = function(e){
    let about = Window.create("about")
    about.setTitle("About")
    about.setContents("\
    <h1>ひかりのブログ</h1>\
    <a href='//nihonium.hatenablog.com'>nihonium.hatenablog.com</a>\
    <p>©2019 ひかり</p>")
    e.target.parentElement.style.display = "none"
    about.element.getElementsByClassName("winCloseBtn")[0].onclick = function(f){
        e.target.parentElement.style.display = "inline-block"
        about.close()
    }
}

// 検索
let searchQ = ""
if(location.pathname == "/search"){
    searchQ = document.getElementsByClassName("search-result-input")[0].value
    document
    .getElementById("top-editarea")
    .getElementsByTagName("li")[3]
    .getElementsByTagName("a")[0]
    .style
    .borderBottom
    = "solid 4px dodgerblue"
}
document
.getElementById("top-editarea")
.getElementsByTagName("li")[3]
.onclick = function(e){
    let search = Window.create("searchWindow")
    search.setTitle("Search")
    search.setContents("\
    <h1>検索</h1>\
    <form action='/search' method='get'>\
        <input name='q' style='width: 168px;font-size: 19px;'>\
        <input type='submit' style='width:64px;' value='検索'>\
    </form>\
    ")
    e.target.parentElement.style.display = "none"
    search.element.getElementsByTagName("input")[0].value = searchQ
    search.element.getElementsByClassName("winCloseBtn")[0].onclick = function(f){
        e.target.parentElement.style.display = "inline-block"
        search.close()
    }
}

// 時計
document
.getElementById("top-editarea")
.getElementsByTagName("li")[4]
.onclick = function(e){
    let clock = Window.create("clockWindow")
    clock.setTitle("Clock")
    clock.setContents("<h3><time style='color: #fff;'></time></h3>")
    e.target.parentElement.style.display = "none"
    clock.element.getElementsByClassName("winCloseBtn")[0].onclick = function(f){
        e.target.parentElement.style.display = "inline-block"
        clock.close()
    }
}
setInterval(function(){
    if(document.getElementById("clockWindow")){
        let now = new Era
        document
        .getElementById("clockWindow")
        .getElementsByClassName("winContents")[0]
        .getElementsByTagName("time")[0]
        .innerText 
        = `${now.getWareki()} ${now.getHours()}時${now.getMinutes()}分${now.getSeconds()}秒` 
    }
}, 100)

// ノート
document
.getElementById("top-editarea")
.getElementsByTagName("li")[5]
.onclick = function(e){
    let note = BrowserNote.create("note")
    note.setTitle("Note")
    e.target.parentElement.style.display = "none"
    note.element.getElementsByClassName("winCloseBtn")[0].onclick = function(f){
        e.target.parentElement.style.display = "inline-block"
        note.close()
    }
}
