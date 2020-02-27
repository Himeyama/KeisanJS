class KonamiCommand{
    static keydown(e){
        KonamiCommand.key = KonamiCommand.key.concat(e.key)
        let kc = KonamiCommand.isKonami()
        if(!kc){
            KonamiCommand.key = []
        }else if(KonamiCommand.key.length == KonamiCommand.com.length){
            KonamiCommand.command()
            KonamiCommand.key = []
        }
    }

    static isKonami(){
        let min = KonamiCommand.com.length
        if(min > KonamiCommand.key.length)
            min = KonamiCommand.key.length
        for(let i = 0; i < min; i++){
            if(KonamiCommand.com[i] != KonamiCommand.key[i]){
                return false
            }
        }
        
        return true
    }
}
KonamiCommand.com = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"]
KonamiCommand.key = []

document.addEventListener("keydown", KonamiCommand.keydown)


// KonamiCommand.command = function(){
//     document.body.style.backgroundColor = "#212121"
//     document.body.style.color = "#fafafa"
// }
