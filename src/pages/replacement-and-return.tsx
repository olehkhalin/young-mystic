import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { ContentWithRefs } from '@components/common/ContentWithRefs';
import { PageTitle } from '@components/common/PageTitle';
import { ContactForm } from '@components/common/ContactForm';

import s from '@styles/SecondaryPages.module.sass';

const CONTENT = [
  {
    title: 'Как вернуть некачественный товар?',
    content: (
      <>
        <h2>Как вернуть некачественный товар?</h2>
        <p>
          Если вы приобрели товар с явным заводским браком, то по закону Украины его можно вернуть
          и выбрать удобную компенсацию:
        </p>
        <ul>
          <li>Заменить товар на аналогичный</li>
          <li>Купить другой товар на ту же сумму, которую вы заплатили за бракованный товар</li>
          <li>Вернуть деньги за товар</li>
        </ul>
      </>
    ),
  },
  {
    title: 'Как вернуть товар, который мне не понравился или не подошёл?',
    content: (
      <>
        <h2>Как вернуть товар, который мне не понравился или не подошёл?</h2>
        <div className={s.infoBlock}>
          По
          {' '}
          <a
            className={s.infoLink}
            href="https://www.google.com"
            target="_blank"
            rel="nofollow noreferrer"
          >
            закону Украины
          </a>
          {' '}
          и
          {' '}
          <Link href="/offer-agreement">
            <a className={s.infoLink}>
              договору оферты магазина
            </a>
          </Link>
          {' '}
          эфирные масла, косметика и био-добавки не подлежат возврату.
        </div>
        <p>
          Если вы приобрели товар, но он вам просто не понравился или не подошёл, то его можно
          вернуть обратно в течение 14 дней.
        </p>
        <p>
          Обратите внимание, что у товара не должно быть следов использования. Комплектация,
          товарный вид и упаковка должны быть такими же, как и при покупке.
        </p>
      </>
    ),
  },
  {
    title: 'Я хочу вернуть товар. Что мне делать?',
    content: (
      <>
        <h2>Я хочу вернуть товар. Что мне делать?</h2>
        <div className={s.infoBlock}>
          По
          {' '}
          <a
            className={s.infoLink}
            href="https://www.google.com"
            target="_blank"
            rel="nofollow noreferrer"
          >
            закону Украины
          </a>
          {' '}
          и
          {' '}
          <Link href="/offer-agreement">
            <a className={s.infoLink}>
              договору оферты магазина
            </a>
          </Link>
          {' '}
          эфирные масла, косметика и био-добавки не подлежат возврату.
        </div>
        <p>
          Чтобы вернуть товар, вы можете позвонить нам по номеру +38 000 0000 или заполнить форму
          обратной связи ниже:
        </p>
        <ContactForm className={s.form} />
      </>
    ),
  },
  {
    title: 'Как мне отправить товар обратно?',
    content: (
      <>
        <h2>Как мне отправить товар обратно?</h2>
        <p>
          Мы рекомендуем покупателям проверить товар сразу же после получения посылки у курьера или
          на точке выдачи “Новой Почты”. Это поможет вам значительно сократить время на возврат
          товара в случае брака или если товар вам не подходит.
        </p>
        <p>
          Если вы находитесь в Киеве и хотите вернуть неподходящий товар после покупки, его можно
          вернуть в наш офис.
        </p>
        <div className={s.infoBlock}>
          Обратите внимание: курьер не принимает возврат и не выдает деньги за товар.
        </div>
        <p>
          Если вы отправляете неподходящий товар из регионов, вам нужно отправить товар без
          наложенного платежа. Стоимость доставки возврата неподходящего товара оплачивается
          покупателем.
        </p>
        <p>
          Если вы отправляете товар с браком, мы оплачиваем доставку в обе стороны.
        </p>
      </>
    ),
  },
  {
    title: 'Когда я получу деньги назад?',
    content: (
      <>
        <h2>Когда я получу деньги назад?</h2>
        <p>Возврат денег на карту зависит от причины возврата товара.</p>
        <p>
          Если вы отказались от товара, который вам не нравится, мы вернем вам деньги на карту в
          течение 7 дней после получения заявки на возврат и проверки целостности товара в офисе.
        </p>
        <p>
          Если вы отправляете товар, который вам не понравился, из регионов, мы вернём деньги на
          карту ПриватБанка или Монобанка после проверки целостности товара в офисе. Тут наверное
          Нужно написать про сроки, до двух недель?
        </p>
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

const ReplacementReturn: React.FC = () => {
  const { t } = useTranslation(['replacement-return']);

  return (
    <BaseLayout>
      <Container theme="small">
        <Row>
          <BreadCrumbs navLinks={navLinks} />
          <PageTitle title={t('replacement-return:Способы и условия возврата')} />
          <ContentWithRefs content={CONTENT} />
        </Row>
      </Container>
    </BaseLayout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'replacement-return'])),
  },
});

export default ReplacementReturn;
