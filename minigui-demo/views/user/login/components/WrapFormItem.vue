<template>
  <m-form-item v-if="type === 'Captcha'">
    <m-row :gutter="8">
      <m-col :span="16">
        <m-input v-decorator="[name, getFormItemOptions()]" v-bind="customprops" />
      </m-col>
      <m-col :span="8">
        <m-button :disabled="!!count" class="getCaptcha" size="large" @click="handleClick">
          {{ count ? `${count} ${getCaptchaSecondText}` : getCaptchaButtonText }}
        </m-button>
      </m-col>
    </m-row>
  </m-form-item>
  <m-form-item v-else>
    <m-input v-decorator="[name, getFormItemOptions()]" v-bind="customprops" />
  </m-form-item>
</template>
<script>
export default {
  props: {
    defaultValue: String,
    rules: Array,
    updateActive: Function,
    form: Object,
    customprops: Object,
    name: String,
    placeholder: String,
    type: String,
    getCaptchaButtonText: {
      type: String,
      default: 'captcha',
    },
    getCaptchaSecondText: {
      type: String,
      default: 'second',
    },
    getCaptcha: Function,
    countDown: Number,
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    const { updateActive, name } = this.$props;
    if (updateActive) {
      updateActive(name);
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    getFormItemOptions() {
      const { defaultValue, customprops, rules } = this.$props;
      const options = {
        rules: rules || customprops.rules,
        onChange: this.handleChange,
      };
      if (defaultValue) {
        options.initialValue = defaultValue;
      }
      return options;
    },
    handleChange(...args) {
      this.$emit('change', ...args);
    },
    handleClick() {
      const { getCaptcha } = this.$props;
      const result = getCaptcha ? getCaptcha() : null;
      if (result === false) {
        return;
      }
      if (result instanceof Promise) {
        result.then(this.runGetCaptchaCountDown);
      } else {
        this.runGetCaptchaCountDown();
      }
    },
    runGetCaptchaCountDown() {
      const { countDown } = this.$props;
      this.count = countDown || 59;
      this.interval = setInterval(() => {
        this.count -= 1;
        if (this.count === 0) {
          clearInterval(this.interval);
        }
      }, 1000);
    },
  },
};
</script>
