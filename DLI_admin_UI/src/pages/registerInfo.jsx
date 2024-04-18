import { Helmet } from 'react-helmet-async';

import { RegisterInfoView } from 'src/sections/registerInfo/view';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <RegisterInfoView />
    </>
  );
}
