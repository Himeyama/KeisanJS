---
layout: default
title: センター試験タイマー(2日目 令和2年1月19日)
---

<p
    id = "center_exam"
    style = "
        font-size: 2em;"
></p>

<script>
let cex = new Date(2020, 0, 19, 9, 30, 0)

setInterval(function(){
    let now = new Date()
    let dt = (cex - now)
    center_exam.innerHTML = `センター試験2日目まであと、${parseInt((dt))}ms`
},1)
</script>