---
layout: default
title: センター試験タイマー
---

<p
    id = "center_exam"
    style = "
        font-size: 2em;"
></p>

<script>
let cex = new Date(2020, 0, 18, 9, 30, 0)

setInterval(function(){
    let now = new Date()
    let dt = (cex - now)
    center_exam.innerHTML = `センター試験まであと、${parseInt((dt))}ms`
},1)
</script>