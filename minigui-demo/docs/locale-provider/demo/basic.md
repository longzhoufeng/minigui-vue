<cn>
#### 国际化
用 `LocaleProvider` 包裹你的应用，并引用对应的语言包。
</cn>

<us>
#### Localization
Wrap your app with `LocaleProvider`, and apply the corresponding language package.
</us>

```vue
<template>
  <m-locale-provider :locale="zhCN">
    <m-pagination :default-current="1" :total="50" show-size-changer />
  </m-locale-provider>
</template>
<script>
// you should use import zhCN from 'minigui-vue/es/locale-provider/zh_CN';
import zhCN from 'minigui-vue/es/locale-provider/zh_CN';
export default {
  data() {
    return {
      zhCN,
    };
  },
};
</script>
```
