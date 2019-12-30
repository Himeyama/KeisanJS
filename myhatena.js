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
}, 3000)

// $(function(){var t=$("time").size();for(i=0;i<t;i++){var e=$(".date.archive-date time").eq(i),a=e.attr("datetime"),r=new Date(a),d=toEra(r);e.text(`${d[0]}${1==d[1]?"元":d[1]}年${d[2]}月${d[3]}日`)});

// var title_text=$("#title a").text(),title_text_i=0;setInterval(function(){title_text_i<=title_text.length&&$("#title a").text(title_text.slice(0,title_text_i+1)),title_text_i++},200);

// 

// function xptheme(){var e=[".entry-title",".entry-header",".entry-content","pre"];for(i=0;i<e.length;i++)$(e[i]).addClass("xp")}

// $(function(){for(let i=0;i<$(".typewriter").length;i++){let e=$(".typewriter").eq(i);let str=e.text();for(let j=0;j<=str.length;j++){setTimeout(function(){typew(e,str.slice(0,j))},100+(20*j))}}});function typew(a,b){a.text(b)};

// setTimeout(function(){$(".ad").css("display", "none");$("#box2").css("display", "none");$(".adx-responsive-mode").css("display", "none");}, 2000)

// <script>$(document).ready(function(){var e=["jQuery","MathJax","JavaScript"];for(i=0;i<$(".hatena-module-title").length;i++)e.indexOf($(".hatena-module-title").eq(i).html())>=0&&$(".hatena-module-title").eq(i).css("display","none")});</script>