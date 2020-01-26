import { setGlobalDateI18n, defaultI18n, Months } from 'fecha';

export function setCn() {
  const monthNames = [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
  ].map(e => e + '月') as Months;
  setGlobalDateI18n({
    dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    dayNames: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    monthNamesShort: monthNames,
    monthNames: monthNames,
    amPm: ['上午', '下午'],
    DoFn: dayOfMonth => `${dayOfMonth}日`,
  });
}

export function setEn() {
  setGlobalDateI18n(defaultI18n);
}
