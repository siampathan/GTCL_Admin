import { Helmet } from 'react-helmet-async';

import { CompanyInfoUpdateView } from 'src/sections/companyInfoUpdate/view';

export default function CompanyInfoUpdate() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CompanyInfoUpdateView />
    </>
  );
}
