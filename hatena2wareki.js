function hatena2wareki(){
    let time_tags = document.getElementsByTagName("time")
    for(let i = 0; i < time_tags.length; i++){
        let time = new Date(time_tags[i].dateTime)
        let wareki = new Era(time)
        time_tags[i].innerText = wareki.getWareki()
    }
}
hatena2wareki()
