$(function(){
    // 投稿日時を和暦に変更
    let postDateElement = $(".date.entry-date.first time")[0]
    let postDate = new Era(postDateElement.dateTime)
    let postWareki = postDate.getWareki()
    $(postDateElement).html(postWareki)

    // 月別アーカイブを和暦に
    let archiveMYT = $(".archive-module-year-title")
    for(let i = 0; i < archiveMYT.length; i++){
        let tmp = $(archiveMYT[i]).text().match(/(\d{4})\s+\((\d+)\)/i)
        let y = parseInt(tmp[1])
        let n = parseInt(tmp[2])
        let e = (new Era(y, 0, 1)).getEraDate()
        let str = e[0] + e[1] + "年" + " (" + n + "件)"
        $(archiveMYT[i]).text(str)
    }
})


// function toEra(t){var e,n=[[1868,1,1,"明治"],[1912,7,30,"大正"],[1926,12,25,"昭和"],[1989,1,8,"平成"],[2019,5,1,"令和"]];return n.some(function(r,a){if(new Date(r[0],r[1]-1,r[2])<=t){if(a==n.length-1)return e=[n[a][3],t.getFullYear()-r[0]+1,t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()],!0;if(t<new Date(n[a+1][0],n[a+1][1]-1,n[a+1][2]))return e=[r[3],t.getFullYear()-r[0]+1,t.getMonth()+1,t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds()],!0}}),e}$(function(){var t=toEra(new Date(Date.parse($("time").attr("datetime"))));1==t[1]&&(t[1]="元"),$("time").text(`${t[0]}${t[1]}年${t[2]}月${t[3]}日`),$("time#now").text("")});

// setTimeout(function(){var t=$(".archive-module-year-title");for(i=0;i<t.length;i++){var e=(s=t.eq(i)).text().match(/(\d{4})\s\((\d*?)\)/),a=parseInt(e[1]),r=parseInt(e[2]),n=toEra(new Date(a,0,1));s.text(`${n[0]}${n[1]}年 / ${r}件`)}for(t=$(".archive-module-month-title"),i=0;i<t.length;i++){var s,o=(s=t.eq(i)).text().match(/(\d{4})\s\/\s(\d*)\s\((\d*)\)/),d=(a=parseInt(o[1]),parseInt(o[2]));r=parseInt(o[3]),n=toEra(new Date(a,d-1,1));s.text(`${n[0]}${1==n[1]?"元":n[1]}年${n[2]}月 / ${r}件`)}$(".hatena-module.hatena-module-archive").css("display", "block");}, 3000);

// $(function(){var t=$("time").size();for(i=0;i<t;i++){var e=$(".date.archive-date time").eq(i),a=e.attr("datetime"),r=new Date(a),d=toEra(r);e.text(`${d[0]}${1==d[1]?"元":d[1]}年${d[2]}月${d[3]}日`)});

// var title_text=$("#title a").text(),title_text_i=0;setInterval(function(){title_text_i<=title_text.length&&$("#title a").text(title_text.slice(0,title_text_i+1)),title_text_i++},200);

// $(function(){var e=$("pre");for(i=0;i<e.length;i++){var n=$("pre").eq(i),r=n.html().match(/.*\n/g);for(j=0;j<r.length;j++)r[j]=`<code>${r[j].replace(/\r?\n/g,"")}</code>\n`;n.html(r.join(""))}});

// function xptheme(){var e=[".entry-title",".entry-header",".entry-content","pre"];for(i=0;i<e.length;i++)$(e[i]).addClass("xp")}

// $(function(){for(let i=0;i<$(".typewriter").length;i++){let e=$(".typewriter").eq(i);let str=e.text();for(let j=0;j<=str.length;j++){setTimeout(function(){typew(e,str.slice(0,j))},100+(20*j))}}});function typew(a,b){a.text(b)};

// setTimeout(function(){$(".ad").css("display", "none");$("#box2").css("display", "none");$(".adx-responsive-mode").css("display", "none");}, 2000)

// <script>$(document).ready(function(){var e=["jQuery","MathJax","JavaScript"];for(i=0;i<$(".hatena-module-title").length;i++)e.indexOf($(".hatena-module-title").eq(i).html())>=0&&$(".hatena-module-title").eq(i).css("display","none")});</script>
// <script>$(function(){setInterval(function(){var t=new Date,e=toEra(t);1==e[1]&&(e[1]="元"),$("time#now").text(`${e[0]}${e[1]}年${e[2]}月${e[3]}日${e[4]}時${e[5]}分${e[6]}秒`)},1e3)});</script>