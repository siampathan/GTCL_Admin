import { Helmet } from 'react-helmet-async';

import { ContentUpdateView } from 'src/sections/contentUpdate/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ContentUpdateView />
    </>
  );
}
