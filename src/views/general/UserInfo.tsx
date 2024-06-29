import { StyledUnsortedList } from "../../styles/userInfo";
import { User } from "../../types/user";
import useSignUpConfirmationViewController from "../../viewController/SignUpConfirmationViewController";

const fieldsToDisplay: { label: string; field: (keyof User) }[] = [{
  label: 'First Name',
  field: 'name',
}, {
  label: 'E-mail',
  field: 'email',
}, {
  label: 'Password',
  field: 'password',
}, {
  label: 'Favorite Color',
  field: 'color',
}, {
  label: 'Accept Terms',
  field: 'terms',

}];

const UserInfo = () => {
  const {
    user,
    getFieldExtraInfo,
  } = useSignUpConfirmationViewController();

  return (
    <StyledUnsortedList>
      {fieldsToDisplay.map(({ label, field }) => (
        <li key={field}>
          <strong>{`${ label }: `}</strong>
          {getFieldExtraInfo(field, user[field]).valueToDisplay}
        </li>
      ))}
    </StyledUnsortedList>
  );
};

export default UserInfo;