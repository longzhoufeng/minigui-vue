<cn>
#### 配合 Form 使用
受控模式，例如配合 Form 使用。
</cn>

<us>
#### With Form
Controlled mode, for example, to work with `Form`.
</us>

```vue
<template>
  <m-form :form="form" layout="horizontal">
    <m-form-item label="Top coders" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <m-mentions
        v-decorator="[
          'coders',
          {
            rules: [{ validator: checkMention }],
          },
        ]"
        rows="1"
      >
        <m-mentions-option value="afc163">
          afc163
        </m-mentions-option>
        <m-mentions-option value="zombieJ">
          zombieJ
        </m-mentions-option>
        <m-mentions-option value="yesmeck">
          yesmeck
        </m-mentions-option>
      </m-mentions>
    </m-form-item>
    <m-form-item label="Bio" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
      <m-mentions
        v-decorator="[
          'bio',
          {
            rules: [{ required: true }],
          },
        ]"
        rows="3"
        placeholder="You can use @ to ref user here"
      >
        <m-mentions-option value="afc163">
          afc163
        </m-mentions-option>
        <m-mentions-option value="zombieJ">
          zombieJ
        </m-mentions-option>
        <m-mentions-option value="yesmeck">
          yesmeck
        </m-mentions-option>
      </m-mentions>
    </m-form-item>
    <m-form-item :wrapper-col="{ span: 12, offset: 5 }">
      <m-button type="primary" @click="handleSubmit">
        Submit
      </m-button>
      <m-button style="margin-left: 8px;" @click="handleReset">
        Reset
      </m-button>
    </m-form-item>
  </m-form>
</template>
<script>
import { Mentions } from 'minigui-vue';
const { getMentions } = Mentions;
export default {
  data() {
    return {
      form: this.$form.createForm(this, { name: 'mentions' }),
    };
  },
  methods: {
    handleReset(e) {
      e.preventDefault();
      this.form.resetFields();
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((errors, values) => {
        if (errors) {
          console.log('Errors in the form!!!');
          return;
        }
        console.log('Submit!!!');
        console.log(values);
      });
    },
    checkMention(rule, value, callback) {
      const mentions = getMentions(value);
      if (mentions.length < 2) {
        callback(new Error('More than one must be selected!'));
      } else {
        callback();
      }
    },
  },
};
</script>
```
