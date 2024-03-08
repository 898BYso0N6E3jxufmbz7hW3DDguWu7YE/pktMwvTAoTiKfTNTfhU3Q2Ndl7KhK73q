import React from 'react';
import CustomPage from '../components/common/customPage/CustomPage';
import TermsScreen from '../components/termsScreen/TermsScreen';

interface PrivacyPageProps {}

const PrivacyPage: React.FC<PrivacyPageProps> = () => {
  return (
    <>
      <CustomPage>
        <TermsScreen />
      </CustomPage>
    </>
  );
};

export default PrivacyPage;
