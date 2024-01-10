import { useDispatch } from "react-redux";
import { searchedText } from "../reducers/filterReducer";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    event.preventDefault();
    // console.log(event.target.value);
    dispatch(searchedText(event.target.value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};

export default Filter;
