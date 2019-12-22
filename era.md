---
layout: default
title: How to use era.js
---

<script src="./era-1.0.0.js"></script>

# era.js

和暦を取得する自作ライブラリ`era.js`の説明

## Era のインスタンスを生成

```js
e = new Era(2000, 11, 31) // 2000年12月30日に設定
```

## 元号を取得する

```js
e = new Era(2019, 3, 30)
console.log(e.getEra())
```

### 実行結果
<code>
<script>e = new Era(2019, 3, 30);document.write(e.getEra())</script>
</code>

## 和暦を取得する

```js
e = new Era(1989, 0, 7)
console.log(e.getWareki())
```

### 実行結果

<code>
<script>e = new Era(1989, 0, 7);document.write(e.getWareki())</script>
</code>

## 配列で日付を取得する

```js
e = new Era(2019, 4, 1)
console.log(e.getEraDate())
```

### 実行結果

<code>
<script>e = new Era(2019, 4, 1);document.write(e.getEraDate())</script>
</code>

