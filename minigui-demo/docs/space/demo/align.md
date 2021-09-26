<cn>
#### 对齐
设置对齐模式。
</cn>

<us>
#### Align
Config item align.
</us>

```vue
<template>
  <div class="space-align-container">
    <div class="space-align-block">
      <m-space align="center">
        center
        <m-button type="primary">Primary</m-button>
        <span class="mock-block">Block</span>
      </m-space>
    </div>
    <div class="space-align-block">
      <m-space align="start">
        start
        <m-button type="primary">Primary</m-button>
        <span class="mock-block">Block</span>
      </m-space>
    </div>
    <div class="space-align-block">
      <m-space align="end">
        end
        <m-button type="primary">Primary</m-button>
        <span class="mock-block">Block</span>
      </m-space>
    </div>
    <div class="space-align-block">
      <m-space align="baseline">
        baseline
        <m-button type="primary">Primary</m-button>
        <span class="mock-block">Block</span>
      </m-space>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.space-align-container {
  display: flex;
  align-item: flex-start;
  flex-wrap: wrap;
}
.space-align-block {
  margin: 8px 4px;
  border: 1px solid #40a9ff;
  padding: 4px;
  flex: none;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
</style>
```
