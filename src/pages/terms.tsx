import React from 'react';
import CustomPage from '../components/common/customPage/CustomPage';
import TermsScreen from '../components/termsScreen/TermsScreen';

interface TermsPageProps {}

const TermsPage: React.FC<TermsPageProps> = () => {
  return (
    <>
      <CustomPage>
        <TermsScreen />
      </CustomPage>
    </>
  );
};

export default TermsPage;
