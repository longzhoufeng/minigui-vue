import Layout from '../components/layout.vue';
import Iframe from '../components/iframe.vue';
import demoRoutes from './demoRoutes';
import otherRoutes from './otherRoutes';
import VueRouter from 'vue-router';

const routes = [
  ...otherRoutes,
  {
    path: '/components',
    component: Layout,
    props: route => {
      const name = route.path.split('/components/')[1].split('/')[0];
      return { name, showDemo: true };
    },
    children: demoRoutes,
  },
  {
    path: '/iframe',
    component: Iframe,
    children: demoRoutes.map(item => ({
      ...item,
      props: route => {
        const hash = route.hash.replace('#', '');
        return { iframeName: hash };
      },
    })),
  },
  {
    path: '/',
    component: Layout,
    props: route => {
      const name = route.path.split('/docs/vue/')[1].split('/')[0];
      return { name, showApi: true };
    },
    children: [
      {
        path: 'docs/vue/theme-zh',
        component: () => import('../vueDocs/theme-zh.md'),
      },
      {
        path: 'docs/vue/introduce-cn',
        component: () => import('../vueDocs/introduce.zh-CN.md'),
      },
      {
        path: 'docs/vue/getting-started-cn',
        component: () => import('../vueDocs/getting-started.zh-CN.md'),
      },
      {
        path: 'docs/vue/use-with-vue-cli-cn',
        component: () => import('../vueDocs/use-with-vue-cli.zh-CN.md'),
      },
      {
        path: 'docs/vue/download-cn',
        component: () => import('../vueDocs/download.zh-CN.md'),
      },
      {
        path: 'docs/vue/changelog-cn',
        component: () => import('../../CHANGELOG.zh-CN.md'),
      },
      { path: '', redirect: '/vue/docs/introduce-cn/' },
    ],
  },
  { path: '/*', redirect: '/docs/vue/introduce-cn/' },
];

export default new VueRouter({
  mode: 'history',
  fallback: false,
  routes,
});
