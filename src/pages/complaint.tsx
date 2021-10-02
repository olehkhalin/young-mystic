import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { PageTitle } from '@components/common/PageTitle';
import { ContentBlock } from '@components/common/ContentBlock';
import { ContactForm } from '@components/common/ContactForm';

import s from '@styles/SecondaryPages.module.sass';

const navLinks = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Рекламации',
  },
];

const Complaint: React.FC = () => {
  const { t } = useTranslation(['complaint']);
  
  return (
    <BaseLayout>
      <Container theme="small">
        <Row>
          <BreadCrumbs navLinks={navLinks} />
          <PageTitle title="Рекламации" />
          <ContentBlock className={s.content}>
            <p>
              {
                t('complaint:Рекламации по поводу несоответствующего выполнения заказа' +
                  ' принимаются к рассмотрению в течение 20 часов с момента получения заказа.' +
                  ' Рекламация должна быть оформлена заказчиком и в ней обязательно нужно' +
                  ' указать номер заказа.')
              }
            </p>
            <p>
              Чтобы подать рекламацию, вы можете заполнить форму обратной связи ниже или написать нам
            </p>
            <ContactForm className={s.form} />
            <p>
              Ответ по заявке будет отправлен в течение 12 часов с момента получения письма. Ответ на
              рекламацию и варианты решения  будут предложены покупателю в течение 3 рабочих дней.
            </p>
            <h3><strong>Мы не рассматриваем рекламации в следующих случаях:</strong></h3>
            <p>1. Рекламация не была отправлена в форме обратной связи или по почте.</p>
            <p>2. Рекламация была оформлена не заказчиком, а другим лицом.</p>
            <p>3. В рекламации не был указан номер заказа.</p>
            <p>4. В рекламации отсутствовали фотографии.</p>
            <p>
              5. Заказчик более 3-х дней не отвечает на сообщения администратора интернет-магазина.
            </p>
            <p>6. Заказчик не ведёт конструктивный диалог.</p>
            <p>7. Анонимные обращения.</p>
            <p>
              8. Рекламация содержит ненормативную лексику, угрозы или оскорбления в сторону
              сотрудников интернет-магазина Young Mystic. Такие обращения автоматически удаляются без
              рассмотрения.
            </p>
          </ContentBlock>
        </Row>
      </Container>
    </BaseLayout>
  );
};

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'complaint'])),
  },
});

export default Complaint;
