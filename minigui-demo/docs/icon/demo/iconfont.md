<cn>
#### 使用 iconfont.cn
对于使用 [iconfont.cn](http://iconfont.cn/) 的用户，通过设置 `createFromIconfontCN` 方法参数对象中的 `scriptUrl` 字段， 即可轻松地使用已有项目中的图标。
</cn>

<us>
#### Use iconfont.cn
If you are using [iconfont.cn](http://iconfont.cn/), you can use the icons in your project gracefully.
</us>

```vue
<template>
  <div class="icons-list">
    <icon-font type="icon-tuichu" />
    <icon-font type="icon-facebook" />
    <icon-font type="icon-twitter" />
  </div>
</template>
<script>
import { Icon } from 'minigui-vue';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//www.minigui.com.cn/icon/icon.js',
});
export default {
  components: {
    IconFont,
  },
};
</script>
<style scoped>
.icons-list >>> .anticon {
  margin-right: 6px;
  font-size: 24px;
}
</style>
```
