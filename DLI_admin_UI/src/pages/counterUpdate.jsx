import { Helmet } from 'react-helmet-async';

import CounterUpdateView from 'src/sections/counterUpdate/view/counterUpdate-view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CounterUpdateView />
    </>
  );
}
