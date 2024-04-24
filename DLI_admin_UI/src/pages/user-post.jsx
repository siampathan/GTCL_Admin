import { Helmet } from 'react-helmet-async';

import { UserPostView } from 'src/sections/userPost';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <UserPostView />
    </>
  );
}
