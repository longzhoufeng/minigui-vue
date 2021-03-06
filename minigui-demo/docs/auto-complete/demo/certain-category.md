<cn>
#### 查询模式 - 确定类目
查询模式 - 确定类目
</cn>

<us>
#### Lookup-Patterns - Certain Category
Lookup-Patterns - Certain Category
</us>

```vue
<template>
  <div class="certain-category-search-wrapper" style="width: 250px">
    <m-auto-complete
      class="certain-category-search"
      dropdown-class-name="certain-category-search-dropdown"
      :dropdown-match-select-width="false"
      :dropdown-style="{ width: '300px' }"
      size="large"
      style="width: 100%"
      placeholder="input here"
      option-label-prop="value"
    >
      <template slot="dataSource">
        <m-select-opt-group v-for="group in dataSource" :key="group.title">
          <span slot="label">
            {{ group.title }}
            <a
              style="float: right"
              href="https://www.google.com/search?q=minigui"
              target="_blank"
              rel="noopener noreferrer"
              >more
            </a>
          </span>
          <m-select-option v-for="opt in group.children" :key="opt.title" :value="opt.title">
            {{ opt.title }}
            <span class="certain-search-item-count">{{ opt.count }} people</span>
          </m-select-option>
        </m-select-opt-group>
        <m-select-option key="all" disabled class="show-all">
          <a
            href="https://www.google.com/search?q=minigui-vue"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all results
          </a>
        </m-select-option>
      </template>
      <m-input>
        <m-icon slot="suffix" type="search" class="certain-category-icon" />
      </m-input>
    </m-auto-complete>
  </div>
</template>
<script>
const dataSource = [
  {
    title: 'Libraries',
    children: [
      {
        title: 'MiniguiVue',
        count: 10000,
      },
      {
        title: 'MiniguiVue',
        count: 10600,
      },
    ],
  },
  {
    title: 'Solutions',
    children: [
      {
        title: 'MiniguiVue',
        count: 60100,
      },
      {
        title: 'MiniguiVue',
        count: 30010,
      },
    ],
  },
  {
    title: 'Articles',
    children: [
      {
        title: 'MiniguiVue',
        count: 100000,
      },
    ],
  },
];
export default {
  data() {
    return {
      dataSource,
    };
  },
};
</script>
<style>
.certain-category-search-dropdown .minigui-select-dropdown-menu-item-group-title {
  color: #666;
  font-weight: bold;
}

.certain-category-search-dropdown .minigui-select-dropdown-menu-item-group {
  border-bottom: 1px solid #f6f6f6;
}

.certain-category-search-dropdown .minigui-select-dropdown-menu-item {
  padding-left: 16px;
}

.certain-category-search-dropdown .minigui-select-dropdown-menu-item.show-all {
  text-align: center;
  cursor: default;
}

.certain-category-search-dropdown .minigui-select-dropdown-menu {
  max-height: 300px;
}
</style>
<style scoped>
.certain-category-search-wrapper
  >>> .certain-category-search.minigui-select-auto-complete
  .minigui-input-affix-wrapper
  .minigui-input-suffix {
  right: 12px;
}
.certain-category-search-wrapper >>> .certain-search-item-count {
  position: absolute;
  color: #999;
  right: 16px;
}
.certain-category-search-wrapper
  >>> .certain-category-search.minigui-select-focused
  .certain-category-icon {
  color: #108ee9;
}
.certain-category-search-wrapper >>> .certain-category-icon {
  color: #6e6e6e;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  font-size: 16px;
}
</style>
```
