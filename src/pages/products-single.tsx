import React from 'react';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Separator } from '@ui/Separator';
import { CustomCollapse } from '@ui/CustomCollapse';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { ProductImage } from '@components/productsSingle/ProductImage';
import { CTABlock } from '@components/common/CTABlock';
import { ProductHeader } from '@components/productsSingle/ProductHeader';
import { SimilarPosts } from '@components/common/SimilarPosts';

import s from '@styles/Products.module.sass';

import { POSTS } from '../content';

const CONTENT = [
  {
    title: 'Описание товара',
    content: (
      <p>
        Лаванда —  классический компонент духов, мыла, освежителей и косметических средств. Будучи
        одним из наших самых популярных продуктов, масло Lavender идеально подойдет тем, кто только
        начинается знакомиться с миром эфирных масел, и станет незаменимой вещью в каждом доме.
        Эфирное масло Lavender ценится не только за классический аромат, но и за свою
        универсальность. Это масло пригодится в разных сферах жизни: его можно как добавлять в
        средства по уходу за кожей, так и использовать для расслабляющих процедур.
      </p>
    ),
  },
  {
    title: 'Исторические сведения',
    content: (
      <>
        <p>
          Название “шалфей” происходит от латинского слова “salvere” и означает “исцелять или
          сохранять”. В средние века Шалфей мускатный называли “очищение для глаз”, в те времена
          настой из семян использовали для исцеления глазных болезней.
        </p>
        <p>
          Издавна Шалфей мускатный использовали для облегчения женских проблем, связанных с
          нарушением менструального цикла.
        </p>
      </>
    ),
  },
  {
    title: 'Лечебные свойства',
    content: (
      <p>
        Антисептик, противогрибковое, обезболивающее, противоопухолевое, противосудорожное,
        сосудорасширяюще, спазмолитическое, релаксант, противовоспалительное, глистогонное, снижает
        содержание холестерина в крови, очищает жирную кожу от избытка кожного сала.
      </p>
    ),
  },
  {
    title: 'При каких заболеваниях использовать',
    content: (
      <p>
        Респираторные инфекции, высокое кровяное давление, гипертония, атеросклероз, проблемы с
        менструальным циклом, ПМС (PMS), бессонница, выпадение волос, кожные заболевания
        (восстановление тканей промежности, акне, экзема, псориаз, рубцы, растяжки), ожоги, нервное
        напряжение.
      </p>
    ),
  },
  {
    title: 'Духовное и эмоциональное воздействие',
    content: (
      <>
        <p>
          Масло расширяет сферу чувствознания, воскрешает дар расслабления, наделяет могуществом
          связывать активность таких разрушительных программ, как агрессия, гнев, раздражение,
          восстанавливает энергетическое тело.
        </p>
        <p>
          Успокоительное, расслабляющее и уравновешивающее, как физически, так и эмоционально.
          Исследования в Японском университете показали, что распыление определённых ароматов в
          офисе во много раз улучшает умственную аккуратность и концентрацию внимания.
        </p>
        <p>
          При распылении эфирного масла лимона ошибок на занятиях становится на 54% меньше, жасмина
          на 33%, лаванды на 20%.
        </p>
        <p>
          Когда эфирное масло распыляется во время сдачи экзаменов, то оценки улучшаются на 50%.
          Исследования задокументировали, что улучшается концентрация и умственное восприятие.
        </p>
        <p>
          Исследователи университета штата Майами обнаружили, что при вдыхании лавандового масла
          увеличиваются бета волны в головном мозге, повышая релаксация, сокращая депрессия, и
          улучшает познавательная способность (Диего и др. 1998). Исследования проводившееся в
          университете Осака Куоёки в 2001 году прказали, что лаванда снимает психическое напряжение
          и повышенную тревожность (Мотомура и др. 2001).
        </p>
        <p>
          В Японии в высшей школе Chiba Universiti обнаружили, что применение эфирного масла
          Лаванды уменьшает уровень кортизола в сыворотке крови, значит оно несет релаксацию и
          улучшает коронарный кровоток.
        </p>
        <p>
          Компания Young Living выращивает Лаванду на фермах штата Юта, Айдахо, в Эквадоре, во
          Франции.
          Следы эфирного масла Лаванды были найдены в гробнице Тутанхамона в 1922 году.
        </p>
        <p>
          Это масло чаще всего фальсифицируют, продавая гибридное или синтетическое масло, которое
          опасно для кожи. Убедитесь, что у вас эфирное масло терапевтического качества!
        </p>
      </>
    ),
  },
  {
    title: 'ORAC',
    content: (
      <>
        <blockquote>
          <h3>Что такое ORAC?</h3>
          <p>
            ORAC — это Oxygen Radical Absorbance Capacity или показатель способности антиоксидантов
            поглощать свободные радикалы. На простом языке это научное понятие означает, насколько
            хорошо данное вещество помогает моему организму бороться с такими нарушениями, как рак,
            сердечно-сосудистые заболевания, хронические заболевания органов и тканей. Он был введен
            учеными из Национального института по проблемам старения в Национальном институте
            здоровья (NIH) в Балтиморе, США
          </p>
        </blockquote>
        <p>221000 μTE/100g</p>
      </>
    ),
  },
  {
    title: 'Способ получения',
    content: (
      <p>Паровая дистилляция из цветущих растений.</p>
    ),
  },
  {
    title: 'Описание товара',
    content: (
      <ul>
        <li>Нанести 6-8 капель на нижнюю часть спины во время ПМС;</li>
        <li>Для приема внутрь поместить в капсулу, 2 раза в день, если необходимо;</li>
        <li>В массаже Raindrop Technique — послойное нанесение масел;</li>
        <li>
          Вдыхать с ладоней или из бутылочки — 5-8 капель в Диффузоре, по 30 мин 3 раза в день, или
          по мере необходимости;
        </li>
        <li>В ванну 5-6 капель на эмульгатор;</li>
        <li>Обогащение косметических средств: 2 капли на 10 мл основы.</li>
      </ul>
    ),
  },
  {
    title: 'Использование для домашних животных',
    content: (
      <p>
        Да, можно использовать для всех животных, включая кошек. Некоторые масла могут быть очень
        токсичными для кошек. К ним относятся цитрусовые масла не терапевтического качества!
        Пожалуйста, обратитесь к ветеринару, если вы не уверены, можно ли применять эфирное масло
        для вашего питомца.
      </p>
    ),
  },
  {
    title: 'Меры предосторожности',
    content: (
      <ul>
        <li>Использовать масло только терапевтического качества;</li>
        <li>Не разводим;</li>
        <li>Масло считается безопасным (GRAS) для внутреннего употребления в FDA;</li>
        <li>Лети до 6 лет не должны использовать масло в качестве пищевой добавки;</li>
        <li>При нанесении на кожу в чистом виде реакция нейтральна;</li>
        <li>Хранить в недоступном для детей месте;</li>
        <li>Срок хранения герметичной упаковки не ограничен.</li>
      </ul>
    ),
  },
  {
    title: 'Комплиментарные эфирные масла',
    content: (
      <p>
        Мирра, мирт, гвоздика, корица, цитронелла, кипарис, можжевельник, герань, роза, пачули,
        шалфей, розмарин, петит грейн, ромашка, фенхель, чабрец (тимьян), чайное дерево, сосна, бэй,
        валериана, ладан, сандал, имбирь, иссоп, лиметт, лимон, майоран, мирра, мускатный орех, роза
      </p>
    ),
  },
  {
    title: 'Синергия с другими эфирными маслами',
    content: (
      <>
        <p>
          Лаванда + Апельсин - расслабляющие ванны, снимающие боль
        </p>
        <p>
          Лаванда + Бессмертник – для ухода за кожей
        </p>
        <p>
          Лаванда + Вербена лимонная - оказывает успокаивающее действие на нервную систему
        </p>
        <p>
          Герань + Лаванда + Иланг-иланг (1:2:1) – уход за смешанной кожей
        </p>
        <p>
          Герань – против курения, использовать диффузор
        </p>
        <p>
          Грейпфрут + Лаванда + Ветивер (2:3:1) – от бессоницы
        </p>
        <p>
          Жасмин + Лаванда + Мандарин (1:2:1) – уход за чувствительной кожей
        </p>
        <p>
          Лаванда + Иланг-иланг - при гипертонии
        </p>
        <p>
          Лаванда + Каяпут + Герань - при псориазе
        </p>
        <p>
          Лаванда + Кедр атласский – для роста волос на голове
        </p>
        <p>
          Лаванда + Лавр благородный – антибактериальное действие
        </p>
        <p>
          Лаванда + Майоран + Петитгрейн - расслабляющее действие
        </p>
        <p>
          Лаванда + Мирра - заживляющий и болеутоляющий эффект
        </p>
        <p>
          Лаванда + Мирт + Ладан - мощное тонизирующее воздействие на кожу
        </p>
        <p>
          Лаванда + Моркови семена - регенерация, заживление, восстановление кожи
        </p>
        <p>
          Лаванда + Розмарин - зарубцовывающее действие
        </p>
        <p>
          Лаванда + Розовое дерево + Чайное дерево - при проблемной коже
        </p>
        <p>
          Лаванда + Тимьян - респираторные инфекции
        </p>
        <p>
          Лаванда + Шалфей мускатный - при потере волос
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
    title: 'Магазин',
    link: '/products',
  },
  {
    title: 'Эфирные масла',
    link: '/products-category',
  },
  {
    title: 'Эфирное масло Лаванды',
  },
];

const ProductsSinglePage = () => (
  <BaseLayout>
    <Container>
      <Row>
        <article className={s.article}>
          <ProductImage
            image="/images/product_1.png"
            title="Эфирное масло Лаванды"
            className={s.image}
          />
          <div className={s.content}>
            <BreadCrumbs
              className={s.breadCrumbs}
              navLinks={navLinks}
            />
            <ProductHeader
              title="Эфирное масло Лаванды"
              firm="Lavender"
              capacity={15}
              price={1040}
              description="Прекрасный букет свежих, цветочных, чистых и успокаивающих ароматов. Идеально подойдет тем, кто только начинается знакомиться с миром эфирных масел, и станет незаменимой вещью в каждом доме"
            />
            <Separator className={s.separatorTop} />
            {CONTENT.map((item) => (
              <CustomCollapse key={item.title} title={<h2>{item.title}</h2>}>
                {item.content}
              </CustomCollapse>
            ))}
          </div>
        </article>
        <Separator className={s.separatorBottom} />
        <SimilarPosts posts={POSTS} />
        <CTABlock
          className={s.blockCta}
          title="Откройте мир масел вместе с Young Living!"
          description="Станьте частью нашего сообщества и покупайте товары со скидкой 24% от розничной цены"
          button={{
            link: '/',
            label: 'Присоединиться',
          }}
        />
      </Row>
    </Container>
  </BaseLayout>
);

export default ProductsSinglePage;
