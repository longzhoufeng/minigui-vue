<cn>
#### 在卡片中使用
在卡片中展示统计数值。
</cn>

<us>
#### In Card
Display statistic data in Card.
</us>

```vue
<template>
  <div style="background: #ECECEC; padding: 30px">
    <m-row :gutter="16">
      <m-col :span="12">
        <m-card>
          <m-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template #prefix>
              <m-icon type="arrow-up" />
            </template>
          </m-statistic>
        </m-card>
      </m-col>
      <m-col :span="12">
        <m-card>
          <m-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
            <template #prefix>
              <m-icon type="arrow-down" />
            </template>
          </m-statistic>
        </m-card>
      </m-col>
    </m-row>
  </div>
</template>
```
