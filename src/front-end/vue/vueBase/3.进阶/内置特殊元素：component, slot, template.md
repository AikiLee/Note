## 1.component

一个用于渲染动态组件或元素的“元组件”。

```vue
<script setup>
import Foo from './Foo.vue'
import Bar from './Bar.vue'
</script>

<template>
    <component :is="Math.random() > 0.5 ? Foo : Bar" />
</template>
```

### 内部组件都可以直接传递给component

+但是需要先注册

```vue
<script>
	import { Transition, TransitionGroup } from 'vue'

export default {
    components: {
        Transition,
        TransitionGroup,
    },
}
//当然如果使用setup，会将组件自动注册
</script>

<template>
    <component :is="isGroup ? 'TransitionGroup' : 'Transition'">
        ...
    </component>
</template>
```

### 如果在 `<component>` 标签上使用 `v-model`，模板编译器会将其扩展为 `modelValue` prop 和 `update:modelValue` 事件监听器，就像对任何其他组件一样。但是，这与原生 HTML 元素不兼容，例如 `<input>` 或 `<select>`。因此，在动态创建的原生元素上使用 `v-model` 将不起作用：

## 2.slot渲染的出口

## 3.template占位符

当我们想要使用内置指令而不在 DOM 中渲染元素时，`<template>` 标签可以作为占位符使用。其需要配和v-if/v-for/v-slot等其他操作符一起使用
