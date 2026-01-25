## 三个问题

1. A. 给定一个最多包含 40 亿个随机排列的 32 位整数的顺序文件，找出一个不在文件中的 32 位整数（在文件中至少缺失一个这样的数一为什么 2 ）：在具有足够内存的'青．况下，如何解决该问题？如果有几个外部的“临时"文件可用，但是仅有几百字节的内存，又该如何解决该问题？
2. 将一个n元一维向量向左旋转i个位置，请问你有几种方式
3. 找出一个单词的所有变位词

## 二分搜索

```py
def binary_search(arr:list[int],target):
	n = len(arr)
	# 使用开区间的写法
	left,right = -1,n
	while left + 1 < right:
		mid =left + (right - left) //2
		if arr[mid] > target:
			right = mid
		elif arr[mid] < target:
			left = mid
		else:
			return mid
	return -1

```

## 三次翻转

```py
reverse(0,k-1)
reverse(k,n-1)
reverse(0,n-1)
```

## 第三个问题就是第二个问题的应用 
