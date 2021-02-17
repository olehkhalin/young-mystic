import React from 'react';

import { useCountriesListQuery } from '@graphql';

export const CountriesListContainer: React.FC = () => {
  const { data, error } = useCountriesListQuery();

  if (error) {
    throw error;
  }

  return (
    <ul>
      {data?.countries.map(
        (country) => (
          <li key={country.code}>
            {country.code}
            ,
            {country.name}
            ,
            {country.continent.code}
          </li>
        ),
      )}
    </ul>
  );
};
