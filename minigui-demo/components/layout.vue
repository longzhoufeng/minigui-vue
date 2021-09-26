<script>
import { enquireScreen } from 'enquire-js';
import AllDemo from '../site/demo';
import Header from './header';
import Footer from './footer';
import RightBottomAd from './right_bottom_ad';
import zhCN from 'minigui-vue/es/locale-provider/zh_CN';
import enUS from 'minigui-vue/es/locale-provider/default';
import sortBy from 'lodash/sortBy';
import { isZhCN } from '../utils/util';
import { Provider, create } from '../../components/_util/store';
import NProgress from 'nprogress';
import MobileMenu from '../../components/vc-drawer/src';

const docsList = [
  { key: 'introduce', enTitle: '使用', title: '使用说明' },
  { key: 'getting-started', enTitle: 'Getting Started', title: '快速上手' },
  { key: 'use-with-vue-cli', enTitle: 'Use in vue-cli', title: '在 vue-cli 中使用' },
];

export default {
  provide() {
    return {
      demoContext: this,
    };
  },
  props: {
    name: String,
    showDemo: Boolean,
    showApi: Boolean,
  },
  data() {
    this.store = create({
      currentSubMenu: [],
    });
    this.subscribe();
    let blocked = false;
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'adsbox';
      document.body.appendChild(div);
      blocked = 'none' === getComputedStyle(div).display;
    }, 300);
    return {
      showSideBars: true,
      currentSubMenu: [],
      sidebarHeight: document.documentElement.offsetHeight,
      isMobile: false,
      blocked,
    };
  },
  watch: {
    '$route.path'() {
      this.store.setState({ currentSubMenu: [] });
      this.addSubMenu();
    },
  },
  beforeDestroy() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    clearTimeout(this.timer);
    if (this.resizeEvent) {
      this.resizeEvent.remove();
    }
    if (this.debouncedResize && this.debouncedResize.cancel) {
      this.debouncedResize.cancel();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.addSubMenu();
      const nprogressHiddenStyle = document.getElementById('nprogress-style');
      if (nprogressHiddenStyle) {
        this.timer = setTimeout(() => {
          nprogressHiddenStyle.parentNode.removeChild(nprogressHiddenStyle);
        }, 0);
      }
      enquireScreen(b => {
        this.isMobile = !!b;
      });
    });
  },
  methods: {
    addSubMenu() {
      if (this.$route.path.indexOf('/docs/vue/') !== -1) {
        this.$nextTick(() => {
          const menus = [];
          const doms = [...this.$refs.doc.querySelectorAll(['h2', 'h3'])];
          doms.forEach(dom => {
            const id = dom.id;
            if (id) {
              const title = dom.textContent.split('#')[0].trim();
              menus.push({ cnTitle: title, usTitle: title, id });
            }
          });
          this.currentSubMenu = menus;
        });
      }
    },
    subscribe() {
      const { store } = this;
      this.unsubscribe = store.subscribe(() => {
        this.currentSubMenu = this.store.getState().currentSubMenu;
      });
    },
    getSubMenu(isCN) {
      const currentSubMenu = this.currentSubMenu;
      const lis = [];
      currentSubMenu.forEach(({ cnTitle, usTitle, id }, index) => {
        const title = isCN ? cnTitle : usTitle;
        lis.push(<m-anchor-link key={id + index} href={`#${id}`} title={title} />);
      });
      const showApi = this.$route.path.indexOf('/components/') !== -1;
      return (
        <m-anchor offsetTop={68} class="demo-anchor">
          {lis}
          {showApi ? <m-anchor-link key="API" title="API" href="#API" /> : ''}
        </m-anchor>
      );
    },
    getDocsMenu(isCN, pagesKey) {
      const docsMenu = [];
      docsList.forEach(({ key, enTitle, title }) => {
        const k = isCN ? `${key}-cn` : key;
        pagesKey.push({ name: k, url: `/docs/vue/${k}/`, title: isCN ? title : enTitle });
        docsMenu.push(
          <m-menu-item key={k}>
            <router-link to={`/docs/vue/${k}/`}>{isCN ? title : enTitle}</router-link>
          </m-menu-item>,
        );
      });
      return docsMenu;
    },
    resetDocumentTitle(component, name, isCN) {
      let titleStr = 'Minigui-Vue';
      if (component) {
        const { subtitle, title } = component;
        const componentName = isCN ? subtitle + ' ' + title : title;
        titleStr = componentName + ' - ' + titleStr;
      } else {
        const currentKey = docsList.filter(item => {
          return item.key === name;
        });
        if (currentKey.length) {
          titleStr = (isCN ? currentKey[0]['title'] : currentKey[0]['enTitle']) + ' - ' + titleStr;
        }
      }
      document.title = titleStr;
    },
    mountedCallback() {
      NProgress.done();
      document.documentElement.scrollTop = 0;
    },
  },

  render() {
    const name = this.name;
    const isCN = isZhCN(name);
    const titleMap = {};
    const menuConfig = {
      '基础': [],
      '布局': [],
      '导航': [],
      '数据输入': [],
      '数据输出': [],
      '反馈': [],
      '其它': [],
    };
    const pagesKey = [];
    let prevPage = null;
    let nextPage = null;
    const searchData = [];
    for (const [title, d] of Object.entries(AllDemo)) {
      const type = d.type || 'Other';
      const key = `${title.replace(/(\B[A-Z])/g, '-$1').toLowerCase()}`;
      titleMap[key] = title;
      AllDemo[title].key = key;
      menuConfig[type] = menuConfig[type] || [];
      menuConfig[type].push(d);
    }
    const docsMenu = this.getDocsMenu(isCN, pagesKey);
    const reName = name.replace(/-cn\/?$/, '');
    const MenuGroup = [];
    for (const [type, menus] of Object.entries(menuConfig)) {
      const MenuItems = [];
      sortBy(menus, ['title']).forEach(({ title, subtitle, key }) => {
        const linkValue = isCN
          ? [<span>{title}</span>, <span class="chinese">{subtitle}</span>]
          : [<span>{title}</span>];
        if (isCN) {
          key = `${key}-cn`;
        }
        pagesKey.push({
          name: key,
          url: `/components/${key}/`,
          title: isCN ? `${title} ${subtitle}` : title,
        });
        searchData.push({
          title,
          subtitle,
          url: `/components/${key}/`,
        });
        MenuItems.push(
          <m-menu-item key={key}>
            <router-link to={`/components/${key}/`}>{linkValue}</router-link>
          </m-menu-item>,
        );
      });
      MenuGroup.push(<m-menu-item-group title={type}>{MenuItems}</m-menu-item-group>);
    }
    console.log(MenuGroup)
    pagesKey.forEach((item, index) => {
      if (item.name === name) {
        prevPage = pagesKey[index - 1];
        nextPage = pagesKey[index + 1];
      }
    });
    let locale = zhCN;
    if (!isCN) {
      locale = enUS;
    }
    const config = AllDemo[titleMap[reName]];
    this.resetDocumentTitle(config, reName, isCN);
    const { isMobile, $route } = this;
    return (
      <div class="page-wrapper">
        <Header searchData={searchData} name={name} />
        <m-config-provider locale={locale}>
          <div class="main-wrapper">
            <m-row>
              {isMobile ? (
                <MobileMenu ref="sidebar" wrapperClassName="drawer-wrapper">
                  <m-menu
                    class="aside-container menu-site"
                    selectedKeys={[name]}
                    defaultOpenKeys={['Components']}
                    inlineIndent={40}
                    mode="inline"
                  >
                    {docsMenu}
                    <m-sub-menu title={`組件(${searchData.length})`} key="Components">
                      {MenuGroup}
                    </m-sub-menu>
                  </m-menu>
                </MobileMenu>
              ) : (
                <m-col
                  ref="sidebar"
                  class="site-sidebar main-menu"
                  xxl={4}
                  xl={5}
                  lg={5}
                  md={6}
                  sm={8}
                  xs={12}
                >
                  <m-affix>
                    <section class="main-menu-inner">
                      <m-menu
                        class="aside-container menu-site"
                        selectedKeys={[name]}
                        defaultOpenKeys={['Components']}
                        inlineIndent={12}
                        mode="inline"
                      >
                        {docsMenu}
                        <m-sub-menu title={`組件(${searchData.length})`} key="Components">
                          {MenuGroup}
                        </m-sub-menu>
                      </m-menu>
                    </section>
                  </m-affix>
                </m-col>
              )}
              <m-col xxl={20} xl={19} lg={19} md={18} sm={24} xs={24}>
                <section class="main-container main-container-component">
                  {!isMobile ? (
                    <div class={['toc-affix', isCN ? 'toc-affix-cn' : '']} style="width: 150px;">
                      {this.getSubMenu(isCN)}
                    </div>
                  ) : null}
                  {this.showDemo ? (
                    <Provider store={this.store} key={isCN ? 'cn' : 'en'}>
                      <router-view
                        class={`demo-cols-${config.cols || 2}`}
                        {...{
                          directives: [
                            {
                              name: 'mountedCallback',
                              value: this.mountedCallback,
                            },
                          ],
                        }}
                      ></router-view>
                    </Provider>
                  ) : (
                    ''
                  )}
                  {this.showApi ? (
                    <div class="markdown api-container" ref="doc">
                      <router-view
                        {...{
                          directives: [
                            {
                              name: 'mountedCallback',
                              value: this.mountedCallback,
                            },
                          ],
                        }}
                      ></router-view>
                    </div>
                  ) : (
                    ''
                  )}
                </section>
                <section class="prev-next-nav">
                  {prevPage ? (
                    <router-link class="prev-page" to={`${prevPage.url}`}>
                      <m-icon type="left" />
                      &nbsp;&nbsp;{prevPage.title}
                    </router-link>
                  ) : (
                    ''
                  )}
                  {nextPage ? (
                    <router-link class="next-page" to={`${nextPage.url}`}>
                      {nextPage.title}&nbsp;&nbsp;
                      <m-icon type="right" />
                    </router-link>
                  ) : (
                    ''
                  )}
                </section>
                <Footer ref="footer" isCN={isCN} />
              </m-col>
            </m-row>
          </div>
        </m-config-provider>
        {name.indexOf('back-top') === -1 ? <m-back-top /> : null}
        <RightBottomAd isCN={isCN} isMobile={isMobile} />
      </div>
    );
  },
};
</script>
