import { InputFieldContainer, InputFieldRow } from "../../styles/inputField";
import useSignUpViewController from "../../viewController/SignUpViewController";

const TermsAndConditionsCheckbox = () => {
  const {
    fieldInfo: {
      error,
      value,
    },
    handleFieldChange,
  } = useSignUpViewController('terms');
  const validateOnChange = true;

  return (
    <InputFieldContainer>
      <InputFieldRow>
        <input
          id="terms-and-conditions"
          type="checkbox"
          checked={!!value}
          onChange={handleFieldChange(validateOnChange)}
        />
        <label htmlFor="terms-and-conditions">
          I agree to the <a href="/terms-and-conditions">Terms and Conditions</a>
        </label>
      </InputFieldRow>
      {error && <p>{error}</p>}
    </InputFieldContainer>
  );
};

export default TermsAndConditionsCheckbox;