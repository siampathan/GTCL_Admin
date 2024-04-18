import { Helmet } from 'react-helmet-async';

import { CompanyInfoView } from 'src/sections/companyInfo/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CompanyInfoView />
    </>
  );
}
