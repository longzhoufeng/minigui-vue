<cn>
#### 其他字符
可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
</cn>

<us>
#### Other Character
Replace the default star to other character like alphabet, digit, iconfont or even Chinese word.
</us>

```vue
<template>
  <div>
    <m-rate allow-half>
      <m-icon slot="character" type="heart" />
    </m-rate>
    <br />
    <m-rate character="A" allow-half style="fontSize: 36px" />
    <br />
    <m-rate character="好" allow-half />
    <br />
  </div>
</template>
```
