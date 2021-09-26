<cn>
#### 类型
支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
</cn>

<us>
#### Type
Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
</us>

```vue
<template>
  <div>
    <m-avatar icon="user" />
    <m-avatar>
      <m-icon slot="icon" type="user" />
    </m-avatar>
    <m-avatar>U</m-avatar>
    <m-avatar>USER</m-avatar>
    <m-avatar src="/public/avatar.png" />
    <m-avatar style="color: #f56a00; backgroundColor: #fde3cf">
      U
    </m-avatar>
    <m-avatar style="backgroundColor:#87d068" icon="user" />
  </div>
</template>
```
