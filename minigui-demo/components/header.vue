<script>
import { isZhCN } from '../utils/util';
import packageInfo from '../../package.json';
import logo from '../public/logo.svg';

export default {
  inject: {
    demoContext: { default: {} },
  },
  props: {
    name: String,
    searchData: Array,
  },
  data() {
    return {
      visibleAdblockBanner: !!this.demoContext.blocked,
      value: null,
      showTopBanner: !localStorage.getItem('notification-key-2.0'),
    };
  },
  watch: {
    'demoContex.blocked': function blocked(val) {
      this.visibleAdblockBanner = !!val;
    },
  },
  mounted() {
  },
  methods: {
    handleClose(key) {
      localStorage.removeItem(`notification-key-${key}`);
      localStorage.setItem(`notification-key-${key}`, true);
      this.showTopBanner = false;
    },
    handleClick() {
      const name = this.name;
      const path = this.$route.path;
      const newName = isZhCN(name) ? name.replace(/-cn\/?$/, '') : `${name}-cn`;
      this.$router.push({
        path: path.replace(name, newName),
      });
      this.$i18n.locale = isZhCN(name) ? 'en-US' : 'zh-CN';
    },
    onSelect(val) {
      this.$router.push(val);
      this.value = val;
    },
    closeTopBanner() {},
  },
  render() {
    const name = this.name;
    const visibleAdblockBanner = false; // this.visibleAdblockBanner;
    const isCN = isZhCN(name);
    const path = this.$route.path;
    const selectedKeys = path === '/jobs/list-cn' ? ['jobs'] : ['components'];
    return (
      <header id="header">
        <m-row>
          <m-col class="header-left" xxl={4} xl={5} lg={5} md={6} sm={24} xs={24}>
            <router-link to={{ path: '/' }} id="logo">
              <img alt="logo" height="32" src={logo} />
            </router-link>
            <m-button
              ghost
              size="small"
              onClick={this.handleClick}
              class="header-lang-button"
              key="lang-button"
            >
              {isCN ? 'English' : '中文'}
            </m-button>
          </m-col>
          <m-col xxl={20} xl={19} lg={19} md={18} sm={0} xs={0}>
            <div id="search-box"></div>
            <m-select size="small" defaultValue={packageInfo.version} class="version">
              <m-select-option value={packageInfo.version}>{packageInfo.version}</m-select-option>
            </m-select>
            <m-menu selectedKeys={selectedKeys} mode="horizontal" class="menu-site" id="nav">
              <m-menu-item key="components">
                <router-link to="/docs/vue/introduce">{isCN ? '组件' : 'Components'}</router-link>
              </m-menu-item>
            </m-menu>
          </m-col>
        </m-row>
      </header>
    );
  },
};
</script>

<style scope>
#header{
  /* border-bottom: 1px solid #dcdfe6; */
  box-shadow: 0 0 0.375rem 0 rgb(0 0 0 / 25%);
}
.adblock-banner {
  position: relative;
  z-index: 100;
  min-width: 1000px;
  padding: 16px;
  line-height: 28px;
  color: #8590a6;
  text-align: center;
  background-color: #ebebeb;
}
.version {
  margin-right: 20px;
}
.close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
.global-notification {
  text-align: center;
  background: #001529;
  padding: 20px 0;
  font-size: 16px;
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
  z-index: 99;
}
.global-notification a {
  color: #177ddc;
}
</style>
