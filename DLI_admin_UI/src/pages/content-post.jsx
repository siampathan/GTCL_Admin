import { Helmet } from 'react-helmet-async';

import { ContentPostView } from 'src/sections/contentPost/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ContentPostView />
    </>
  );
}
