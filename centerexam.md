---
layout: default
title: 大学入試共通テストタイマー
---

<p
    id = "center_exam"
    style = "
        font-size: 2em;"
></p>

<script>
let cex = new Date(2021, 0, 16, 9, 30, 0)

setInterval(function(){
    let now = new Date()
    let dt = (cex - now)
    center_exam.innerHTML = `令和3年大学入試共通テストまであと、${parseInt((dt)) / 1000}秒`
},1)
</script>