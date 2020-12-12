import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const prettyDate = (date: string) => {
  const newDate = dayjs(date);
  const dayDiff = dayjs().diff(newDate, 'day');
  const yearDiff = dayjs().diff(newDate, 'year');

  let finalDate;
  if (dayDiff < 10) {
    finalDate = newDate.fromNow();
  } else {
    finalDate = yearDiff === 0 ? newDate.format('D MMMM') : newDate.format('D MMMM YYYY');
  }
  return finalDate;
};

export const prettyPrice = (price: number) => (
  `${price.toLocaleString('ru-RU', { style: 'decimal', minimumFractionDigits: 2 })}₴`
);
