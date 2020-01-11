---
layout: default
title: 誕生日計算
---


<script src="./era.js"></script>
<script src="./age.js"></script>
<script src="./jquery-3.4.1.min.js"></script>
<script src="./calcbirthday.js"></script>

<p>
    誕生日から<b>生年月日(和暦)</b>、<b>年齢</b>、<b>干支</b>、<b>星座</b>、<b>寿命</b>、<b>学歴</b>が計算できます。
</p>
<select id="year">
    <option></option>
    <script><!--
    for(var i = (new Date()).getFullYear(); i >= 1900; i--){
        document.write(`<option value=\"${i}\">${i}</option>`)
    }
    --></script>
</select>年
<select id="month">
    <script><!--
    for(var i = 0; i <= 12; i++){
        document.write(`<option value=\"${i > 0 ? i : ""}\">${i > 0 ? i : ""}</option>`)
    }
    --></script>
</select>月
<select id="date">
</select>日
<button id="run">計算実行</button>
<div class="result" style="margin: 16px 0;">
</div>