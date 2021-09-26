<cn>
#### 校验其他组件
以上演示没有出现的表单控件对应的校验演示。
</cn>

<us>
#### Other Form Controls
Demonstration of validation configuration for form controls which are not shown in the demos above.
</us>

<template>
  <m-form
    id="components-form-demo-validate-other"
    :form="form"
    v-bind="formItemLayout"
    @submit="handleSubmit"
  >
    <m-form-item label="Plain Text">
      <span class="minigui-form-text">
        China
      </span>
    </m-form-item>
    <m-form-item label="Select" has-feedback>
      <m-select
        v-decorator="[
          'select',
          { rules: [{ required: true, message: 'Please select your country!' }] },
        ]"
        placeholder="Please select a country"
      >
        <m-select-option value="china">
          China
        </m-select-option>
        <m-select-option value="usa">
          U.S.A
        </m-select-option>
      </m-select>
    </m-form-item>

    <m-form-item label="Select[multiple]">
      <m-select
        v-decorator="[
          'select-multiple',
          {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          },
        ]"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <m-select-option value="red">
          Red
        </m-select-option>
        <m-select-option value="green">
          Green
        </m-select-option>
        <m-select-option value="blue">
          Blue
        </m-select-option>
      </m-select>
    </m-form-item>

    <m-form-item label="InputNumber">
      <m-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10" />
      <span class="minigui-form-text">
        machines
      </span>
    </m-form-item>

    <m-form-item label="Switch">
      <m-switch v-decorator="['switch', { valuePropName: 'checked' }]" />
    </m-form-item>

    <m-form-item label="Slider">
      <m-slider
        v-decorator="['slider']"
        :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }"
      />
    </m-form-item>

    <m-form-item label="Radio.Group">
      <m-radio-group v-decorator="['radio-group']">
        <m-radio value="a">
          item 1
        </m-radio>
        <m-radio value="b">
          item 2
        </m-radio>
        <m-radio value="c">
          item 3
        </m-radio>
      </m-radio-group>
    </m-form-item>

    <m-form-item label="Radio.Button">
      <m-radio-group v-decorator="['radio-button']">
        <m-radio-button value="a">
          item 1
        </m-radio-button>
        <m-radio-button value="b">
          item 2
        </m-radio-button>
        <m-radio-button value="c">
          item 3
        </m-radio-button>
      </m-radio-group>
    </m-form-item>

    <m-form-item label="Checkbox.Group">
      <m-checkbox-group
        v-decorator="['checkbox-group', { initialValue: ['A', 'B'] }]"
        style="width: 100%;"
      >
        <m-row>
          <m-col :span="8">
            <m-checkbox value="A">
              A
            </m-checkbox>
          </m-col>
          <m-col :span="8">
            <m-checkbox disabled value="B">
              B
            </m-checkbox>
          </m-col>
          <m-col :span="8">
            <m-checkbox value="C">
              C
            </m-checkbox>
          </m-col>
          <m-col :span="8">
            <m-checkbox value="D">
              D
            </m-checkbox>
          </m-col>
          <m-col :span="8">
            <m-checkbox value="E">
              E
            </m-checkbox>
          </m-col>
        </m-row>
      </m-checkbox-group>
    </m-form-item>

    <m-form-item label="Rate">
      <m-rate v-decorator="['rate', { initialValue: 3.5 }]" allow-half />
    </m-form-item>

    <m-form-item label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
      <m-upload
        v-decorator="[
          'upload',
          {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          },
        ]"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <m-button> <m-icon type="upload" /> Click to upload </m-button>
      </m-upload>
    </m-form-item>

    <m-form-item label="Dragger">
      <div class="dropbox">
        <m-upload-dragger
          v-decorator="[
            'dragger',
            {
              valuePropName: 'fileList',
              getValueFromEvent: normFile,
            },
          ]"
          name="files"
          action="/upload.do"
        >
          <p class="minigui-upload-drag-icon">
            <m-icon type="inbox" />
          </p>
          <p class="minigui-upload-text">
            Click or drag file to this area to upload
          </p>
          <p class="minigui-upload-hint">
            Support for a single or bulk upload.
          </p>
        </m-upload-dragger>
      </div>
    </m-form-item>

    <m-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <m-button type="primary" html-type="submit">
        Submit
      </m-button>
    </m-form-item>
  </m-form>
</template>

<script>
export default {
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
  }),
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'validate_other' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    normFile(e) {
      console.log('Upload event:', e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    },
  },
};
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>
