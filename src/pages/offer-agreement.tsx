import React from 'react';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { BaseLayout } from '@layouts/BaseLayout';
import { Container } from '@ui/Container';
import { Row } from '@ui/Row';
import { BreadCrumbs } from '@ui/BreadCrumbs';
import { ContentWithRefs } from '@components/common/ContentWithRefs';
import { PageTitle } from '@components/common/PageTitle';

const CONTENT = [
  {
    title: '1. Общие положения',
    content: (
      <>
        <h2>1. Общие положения</h2>
        <p>
          1.1. Нижеследующий текст является Договором между интернет-магазином YL-Ukraine.com в
          дальнейшем «Продавец», и пользователем услуг интернет-магазина, независимо от статуса
          (физическое лицо, юридическое лицо, физическое лицо предприниматель), называется в
          дальнейшем «Покупатель».
        </p>
        <p>
          1.2. Настоящий Договор определяет условия покупки эфирных масел, смесей, косметики и
          другой продукции, в дальнейшем «Товар», Покупателем через интернет-магазин Продавца.
        </p>
        <p>
          1.3. Договор является публичным согласно ст. 633 и ст. 641 Гражданского кодекса Украины и
          является эквивалентом &quot;устного соглашения&quot; и имеет надлежащую юридическую силу.
        </p>
        <p>
          1.4. В соответствии со ст. 642 Гражданского Кодекса Украины полным и безоговорочным
          принятием условий данного договора-оферты, что подтверждает заключение Договора на
          предложенных условиях, факт осуществления Покупателем оплаты стоимости заказанного на
          сайте интернет-магазина (или другим способом) товара.
        </p>
        <p>
          1.5. В данной оферте, если контекст не требует иного, нижеприведённые термины имеют
          следующие значения:
          &quot;Интернет-магазин&quot; - сайт Продавца, созданный для заключения Договоров розничной
          и оптовой купли-продажи, после ознакомления Покупателем предложенному Товаром Продавца на
          фотоснимках дистанционным способом.
        </p>
        <p>
          &quot;Продавец&quot; - организация, независимо от её организационно-правовой формы и/или
          физическое лицо предприниматель, осуществляющий продажу товара.
        </p>
        <p>
          &quot;Товар&quot; - продукция, предлагаемая к продаже, и размещена на сайте YL-Ukraine.com
        </p>
        <p>
          &quot;Покупатель&quot; - физическое и/или юридическое лицо, осуществляет заказ на сайте
          YL-Ukraine.com.
        </p>
        <p>
          &quot;Получатель&quot; - физическое и/или юридическое лицо определён(-а) Покупателем,
          который должен получить заказанный Товар.
        </p>
        <p>
          &quot;Акцепт&quot; - полное и безоговорочное принятие Покупателем условий Договора.
        </p>
        <p>
          &quot;Заказ&quot; - отдельные позиции из ассортиментного перечня Товара, указанные
          Покупателем при оформлении заявки на сайте.
        </p>
      </>
    ),
  },
  {
    title: '2. Предмет договора',
    content: (
      <>
        <h2>2. Предмет договора</h2>
        <p>
          2.1. Продавец осуществляет продажу и доставку Товара, согласно действующему прейскуранту,
          опубликованного на сайте YL-Ukraine.com, а Покупатель оплачивает и принимает Товар в
          соответствии с условиями настоящего Договора.
        </p>
      </>
    ),
  },
  {
    title: '3. Порядок оформления заказа',
    content: (
      <>
        <h2>3. Порядок оформления заказа</h2>
        <h3>3.1. Формирование заказа.</h3>
        <p>
          3.1.1. Заказы принимаются через сайт YL-Ukraine.com в рабочее время Продавца.
        </p>
        <p>
          3.1.2. В стоимость заказа всех товаров входит доставка до Получателя, если стоимость
          заказа превышает 500 грн. и товар не куплен по оптовой цене, и не оплачивается отдельно.
        </p>
        <p>
          3.1.3. Стоимость всех видов доставки обозначена в разделе &laquo;Доставка&raquo; на сайте
          Продавца.
        </p>
        <p>
          3.1.4. Вместе с тем, Продавец не предоставляет услуги покупки и доставки товаров,
          приобретённых у третьих лиц по заказу Покупателя.
        </p>
        <p>
          3.1.5. Если заказ был полностью оформлен и оплачен Покупателем, формирование заказа
          происходит в течении
        </p>
        <p>
          суток.
        </p>
        <p>
          3.1.6. При оформлении заказа, Покупатель должен максимально точно указать данные
          Получателя. Неверная информация, предоставленная Покупателем, может помешать выполнению
          заказа в указанное время. В таком случае доставка откладывается до момента уточнения
          корректных данных Получателя.
        </p>
        <h3>3.2. Порядок оплаты заказа.</h3>
        <p>
          3.2.1. Оплата заказа означает согласие Покупателя на заключение настоящего Договора с
          Продавцом.
        </p>
        <p>
          3.2.2. Покупатель оплачивает стоимость заказа по Договору, путём перечисления денежных
          средств на расчётный счёт Продавца. Датой оплаты считается день поступления денежных
          средств на счёт Продавца.
        </p>
        <p>
          3.2.3. Цены на любые позиции Товара, указанные на сайте YL-Ukraine.com являются
          действующими на момент осуществления заказа.
        </p>
        <p>
          3.2.4. Покупатель имеет право подтвердить или аннулировать заказ, до того момента пока он
          не оплачен.
        </p>
        <p>
          3.2.5. Заказы принимаются к исполнению только после поступления денежных средств на счёт
          Продавца, за исключением выбора способа оплаты &laquo;Наличными при получении / наложенным
          платежом&raquo;.
        </p>
        <p>
          3.2.6. Покупателю сообщение об оплате заказа отправляется на электронный адрес, который
          был указан при оформлении заказа.
        </p>
        <p>
          3.2.7. Услуги платёжных систем, терминалов, Покупатель оплачивает дополнительно.&nbsp;
        </p>
        <h3>3.3. Условия доставки заказа.</h3>
        <p>
          3.3.1. При оформлении заказа, Покупатель должен чётко указать требования по его доставке.
          Один заказ может быть
        </p>
        <p>
          оформлен на одну дату, время, адрес
        </p>
        <p>
          3.3.2. Доставка заказа выполняется по предварительному согласованию с Получателем по
          телефону, который указан Покупателем в заказе.
        </p>
        <p>
          3.3.3. Внести изменения в заказ, Покупатель может в любой момент до нашего подтверждения
          об обработке заказа. Если заказ уже обработан нами, а товары заказаны нами с центрального
          склада, отменить его невозможно. Покупатель может оформить и оплатить новый заказ при этом
          предыдущий забрать в пункте самовывоза или же по желанию Покупателя, может быть
          переадресован другому получателю.
        </p>
      </>
    ),
  },
  {
    title: '4. Срок выполнения заказа',
    content: (
      <>
        <h2>4. Срок выполнения заказа</h2>
        <p>
          4.1. Срок выполнения заказа зависит от наличия Товара на складе, о котором Покупатель
          будет оповещен сразу после оформления заказа. Все зависит от сложности заказа: количества
          товара, редкости и его наличия, от непредвиденных событий, которые не зависят от Продавца
          (таможни, почтовые операторы, погодные условия и др.).
        </p>
        <p>
          4.2. В случае ненадлежащего исполнения доставки заказа по вине Продавца (несоответствие
          заказа с требованиями Покупателя или товар в ненадлежащем виде) дальнейшие действия
          смотрите в разделе &laquo;Рекламации&raquo; на сайте YL-Ukraine.com.
        </p>
        <p>
          4.3. Заказ считается выполненным в момент его передачи Получателю/Покупателю и/или его
          доверенным лицам.
        </p>
        <p>
          4.4. Соглашение между Продавцом и Покупателем действует с момента его заключения до
          момента вручения заказа Получателю/Покупателю или его доверенным лицам.
        </p>
      </>
    ),
  },
  {
    title: '5. Создание заказа и замена отсутствующих товаров',
    content: (
      <>
        <h2>5. Создание заказа и замена отсутствующих товаров</h2>
        <p>
          5.1. Продавец создаёт заказ в соответствии с требованиями Покупателя.
        </p>
        <p>
          5.2. Если у Продавца отсутствуют определённые элементы для оформления заказа по любым
          причинам Продавец по согласованию с Покупателем может осуществить замену или возможность
          заказа с международного склада с ожиданием.
        </p>
        <p>
          5.3. Если внешний вид товаров отличается от изображения на сайте Продавца, это не может
          быть дефектом или причиной для возврата средств или замены заказа.
        </p>
        <p>
          5.4. Все информационные материалы, представленные на сайте YL-Ukraine.com носят
          справочный характер и не могут в полной мере передавать достоверную информацию об
          определённых свойствах и характеристиках товара. В случае возникновения вопросов у
          Покупателя, касающиеся свойств и характеристик Товара, перед оформлением заказа ему
          необходимо обратиться за консультацией к администратору интернет-магазина по телефону или
          другому любому методу связи, представленному на сайте.
        </p>
      </>
    ),
  },
  {
    title: '6. Замена или возврат товара и возврат денег.',
    content: (
      <>
        <h2>6. Замена или возврат товара и возврат денег.</h2>
        <p>
          6.1. Согласно правилам компании эфирные масла и другие товары возврату и обмену не
          подлежат.
        </p>
        <p>
          6.2. Получатель/Покупатель может отказаться или вернуть заказ сразу при получении, указав
          курьеру причину возврата.
        </p>
        <p>
          6.3. Покупатель имеет право оформить письмо, с рекламацией используя форму обратной связи
          на сайте или по адресу электронной почты: youngliving.ua@outlook.com указав причину и
          предоставив соответствующие описание и подтверждающие фото.
        </p>
        <p>
          6.4. Правила подачи рекламации обозначены на сайте Продавца в разделе
          &laquo;Рекламации&raquo;.
        </p>
        <p>
          6.5. В случае замены или возврата товара, Покупатель или Получатель должен вернуть
          предыдущий товар в таком же виде, в котором ему был доставлен.
        </p>
        <p>
          6.6. Продавец может отказать в замене или компенсации стоимости подарка, в том случае,
          если у Получателя есть личные причины для возврата товара (аллергия, вкусовые качества и
          др.) о которых Продавец не был проинформирован.
        </p>
        <p>
          6.7. В случае отказа от заказа Получателем при предварительном звонке, Покупатель может
          получить уплаченные средства за данный заказ, если оно ещё не было обработано.
        </p>
        <p>
          6.8. В других случаях, Продавец рассматривает жалобы в течение 3-х рабочих дней со дня её
          получения, о результатах рассмотрения жалобы Продавец сообщает в электронном виде.
        </p>
        <p>
          6.9. Если по вине Продавца заказ не был доставлен в указанный день Покупателем или
          Получателем, Покупатель имеет право требовать компенсацию, размер которой не может
          превышать сумму заказа.
        </p>
      </>
    ),
  },
  {
    title: '7. Срок действия договора и порядок внесения изменений',
    content: (
      <>
        <h2>7. Срок действия договора и порядок внесения изменений</h2>
        <p>
          7.1. Акцепт Оферты Покупателем является подтверждением заключения Договора на условиях
          Оферты.
        </p>
        <p>
          7.2. Договор вступает в силу с момента оплаты заказа Покупателем и действует до момента
          исполнения Продавцом обязательств по настоящему Договору.
        </p>
        <p>
          7.3. Продавец имеет право вносить изменения в текст настоящего Договора по своему
          усмотрению в любой момент и без предварительного уведомления Покупателя. Актуальная
          (действующая) редакция Договора всегда доступна на сайте.
        </p>
        <p>
          7.4. Покупатель соглашается и признает, что внесение изменений в Оферту влечёт за собой
          внесение этих изменений в заключённый уже действующий между Покупателем и Продавцом
          Договор, и эти изменения в Договоре вступают в силу с такими изменениями в Оферте.
        </p>
      </>
    ),
  },
  {
    title: '8. Конфиденциальность',
    content: (
      <>
        <h2>8. Конфиденциальность</h2>
        <p>
          8.1. Продавец гарантирует сохранение тайны информации, которую Покупатель указывает при
          регистрации или при оформлении заказа.
        </p>
        <p>
          8.2. Продавец гарантирует, что персональные данные не будут использованы в корыстных
          целях, на сторонних ресурсах или для распространения спама.
        </p>
        <p>
          8.3. При оформлении заказа Покупатель даёт согласие на обработку своих персональных
          данных, которые хранятся в базе Продавца исключительно для идентификации
          Покупателя/Получателя при повторных заказах, и для корректного их выполнения. При отказе
          Покупателем, Продавец не сможет соответствующим образом провести заказ.
        </p>
      </>
    ),
  },
  {
    title: '9. Ответственность',
    content: (
      <>
        <h2>9. Ответственность</h2>
        <p>
          9.1. Продавец несёт все риски, связанные с потерей или повреждением товара до момента его
          передачи Покупателю.
        </p>
        <p>
          9.2. Получатель или тот, кто принял товар в момент отсутствия Получателя, несёт все риски
          связанные с потерей или повреждением товара с момента его приёма.
        </p>
        <p>
          9.3. Продавец вправе передавать свои права и обязанности по выполнению заказов третьим
          лицам, не освобождаясь от ответственности.
        </p>
        <p>
          9.4. Продавец не несёт ответственность за ненадлежащее использование или хранение товаров
          Покупателем, заказанных на сайте YL-Ukraine.com.
        </p>
        <p>
          9.5. Ответственность Сторон в иных случаях определяется в соответствии с
          законодательством Украины.
        </p>
        <p>
          9.6. Стороны соглашаются, что любые спорные ситуации, решение которых не удалось достичь
          путём переговоров, решаются в соответствии с действующим украинским законодательством.
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
    title: 'Договор публичной оферты',
  },
];

const OfferAgreement: React.FC = () => (
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

// export const getStaticProps = async ({ locale }: { locale: string }) => ({
//   props: {
//     ...await serverSideTranslations(locale, ['common', 'offer-agreement']),
//   },
// });

export default OfferAgreement;
