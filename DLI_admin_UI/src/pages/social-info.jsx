import { Helmet } from 'react-helmet-async';

import { SocialView } from 'src/sections/social/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <SocialView />
    </>
  );
}
