---
title: 數獨計算器
layout: default
---

<script type="text/javascript" src="./solver.js"></script>

<h1>數獨計算器</h1>
<table>
    <script><!--
        for(i = 0; i < 9; i++){
            document.write("<tr>")
            for(j = 0; j < 9; j++){
                document.write(`\
                <td>\
                <select id=\"p${i}${j}\">\
                    <option value=\"n\"></option>\
                    <option value=\"1\">1</option>\
                    <option value=\"2\">2</option>\
                    <option value=\"3\">3</option>\
                    <option value=\"4\">4</option>\
                    <option value=\"5\">5</option>\
                    <option value=\"6\">6</option>\
                    <option value=\"7\">7</option>\
                    <option value=\"8\">8</option>\
                    <option value=\"9\">9</option>\
                </select>
                </td>`);
            }
            document.write("</tr>")
        }
    --></script>
</table>

<p>
    <div class="btn">
        <button id="run">計算</button>
        <button id="clear">消去</button>
    </div>
</p>

<style><!--
select{
    background: transparent;
    border: none;
    height: 48px;
    width: 48px;
    border-radius: 0px;
}
td{
    padding: 0 !important;
}
--></style>