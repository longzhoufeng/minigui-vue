<cn>
#### 定制日期单元格
使用 `dateRender` 可以自定义日期单元格的内容和样式。
</cn>

<us>
#### Customized Date Rendering
We can customize the rendering of date cells in the calendar by providing a `dateRender` function to `DatePicker`.
</us>

```vue
<template>
  <div>
    <m-date-picker>
      <template slot="dateRender" slot-scope="current, today">
        <div class="minigui-calendar-date" :style="getCurrentStyle(current, today)">
          {{ current.date() }}
        </div>
      </template>
    </m-date-picker>
    <m-range-picker>
      <template slot="dateRender" slot-scope="current">
        <div class="minigui-calendar-date" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </m-range-picker>
    <m-week-picker>
      <template slot="dateRender" slot-scope="current">
        <div class="minigui-calendar-date" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </m-week-picker>
  </div>
</template>
<script>
export default {
  methods: {
    getCurrentStyle(current, today) {
      const style = {};
      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }
      return style;
    },
  },
};
</script>
```
