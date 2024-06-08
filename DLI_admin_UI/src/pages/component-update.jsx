import { Helmet } from 'react-helmet-async';

import ComponentUpdateView from 'src/sections/componentUpdate/componentUpdate-view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ComponentUpdateView />
    </>
  );
}
