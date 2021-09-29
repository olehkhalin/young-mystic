import React, { useState } from 'react';
import cx from 'classnames';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { Input } from '@ui/Input';
import { Button } from '@ui/Button';
import { Tag } from '@ui/Tag';
import { Separator } from '@ui/Separator';
import { CheckBox } from '@ui/CheckBox';
import { RadioButton } from '@ui/RadioButton';
import { PlusMinusInput } from '@ui/PlusMinusInput';
import { CustomCollapse } from '@ui/CustomCollapse';
import { TitleDescription } from '@components/common/TitleDescription';
import { ImageTextBig } from '@components/common/ImageTextBig';
import { CTABlock } from '@components/common/CTABlock';
import { ProductCard } from '@components/common/ProductCard';
import { BlogCard } from '@components/common/BlogCard';
import { ContentBlock } from '@components/common/ContentBlock';
import { BasketCard } from '@components/basket/BasketCard';
import ArrowRight from '@public/svg/ArrowRight.svg';
import Discount from '@public/svg/Discount.svg';

import s from '@styles/UiKit.module.sass';

const UiKit: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [plusMinusInputValue, setPlusMinusInputValue] = useState<number>(1);

  return (
    <BaseLayout>
      <div className={s.block}>
        <Container>
          <Row>
            <div className={s.inputs}>
              <Input
                className={s.input}
                type="email"
                label="Email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Input
                className={s.input}
                type="email"
                label="Email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                error="Enter valid Email"
              />
              <Input
                className={s.input}
                type="email"
                label="Email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                success
              />
              <Input
                className={s.input}
                type="email"
                label="Email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled
              />
            </div>
            <Separator className={s.separator} />
            <CheckBox label="Антибактериальное" />
            <CheckBox label="Антивозрастное" checked />
            <CheckBox label="Восстановление" />
            <CheckBox label="Массаж" />
            <CheckBox label="Для похудения" />
            <CheckBox label="Для роста волос" />
            <Separator className={s.separator} />
            <RadioButton label="Самовывоз" name="radio" value="samo" />
            <RadioButton label="Почтой" name="radio" value="pochta" />
            <Separator className={s.separator} />
            <PlusMinusInput
              value={plusMinusInputValue}
              minValue={1}
              maxValue={5}
              onValueChange={(value) => setPlusMinusInputValue(value)}
            />
            <Separator className={s.separator} />
            <Button className={s.button}>Узнать подробнее</Button>
            <Button className={s.button} theme="secondary">
              Присоединиться
            </Button>
            <Button className={cx(s.button, s.buttonDiscount)} theme="secondary">
              <Discount className={s.discountIcon} />
              Купить со скидкой
            </Button>
            <Button className={s.buttonClean} theme="clean">
              Читать далее
              <ArrowRight className={s.buttonArrow} />
            </Button>
            <Separator className={s.separator} />
            <div className={s.tags}>
              <Tag className={s.tag} href="/">Красота</Tag>
              <Tag className={s.tag} href="/">Эфирные масла</Tag>
              <Tag className={s.tag} href="/">Истории Гери Янга</Tag>
              <Tag className={s.tag} href="/">Здоровье</Tag>
              <Tag className={s.tag} href="/">Работа</Tag>
            </div>
            <div className={s.tagsSecondary}>
              <Tag href="/" theme="secondary" className={s.tag}>Красота</Tag>
              <Tag href="/" theme="secondary" className={s.tag}>Здоровье</Tag>
              <Tag href="/" theme="secondary" className={s.tag}>Здоровье</Tag>
              <Tag href="/" theme="secondary" className={s.tag}>Головная боль</Tag>
              <Tag href="/" theme="secondary" className={s.tag}>Эфирное масло</Tag>
            </div>
            <Separator className={s.separator} />
            <CustomCollapse title="Способ получения">
              <p>Паровая дистилляция из цветущих растений.</p>
              <p>
                Название “шалфей” происходит от латинского слова “salvere” и означает “исцелять или
                сохранять”. В средние века Шалфей мускатный называли “очищение для глаз”, в те
                времена настой из семян использовали для исцеления глазных болезней. Издавна Шалфей
                мускатный использовали для облегчения женских проблем, связанных с нарушением
                менструального цикла.
              </p>
            </CustomCollapse>
            <CustomCollapse title="Описание товара">
              <ul>
                <li>Нанести 6-8 капель на нижнюю часть спины во время ПМС</li>
                <li>Для приема внутрь поместить в капсулу, 2 раза в день, если необходимо</li>
                <li>В массаже Raindrop Technique — послойное нанесение масел</li>
                <li>
                  Вдыхать с ладоней или из бутылочки — 5-8 капель в Диффузоре, по 30 мин 3 раза в
                  день, или по мере необходимости
                </li>
                <li>В ванну 5-6 капель на эмульгатор</li>
                <li>Обогащение косметических средств: 2 капли на 10 мл основы</li>
              </ul>
            </CustomCollapse>
            <CustomCollapse theme="secondary" title="Способ получения">
              <p>Паровая дистилляция из цветущих растений.</p>
              <p>
                Название “шалфей” происходит от латинского слова “salvere” и означает “исцелять или
                сохранять”. В средние века Шалфей мускатный называли “очищение для глаз”, в те
                времена настой из семян использовали для исцеления глазных болезней. Издавна Шалфей
                мускатный использовали для облегчения женских проблем, связанных с нарушением
                менструального цикла.
              </p>
            </CustomCollapse>
            <CustomCollapse theme="secondary" title="Описание товара">
              <ul>
                <li>Нанести 6-8 капель на нижнюю часть спины во время ПМС</li>
                <li>Для приема внутрь поместить в капсулу, 2 раза в день, если необходимо</li>
                <li>В массаже Raindrop Technique — послойное нанесение масел</li>
                <li>
                  Вдыхать с ладоней или из бутылочки — 5-8 капель в Диффузоре, по 30 мин 3 раза в
                  день, или по мере необходимости
                </li>
                <li>В ванну 5-6 капель на эмульгатор</li>
                <li>Обогащение косметических средств: 2 капли на 10 мл основы</li>
              </ul>
            </CustomCollapse>
            <Separator className={s.separator} />
            <TitleDescription
              title="Эфирные масла"
              description="Масла разных растений по разному воздействуют на человека. Мой сайт рассказывает об их драгоценных свойствах и способах применения."
              className={s.title}
            />
            <Separator className={s.separator} />
            <ImageTextBig
              image="/images/Image_1.jpg"
              subHeader="Что такое oil life"
              title="Большой заголовок на две строки"
              description={(
                <>
                  <p>
                    Я долгое время занимался терапией,  искал лучшие масла и опробовал все
                    терапевтические масла на рынке. Так я открыл для себя масла Young Living.
                  </p>
                  <p>
                    Масла помогли мне создать удивительную гармонию в своем доме, где я могу
                    отдохнуть после тяжёлого дня и восстановить силы для новых побед. Я добавляю их
                    в качестве полезных добавок в еду, чтобы улучшить свое самочувствие и помочь
                    организму, а также использую их в качестве натуральных лекарств.
                  </p>
                </>
              )}
              button={{
                link: '/',
                label: 'Узнать подробнее',
              }}
            />
            <Separator className={s.separator} />
            <CTABlock
              title="Не знаете, с чего начать своё путешествие?"
              description="Эфирные масла — это целый неизведанный мир, в котором легко потеряться новичку. Если вам нужна помочь — наш тест вам поможет"
              button={{
                link: '/',
                label: 'Присоединиться',
              }}
            />
            <Separator className={s.separator} />
            <TitleDescription
              title="Популярные масла"
              description="В магазине вы можете познакомиться с ассортиментом Young Living и узнать, как правильно использовать эфирные масла. "
              className={s.titleProducts}
            />
            <div className={s.products}>
              <ProductCard
                image="/images/bronze.png"
                link="/"
                title="Эфирное масло Шалфея Мускатного"
                price={2110.00}
              />
              <ProductCard
                image="/images/bronze.png"
                link="/"
                title="Эфирное масло Шалфея Мускатного"
                price={2110.00}
                isSale
              />
              <ProductCard
                image="/images/bronze.png"
                link="/"
                title="Эфирное масло Шалфея Мускатного"
                price={2110.00}
                isNew
              />
              <ProductCard
                image="/images/bronze.png"
                link="/"
                title="Эфирное масло Шалфея Мускатного"
                price={2110.00}
              />
            </div>
            <Button href="/">Перейти в магазин</Button>
            <Separator className={s.separator} />
            <TitleDescription
              title="Эфирные масла"
              description="Подзаголовок раздела на одну, две или три строки, рассказывающий о разделе."
              className={s.titleProducts}
            />
            <BlogCard
              className={s.blogCard}
              image="/images/blog.jpg"
              slug="/"
              category={{
                slug: '/',
                label: 'Эфирные масла',
              }}
              date="2020-11-20"
              title="Большой заголовок на две строки"
              description="Подводка к статье, кратко описывающая эту статью на две, но возможно и на три или целых четыре строки"
            />
            <BlogCard
              className={s.blogCard}
              theme="small"
              image="/images/blog.jpg"
              slug="/"
              category={{
                slug: '/',
                label: 'Эфирные масла',
              }}
              date="2020-11-20"
              title="Большой заголовок на две строки"
            />
            <Separator className={s.separator} />
            <BasketCard
              image="/images/bronze.png"
              minValue={1}
              maxValue={5}
              amount={plusMinusInputValue}
              title="Эфирное масло Эвкалипта Шаровидного (Eucalyptus Globulus), 15 ml"
              price={2110.00}
              onAmountChange={(value) => setPlusMinusInputValue(value)}
              onRequestDelete={() => {}}
            />
            <Separator className={s.separator} />
            <ContentBlock>
              <p>
                Честно говоря, построение бизнеса никогда не было моей основной целью. Мне
                хотелось помогать людям решать их проблемы с помощью эфирных масел, в то время,
                как как наша дружная семья росла и присоединялись новые участники.
              </p>
              <p>
                Сейчас я уже понимаю, что хочу вести бизнес именно так: планировать свой день
                самостоятельно, делать то, что считаю нужным и, конечно же, учиться на своих
                ошибках. Но моим “топливом” для движения так и остаются благодарности людей за
                каждую помощь. Я всегда “горел” и делился только маслами, но теперь понял, что и
                помощь в виде гармоничного бизнеса может быть не менее полезной.
              </p>
              <h2>Что даёт бизнес с Young Living?</h2>
              <ul>
                <li>Творческую и финансовую свободу;</li>
                <li>Возможность помогать людям и видеть их благодарные улыбки;</li>
                <li>Улучшить свое здоровье и здоровье близких;</li>
                <li>Получать вознаграждение пропорционально своему труду;</li>
                <li>Бесплатно путешествовать по миру;</li>
                <li>Стать частью одной большой семьи, которая гарантирует общение и поддержку;</li>
                <li>Обладать информацией, которая может менять жизни людей.</li>
              </ul>
              <h2>Как мы делимся?</h2>
              <p>
                Когда люди только интересуются о моём бизнесе и я начинаю делиться с ними деталями,
                чаще всего они сразу же говорят: «Я не хочу продавать». И тогда у меня в голове:
                “Да, ура, это мой человек!”. Ведь это восхитительно! И я не хочу! Потому что мы не
                продаём. Вообще не говорите такие фразы, как:
              </p>
              <ul>
                <li>Заказать СЕГОДНЯ!</li>
                <li>Напиши и я расскажу!</li>
                <li>Не пропускайте эту возможность! Только сегодня!</li>
                <li>ПРОДАЖА ПРОДАЖА!</li>
              </ul>
              <p>
                Мы избегаем всех терминов продавцов подержанных автомобилей. Разговаривайте так,
                как если бы вы разговаривали с другом.
              </p>
              <p>
                Человек легко чувствует, предоставляют ли ему информацию для продажи или с ним
                делятся, потому что они чем-то одержимы. Как, например, мой ноутбук MacBook Pro 13”.
                Я не могу молчать о нём! Мне уже нужны пальцы на двух руках, чтобы сосчитать
                друзей, которые купили именно его из-за моих восторженных отзывов и я не
                зарабатываю ни копейки на этом. Я правда просто люблю его. И в моей жизни таких
                вещей масса. Подумайте, как бы вы рассказали о чем-то, если бы вам за это НЕ
                платили и сделайте это.
              </p>
            </ContentBlock>
          </Row>
        </Container>
      </div>
      <div className={cx(s.block, s.dark)}>
        <Container>
          <Row>
            <Input
              theme="dark"
              className={s.input}
              type="email"
              label="Email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Input
              theme="dark"
              className={s.input}
              type="email"
              label="Email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              error="Enter valid Email"
            />
            <Input
              theme="dark"
              className={s.input}
              type="email"
              label="Email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              success
            />
            <Input
              theme="dark"
              className={s.input}
              type="email"
              label="Email"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled
            />
          </Row>
        </Container>
      </div>
      <div className={cx(s.block, s.darken)}>
        <Container>
          <Row>
            <div className={s.tagsDark}>
              <Tag
                href="/"
                theme="dark"
                className={s.tag}
              >
                Эфирные масла
              </Tag>
              <Tag
                href="/"
                theme="dark"
                className={s.tag}
              >
                Стартовые наборы
              </Tag>
              <Tag
                href="/"
                theme="dark"
                className={s.tag}
              >
                Истории Д. Гери Янга
              </Tag>
              <Tag
                href="/"
                theme="dark"
                className={s.tag}
              >
                Красота
              </Tag>
              <Tag
                href="/"
                theme="dark"
                className={s.tag}
              >
                Здоровье
              </Tag>
              <Tag
                href="/"
                theme="dark"
                className={s.tag}
              >
                Бизнеc с Young Living
              </Tag>
            </div>
            <Separator theme="dark" />
            <CustomCollapse theme="dark" title="Способ получения">
              <p>Паровая дистилляция из цветущих растений.</p>
              <p>
                Название “шалфей” происходит от латинского слова “salvere” и означает “исцелять или
                сохранять”. В средние века Шалфей мускатный называли “очищение для глаз”, в те
                времена настой из семян использовали для исцеления глазных болезней. Издавна Шалфей
                мускатный использовали для облегчения женских проблем, связанных с нарушением
                менструального цикла.
              </p>
            </CustomCollapse>
            <CustomCollapse theme="dark" title="Описание товара">
              <ul>
                <li>Нанести 6-8 капель на нижнюю часть спины во время ПМС</li>
                <li>Для приема внутрь поместить в капсулу, 2 раза в день, если необходимо</li>
                <li>В массаже Raindrop Technique — послойное нанесение масел</li>
                <li>
                  Вдыхать с ладоней или из бутылочки — 5-8 капель в Диффузоре, по 30 мин 3 раза в
                  день, или по мере необходимости
                </li>
                <li>В ванну 5-6 капель на эмульгатор</li>
                <li>Обогащение косметических средств: 2 капли на 10 мл основы</li>
              </ul>
            </CustomCollapse>
            <Separator theme="dark" />
            <ProductCard
              className={s.productSmall}
              theme="small"
              image="/images/bronze.png"
              link="/"
              title="Эфирное масло Шалфея Мускатного (Clary Sage), 15ml"
              price={2110.00}
            />
            <ProductCard
              className={s.productSmall}
              theme="small"
              image="/images/bronze.png"
              link="/"
              title="Эфирное масло Эвкалипта Шаровидного (Eucalyptus Globulus), 15 ml"
              price={2110.00}
            />
            <BlogCard
              className={s.blogCard}
              theme="dark"
              image="/images/blog.jpg"
              slug="/"
              category={{
                slug: '/',
                label: 'Эфирные масла',
              }}
              date="2020-12-10"
              title="Большой заголовок на две строки"
            />
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default UiKit;
