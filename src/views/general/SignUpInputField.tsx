import { User } from "../../types/user";
import InputField from "./InputField";
import useSignUpViewController from "../../viewController/SignUpViewController";

const SignUpInputField = ({ field }: { field: keyof User }) => {
  const {
    fieldInfo: {
      value,
      error,
      type,
      label,
    },
    handleFieldChange,
    handleFieldOnBlur,
  } = useSignUpViewController(field);

  return (
    <InputField
      type={type}
      id={field}
      label={label}
      value={typeof value === 'string' ? value : ''}
      onChange={handleFieldChange()}
      onBlur={handleFieldOnBlur}
      error={error}
      required
    />
  );
};

export default SignUpInputField;