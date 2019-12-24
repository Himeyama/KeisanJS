class SortDisplay{
    constructor(id, width, height, color){
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext("2d")
        this.canvas.width = width
        this.canvas.height = height
        this.ctx.fillStyle = color
    }

    putbar(x, val){
        this.ctx.fillRect(x, this.canvas.height - val, 1, val)
    }

    clsbar(x){
        this.ctx.clearRect(x, 0, 1, this.canvas.height)
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

var a = []
function merge_sort(array, left, right){
    var i, j, k, m
    var w = new Array(array.length)
    if (left < right) {
        m = parseInt((left + right) / 2)
        merge_sort(array, left, m)
        merge_sort(array, m + 1, right)
        for (i = m; i >= left; i--) {
            w[i] = array[i]
        }
        for (j = m + 1; j <= right; j++) {
            w[right - (j - (m + 1))] = array[j]
        }
        i = left; j = right
        for (k = left; k <= right; k++) {
            a.push(array.slice(0, array.length))
            if (w[i] < w[j]) {
                array[k] = w[i++]
            } else {
                array[k] = w[j--]
            }
        }
    }
    return a
}


var sdisp = new SortDisplay(
    "sortDisplay",
    document.getElementsByTagName("section")[0].clientWidth - 32,
    300,
    "#333"
)

ary = new Array(sdisp.canvas.clientWidth).fill().map(x => getRandomInt(sdisp.canvas.clientHeight))

merge_sort(ary, 0, sdisp.canvas.clientWidth)

var n = 0
setInterval(function(){
    a[n].forEach(function(e, i){
        sdisp.clsbar(i)
        sdisp.putbar(i, e)
    })
    n++
}, 2)