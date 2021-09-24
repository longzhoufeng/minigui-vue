<script>
import Basic from './basic';
import All from './all';
import CN from '../index.zh-CN.md';
const md = {
  cn: `## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| locale | 语言包配置，语言包可到 \`minigui-vue/lib/locale-provider/\` 目录下寻找 | object | - |
`,
};
export default {
  category: 'Components',
  subtitle: '国际化',
  cols: 1,
  type: 'Other',
  title: 'LocaleProvider',
  render() {
    return (
      <div>
        <api>
          <CN slot="cn" />
        </api>
        <demo-sort cols={1}>
          <Basic />
          <All />
        </demo-sort>
        <md cn={md.cn} us={md.us} />
      </div>
    );
  },
};
</script>
