import { Helmet } from 'react-helmet-async';

import { StoriesCreate } from 'src/sections/storiesPost/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <StoriesCreate />
    </>
  );
}
