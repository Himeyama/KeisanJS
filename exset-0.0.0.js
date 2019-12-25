class Exset extends Array{
    uniq(){
        // 重複を取り除く
        let ary2 = Exset.of()
        for(let i = 0; i < this.length; i++){
            let v = this[i]
            if(ary2.includes(v)) continue;
            ary2.push(v)
        }
        return ary2
    }

    intersection(ary1){
        // 積集合
        let ary2 = Exset.of()
        for(let i = 0; i < this.length; i++){
            let v = this[i]
            if(!ary1.includes(v)) continue
            if(ary2.includes(v)) continue
            ary2.push(v)
        }
        return ary2
    }

    union(ary){
        // 和集合
        let ary1 = this.uniq()
        let ary2 = (Exset.of(...ary)).uniq()
        for(let i = 0; i < ary2.length; i++){
            ary1.push(ary2[i])
        }
        ary1 = ary1.uniq()
        return ary1
    }

    difference(ary1){
        // 差集合
        let ary2 = Exset.of()
        for(let i = 0; i < this.length; i++){
            let v = this[i]
            if(ary1.includes(v)) continue
            ary2.push(v)
        }
        return ary2
    }

    add(o){
        // 要素を加える(破壊)
        if(this.includes(o)) return null
        this.push(o)
        return this
    }
}