<cn>
#### 无效或只读
通过 `disabled` 属性设置是否生效。通过 `readOnly` 属性设置是否只读。
</cn>

<us>
#### disabled or readOnly
Configurate disabled and readOnly.
</us>

```vue
<template>
  <div>
    <div style="margin-bottom: 10px">
      <m-mentions placeholder="this is disabled Mentions" disabled>
        <m-mentions-option v-for="value in options" :key="value" :value="value">
          {{ value }}
        </m-mentions-option>
      </m-mentions>
    </div>
    <m-mentions placeholder="this is readOnly a-mentions" readonly>
      <m-mentions-option v-for="value in options" :key="value" :value="value">
        {{ value }}
      </m-mentions-option>
    </m-mentions>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: ['afc163', 'zombieJ', 'yesmeck'],
    };
  },
};
</script>
```
