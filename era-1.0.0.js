class Era{
    eras = {
        明治: new Date(1868, 10-1, 23),
        大正: new Date(1912, 7-1, 30),
        昭和: new Date(1926, 12-1, 25),
        平成: new Date(1989, 1-1, 8),
        令和: new Date(2019, 5-1, 1)
    }

    constructor(...date){
        this.date = new Date(...date)
    }

    getEra(){
        var erasName = Object.keys(this.eras)
        for(var i = 0; i < erasName.length; i++){
            if((i != erasName.length - 1 && this.eras[erasName[i]] <= this.date && this.date < this.eras[erasName[i+1]])
            || (i == erasName.length - 1 && this.eras[erasName[i]] <= this.date)){
                break
            }
        }
        return erasName[i]
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