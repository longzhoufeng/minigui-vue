<cn>
#### 热门标签
选择你感兴趣的话题。
</cn>

<us>
#### Hot Tags
Select your favourite topics.
</us>

```vue
<template>
  <div>
    <span :style="{ marginRight: 8 }">Categories:</span>
    <template v-for="tag in tags">
      <m-checkable-tag
        :key="tag"
        :checked="selectedTags.indexOf(tag) > -1"
        @change="checked => handleChange(tag, checked)"
      >
        {{ tag }}
      </m-checkable-tag>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      tags: ['Movies', 'Books', 'Music', 'Sports'],
      selectedTags: [],
    };
  },
  methods: {
    handleChange(tag, checked) {
      const { selectedTags } = this;
      const nextSelectedTags = checked
        ? [...selectedTags, tag]
        : selectedTags.filter(t => t !== tag);
      console.log('You are interested in: ', nextSelectedTags);
      this.selectedTags = nextSelectedTags;
    },
  },
};
</script>
```
