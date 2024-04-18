import { Helmet } from 'react-helmet-async';

import { ReviewPostView } from 'src/sections/reviewPost/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>
      <ReviewPostView />
    </>
  );
}
