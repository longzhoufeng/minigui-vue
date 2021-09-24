# LocaleProvider 国际化

为组件内建文案提供统一的国际化支持。

## 使用

LocaleProvider 使用 Vue 的 [provide/inject](https://cn.vuejs.org/v2/api/#provide-inject) 特性，只需在应用外围包裹一次即可全局生效。

```html
<template>
  <a-locale-provider :locale="zh_CN">
    <App />
  </a-locale-provider>
</template>
<script>
  import zh_CN from 'minigui-vue/lib/locale-provider/zh_CN';
  import moment from 'moment';
  import 'moment/locale/zh-cn';

  moment.locale('zh-cn');
  export default {
    data() {
      return {
        zh_CN,
      };
    },
  };
</script>
```


注意：如果你需要使用 UMD 版的 dist 文件，应该引入 `minigui-vue/dist/antd-with-locales.js`，同时引入 moment 对应的 locale，然后按以下方式使用：

```html
<template>
  <a-locale-provider :locale="locales.en_US">
    <App />
  </a-locale-provider>
</template>
<script>
  const { LocaleProvider, locales } = window.antd;
</script>
```

## 代码演示
