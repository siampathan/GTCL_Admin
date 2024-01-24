import { Helmet } from 'react-helmet-async';

import { FooterView } from 'src/sections/footerView';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <FooterView />
    </>
  );
}
