class Era{
    constructor(y = 2000, m = 1, d = 1){
        m -= 1
        this.date = new Date(y, m, d)
        this.eras = {
            明治: new Date(1868, 10-1, 23),
            大正: new Date(1912, 7-1, 30),
            昭和: new Date(1926, 12-1, 25),
            平成: new Date(1989, 1-1, 8),
            令和: new Date(2019, 5-1, 1)
        }
        this.erasName = ["明治", "大正", "昭和", "平成", "令和"]
    }

    getEra(){
        for(var i = 0; i < this.erasName.length; i++){
            if((i != this.erasName.length - 1 && this.eras[this.erasName[i]] <= this.date && this.date < this.eras[this.erasName[i+1]])
            || (i == this.erasName.length - 1 && this.eras[this.erasName[i]] <= this.date)){
                break
            }
        }
        return this.erasName[i]
    }

    getEraDate(){
        var era = this.getEra()
        var year = this.date.getFullYear() - this.eras[era].getFullYear() + 1
        var month = this.date.getMonth() + 1
        var date = this.date.getDate()
        return [era, year, month, date]
    }

    getWareki(){
        var edate = this.getEraDate()
        return `${edate[0]}${edate[1] == 1 ? "元" : edate[1]}年${edate[2]}月${edate[3]}日`
    }
}