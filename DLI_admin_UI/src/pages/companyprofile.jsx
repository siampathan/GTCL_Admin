import { Helmet } from 'react-helmet-async';

import { CompanyprofileView } from 'src/sections/companyprofile';
// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CompanyprofileView />
    </>
  );
}
