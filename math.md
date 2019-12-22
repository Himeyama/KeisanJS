---
layout: default
title: 数学メモ
---

# 確率
## 条件付き確率
$\displaystyle P(x_2 \| x_1) = \frac{P(x_2 \cap x_1)}{P(x_1)}$

| $x$が起こる確率 | $P(x)$ |
| $x_1$が起こりかつ$x_2$が起こる確率 | $P(x_1 \cap x_2)$ |
| $x_1$が起こる条件下で$x_2$が起こる確率 | $P(x_2 \| x_1)$ |

# 二次関数
## 頂点を求める

$f(x) = x^2 -4x -1$の頂点を求める。

頂点は$\displaystyle \frac{df(x)}{dx} = 0$となるので、
$f(x)$を微分して、
$\displaystyle \frac{df(x)}{dx} = 2x -4 = 0$より、$x = 2$。

$x = 2$を代入して$f(2) = 2^2 - 4\cdot 2 - 1 = -5$

よって、頂点は$(2, -5)$

平方完成の形にすると、

$f(x) = (x - 2)^2 - 5$ となる。

# 集合
## 論理式の変形

$A$または$B$は、$A$かつ$B$でない または $A$かつ$B$ または $A$でないかつ$B$ に等しい。

$A \cup B = (A \cap \bar{B}) \cup (A \cap B) \cup (\bar{A} \cap B)$

$A$は、$A$かつ$B$ または $A$かつ$B$でないに等しい。

$A = (A \cap B) \cup (A \cap \bar{B})$

$\bar{A} = (\bar{A} \cap B) \cup (\bar{A} \cap \bar{B})$

したがって、

$U = A \cup \bar{A} = (A \cap B) \cup (A \cap \bar{B}) \cup (\bar{A} \cap B) \cup (\bar{A} \cap \bar{B})$