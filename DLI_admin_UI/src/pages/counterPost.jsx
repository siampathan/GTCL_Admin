import { Helmet } from 'react-helmet-async';

import { CounterPostView } from 'src/sections/counterPost/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CounterPostView />
    </>
  );
}
