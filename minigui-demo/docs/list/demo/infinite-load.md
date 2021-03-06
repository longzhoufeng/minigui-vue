<cn>
#### 滚动加载
结合 [vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll) 实现滚动自动加载列表。
</cn>

<us>
#### Scrolling loaded
The example of infinite load with [vue-infinite-scroll](https://github.com/ElemeFE/vue-infinite-scroll).
</us>

```vue
<template>
  <div
    v-infinite-scroll="handleInfiniteOnLoad"
    class="demo-infinite-container"
    :infinite-scroll-disabled="busy"
    :infinite-scroll-distance="10"
  >
    <m-list :data-source="data">
      <m-list-item slot="renderItem" slot-scope="item, index">
        <m-list-item-meta :description="item.email">
          <a slot="title" :href="item.href">{{ item.name.last }}</a>
          <m-avatar
            slot="avatar"
            src="/img/avatar.png"
          />
        </m-list-item-meta>
        <div>Content</div>
      </m-list-item>
      <div v-if="loading && !busy" class="demo-loading-container">
        <m-spin />
      </div>
    </m-list>
  </div>
</template>
<script>
import reqwest from 'reqwest';
import infiniteScroll from 'vue-infinite-scroll';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
export default {
  directives: { infiniteScroll },
  data() {
    return {
      data: [],
      loading: false,
      busy: false,
    };
  },
  beforeMount() {
    this.fetchData(res => {
      this.data = res.results;
    });
  },
  methods: {
    fetchData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
    },
    handleInfiniteOnLoad() {
      const data = this.data;
      this.loading = true;
      if (data.length > 14) {
        this.$message.warning('Infinite List loaded all');
        this.busy = true;
        this.loading = false;
        return;
      }
      this.fetchData(res => {
        this.data = data.concat(res.results);
        this.loading = false;
      });
    },
  },
};
</script>
<style>
.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 300px;
}
.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>
```
