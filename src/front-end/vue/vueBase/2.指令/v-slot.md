与具名插槽相配合，或是期望接收 props 的作用域插槽。
用途广范，用法灵活

## 1.具名插槽

```vue
<template>
<!-- 组件 -->
<div class="container">
	<header>
	<slot name="header"></slot>
	</header>
	<main>
	<slot></slot>
	</main>
	<footer>
	<slot name="footer"></slot>
	</footer>
</div>
</template>

<style>
footer {
	border-top: 1px solid #ccc;
	color: #666;
	font-size: 0.8em；
}
</style>
```
在这里，我们在引入组件后，可以指定渲染位置

```vue
<script setup>

import BaseLayout from './BaseLayout.vue'

</script>

<template>
	<BaseLayout>
		<template #header>
			<h1>Here might be a page title</h1>
		</template>
		<template #default>
			<p>A paragraph for the main content.</p>
			<p>And another one.</p>
		</template>
		<template #footer>
			<p>Here's some contact info</p>
		</template>
	</BaseLayout>
</template>
```
这样我们就可以直接复用组件样式，并自定义内容了

## 2.接受作用域插槽

这个也是比较容易理解的，由于插槽的作用域限制，本身是父传子，但是如果有需要父组件访问插槽子组件的需求，就需要在父组件上使用v-slot来接受来自子组件的数据

```vue
<!-- 接收 prop 的默认插槽，并解构 --> 
<Mouse v-slot="{ x, y }"> 
	Mouse position: {{ x }}, {{ y }} 
</Mouse>

<!-- 子组件 -->
<div>
	<slot :x="10" :y="10"></slot>
</div>
```

## 3.具名作用域插槽

使用方法类似，只需要注意指定props的命名，这里有一个需要注意的点，当同时使用默认插槽和具名插槽，就需要使用显式默认插槽

```vue
<MyComponent>
  <!-- 使用显式的默认插槽 -->
  <template #default="{ message }">
    <p>{{ message }}</p>
  </template>

  <template #footer>
    <p>Here's some contact info</p>
  </template>
</MyComponent>
```

