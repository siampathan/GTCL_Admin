import { Helmet } from 'react-helmet-async';

import { CompanyprofileUpdate } from 'src/sections/companyprofileUpdate';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CompanyprofileUpdate />
    </>
  );
}
