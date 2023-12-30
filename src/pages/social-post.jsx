import { Helmet } from 'react-helmet-async';

import { SocialPostView } from 'src/sections/socialPost/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <SocialPostView />
    </>
  );
}
