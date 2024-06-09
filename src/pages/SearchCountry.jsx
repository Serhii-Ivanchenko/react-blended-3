import {
  Container,
  SearchForm,
  Heading,
  Section,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/countryApi';

export const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const region = searchParams.get('region');
    if (!region) return;
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, [searchParams]);
  const handleSubmit = region => {
    setSearchParams({ region });
    setCountries([]);
    setIsError(false);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleSubmit} />
        {isError && <Heading title={isError} bottom />}
        {isLoading && <Loader />}
        <CountryList list={countries} />
      </Container>
    </Section>
  );
};
