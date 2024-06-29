import FavoriteColorDropdown from "../../general/FavoriteColorDropdown";
import NavigationButton from "../../general/SignUpNavigationButton";
import TermsAndConditionsCheckbox from "../../general/TermsAndConditionsCheckbox";

const SignUpAditionalInfoView = () => {
  return (
    <>
      <h1>{'Aditional Info'}</h1>

      <FavoriteColorDropdown />
      <TermsAndConditionsCheckbox />

      <NavigationButton navigationDirection="back" />
      <NavigationButton
        fieldsToValidate={['color', 'terms']}
        navigationDirection="next"
      />
    </>
  );
};

export default SignUpAditionalInfoView;