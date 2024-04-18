import { Helmet } from 'react-helmet-async';

import { UpdateView } from 'src/sections/update/view';

// ----------------------------------------------------------------------

export default function UpdatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <UpdateView />
    </>
  );
}
