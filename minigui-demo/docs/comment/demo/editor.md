<cn>
#### 回复框
评论编辑器组件提供了相同样式的封装以支持自定义评论编辑器。
</cn>

<us>
#### Reply Editor
Comment can be used as editor, user can customize the editor component.
</us>

```vue
<template>
  <div>
    <m-list
      v-if="comments.length"
      :data-source="comments"
      :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
      item-layout="horizontal"
    >
      <m-list-item slot="renderItem" slot-scope="item, index">
        <m-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </m-list-item>
    </m-list>
    <m-comment>
      <m-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <div slot="content">
        <m-form-item>
          <m-textarea :rows="4" :value="value" @change="handleChange" />
        </m-form-item>
        <m-form-item>
          <m-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            Add Comment
          </m-button>
        </m-form-item>
      </div>
    </m-comment>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      comments: [],
      submitting: false,
      value: '',
      moment,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.value) {
        return;
      }

      this.submitting = true;

      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: this.value,
            datetime: moment().fromNow(),
          },
          ...this.comments,
        ];
        this.value = '';
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    },
  },
};
</script>
```
