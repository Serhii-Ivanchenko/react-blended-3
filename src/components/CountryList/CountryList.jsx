import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';

export const CountryList = ({ list }) => {
  return (
    <Grid>
      {list.map(item => (
        <GridItem key={item.id}>
          <Link to={`/country/${item.id}`}>
            <img src={item.flag} alt={item.name} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
