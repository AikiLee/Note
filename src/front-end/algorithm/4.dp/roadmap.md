基础版：

| 题目                                                                            | 说明                                                                                                         | 备注      |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------- |
| **一、基础与网格 DP**                                                                | **入门：状态定义与转移**                                                                                             |         |
| [70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)                      | **斐波那契**。最简单的 DP，状态只与前两项有关。                                                                                | 母题      |
| [198. 打家劫舍](https://leetcode.cn/problems/house-robber/)                       | **相邻约束**。当前选不选，取决于前一项的状态。                                                                                  | 母题      |
| [64. 最小路径和](https://leetcode.cn/problems/minimum-path-sum/)                   | **网格DP**。二维矩阵走到右下角的最小开销。                                                                                   | 母题      |
| **二、背包问题**                                                                    | **核心：容量限制下的选择**                                                                                            |         |
| [416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/)       | **01背包**。转为“能否装满容量为 sum/2 的背包”。                                                                            | 必刷      |
| [322. 零钱兑换](https://leetcode.cn/problems/coin-change/)                        | **完全背包**。硬币无限取，求装满背包的**最少**硬币数。                                                                            | 必刷      |
| [518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-ii/)                  | **完全背包**。求装满背包的**组合数**（不讲顺序：1,2 和 2,1 算一种）。                                                                | 易混淆     |
| [377. 组合总和 Ⅳ](https://leetcode.cn/problems/combination-sum-iv/)               | **完全背包**。求装满背包的**排列数**（讲顺序：先遍历背包再遍历物品）。                                                                    | 易混淆     |
| **三、线性 DP**                                                                   | **核心：子序列与双串匹配**                                                                                            |         |
| [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)  | **LIS**。<br><br>```<br>O(N^2)<br>```<br><br> DP 解法是基础。                                                     | 母题      |
| [1143. 最长公共子序列](https://leetcode.cn/problems/longest-common-subsequence/)     | **LCS**。双串 DP 代表，比较 <br><br>```<br>dp[i-1][j]<br>```<br><br> 和 <br><br>```<br>dp[i][j-1]<br>```<br><br>。   | 母题      |
| [72. 编辑距离](https://leetcode.cn/problems/edit-distance/)                       | **LCS进阶**。两个字符串转换的最少操作，经典的二维 DP。                                                                           | 进阶      |
| [53. 最大子数组和](https://leetcode.cn/problems/maximum-subarray/)                  | **最大子段和**。<br><br>```<br>dp[i]<br>```<br><br> 标识以 <br><br>```<br>i<br>```<br><br> 结尾的最大和（其实就是贪心）。          | 补充 (高频) |
| **四、区间 DP**                                                                   | **核心：从小区间合并到大区间**                                                                                          |         |
| [516. 最长回文子序列](https://leetcode.cn/problems/longest-palindromic-subsequence/) | **区间DP**。<br><br>```<br>dp[i][j]<br>```<br><br> 由 <br><br>```<br>dp[i+1][j-1]<br>```<br><br> 转移而来，遍历顺序要注意。 | 母题      |
进阶：

|题目|说明|备注|
|---|---|---|
|**一、基础 DP (Basic)**|**斐波那契 / 爬楼梯 / 打家劫舍 / 网格路径**||
|[70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)|**基础**。斐波那契数列，状态转移 <br><br>```<br>dp[i] = dp[i-1] + dp[i-2]<br>```<br><br>。||
|[746. 使用最小花费爬楼梯](https://leetcode.cn/problems/min-cost-climbing-stairs/)|**基础**。爬楼梯带权值版，求最小消耗。||
|[198. 打家劫舍](https://leetcode.cn/problems/house-robber/)|**基础**。不能选相邻元素，状态机思维雏形。||
|[213. 打家劫舍 II](https://leetcode.cn/problems/house-robber-ii/)|**基础**。环形数组，拆分为“不包含首”和“不包含尾”两种情况。||
|[740. 删除并获得点数](https://leetcode.cn/problems/delete-and-earn/)|**基础**。哈希预处理后转化为“打家劫舍”问题。||
|[64. 最小路径和](https://leetcode.cn/problems/minimum-path-sum/)|**网格DP**。二维网格中的最小路径，只向下或向右。||
|[62. 不同路径](https://leetcode.cn/problems/unique-paths/)|**网格DP**。最基础的二维网格计数。|后续添加 (基础)|
|[63. 不同路径 II](https://leetcode.cn/problems/unique-paths-ii/)|**网格DP**。带障碍物的网格计数。|后续添加 (基础)|
|[2266. 统计打字方案数](https://leetcode.cn/problems/count-number-of-texts/)|**基础**。爬楼梯变种，一次可走多步（取决于按键映射）。||
|[2466. 统计构造好字符串的方案数](https://leetcode.cn/problems/count-ways-to-build-good-strings/)|**基础**。爬楼梯变种，步长分别为 <br><br>```<br>zero<br>```<br><br> 和 <br><br>```<br>one<br>```<br><br>。||
|**二、背包问题 (Knapsack)**|**01背包 / 完全背包 / 组合排列**||
|[416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/)|**01背包**。能否装满容量为 <br><br>```<br>sum/2<br>```<br><br> 的背包。||
|[494. 目标和](https://leetcode.cn/problems/target-sum/)|**01背包**。转化为“正数和 - 负数和 = target”的背包方案数问题。||
|[2915. 和为目标值的最长子序列长度](https://leetcode.cn/problems/length-of-the-longest-subsequence-that-sums-to-target/)|**01背包**。求装满背包的最大物品数量（长度）。||
|[2787. 将一个数字表示成幂的和](https://leetcode.cn/problems/ways-to-express-an-integer-as-sum-of-powers/)|**01背包**。物品需先预处理出来，然后求方案数。||
|[1049. 最后一块石头的重量 II](https://leetcode.cn/problems/last-stone-weight-ii/)|**01背包**。尽量把石大分成重量相近的两堆。|后续添加 (经典)|
|[322. 零钱兑换](https://leetcode.cn/problems/coin-change/)|**完全背包**。求装满背包的最少物品数。||
|[518. 零钱兑换 II](https://leetcode.cn/problems/coin-change-ii/)|**完全背包**。求装满背包的组合方案数（不讲顺序）。||
|[377. 组合总和 Ⅳ](https://leetcode.cn/problems/combination-sum-iv/)|**完全背包**。求排列方案数（讲顺序），外层遍历背包，内层遍历物品。||
|[279. 完全平方数](https://leetcode.cn/problems/perfect-squares/)|**完全背包**。物品是平方数，求最少数量。||
|**三、线性 DP (Linear)**|**LIS (最长递增子序列) & LCS (最长公共子序列) / 字符串**||
|[300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)|**LIS**。经典 $O(N^2)$ DP 或 $O(N \log N)$ 贪心+二分。||
|[1143. 最长公共子序列](https://leetcode.cn/problems/longest-common-subsequence/)|**LCS**。二维DP，比较 <br><br>```<br>text1[i]<br>```<br><br> 和 <br><br>```<br>text2[j]<br>```<br><br>。||
|[72. 编辑距离](https://leetcode.cn/problems/edit-distance/)|**LCS类**。经典的两个字符串转换最小操作数。||
|[583. 两个字符串的删除操作](https://leetcode.cn/problems/delete-operation-for-two-strings/)|**LCS类**。等价于求LCS后剩下的字符数。||
|[712. 两个字符串的最小ASCII删除和](https://leetcode.cn/problems/minimum-ascii-delete-sum-for-two-strings/)|**LCS类**。带权值的 LCS 问题。||
|[97. 交错字符串](https://leetcode.cn/problems/interleaving-string/)|**线性DP**。判断 s3 能否由 s1 和 s2 交错组成。||
|[115. 不同的子序列](https://leetcode.cn/problems/distinct-subsequences/)|**线性DP**。s 字串中 t 出现的次数，经典匹配问题。|后续添加 (高频)|
|[354. 俄罗斯套娃信封问题](https://leetcode.cn/problems/russian-doll-envelopes/)|**LIS进阶**。先排序，再求二维上的 LIS。||
|[1671. 得到山形数组的最少删除次数](https://leetcode.cn/problems/minimum-number-of-removals-to-make-mountain-array/)|**LIS进阶**。前后两次 LIS，寻找峰值点。||
|[2826. 将三个组排序](https://leetcode.cn/problems/sorting-three-groups/)|**LIS进阶**。求最长非递减子序列（值域只有1,2,3）。||
|[1092. 最短公共超序列](https://leetcode.cn/problems/shortest-common-supersequence/)|**LCS进阶**。根据 LCS 还原出的最短父串。||
|**四、区间 DP (Interval)**|**大区间由小区间合并得来，枚举切分点**||
|[516. 最长回文子序列](https://leetcode.cn/problems/longest-palindromic-subsequence/)|**区间DP**。<br><br>```<br>dp[i][j]<br>```<br><br> 表示区间 <br><br>```<br>[i, j]<br>```<br><br> 的最长回文。||
|[1312. 让字符串成为回文串的最少插入](https://leetcode.cn/problems/minimum-insertion-steps-to-make-a-string-palindrome/)|**区间DP**。等价于总长减去最长回文子序列长度。||
|[1039. 多边形三角剖分的最低得分](https://leetcode.cn/problems/minimum-score-triangulation-of-polygon/)|**区间DP**。矩阵链乘法的几何变体，枚举顶点划分。||
|[312. 戳气球](https://leetcode.cn/problems/burst-balloons/)|**区间DP**。逆向思维，枚举最后戳破的气球。|后续添加 (困难)|
|[1547. 切棍子的最小成本](https://leetcode.cn/problems/minimum-cost-to-cut-a-stick/)|**区间DP**。类似戳气球，枚举切割点。||
|[375. 猜数字大小 II](https://leetcode.cn/problems/guess-number-higher-or-lower-ii/)|**区间DP**。极小化极大（Minimax）思想。||
|[1771. 由子序列构造的最长回文串长度](https://leetcode.cn/problems/maximize-palindrome-length-from-subsequences/)|**区间DP**。拼接两个串后的最长回文子序列。||
|[3040. 相同分数的最大操作数目 II](https://leetcode.cn/problems/maximum-number-of-operations-with-the-same-score-ii/)|**区间DP**。只能操作两端，记忆化搜索通常比填表好写。|