<cn>
#### 抽屉表单
在抽屉中使用表单。
</cn>

<us>
#### Submit form in drawer
Use form in drawer with submit button.
</us>

```vue
<template>
  <div>
    <m-button type="primary" @click="showDrawer"> <m-icon type="plus" /> New account </m-button>
    <m-drawer
      title="Create a new account"
      :width="720"
      :visible="visible"
      :body-style="{ paddingBottom: '80px' }"
      @close="onClose"
    >
      <m-form :form="form" layout="vertical" hide-required-mark>
        <m-row :gutter="16">
          <m-col :span="12">
            <m-form-item label="Name">
              <m-input
                v-decorator="[
                  'name',
                  {
                    rules: [{ required: true, message: 'Please enter user name' }],
                  },
                ]"
                placeholder="Please enter user name"
              />
            </m-form-item>
          </m-col>
          <m-col :span="12">
            <m-form-item label="Url">
              <m-input
                v-decorator="[
                  'url',
                  {
                    rules: [{ required: true, message: 'please enter url' }],
                  },
                ]"
                style="width: 100%"
                addon-before="http://"
                addon-after=".com"
                placeholder="please enter url"
              />
            </m-form-item>
          </m-col>
        </m-row>
        <m-row :gutter="16">
          <m-col :span="12">
            <m-form-item label="Owner">
              <m-select
                v-decorator="[
                  'owner',
                  {
                    rules: [{ required: true, message: 'Please select an owner' }],
                  },
                ]"
                placeholder="Please a-s an owner"
              >
                <m-select-option value="xiao">
                  Xiaoxiao Fu
                </m-select-option>
                <m-select-option value="mao">
                  Maomao Zhou
                </m-select-option>
              </m-select>
            </m-form-item>
          </m-col>
          <m-col :span="12">
            <m-form-item label="Type">
              <m-select
                v-decorator="[
                  'type',
                  {
                    rules: [{ required: true, message: 'Please choose the type' }],
                  },
                ]"
                placeholder="Please choose the type"
              >
                <m-select-option value="private">
                  Private
                </m-select-option>
                <m-select-option value="public">
                  Public
                </m-select-option>
              </m-select>
            </m-form-item>
          </m-col>
        </m-row>
        <m-row :gutter="16">
          <m-col :span="12">
            <m-form-item label="Approver">
              <m-select
                v-decorator="[
                  'approver',
                  {
                    rules: [{ required: true, message: 'Please choose the approver' }],
                  },
                ]"
                placeholder="Please choose the approver"
              >
                <m-select-option value="jack">
                  Jack Ma
                </m-select-option>
                <m-select-option value="tom">
                  Tom Liu
                </m-select-option>
              </m-select>
            </m-form-item>
          </m-col>
          <m-col :span="12">
            <m-form-item label="DateTime">
              <m-date-picker
                v-decorator="[
                  'dateTime',
                  {
                    rules: [{ required: true, message: 'Please choose the dateTime' }],
                  },
                ]"
                style="width: 100%"
                :get-popup-container="trigger => trigger.parentNode"
              />
            </m-form-item>
          </m-col>
        </m-row>
        <m-row :gutter="16">
          <m-col :span="24">
            <m-form-item label="Description">
              <m-textarea
                v-decorator="[
                  'description',
                  {
                    rules: [{ required: true, message: 'Please enter url description' }],
                  },
                ]"
                :rows="4"
                placeholder="please enter url description"
              />
            </m-form-item>
          </m-col>
        </m-row>
      </m-form>
      <div
        :style="{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
          zIndex: 1,
        }"
      >
        <m-button :style="{ marginRight: '8px' }" @click="onClose">
          Cancel
        </m-button>
        <m-button type="primary" @click="onClose">
          Submit
        </m-button>
      </div>
    </m-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      visible: false,
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
```
