先看一下基本的概念：
## 子串

字符串 𝑆![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "S") 的 **子串** 𝑆[𝑖..𝑗]，𝑖 ≤𝑗![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "S[i..j]，i≤j")，表示 𝑆![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "S") 串中从 𝑖![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "i") 到 𝑗![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "j") 这一段，也就是顺次排列 𝑆[𝑖],𝑆[𝑖 +1],…,𝑆[𝑗]![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "S[i],S[i+1],\ldots,S[j]") 形成的字符串．

有时也会用 𝑆[𝑖..𝑗]![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "S[i..j]")，𝑖 >𝑗![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "i>j") 来表示空串．

**子串要求连续**

## 子序列

字符串 𝑆![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "S") 的 **子序列** 是从 𝑆![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "S") 中将若干元素提取出来并不改变相对位置形成的序列，即 𝑆[𝑝1],𝑆[𝑝2],…,𝑆[𝑝𝑘]![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "S[p_1],S[p_2],\ldots,S[p_k]")，1 ≤𝑝1 <𝑝2 <⋯ <𝑝𝑘 ≤|𝑆|![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "1\le p_1< p_2<\cdots< p_k\le|S|")．

**不要求连续**

## 后缀

**后缀** 是指从某个位置 𝑖![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "i") 开始到整个串末尾结束的一个特殊子串．所以也是要求连续的
举例来说，字符串 `abcabcd` 的所有后缀为 `{d, cd, bcd, abcd, cabcd, bcabcd, abcabcd}`，而它的真后缀为 `{d, cd, bcd, abcd, cabcd, bcabcd}`．

真后缀需要除掉本身

## 前缀

和后缀类似，从开头到i的特殊子串，并且要求连续。举例来说，字符串 `abcabcd` 的所有前缀为 `{a, ab, abc, abca, abcab, abcabc, abcabcd}`

真前缀需要除去本身

## 字典序

以第 𝑖![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "i") 个字符作为第 𝑖![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "i") 关键字进行大小比较，空字符小于字符集内任何字符（即：𝑎 <𝑎𝑎![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 "a< aa")）

## 回文串

前半部分和后半部分相同

## 汉明距离

两个*等长* 字符串之间的距离，表示两个字符串之前字符不同的数量
我们可以利用异或的性质进行计算，（这在python需要借助ord来实现）

