# 快速上手

Minigui Vue 致力于提供给程序员**愉悦**的开发体验。

> 在开始之前，推荐先学习 [Vue](https://cn.vuejs.org/) 和 [ES2015](http://babeljs.io/docs/learn-es2015/)，并正确安装和配置了 [Node.js](https://nodejs.org/) v8.9 或以上。官方指南假设你已了解关于 HTML、CSS 和 JavaScript 的中级知识，并且已经完全掌握了 Vue 的正确开发方式。如果你刚开始学习前端或者 Vue，将 UI 框架作为你的第一步可能不是最好的主意。


## 在线演示

整理中...

## 引入 minigui-vue

### 1. 安装脚手架工具

[vue-cli](https://github.com/vuejs/vue-cli)

```bash
$ npm install -g @vue/cli
# OR
$ yarn global add @vue/cli
```

### 2. 创建一个项目

使用命令行进行初始化。

```bash
$ vue create minigui-demo
```

并配置项目。

若安装缓慢报错，可尝试用 `cnpm` 或别的镜像源自行安装：`rm -rf node_modules && cnpm install`。

### 3. 使用组件

```bash
$ npm i --save minigui-vue
```

**完整引入**

```jsx
import Vue from 'vue';
import Minigui from 'minigui-vue';
import App from './App';
import 'minigui-vue/dist/minigui.css';
Vue.config.productionTip = false;

Vue.use(Minigui);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

以上代码便完成了 Minigui 的引入。需要注意的是，样式文件需要单独引入。

**局部导入组件**

```jsx
import Vue from 'vue';
import { Button, message } from 'minigui-vue';
import App from './App';

Vue.config.productionTip = false;

/* v1.1.2 */
Vue.component(Button.name, Button);
Vue.component(Button.Group.name, Button.Group);

/* v1.1.3+ 自动注册Button下组件，如Button.Group */
Vue.use(Button);

Vue.prototype.$message = message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
```

> 你可以在左侧菜单选用更多组件。
