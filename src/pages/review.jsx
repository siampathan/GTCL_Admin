import { Helmet } from 'react-helmet-async';

import { ReviewView } from 'src/sections/review/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ReviewView />
    </>
  );
}
