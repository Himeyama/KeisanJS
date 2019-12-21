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