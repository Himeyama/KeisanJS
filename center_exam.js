let center_exam_time = new Date(2020, 0, 18, 9, 30, 0)
setInterval(function(){
    let now = new Date()
    center_exam.innerHTML = `${center_exam_time.getDate() - now.getDate() - 1}日${24 + (center_exam_time.getHours() - now.getHours())}時間${60 + (center_exam_time.getMinutes() - now.getMinutes())}分${60 + (center_exam_time.getSeconds() - now.getSeconds())}秒`
    // i++
}, 100)
