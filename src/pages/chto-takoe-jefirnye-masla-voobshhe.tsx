import React from 'react';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { PageTitle } from '@components/common/PageTitle';
import { SimilarPosts } from '@components/common/SimilarPosts';
import { CTABlock } from '@components/common/CTABlock';
import { ContentBlock } from '@components/common/ContentBlock';

import s from '@styles/SecondaryPages.module.sass';

const CONTENT = (
  <>
    <p>
      Это жизненная кровь и энергия растения и для того, чтобы её получить в том виде, чтобы она
      несла ценность, растения выращивают в правильных условиях, собирают в правильное время и
      подвергают дистилляции с особой тщательностью. Это целая наука!
    </p>
    <p>
      Масла могут поддерживать наше тело здоровым и счастливым - то есть таким, каким оно было
      задумано. Эфирные масла состоят из крошечных молекул. Эти молекулы настолько малы, что могут
      проходить через наши ткани прямо в наши клетки. Наши организмы настолько сродственны с ними,
      что уже знают, что делать с маслами и могут транспортировать эти молекулы по всему телу за
      считанные минуты.
    </p>
    <p>
      Не все эфирные масла одинаковы!
      <br />
      Не все масла так же безопасны, как эфирные масла Young Living. Те масла, которые вы видели в
      аптеке или косметическом интернет-магазине нельзя принимать так, как масла Young Living. Одна
      вещь, которая поражает меня до сих пор, это то, насколько легко удается другим производителям
      эфирных масел клеить вводящую в заблуждение этикетку «100% чистота», но при этом создавать
      синтетические и разбавленные масла. В поиске той самой “души растения” я перепробовал очень
      многое и могу сказать без стыда, что Young Living - это ЕДИНСТВЕННАЯ компания, которая
      выращивает собственные растения от начала до конца и владеет собственными фермами, соблюдая
      самые строгие стандарты.
    </p>
    <h2>Что такое семья Young Living?</h2>
    <p>Три самых распространенных метода использования: местно, ароматически и внутренне.</p>
    <ul>
      <li>
        Эфирные масла Young Living можно наносить непосредственно на кожу наблюдая эффект масла, а
        не растворителя в составе, но, конечно, некоторые масла необходимо разбавлять базовым
        маслом (кокосовое масло, масло виноградных косточек, оливковое масло, смесь V6 и т. Д.). А
        вот использование масел на пяточках - это быстрый и эффективный способ пополнить ваш
        организм маслами. Вы также можете использовать эфирные масла в качестве парфюма и
        эмоциональной поддержки.
      </li>
      <li>
        Масла также можно вдыхать непосредственно из флакона или с помощью диффузора. На самом деле
        это самый быстрый способ использования масел для вашего тела и души, да и ваш дом будет
        пахнуть потрясающе. Вы можете еще не представлять, какую силу имеют настоящие масла в
        воздухе.
      </li>
      <li>
        И напоследок, благодаря терапевтическому качеству масел Young Living, большинство масел
        можно принимать внутрь в качестве пищевых добавок и эффект, поверьте, невероятен. Вы можете
        добавлять масла в воду, пищу или даже в капсулы. Пищевая линейка Plus помогает понять, что
        можно выпить, а что нет.
      </li>
    </ul>
  </>
);

const navLinks = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Oil life',
    link: '/oil-life',
  },
  {
    title: 'Что такое эфирные масла, зачем ими пользоваться и как?',
  },
];

const Secondary: React.FC = () => (
  <BaseLayout>
    <Container theme="small">
      <Row>
        <BreadCrumbs navLinks={navLinks} />
        <PageTitle
          image="/images/oilLife5.jpg"
          blockquote="Может показаться, что эфирные масла — это всего лишь масла."
        />
        <ContentBlock className={s.chtoContent}>
          {CONTENT}
        </ContentBlock>
        <SimilarPosts className={s.similarContent} />
        <CTABlock
          title="Откройте мир масел вместе с Young Living!"
          description="Станьте частью нашего сообщества и покупайте товары со скидкой 24% от розничной цены"
          button={{
            label: 'Присоединиться',
            link: '/',
          }}
        />
      </Row>
    </Container>
  </BaseLayout>
);

// export const getStaticProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common', 'secondary']),
//   },
// });

export default Secondary;
