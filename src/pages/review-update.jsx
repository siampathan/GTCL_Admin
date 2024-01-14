import { Helmet } from 'react-helmet-async';

import { ReviewUpdateView } from 'src/sections/reviewUpdate/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>
      <ReviewUpdateView />
    </>
  );
}
