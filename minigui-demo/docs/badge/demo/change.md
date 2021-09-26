<cn>
#### 动态
  展示动态变化的效果。
</cn>

<us>
#### Dynamic
  The count will be animated as it changes.
</us>

```vue
<template>
  <div>
    <div>
      <m-badge :count="count">
        <a href="#" class="head-example" />
      </m-badge>
      <m-button-group>
        <m-button @click="decline">
          <m-icon type="minus" />
        </m-button>
        <m-button @click="increase">
          <m-icon type="plus" />
        </m-button>
      </m-button-group>
    </div>
    <div style="margin-top: 10px">
      <m-badge :dot="show">
        <a href="#" class="head-example" />
      </m-badge>
      <m-switch v-model="show" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      count: 5,
      show: true,
    };
  },
  methods: {
    decline() {
      let count = this.count - 1;
      if (count < 0) {
        count = 0;
      }
      this.count = count;
    },
    increase() {
      this.count++;
    },
  },
};
</script>
```
