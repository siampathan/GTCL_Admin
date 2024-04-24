import { Helmet } from 'react-helmet-async';

import { DocumentView } from 'src/sections/document/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>
      <DocumentView />
    </>
  );
}
