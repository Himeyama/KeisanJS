class Age{
    constructor(age = 0){
        this.age = age
    }

    getBirthYear(){
        var d = new Date()
        var tmp = new Date(); tmp.setDate(tmp.getDate() + 2)
        this.border = [tmp.getMonth(), tmp.getDate()]
        return [d.getFullYear() - this.age - 1, d.getFullYear() - this.age]
    }
}

class Constellation{
    constructor(m = 1, d = 1){
        this.m = m
        this.d = d
    }

    getConstellation(){
        var cons = [
            ["山羊座", 101, 119],
            ["水瓶座", 120, 218],
            ["魚座", 219, 320],
            ["牡羊座", 321, 419],
            ["牡牛座", 420, 520],
            ["双子座", 521, 621],
            ["蟹座", 622, 722],
            ["獅子座", 723, 822],
            ["乙女座", 823, 922],
            ["天秤座", 923, 1023],
            ["蠍座", 1024, 1122],
            ["射手座", 1123, 1221],
            ["山羊座", 1222, 1231]
        ]

        for(var i = 0; i < cons.length; i++){
            if(cons[i][1] <= this.m * 100 + this.d && this.m * 100 + this.d <= cons[i][2]){
                return cons[i][0]
            }
        }
    }
}