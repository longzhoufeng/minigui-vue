<cn>
#### 自定义头部
自定义日历头部内容。
</cn>

<us>
#### Customize Header
Customize Calendar header content.
</us>

<template>
  <div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 4px">
    <m-calendar :fullscreen="false" :header-render="headerRender" @panelChange="onPanelChange" />
  </div>
</template>
<script>
export default {
  methods: {
    onPanelChange(value, mode) {
      // eslint-disable-next-line no-console
      console.log(value, mode);
    },
    headerRender({ value, type, onChange, onTypeChange }) {
      const start = 0;
      const end = 12;
      const monthOptions = [];

      const current = value.clone();
      const localeData = value.localeData();
      const months = [];
      for (let i = 0; i < 12; i++) {
        current.month(i);
        months.push(localeData.monthsShort(current));
      }

      for (let index = start; index < end; index++) {
        monthOptions.push(
          <m-select-option class="month-item" key={`${index}`}>
            {months[index]}
          </m-select-option>,
        );
      }
      const month = value.month();

      const year = value.year();
      const options = [];
      for (let i = year - 10; i < year + 10; i += 1) {
        options.push(
          <m-select-option key={i} value={i} class="year-item">
            {i}
          </m-select-option>,
        );
      }
      return (
        <div style={{ padding: '10px' }}>
          <div style={{ marginBottom: '10px' }}>Custom header </div>
          <m-row type="flex" justify="space-between">
            <m-col>
              <m-radio-group size="small" onChange={e => onTypeChange(e.target.value)} value={type}>
                <m-radio-button value="month">Month</m-radio-button>
                <m-radio-button value="year">Year</m-radio-button>
              </m-radio-group>
            </m-col>
            <m-col>
              <m-select
                size="small"
                dropdownMatchSelectWidth={false}
                class="my-year-select"
                onChange={newYear => {
                  const now = value.clone().year(newYear);
                  onChange(now);
                }}
                value={String(year)}
              >
                {options}
              </m-select>
            </m-col>
            <m-col>
              <m-select
                size="small"
                dropdownMatchSelectWidth={false}
                value={String(month)}
                onChange={selectedMonth => {
                  const newValue = value.clone();
                  newValue.month(parseInt(selectedMonth, 10));
                  onChange(newValue);
                }}
              >
                {monthOptions}
              </m-select>
            </m-col>
          </m-row>
        </div>
      );
    },
  },
};
</script>
