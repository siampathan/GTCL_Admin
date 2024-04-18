import { Helmet } from 'react-helmet-async';

import { CompanyInfoCreate } from 'src/sections/companyInfoPost/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CompanyInfoCreate />
    </>
  );
}
