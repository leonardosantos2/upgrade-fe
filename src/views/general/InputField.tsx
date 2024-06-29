import { InputFieldContainer } from "../../styles/inputField";

type InputFieldProps = {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputElement["type"];
  required?: boolean;
  error?: string;
};

const InputField = ({
  id,
  label,
  placeholder,
  value,
  onBlur,
  onChange,
  type,
  required = false,
  error,
}: InputFieldProps) => {
  return (
    <InputFieldContainer>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={label}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        required={required}
      />
      <p>{error}</p>
    </InputFieldContainer>
  );
};

export default InputField;