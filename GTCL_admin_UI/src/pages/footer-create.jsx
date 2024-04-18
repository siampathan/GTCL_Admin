import { Helmet } from 'react-helmet-async';

import { FooterCreateView } from 'src/sections/footerCreate';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <FooterCreateView />
    </>
  );
}
