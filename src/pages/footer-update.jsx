import { Helmet } from 'react-helmet-async';

import { FooterUpdateView } from 'src/sections/footerUpdate';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <FooterUpdateView />
    </>
  );
}
