import { Helmet } from 'react-helmet-async';

import { StoriesView } from 'src/sections/stories/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <StoriesView />
    </>
  );
}
