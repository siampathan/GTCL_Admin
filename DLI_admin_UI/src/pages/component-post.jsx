import { Helmet } from 'react-helmet-async';

import { ComponentPostView } from 'src/sections/componentPost';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ComponentPostView />
    </>
  );
}
