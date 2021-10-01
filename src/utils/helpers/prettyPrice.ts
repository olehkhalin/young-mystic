export const prettyPrice = (price: number) => (
  `${price.toLocaleString('ru-RU', { style: 'decimal', minimumFractionDigits: 2 })}₴`
);