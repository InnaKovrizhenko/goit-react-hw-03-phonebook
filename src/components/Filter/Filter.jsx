import PropTypes from 'prop-types';
import { Input, Span, FilterLabel } from './Filter.styled';

export const Filter = ({onChange, value}) => {
    return (
        <FilterLabel>
            <Span>Find contacts by Name</Span>
            <Input type="text" onChange={onChange} value={value} />
        </FilterLabel>
    )
  }

  Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  };