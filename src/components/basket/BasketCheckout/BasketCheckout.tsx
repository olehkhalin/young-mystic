import React, { useCallback, useEffect, useMemo, useState } from 'react';
import cx from 'classnames';
import {
  Field,
  withTypes,
} from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';

import { FixedSizeList } from 'react-window';
// @ts-ignore
import ApiNovaPochta from 'yz-react-deliveri-newpochta';
import {
  createFilter,
  components,
} from 'react-select';

import { NOVA_POCHTA_API_KEY } from '@utils/constants';
import { RadioButton } from '@ui/RadioButton';
import { Input } from '@ui/Input';
import { Textarea } from '@ui/Textarea';
import { Button } from '@ui/Button';
import { SelectUI } from '@ui/Select';

import s from './BasketCheckout.module.sass';

const WhitelistedCities = [
  {
    label: 'Киев',
    value: '8d5a980d-391c-11dd-90d9-001a92567626',
  },
  {
    label: 'Одесса',
    value: 'db5c88d0-391c-11dd-90d9-001a92567626',
  },
  {
    label: 'Харьков',
    value: 'db5c88e0-391c-11dd-90d9-001a92567626',
  },
  {
    label: 'Днепр',
    value: 'db5c88f0-391c-11dd-90d9-001a92567626',
  },
  {
    label: 'Львов',
    value: 'db5c88f5-391c-11dd-90d9-001a92567626',
  },
];

function OptimizedOption(props: any) {
  delete props.innerProps.onMouseMove;
  delete props.innerProps.onMouseOver;
  return <components.Option {...props}>{props.children}</components.Option>;
}

function OptimizedMenuList(props: any) {
  const { options, children, maxHeight, getValue } = props;
  if (!children || !Array.isArray(children)) return null;

  const height = 40;
  const selectedValues = getValue();
  const initialOffset = selectedValues[0] ? options.indexOf(selectedValues[0]) * height : 0;

  return (
    <FixedSizeList
      width={''}
      itemSize={height}
      height={maxHeight}
      itemCount={children.length}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }: any) => (
        <div className="option-wrapper" style={style}>
          {children[index]}
        </div>
      )}
    </FixedSizeList>
  );
}

type FormValues = {
  option: 'post' | 'pickup'
  post?: 'department' | 'courier' | 'parcel-machine'
  name: string
  surname: string
  phone: string
  email: string
  comment?: string
};

type BasketCheckoutProps = {
  className?: string
};

export const BasketCheckout: React.FC<BasketCheckoutProps> = ({
  className,
}) => {
  const { Form } = withTypes<FormValues>();

  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState<'department' | 'courier' | 'parcel-machine'>('department');

  const [citiesList, setCitiesList] = useState<{ label: string, value: string }[]>();
  const [selectedCity, setSelectedCity] = useState<{ label: string, value: string }>();
  const [warehousesList, setWarehousesList] = useState<{ label: string, value: string, CategoryOfWarehouse: string }[]>();

  const np = new ApiNovaPochta;

  const getCities = useCallback(() => {
    return np.getCities((data: any) => {
      const finalArray = data.data.map((el: { DescriptionRu: string, Ref: string }) => ({
        label: el.DescriptionRu,
        value: el.Ref,
      }));

      setCitiesList(finalArray);
    }, NOVA_POCHTA_API_KEY);
  }, [np]);

  const getWarehouses = useCallback(() => {
    if (selectedCity) {
      return np.getWarehouses((data: any) => {
        const finalArray = data.data.map((el: { DescriptionRu: string, Ref: string, CategoryOfWarehouse: string }) => ({
          label: el.DescriptionRu,
          value: el.Ref,
          CategoryOfWarehouse: el.CategoryOfWarehouse,
        }));

        setWarehousesList(finalArray);
      }, NOVA_POCHTA_API_KEY, { CityName: selectedCity.label, CityRef: selectedCity.value });
    }
  }, [np, selectedCity]);

  useEffect(() => {
    getCities();
  }, []);
  useEffect(() => {
    getWarehouses();
  }, [selectedCity]);

  const warehousesListFiltered = useMemo(() => {
    if (selectedDeliveryOption === 'department' || selectedDeliveryOption === 'parcel-machine') {
      return warehousesList?.filter(el => el.CategoryOfWarehouse === (
        selectedDeliveryOption === 'department' ? 'Branch' : 'Postomat'
      ));
    } else {
      return [];
    }
  }, [warehousesList, selectedDeliveryOption]);

  return (
    <div className={s.root}>
      <Form
        onSubmit={(values: any) => { console.log('values', values); }}
        mutators={{
          setValue: ([field, value], state, { changeValue }) => {
            changeValue(state, field, () => value);
          },
        }}
        initialValues={{ option: 'post', post: 'department' }}
        render={({
          handleSubmit, form, values,
        }) => (
          <form
            onSubmit={handleSubmit}
            className={cx(s.form, className)}
          >
            <h2 className={s.header}>
              Способ доставки
            </h2>
            <Field
              name="option"
              type="radio"
              value="post"
            >
              {({ input }) => (
                <RadioButton
                  {...input}
                  label="Почтой"
                />
              )}
            </Field>
            <OnChange name="option">
              {() => {
                if (values.option === 'post') {
                  if (values.post === null) {
                    form.mutators.setValue(
                      'post',
                      'department',
                    );
                  }
                } else {
                  form.mutators.setValue(
                    'post',
                    null,
                  );
                }
              }}
            </OnChange>
            <div className={s.post}>
              <p className={s.description}>
                Доставка заказа почтовой службой “Новая почта”. Стоимость доставки рассчитывается согласно тарифам компании
              </p>
              <Field
                name="post"
                type="radio"
                value="department"
              >
                {({ input }) => (
                  <RadioButton
                    {...input}
                    label="В отделении"
                  />
                )}
              </Field>
              <Field
                name="post"
                type="radio"
                value="courier"
              >
                {({ input }) => (
                  <RadioButton
                    {...input}
                    label="Курьером"
                  />
                )}
              </Field>
              <Field
                name="post"
                type="radio"
                value="parcel-machine"
              >
                {({ input }) => (
                  <RadioButton
                    {...input}
                    label="В почтомате"
                  />
                )}
              </Field>
              <OnChange name="post">
                {() => {
                  if (values.post) {
                    setSelectedDeliveryOption(values.post);
                    form.mutators.setValue(
                      'option',
                      'post',
                    );
                  } else {
                    setSelectedDeliveryOption('department');
                  }
                }}
              </OnChange>
            </div>

            <Field
              name="option"
              type="radio"
              value="pickup"
            >
              {({ input }) => (
                <RadioButton
                  {...input}
                  label="Самовывоз"
                />
              )}
            </Field>
            {
              values.option === 'post' && (
                <>
                  <h2 className={cx(s.header, s.headerInfo)}>
                    Адреса Доставки
                  </h2>
                  <SelectUI
                    components={{
                      Option: OptimizedOption,
                      MenuList: OptimizedMenuList,
                    }}
                    filterOption={createFilter({ ignoreAccents: false })}
                    label='Выберите город'
                    options={citiesList}
                    value={selectedCity}
                    // @ts-ignore
                    onChange={(value) => setSelectedCity(value)}
                  />
                  <div className={s.arrayOfCities}>
                    {WhitelistedCities.map((city) => (
                      <button key={city.value} className={s.city} onClick={() => setSelectedCity(city)}>
                        {city.label}
                      </button>
                    ))}
                  </div>
                  {(values.post === 'department' ||  values.post === 'parcel-machine') && (
                    <SelectUI
                      label={values.post === 'department' ? 'Отделение' : 'Почтомат'}
                      options={warehousesListFiltered}
                      isDisabled={!selectedCity}
                      className={cx(s.input, s.lastInput)}
                    />
                  )}
                  {values.post === 'courier' && (
                    <>
                      <Field
                        name="street"
                      >
                        {({ input }) => (
                          <Input
                            {...input}
                            className={s.input}
                            label="Улица"
                          />
                        )}
                      </Field>
                      <div className={s.doubleInputs}>
                        <Field
                          name="flat"
                        >
                          {({ input }) => (
                            <Input
                              {...input}
                              className={cx(s.input, s.halfInput)}
                              label="Квартира"
                            />
                          )}
                        </Field>
                        <Field
                          name="house"
                        >
                          {({ input }) => (
                            <Input
                              {...input}
                              className={cx(s.input, s.halfInput)}
                              label="Номер дома"
                            />
                          )}
                        </Field>
                      </div>
                    </>
                  )}
                </>
              )
            }
            {
              values.option === 'pickup' && (
                <>
                  <h2 className={cx(s.header, s.headerInfo)}>
                    Адреса самовывоза
                  </h2>
                  <ul>
                    <li className={s.address}>
                      <a
                        href="https://www.google.com/maps/place/7A,+%D1%83%D0%BB.+%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%B0+%D0%9A%D0%BE%D1%88%D0%B8%D1%86%D0%B0,+7%D0%90,+%D0%9A%D0%B8%D0%B5%D0%B2,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+02000/@50.4052995,30.6430661,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4c4556cbe45ef:0x8c379612dac636e6!8m2!3d50.4052995!4d30.6452548"
                        target='_blank'
                        rel="noreferrer noopener"
                        className={s.link}
                      >
                        г. Киев, Ул. Кошица 7а
                      </a>
                      <br/>
                      График работы:
                      <br/>
                      пн-пт 8:00 – 20:00
                    </li>
                    <li className={s.address}>
                      <a
                        href="https://www.google.com/maps/place/1A,+%D1%83%D0%BB.+%D0%92%D0%BE%D1%81%D0%BA%D1%80%D0%B5%D1%81%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F,+1%D0%90,+%D0%94%D0%BD%D0%B8%D0%BF%D1%80%D0%BE,+%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+49000/data=!4m2!3m1!1s0x40dbe2eed621d407:0x2c02cd3fe7250dc2?sa=X&ved=2ahUKEwi1uuT93KfzAhUlElkFHdewBvgQ8gF6BAgQEAE"
                        target='_blank'
                        rel="noreferrer noopener"
                        className={s.link}
                      >
                        г. Днепр, Ул. Воскресенская 1А
                      </a>
                      <br/>
                      График работы:
                      <br/>
                      пн, ср, пт 10:00 – 20:00
                    </li>
                  </ul>
                </>
              )
            }
            <h2 className={cx(s.header, s.headerInfo)}>
              Информация о получателе
            </h2>

            <Field
              name="name"
            >
              {({ input }) => (
                <Input
                  {...input}
                  className={s.input}
                  label="Имя"
                />
              )}
            </Field>
            <Field
              name="surname"
            >
              {({ input }) => (
                <Input
                  {...input}
                  className={s.input}
                  label="Фамилия"
                />
              )}
            </Field>
            <Field
              name="phone"
            >
              {({ input }) => (
                <Input
                  {...input}
                  className={s.input}
                  label="Номер телефона"
                />
              )}
            </Field>
            <Field
              name="email"
            >
              {({ input }) => (
                <Input
                  {...input}
                  className={s.input}
                  label="Электронная почта"
                />
              )}
            </Field>
            <Field
              name="comment"
            >
              {({ input }) => (
                <Textarea
                  {...input}
                  className={s.textarea}
                  label="Примечания к заказу"
                />
              )}
            </Field>
            <Button className={s.button} type="submit">
              Оформить заказ
            </Button>
            <p className={cx(s.description, s.buttonDescription)}>
              Нажимая на кнопку “Оформить заказ”, вы соглашаетесь с условиями Пользовательского соглашения и правилами обработки данных
            </p>
          </form>
        )}
      />
    </div>
  );
};
