import { FilterInput } from './Filter.styled';

export const Filter = ({ filterData, onChangeFilter }) => {
  return (
    <FilterInput
      type="text"
      value={filterData}
      onChange={evt => {
        onChangeFilter(evt.target.value);
      }}
    />
  );
};
