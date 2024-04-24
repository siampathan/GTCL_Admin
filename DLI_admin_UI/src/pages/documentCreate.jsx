import { Helmet } from 'react-helmet-async';

import { DocumentPostView } from 'src/sections/documentPost';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <DocumentPostView />
    </>
  );
}
