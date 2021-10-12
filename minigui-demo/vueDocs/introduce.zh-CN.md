# Minigui Vue

minigui-vue 是以 Vue 实现的前端组件。

<style>
.pic-plus > * {
  display: inline-block !important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

## 支持环境

- 现代浏览器和 IE9 及以上。
- 支持服务端渲染。
- [Electron](https://electronjs.org/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --- | --- | --- | --- | --- | --- |
| IE9, IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions | last 2 versions |


## 安装

### 使用 npm 或 yarn 安装

**我们推荐使用 npm 或 yarn 的方式进行开发**，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。

```bash
$ npm install minigui-vue --save
```

```bash
$ yarn add minigui-vue
```

如果你的网络环境不佳，推荐使用 [cnpm](https://github.com/cnpm/cnpm)。

> **组件库使用了 vue 的新特性`slot-scope`(2.5.0 新增), `provide / inject`(2.2.0 新增)**

## 浏览器引入

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `minigui`。

我们在 npm 发布包内的 `minigui-vue/dist` 目录下提供了 `minigui.js` `minigui.css` 以及 `minigui.min.js` `minigui.min.css`。

```jsx
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- import CSS -->
    <style>
      [v-cloak] {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="app" v-cloak>
      <div>
        {{msg}}
        <div>
          <m-button type="primary"> Primary</m-button>
          <m-button>Default</m-button>
          <m-button type="dashed"> Dashed</m-button>
          <m-button type="danger"> Danger</m-button>
          <m-config-provider :auto-insert-space-in-button="true">
            <m-button type="primary"> 按钮 </m-button>
          </m-config-provider>
          <m-button type="primary"> 按钮 </m-button>
          <m-button type="link"> Link </m-button>
        </div>
      </div>
    </div>
  </body>
  <script src="vue.js"></script>
  <script src="moment.js"></script>
  <script src="dist/minigui.min.js"></script>
  <link href="dist/minigui.min.css" rel="stylesheet" type="text/css"/>
  <link href="main.css" rel="stylesheet" type="text/css"/>
  <script>
    var vue = new Vue({
      el: '#app',
      data() {
        return {msg: "this is test msg"};
      },
      methods: {
        getInfo(record) {
          alert(1234)
        }
      }
    })
  </script>
</html>
```

> **强烈不推荐使用已构建文件**，这样无法按需加载，而且难以获得底层依赖模块的 bug 快速修复支持。

> <font color=red>注意：引入 minigui.js 前你需要自行引入 [moment](http://momentjs.com/)。</font>

## 示例

```jsx
import Vue from 'vue';
import { DatePicker } from 'minigui-vue';
Vue.use(DatePicker);
```

引入样式：

```jsx
import 'minigui-vue/dist/minigui.css';
```

### 按需加载

下面两种方式都可以只加载用到的组件。

- 使用 [babel-plugin-import]（推荐）。

  ```js
  // .babelrc or babel-loader option
  {
    "plugins": [
      ["import", { "libraryName": "minigui-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
    ]
  }
  ```

  > 注意：webpack 1 无需设置 `libraryDirectory`。

  然后只需从 minigui-vue 引入模块即可，无需单独引入样式。等同于下面手动引入的方式。

  ```jsx
  // babel-plugin-import 会帮助你加载 JS 和 CSS
  import { DatePicker } from 'minigui-vue';
  ```

- 手动引入

  ```jsx
  import DatePicker from 'minigui-vue/lib/date-picker'; // 加载 JS
  import 'minigui-vue/lib/date-picker/style/css'; // 加载 CSS
  // import 'minigui-vue/lib/date-picker/style';         // 加载 LESS
  ```