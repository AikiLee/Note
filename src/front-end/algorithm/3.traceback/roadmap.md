回溯问题主要包含三个部分：子集，组合和排列

我们通过三个阶段来学习：

[[1.子集]]
[[2.组合]]
[[3.排列]]

17. 电话号码的字母组合 https://leetcode.cn/problems/letter-combinations-of-a-phone-number/solutions/2059416/hui-su-bu-hui-xie-tao-lu-zai-ci-pythonja-3orv/ 
18. 子集 https://leetcode.cn/problems/subsets/solutions/2059409/hui-su-bu-hui-xie-tao-lu-zai-ci-pythonja-8tkl/ 
19. 分割回文串 https://leetcode.cn/problems/palindrome-partitioning/solutions/2059414/hui-su-bu-hui-xie-tao-lu-zai-ci-pythonja-fues/ 
20. 课后作业：
21. 二叉树的所有路径 https://leetcode.cn/problems/binary-tree-paths/ 
22. 回溯+复习前面学的二叉树递归 
23. 路径总和 II https://leetcode.cn/problems/path-sum-ii/ 回溯+复习前面学的二叉树递归 
24. 字母大小写全排列 https://leetcode.cn/problems/letter-case-permutation/ 
25. LCP 51. 烹饪料理 https://leetcode.cn/problems/UEcfPD/ 
26. 被列覆盖的最多行数 https://leetcode.cn/problems/maximum-rows-covered-by-columns/ 
27. 串联字符串的最大长度 https://leetcode.cn/problems/maximum-length-of-a-concatenated-string-with-unique-characters/ 
28. 射箭比赛中的最大得分 https://leetcode.cn/problems/maximum-points-in-an-archery-competition/ 
29. 求一个整数的惩罚数 https://leetcode.cn/problems/find-the-punishment-number-of-an-integer/ 
30. 复原 IP 地址 https://leetcode.cn/problems/restore-ip-addresses/
31. 组合 https://leetcode.cn/problems/combinations/solutions/2071017/hui-su-bu-hui-xie-tao-lu-zai-ci-pythonja-65lh/ 
32. 组合总和 III https://leetcode.cn/problems/combination-sum-iii/solutions/2071013/hui-su-bu-hui-xie-tao-lu-zai-ci-pythonja-feme/ 
33. 括号生成 https://leetcode.cn/problems/generate-parentheses/solutions/2071015/hui-su-bu-hui-xie-tao-lu-zai-ci-pythonja-wcdw/ 
34. 课后作业： 按照视频中的要求，用另一种写法完成上面三题。 
35. 组合总和 https://leetcode.cn/problems/combination-sum/ 
36. 复原 IP 地址 https://leetcode.cn/problems/restore-ip-addresses/

37. 全排列 https://leetcode.cn/problems/permutations/solution/hui-su-bu-hui-xie-tao-lu-zai-ci-jing-que-6hrh/ 
38. N 皇后 https://leetcode.cn/problems/n-queens/solution/hui-su-tao-lu-miao-sha-nhuang-hou-shi-pi-mljv/ 
39. N 皇后 II https://leetcode.cn/problems/n-queens-ii/solution/hui-su-miao-sha-nhuang-hou-yi-ge-shi-pin-l41l 
40. 课后作业： 
41. 统计各位数字都不同的数字个数 https://leetcode.cn/problems/count-numbers-with-unique-digits/ 
42. 将石头分散到网格图的最少移动次数 https://leetcode.cn/problems/minimum-moves-to-spread-stones-over-grid/

| 题目                                                                                                               | 说明                                                                    | 备注        |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------- |
| **一、组合型 (Combinations)**                                                                                         | **核心：startIndex 控制顺序，不回头的选取**                                         |           |
| [17. 电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)                             | **组合型**。多个集合求组合（笛卡尔积）。                                                |           |
| [77. 组合](https://leetcode.cn/problems/combinations/)                                                             | **组合型**。最基础的 $C(n, k)$ 问题。                                            |           |
| [39. 组合总和](https://leetcode.cn/problems/combination-sum/)                                                        | **组合型**。元素无重复，可无限复选（完全背包逻辑）。                                          |           |
| [40. 组合总和 II](https://leetcode.cn/problems/combination-sum-ii/)                                                  | **组合型**。元素有重复，不可复选。需可以排序并在**树层去重**。                                   | 后续添加 (高频) |
| [216. 组合总和 III](https://leetcode.cn/problems/combination-sum-iii/)                                               | **组合型**。个数和总和同时受限。                                                    |           |
| [22. 括号生成](https://leetcode.cn/problems/generate-parentheses/)                                                   | **组合型**。控制左、右括号数量的合法性进行组合。                                            |           |
| [131. 分割回文串](https://leetcode.cn/problems/palindrome-partitioning/)                                              | **组合/切割型**。切割线就是组合的分割点，判断每段是否回文。                                      |           |
| [93. 复原 IP 地址](https://leetcode.cn/problems/restore-ip-addresses/)                                               | **组合/切割型**。固定切3刀，每段需合法（0-255，无前导0）。                                   |           |
| [2698. 求一个整数的惩罚数](https://leetcode.cn/problems/find-the-punishment-number-of-an-integer/)                        | **组合/切割型**。判断数字字符串能否切分成和为目标值的段。                                       |           |
| [2212. 射箭比赛中的最大得分](https://leetcode.cn/problems/maximum-points-in-an-archery-competition/)                       | **组合型**。类似0-1背包，赢或不赢某个区域。                                             |           |
| [2397. 被列覆盖的最多行数](https://leetcode.cn/problems/maximum-rows-covered-by-columns/)                                 | **组合型**。从矩阵中选列覆盖行。                                                    |           |
| **二、子集型 (Subsets)**                                                                                              | **核心：收集树的所有节点（不仅是叶子）**                                                |           |
| [78. 子集](https://leetcode.cn/problems/subsets/)                                                                  | **子集型**。最基础的子集问题，收集所有路径节点。                                            |           |
| [90. 子集 II](https://leetcode.cn/problems/subsets-ii/)                                                            | **子集型**。元素有重复。需排序并在**树层去重**。                                          | 后续添加 (高频) |
| [491. 递增子序列](https://leetcode.cn/problems/non-decreasing-subsequences/)                                          | **子集型**。不能排序（要维护原序），需使用 Set 做本层去重。                                    | 后续添加 (易错) |
| [784. 字母大小写全排列](https://leetcode.cn/problems/letter-case-permutation/)                                           | **子集型**。每个位置两种状态（大写/小写），类似二叉树子集。                                      |           |
| [1239. 串联字符串的最大长度](https://leetcode.cn/problems/maximum-length-of-a-concatenated-string-with-unique-characters/) | **子集型**。选字符串子集，要求字符不重复（可用位运算优化）。                                      |           |
| [LCP 51. 烹饪料理](https://leetcode.cn/problems/UEcfPD/)                                                             | **子集型**。选择料理组合满足条件。                                                   |           |
| **三、排列型 (Permutations)**                                                                                         | **核心：used 数组标记，每次从头遍历**                                               |           |
| [46. 全排列](https://leetcode.cn/problems/permutations/)                                                            | **排列型**。基础全排列，使用 <br><br>```<br>used<br>```<br><br> 数组记录访问状态。         |           |
| [47. 全排列 II](https://leetcode.cn/problems/permutations-ii/)                                                      | **排列型**。元素有重复。需排序 + <br><br>```<br>used<br>```<br><br> 标记 + **树层去重**。 | 后续添加 (高频) |
| [51. N 皇后](https://leetcode.cn/problems/n-queens/)                                                               | **排列型/棋盘**。著名的棋盘全排列约束问题。                                              |           |
| [52. N 皇后 II](https://leetcode.cn/problems/n-queens-ii/)                                                         | **排列型/棋盘**。同上，仅计数。                                                    |           |
| [357. 统计各位数字都不同的数字个数](https://leetcode.cn/problems/count-numbers-with-unique-digits/)                            | **排列型**。可选回溯或纯数学排列公式。                                                 |           |
| [2850. 将石头分散到网格图的最少移动次数](https://leetcode.cn/problems/minimum-moves-to-spread-stones-over-grid/)                 | **排列型**。全排列石头的来源/去向。                                                  |           |
| **四、其他 / 网格 / 树形 (Others)**                                                                                      | **树 dfs 或 二维网格 floodfill**                                            |           |
| [79. 单词搜索](https://leetcode.cn/problems/word-search/)                                                            | **网格回溯**。面试超高频。二维网格找路径，需标记 visited。                                   | 后续添加 (高频) |
| [257. 二叉树的所有路径](https://leetcode.cn/problems/binary-tree-paths/)                                                 | **树形回溯**。DFS 遍历，字符串拼接路径。                                              |           |
| [113. 路径总和 II](https://leetcode.cn/problems/path-sum-ii/)                                                        | **树形回溯**。DFS 找路径和，需手动 <br><br>```<br>path.pop()<br>```<br><br>。       |           |
| [37. 解数独](https://leetcode.cn/problems/sudoku-solver/)                                                           | **网格回溯**。二维递归，回溯的终极应用。                                                | 后续添加 (进阶) |