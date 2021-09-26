<cn>
#### 单位
通过前缀和后缀添加单位。
</cn>

<us>
#### Unit
Add unit through `prefix` and `suffix`.
</us>

```vue
<template>
  <m-row :gutter="16">
    <m-col :span="12">
      <m-statistic title="Feedback" :value="1128" style="margin-right: 50px">
        <template #suffix>
          <m-icon type="like" />
        </template>
      </m-statistic>
    </m-col>
    <m-col :span="12">
      <m-statistic title="Unmerged" :value="93" class="demo-class">
        <template #suffix>
          <span> / 100</span>
        </template>
      </m-statistic>
    </m-col>
  </m-row>
</template>
```
