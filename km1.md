---
layout: default
title: 計算モデル論(西)
---

# Max関数, Min関数

## Max関数
$V(x)$の最大値
<p>
\[
    \max V(x) 
\]
</p>

$V(x)$の最大値のときの$x$
<p>
\[
    \arg \max V(x) 
\]
</p>

## Min関数
$V(x)$の最小値
<p>
\[
    \min V(x) 
\]
</p>

$V(x)$の最小値のときの$x$
<p>
\[
    \arg \min V(x) 
\]
</p>

# 平均値の計算

## 平均の定義
<p>
\[ \bar{r}_{n} = \frac{1}{n} \sum_{i=1}^{n} r_i \]
</p>

## 平均の漸化式
<p>
\begin{eqnarray}
    \bar{r}_{n+1} &=& \frac{1}{n+1} \sum_{i = 1}^{n+1} r_i\\
    &=& \frac{1}{n+1} \left( \sum_{i=1}^{n} + r_{n+1} \right)\\
    &=& \frac{1}{n+1} \left( \frac{n}{n} \sum_{i=1}^{n} + r_{n+1} \right)\\
    &=& \frac{1}{n+1} \left( n \bar{r}_{n} + r_{n+1} \right)\\
    &=& \frac{1}{n+1} \left( (n+1-1) \bar{r}_{n} + r_{n+1} \right)\\
    &=& \bar{r}_{n} + \frac{1}{n+1} \left( r_{n+1} - \bar{r}_{n} \right)
\end{eqnarray}
</p>

## 平均の近似値
<p>
\[ \bar{r}_{n+1} = \bar{r}_n + \alpha(r_{n+1} - \bar{r}_n) \]
</p>

## softmax法
<p>
\[ P(a_i) = \frac{a_i}{\displaystyle \sum_{k=1}^{n} e^{\frac{V(a_k)}{T}}} \]
</p>

確率の合計は$1$となる。
<p>
\[ \sum_{k=1}^{n} P(a_k) = 1\]
</p>

# Q学習

状態
: State

行動
: Action

報酬
: Reward

総報酬
: Return

<p>
\begin{eqnarray}
    R_{t} &=& \sum_{k=t}^{T-1} r_{k+1}\\
    R_{t} &=& \sum_{k=t}^{T-1} \gamma^{k-t} r_{k+1}
\end{eqnarray}
</p>

$\gamma=1$で将来と同じ価値。

$\gamma$
: 将来の価値

$Q(s, a)$
: 状態行動価値関数(行動の価値)

エピソード
: 始めから終わりまでの一連

# SARSA学習

<p>
\[ Q(s, a) = Q(s, a) + \alpha (r + \gamma Q(s', a') - Q(s, a) ) \]
</p>

# ActorCritic法

## Actor
状態に応じた行動を学習・選択

## Critic

状態価値関数
: $V(s)$
    : 状態$s$のあとに得られる総報酬の期待値を学習

softmax法などで行動を選択する。

## ActorCriticのアルゴリズム

<p>
\[  V(s) = V(s) + \alpha \delta_t   \]
</p>

## TD誤差
<p>
\[  \delta_t = r_{t+1} + \gamma V(s_{t+1}) - V(s_t)  \]
</p>

## 行動を選択する確率$p(s, a)$の更新
<p>
    \[  p(s_t, a_t) = p(s_t, a_t) + \beta \gamma_t  \]
</p>

# パーセプロトン
<p>
\begin{align}  z=\begin{cases}   1 & \text{($w_1x_1+w_2x_2\ge\theta$)}\\  0 & \text{($w_1x_1+w_2x_2<\theta$)}\\  \end{cases}\nonumber \end{align}
</p>

## パーセプロトンの問題の解き方
($x_1$, $x_2$)をグラフにプロットする。
境界線の方程式を求める。

<p>
\[ W_1 x_1 + W_2 x_2 \geqq \theta \]
</p>

の形にする。

# 最急降下法

予測値を$f(x)$とすると、
誤差関数$E$は、

<p>
\[ E = \frac{1}{2} \left( f(x_i) - y_i \right)^2 \]
</p>
で定義。

## 最急降下法の定義式
$y_i = f(x_i) = ax_i + b$とする。

### 更新
<p>
\[  a \gets a + \Delta a  \]
\[  b \gets b + \Delta b  \]
</p>

ここで、
<p>
\begin{eqnarray}
    \Delta a &=& -\varepsilon \frac{\partial E}{\partial a}\\
    &=& -\varepsilon (y-y_i) x_i
\end{eqnarray}

\begin{eqnarray}
    \Delta b &=& -\varepsilon \frac{\partial E}{\partial b}\\
    &=& -\varepsilon (y-y_i)
\end{eqnarray}
</p>

# バックプロパゲーション

## 公式
<p>
\[ \Delta X = -\varepsilon \frac{\partial E}{\partial X}  \]
</p>

<p>
\begin{eqnarray}
    \Delta w_1^{M} &=& -\varepsilon \frac{\partial E}{\partial w_{1}^{M}}\\
    &=& -\varepsilon \frac{\partial E}{\partial w_{1}^{M}}
    \frac{dy}{dy} \frac{ds^o}{ds^o}\\
    &=& -\varepsilon \frac{\partial E}{dy}
    \frac{dy}{ds^o} \frac{ds^o}{\partial w_{1}^{M}}
\end{eqnarray}
</p>

# 確率
## 条件付き確率
<p>
\begin{eqnarray}
    P(A|B) = \frac{P(A, B)}{P(B)}
\end{eqnarray}
</p>

## ベイズの定理
<p>
\begin{eqnarray}
    P(A|B) &=& \frac{P(A, B)}{P(B)}\\
    P(A, B) &=& P(A|B) P(B)\\
    P(B|A) &=& \frac{P(A, B)}{P(A)}\\
    &=& \frac{P(A|B) P(B)}{P(A)}
\end{eqnarray}
</p>

# 最尤(ゆう)推定
原因$x$により事象$D$が生じるとき、$x$が「晴れ」、「くもり」、「雨」といった
特定の値を取りうる時、$P(x)$を**事前確率**
$P(D|x)$を**尤度**、$P(x|D)$を**事後確率**
$P(D|x)$の最大値を与える$x$を**最尤値**、
$P(x|D)$の最大値を与える$x$を**事後確率の最頻値**と呼ぶ。

|---:|---:|---:|
| $P(x)$ |事前確率|
| $P(D\|x)$ |尤度|最尤値|
| $P(x\|D)$ |事後確率|事後確率の最頻値|

