import { NavigationWrapper } from "../../../styles/buttons";
import { PageWrapper } from "../../../styles/page";
import FavoriteColorDropdown from "../../general/FavoriteColorDropdown";
import NavigationButton from "../../general/SignUpNavigationButton";
import TermsAndConditionsCheckbox from "../../general/TermsAndConditionsCheckbox";

const SignUpAditionalInfoView = () => {
  return (
    <PageWrapper>
      <h1>{'Aditional Info'}</h1>

      <FavoriteColorDropdown />
      <TermsAndConditionsCheckbox />

      <NavigationWrapper>
        <NavigationButton navigationDirection="back" />
        <NavigationButton
          fieldsToValidate={['color', 'terms']}
          navigationDirection="next"
        />
      </NavigationWrapper>
    </PageWrapper>
  );
};

export default SignUpAditionalInfoView;