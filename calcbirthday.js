$(function(){
    $("#month").click(function(){
        var y = parseInt($("#year").val())
        var m = parseInt($("#month").val())
        var html = ""
        var l = [31, 28 + ((y % 4 == 0 && y % 100 != 0 || y % 400 == 0) ? 1 : 0), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        html += `<option value=""></option>`
        for(var i = 1; i <= l[m - 1]; i++){
            html += `<option value="${i}">${i}</option>`
        }
        $("#date").html(html)
    })

    $("#run").click(function(){
        var era = new Era(parseInt($("#year").val()), parseInt($("#month").val()), parseInt($("#date").val()))
        
        var aveLifeM = new Date(era.date)
        aveLifeM.setFullYear(aveLifeM.getFullYear() + 87)
        aveLifeM = new Era(aveLifeM.getFullYear(), aveLifeM.getMonth() + 1, aveLifeM.getDate())
        aveLM = aveLifeM.getEraDate()

        var aveLifeF = new Date(era.date)
        aveLifeF.setFullYear(aveLifeF.getFullYear() + 93)
        aveLifeF = new Era(aveLifeF.getFullYear(), aveLifeF.getMonth() + 1, aveLifeF.getDate())
        aveLF = aveLifeF.getEraDate()

        var r = new Era()
        r.date = new Date(era.date)

        var m = parseInt($("#month").val())
        var d = parseInt($("#date").val())
        var day = ["日", "月", "火", "水", "木", "金", "土"]
        var today2 = new Date()
        today2.setDate(today2.getDate() + 2)
        var cor = 0
        if(((today2.getMonth() + 1) * 100 + today2.getDate()) <= (m * 100 + d)){
            cor = -1
        }
        var cons = new Constellation(m, d)

        $(".result").html(`
            <table>
            <tr><td><b>生年月日</b></td><td>${era.getWareki()}(${day[era.date.getDay()]})</td></tr>
            <tr><td><b>年齢</b></td><td>${(new Date()).getFullYear() - era.date.getFullYear() + cor}</td></tr>
            <tr><td><b>干支</b></td><td>${["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"][((era.date.getFullYear()) - 4) % 12]}</td></tr>
            <tr><td><b>星座</b></td><td>${cons.getConstellation()}</td></tr>
            
            <tr><td><b>寿命</b></td>
                <td>
                <p><b>男: </b>
                ${aveLM[0]}${aveLM[1] == 1 ? "元" : aveLM[1]}年(${aveLifeM.date.getFullYear()}年)まで
                残り${aveLifeM.date.getFullYear() - (new Date()).getFullYear()}年<br>
                <progress max="87" value="${(new Date()).getFullYear() - era.date.getFullYear() + cor}"></progress>
                </p>
                <p><b>女: </b>
                ${aveLF[0]}${aveLF[1] == 1 ? "元" : aveLF[1]}年(${aveLifeF.date.getFullYear()}年)まで
                残り${aveLifeF.date.getFullYear() - (new Date()).getFullYear()}年<br>
                <progress max="93" value="${(new Date()).getFullYear() - era.date.getFullYear() + cor}"></progress>
                </p>
            </tr>

            </table>

            <p>
                寿命は最頻値(最も死亡する人が多い年齢)であり、男性87歳 / 女性93歳としています。
            </p>

            <h2>学歴</h2>
            <table style="text-align: center;">
                <tr><td><b>年</b></td><td><b>月</b></td><td><b>学歴</b></td></tr>
                <tr>
                    <td>
                        ${r.date.setFullYear(r.date.getFullYear() + (6 + (r.date.getMonth() * 100 + r.date.getDate() >= 302 ? 1 : 0))) && r.getEraDate()[0]}<!--
                        -->${r.getEraDate()[1] == 1 ? "元" : r.getEraDate()[1]}
                    </td>
                    <td>4</td>
                    <td>小学校入学</td>
                </tr>

                <tr>
                    <td>
                        ${r.date.setFullYear(r.date.getFullYear() + 6) && r.getEraDate()[0]}<!--
                        -->${r.getEraDate()[1] == 1 ? "元" : r.getEraDate()[1]}
                    </td>
                    <td>3</td>
                    <td>小学校卒業</td>
                </tr>

                <tr>
                    <td>
                        ${r.getEraDate()[0]}${r.getEraDate()[1] == 1 ? "元" : r.getEraDate()[1]}
                    </td>
                    <td>4</td>
                    <td>中学校入学</td>
                </tr>

                <tr>
                    <td>${r.date.setFullYear(r.date.getFullYear() + 3) && r.getEraDate()[0]}<!--
                        -->${r.getEraDate()[1] == 1 ? "元" : r.getEraDate()[1]}
                    </td>
                    <td>4</td>
                    <td>中学校卒業</td>
                </tr>

                <tr>
                    <td>
                        ${r.getEraDate()[0]}${r.getEraDate()[1] == 1 ? "元" : r.getEraDate()[1]}
                    </td>
                    <td>4</td>
                    <td>高等学校入学</td>
                </tr>

                <tr>
                    <td>${r.date.setFullYear(r.date.getFullYear() + 3) && r.getEraDate()[0]}<!--
                        -->${r.getEraDate()[1] == 1 ? "元" : r.getEraDate()[1]}
                    </td>
                    <td>3</td>
                    <td>高等学校卒業</td>
                </tr>
            </table>
        `)
    })

    $("#year").val("")
    $("#month").val("")
    $("#date").val("")
})

