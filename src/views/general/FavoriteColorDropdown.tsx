import { InputFieldContainer } from "../../styles/inputField";
import useSignUpViewController from "../../viewController/SignUpViewController";
import Spinner, { SpinnerContainer } from "../general/Spinner";

const FavoriteColorDropdown = () => {
  const {
    colors,
    fieldInfo: {
      error,
      value: selectedColor,
    },
    isFetching,
    handleFieldChange,
  } = useSignUpViewController('color');
  const validateOnChange = true;

  return isFetching ?
    (
      <SpinnerContainer>
        <Spinner width="24px" />
      </SpinnerContainer>
    ) : (
      <InputFieldContainer>
        <label htmlFor="favorite-color">{"Select Your Favorite Color"}</label>
        <select
          id="favorite-color"
          value={typeof selectedColor === 'string' ? selectedColor : 'none'}
          onChange={handleFieldChange(validateOnChange)}
        >
          <option value="none" disabled hidden></option>
          {colors.map((color, index) => (
            <option key={`${ color }_${ index }`} value={color}>{color}</option>
          ))}
        </select>
        {error && <p>{error}</p>}
      </InputFieldContainer>
    );
};

export default FavoriteColorDropdown;