## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| offsetBottom | Offset from the bottom of the viewport (in pixels) | number | - |  |
| offsetTop | Offset from the top of the viewport (in pixels) | number | 0 |  |
| target | Specifies the scrollable area DOM node | () => HTMLElement | () => window |  |

### events

| Events Name | Description                              | Arguments         | Version |
| ----------- | ---------------------------------------- | ----------------- | ------- |
| change      | Callback for when Affix state is changed | Function(affixed) |

**Note:** Children of `Affix` must not have the property `position: absolute`, but you can set `position: absolute` on `Affix` itself:

```html
<m-affix :style="{ position: 'absolute', top: y, left: x}">
  ...
</m-affix>
```

## FAQ

### Affix bind container with `target`, sometime move out of container.

We don't listen window scroll for performance consideration.

