$(function(){
    $("#run").click(function(){
        var age = new Age(parseInt($("#age").val())) 
        byear = age.getBirthYear()

        $(".result").html(`\
        <ul>
        <li>${byear[0]}年 (誕生日が${age.border[0]}月${age.border[1]}日以降場合)</li>
        <li>${byear[1]}年 (上記以外の場合)</li>
        </ul>`)
    })
})