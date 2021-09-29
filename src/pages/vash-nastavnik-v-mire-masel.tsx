import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { CTABlock } from '@components/common/CTABlock';
import { RecentBlog } from '@components/common/RecentBlog';
import { PageTitle } from '@components/common/PageTitle';
import { ContentBlock } from '@components/common/ContentBlock';

import s from '@styles/About.module.sass';
import { POSTS } from '../content';

const navLinks = [
  {
    title: 'Главная',
    link: '/',
  },
  {
    title: 'Обо мне',
    link: '/about',
  },
  {
    title: 'Ваш наставник в мире масел',
  },
];

const Secondary: React.FC = () => (
  <BaseLayout>
    <Container theme="small">
      <Row>
        <BreadCrumbs navLinks={navLinks} />
        <PageTitle
          className={s.imageTitle}
          image="/images/Image_1.jpg"
          title="Ваш наставник в мире масел"
        />
        <ContentBlock className={s.content}>
          <p>
            Привет, меня зовут Андрей и я долгое время занимался терапией и изучением всевозможных
            методов сделать жизни людей лучше. Да, желание дарить добро было у меня изначально,
            поэтому поступление в медицинский было для меня предопределено.
          </p>
          <p>
            Это был достаточно большой промежуток времени, начиная со студенчества, когда я
            параллельно посещал курсы по различным лечебным техникам и массажам, ездил по всей
            Украине в поисках того, что может помочь мне помогать другим. На своем пути я
            познакомился с эфирными маслами, которые я начал использовать на себе и на своей семье
            и, после полученных результатов, конечно я захотел делиться опытом и помогать людям
            использовать их.
          </p>
          <p>
            Почему?! Меня просто поглотил мир эфирных масел, потому что до этого я изучал отдельную
            технику для отдельного случая, проблемы, а эфирные масла, при мне ,помогали людям не
            только решать их запрос, а и менять их жизни. Поэтому, вооружившись своим
            фармацевтическим образованием и желанием делится любовью, опытом, и знаниями, поэтому
            мы с женой (да, на этом этапе нас стало двое) создали сообщество Young Mystic.
          </p>
          <p>
            Создали не просто так, а потому что это стало нашей миссией, помогать таким женщинам и
            мужчинам, как мы, которые хотят совершенствоваться и жить более здоровой жизнью,
            погружаться в этот крутой, но при этом очень полезный образ жизни. Одним словом — это
            Oil Life и это не только о эфирных и как они на нас влияют (спойлер — влияют здорово),
            это о здоровом доме без химии, здоровом питании и конечно же, осознанном мышлении и
            духовном развитии.
          </p>
          <p>
            Что мною движет сейчас, так это результаты своей работы. Каждое сообщение с
            благодарностью, каждая улыбка на вебинаре — заставляет двигаться дальше.
          </p>
        </ContentBlock>
        <CTABlock
          className={s.blockCta}
          title="Откройте мир масел вместе с Young Living!"
          description="Станьте частью нашего сообщества и покупайте товары со скидкой 24% от розничной цены"
          button={{
            link: '/',
            label: 'Присоединиться',
          }}
        />
        <RecentBlog posts={POSTS} />
      </Row>
    </Container>
  </BaseLayout>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'secondary']),
  },
});

export default Secondary;
