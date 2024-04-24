import { Helmet } from 'react-helmet-async';

import { DocumentInfoUpdate } from 'src/sections/documentUpdate';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <DocumentInfoUpdate />
    </>
  );
}
