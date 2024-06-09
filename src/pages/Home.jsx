import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/countryApi';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setIsLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCountries();
  }, []);
  console.log(countries);
  return (
    <Section>
      <Container>
        {isError && <Heading title={isError} bottom />}
        {isLoading && <Loader />}
        <CountryList list={countries} />
      </Container>
    </Section>
  );
};
