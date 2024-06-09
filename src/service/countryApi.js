import axios from 'axios';
import { transformCountriesData, transformCountryData } from 'helpers';
const API_KEY = '1BFadn2ZiNk5cWyE506a9gIkyjg3BGzh6QWGRlYK';

axios.defaults.baseURL = `https://countryapi.io/api/`;
axios.defaults.params = {
  apikey: API_KEY,
};

export const getCountries = async () => {
  const { data } = await axios.get(`/region/europe`);
  const countries = transformCountriesData(Object.values(data));

  return countries;
};

export const fetchCountry = async id => {
  const { data } = await axios.get(`/name/${id}`);
  const country = transformCountryData(data);

  return country[0];
};

export const fetchByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  const countries = transformCountriesData(data);

  return countries;
};
