<cn>
#### 查询模式 - 不确定类目
查询模式 - 不确定类目
</cn>

<us>
#### Lookup-Patterns - Uncertain Category
Lookup-Patterns - Uncertain Category
</us>

```vue
<template>
  <div class="global-search-wrapper" style="width: 300px">
    <m-auto-complete
      class="global-search"
      size="large"
      style="width: 100%"
      placeholder="input here"
      option-label-prop="title"
      @select="onSelect"
      @search="handleSearch"
    >
      <template slot="dataSource">
        <m-select-option v-for="item in dataSource" :key="item.category" :title="item.category">
          Found {{ item.query }} on
          <a
            :href="`https://s.taobao.com/search?q=${item.query}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.category }}
          </a>
          <span className="global-search-item-count">{{ item.count }} results</span>
        </m-select-option>
      </template>
      <m-input>
        <m-button
          slot="suffix"
          style="margin-right: -12px"
          class="search-btn"
          size="large"
          type="primary"
        >
          <m-icon type="search" />
        </m-button>
      </m-input>
    </m-auto-complete>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataSource: [],
    };
  },
  methods: {
    onSelect(value) {
      console.log('onSelect', value);
    },

    handleSearch(value) {
      this.dataSource = value ? this.searchResult(value) : [];
    },

    getRandomInt(max, min = 0) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    searchResult(query) {
      return new Array(this.getRandomInt(5))
        .join('.')
        .split('.')
        .map((item, idx) => ({
          query,
          category: `${query}${idx}`,
          count: this.getRandomInt(200, 100),
        }));
    },
  },
};
</script>

<style>
.global-search-wrapper {
  padding-right: 50px;
}

.global-search {
  width: 100%;
}

.global-search.minigui-select-auto-complete .minigui-select-selection--single {
  margin-right: -46px;
}

.global-search.minigui-select-auto-complete .minigui-input-affix-wrapper .minigui-input:not(:last-child) {
  padding-right: 62px;
}

.global-search.minigui-select-auto-complete .minigui-input-affix-wrapper .minigui-input-suffix button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.global-search-item {
  display: flex;
}

.global-search-item-desc {
  flex: auto;
  text-overflow: ellipsis;
  overflow: hidden;
}

.global-search-item-count {
  flex: none;
}
</style>
```
