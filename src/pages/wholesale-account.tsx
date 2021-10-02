import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { CustomCollapse } from '@ui/CustomCollapse';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { ContentWithRefs } from '@components/common/ContentWithRefs';
import { PageTitle } from '@components/common/PageTitle';

import s from '@styles/SecondaryPages.module.sass';

const CONTENT = [
  {
    title: 'Как присоединиться к сообществу?',
    content: (
      <>
        <h2>Как присоединиться к сообществу?</h2>
        <p>
          Чтобы присоединиться к сообществу, достаточно следовать инструкции описанной ниже. Это
          займет менее 15 минут и вы сможете заказывать любимую продукцию Young Living со скидкой
          24%, а также получать подарки.
        </p>
        <p>
          1. Перейдите по этой ссылке на официальный сайт Young Living и нажмите кнопку
          “Присоединяйтесь”
        </p>
        <p>
          2. Заполните информацию о себе. Укажите корректный адрес проживания, так как он будет
          использоваться при доставке (его можно будет изменить в настройках). Пожалуйста, вводите
          всю информацию латиницей.
        </p>
        <p>
          3. После заполнения всех данных, вас попросят выбрать стартовый набор. Вы можете
          пропустить этот шаг, если он вам не нужен.  Просто нажмите на кнопку
          &quot;пропустить&quot;. (Стартовый набор — хороший выбор для знакомства с маслами Young
          Living по выгодной цене. За 150 EUR вы получите набор из 11 масел, дополнительные
          пробники, дополнительную информацию и литературу, каталог и диффузор. Мы рекомендуем
          начинать свое путешествие с наборов Young Living, но это не обязательно).
        </p>
        <p>
          4. Поздравляем, вы успешно прошли регистрацию! Добро пожаловать в сообщество! На вашу
          почту придет  письмо-подтверждение с номером Вашего ID. В следующий раз, когда вам нужно
          войти в Личный Аккаунт, вводите этот номер ID и свой пароль.
        </p>
        <p>
          5. В личном кабинете нужно перейти во вкладку &quot;Essential Rewards&quot; — именно здесь
          вы теперь можете  делать заказы со скидкой 24% и получать за это подарки. Он работает как
          обычный интернет-магазин. Вы выбираете нужные товары и переходите к оформлению заказа.
        </p>
        <div className={s.infoBlock}>
          Важно: Минимальная сумма заказа на сайте Young Living составляет 50 EUR. Если вы хотите
          приобрести продукцию менее, чем на 50 EUR, пожалуйста, свяжитесь с
          {' '}
          <Link href="/contacts">
            <a className={s.infoLink}>
              нами
            </a>
          </Link>
          .
        </div>
        <p>
          6. В процессе Вас попросят выбрать дату обработки заказа (я не понимаю, что это такое и
          пользователи на поймут) и оплатить заказ удобным способом.
        </p>
        <p>
          7. После оформления заказа вы получите на почту письмо-подтверждение.
        </p>
      </>
    ),
  },
  {
    title: 'Что такое стартовый набор Young Living?',
    content: (
      <>
        <h2>Что такое стартовый набор Young Living?</h2>
        <p>
          Наши стартовые наборы были тщательно и вдумчиво подобраны, чтобы помочь вам познакомиться
          с нашими маслами. Тут нужен еще текст, только не очень много.
        </p>
        <p>
          Вне зависимости от того, какой стартовый набор вы решите попробовать, вы в любом случае
          получите возможность совершать покупки со скидкой 24%, мою помощь в качестве вашего
          наставника и друга, который будет направлять вас в этом путешествии, а также
          присоединитесь к закрытому сообществу с дополнительными ресурсами и поддержкой
          единомышенников.
        </p>
      </>
    ),
  },
  {
    title: 'Кто такой наставник',
    content: (
      <>
        <h2>Кто такой наставник</h2>
        <p>
          Наставник — это человек, который помогает вам выбрать необходимые масла, консультирует по
          возникшим вопросам с заказами, как в бизнесе, так и в ароматерапии, помогает вашим
          клиентам.
        </p>
      </>
    ),
  },
  {
    title: 'Вопросы и ответы',
    content: (
      <>
        <h2>Вопросы и ответы</h2>
        <p>
          Ниже вы найдете ответы на самые популярные вопросы
        </p>
        <CustomCollapse
          className={s.collapse}
          theme="secondary"
          title="Есть ли скрытые расходы?"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus harum id
            laboriosam nesciunt quia sed suscipit veritatis vitae voluptas. Adipisci aliquid
            asperiores atque autem blanditiis consectetur cumque, distinctio dolor est
            exercitationem fugiat id inventore labore, magnam molestiae nostrum numquam officia
            perspiciatis quaerat quas quos ratione, similique tempore velit voluptatum!
          </p>
        </CustomCollapse>
        <CustomCollapse
          className={s.collapse}
          theme="secondary"
          title="Мне нужно оформлять заказы каждый месяц?"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus harum id
            laboriosam nesciunt quia sed suscipit veritatis vitae voluptas. Adipisci aliquid
            asperiores atque autem blanditiis consectetur cumque, distinctio dolor est
            exercitationem fugiat id inventore labore, magnam molestiae nostrum numquam officia
            perspiciatis quaerat quas quos ratione, similique tempore velit voluptatum!
          </p>
        </CustomCollapse>
        <CustomCollapse
          className={s.collapse}
          theme="secondary"
          title="Как узнать, какие масла подходят для решения моих проблем?"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus harum id
            laboriosam nesciunt quia sed suscipit veritatis vitae voluptas. Adipisci aliquid
            asperiores atque autem blanditiis consectetur cumque, distinctio dolor est
            exercitationem fugiat id inventore labore, magnam molestiae nostrum numquam officia
            perspiciatis quaerat quas quos ratione, similique tempore velit voluptatum!
          </p>
        </CustomCollapse>
        <CustomCollapse
          className={s.collapse}
          theme="secondary"
          title="Что делать, если я не хочу покупать стартовый набор?"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus harum id
            laboriosam nesciunt quia sed suscipit veritatis vitae voluptas. Adipisci aliquid
            asperiores atque autem blanditiis consectetur cumque, distinctio dolor est
            exercitationem fugiat id inventore labore, magnam molestiae nostrum numquam officia
            perspiciatis quaerat quas quos ratione, similique tempore velit voluptatum!
          </p>
        </CustomCollapse>
        <CustomCollapse
          className={s.collapse}
          theme="secondary"
          title="В чём преимущества Essential Rewards?"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus harum id
            laboriosam nesciunt quia sed suscipit veritatis vitae voluptas. Adipisci aliquid
            asperiores atque autem blanditiis consectetur cumque, distinctio dolor est
            exercitationem fugiat id inventore labore, magnam molestiae nostrum numquam officia
            perspiciatis quaerat quas quos ratione, similique tempore velit voluptatum!
          </p>
        </CustomCollapse>
        <CustomCollapse
          className={s.collapse}
          theme="secondary"
          title="Можно ли начинать из этого строить свой бизнес?"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus harum id
            laboriosam nesciunt quia sed suscipit veritatis vitae voluptas. Adipisci aliquid
            asperiores atque autem blanditiis consectetur cumque, distinctio dolor est
            exercitationem fugiat id inventore labore, magnam molestiae nostrum numquam officia
            perspiciatis quaerat quas quos ratione, similique tempore velit voluptatum!
          </p>
        </CustomCollapse>
        <CustomCollapse
          className={s.collapse}
          theme="secondary"
          title="После регистрации мне нужно стать представителем ?"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus harum id
            laboriosam nesciunt quia sed suscipit veritatis vitae voluptas. Adipisci aliquid
            asperiores atque autem blanditiis consectetur cumque, distinctio dolor est
            exercitationem fugiat id inventore labore, magnam molestiae nostrum numquam officia
            perspiciatis quaerat quas quos ratione, similique tempore velit voluptatum!
          </p>
        </CustomCollapse>
        <CustomCollapse
          className={s.collapse}
          theme="secondary"
          title="Мне обязательно регистрироваться по ID наставника?"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At delectus harum id
            laboriosam nesciunt quia sed suscipit veritatis vitae voluptas. Adipisci aliquid
            asperiores atque autem blanditiis consectetur cumque, distinctio dolor est
            exercitationem fugiat id inventore labore, magnam molestiae nostrum numquam officia
            perspiciatis quaerat quas quos ratione, similique tempore velit voluptatum!
          </p>
        </CustomCollapse>
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
    title: 'Oil life',
    link: '/oil-life',
  },
  {
    title: 'Присоединяйтесь к сообществу Young Living!',
  },
];

const WholesaleAccount: React.FC = () => (
  <BaseLayout>
    <Container theme="small">
      <Row>
        <BreadCrumbs navLinks={navLinks} />
        <PageTitle title="Присоединяйтесь к сообществу Young Living!" />
        <ContentWithRefs content={CONTENT} />
      </Row>
    </Container>
  </BaseLayout>
);

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'wholesale-account']),
  },
});

export default WholesaleAccount;
