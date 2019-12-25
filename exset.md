---
layout: default
title: exset.js
---

# exset.js
`Array`を拡張した`Exset`クラスのオブジェクトについて定義している自作の集合ライブラリーです。
- [exset-0.0.0.js](./exset-0.0.0.js)

## Exset.prototype.of()
`exset`オブジェクトを生成します。

```js
a = Exset.of(1, 2, 3)
console.log(a)
```

```
[1, 2, 3]
```

配列を`exset`にしたい場合は以下のようにします。

```js
a1 = [1, 2, 3]
a2 = Exset.of(...a1)
console.log(a1)
```

```
[1, 2, 3]
```

## Exset.prototype.uniq()
配列の重複を除去した配列を生成します。

```js
a1 = Exset.of(1, 5, 3, 3, 5)
a2 = a1.uniq()
console.log(a2)
```

```
[1, 3, 5]
```

## Exset.prototype.intersection()
積集合の配列を生成します。

```js
a1 = Exset.of(1, 2, 3)
a2 = Exset.of(1, 3, 5)
a3 = a1.intersection(a2)
console.log(a3)
```

```
[1, 3]
```

## Exset.prototype.union()
和集合の配列を生成します。

```js
a1 = Exset.of(1, 2, 3)
a2 = Exset.of(1, 2, 4)
a3 = a1.union(a2)
console.log(a3)
```

```
[1, 2, 3, 4]
```

## Exset.prototype.difference()
差集合の配列を生成します。

```js
a1 = Exset.of(1, 2, 3)
a2 = Exset.of(1, 2, 4)
a3 = a1.difference(a2)
console.log(a3)
```

```
[3]
```

## Exset.prototype.add()
集合に要素を破壊的に追加します。

配列に要素が存在する場合は追加しません。

追加された場合は配列を戻し、追加されなかった場合は`null`を戻します。

```js
a1 = Exset.of(1, 2)
console.log(a1.add(3))
console.log(a1.add(1))
```

```
[1, 2, 3]
null
```

<script src="./exset-0.0.0.js">