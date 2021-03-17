import React from 'react';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { ContentWithRefs } from '@components/common/ContentWithRefs';
import { PageTitle } from '@components/common/PageTitle';

const CONTENT = [
  {
    title: 'Оплата товара в наличии',
    content: (
      <>
        <h2>Оплата товара в наличии</h2>
        <p>
          Вы можете оплатить товар с помощью безналичной оплаты, наличными при получении товара
          наложенным платежом или самовывозе.
          Товар можно оплатить:
        </p>
        <ul>
          <li>
            Банковской картой VISA или MasterCard в украинской валюте. Оплата проходит через
            систему InterCassa;
          </li>
          <li>
            Перевести деньги на карту ПриватБанк или Монобанк;
          </li>
          <li>
            Криптовалютой (пожалуйста, укажите это способ оплаты в комментарии при оформлении
            заказа);
          </li>
          <li>
            Наличиными при самовывозе в Киеве.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Оплата товара при предзаказе',
    content: (
      <>
        <h2>Оплата товара при предзаказе</h2>
        <p>
          Если товара нет в наличии, но вы готовы оформить предзаказ — сумма предоплаты составляет
          50% от стоимости товара.
        </p>
      </>
    ),
  },
  {
    title: 'Способы доставки',
    content: (
      <>
        <h2>Способы доставки</h2>
        <p>Если товар есть в наличии, мы отправляем его в течени 24 часов:</p>
        <ul>
          <li>
            Доставка почтовой службой “Новая почта”. Стоимость доставки рассчитывается согласно
            тарифам компании;
          </li>
          <li>
            Самовывоз по адресу:
            <br />
            г. Киев, Ул. Кошица 7а
            <br />
            График работы:
            <br />
            пн-пт 8:00 – 20:00
            <br />
            <br />
            г. Днепр, Ул. Воскресенская 1А
            <br />
            График работы:
            <br />
            пн, ср, пт 10:00 – 20:00
            <br />
          </li>
          <li>Курьерская доставка.</li>
        </ul>
      </>
    ),
  },
  {
    title: '',
    content: (
      <>

      </>
    ),
  },
];

const navLinks = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Способы и условия возврата',
  },
];

const OfferAgreement = () => (
  <BaseLayout>
    <Container theme="small">
      <Row>
        <BreadCrumbs navLinks={navLinks} />
        <PageTitle title="Договор публичной оферты" />
        <ContentWithRefs content={CONTENT} />
      </Row>
    </Container>
  </BaseLayout>
);

export default OfferAgreement;
