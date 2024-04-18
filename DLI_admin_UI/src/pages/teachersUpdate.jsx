import { Helmet } from 'react-helmet-async';

import { TeachersUpdateView } from 'src/sections/teachersUpdate/view';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <TeachersUpdateView />
    </>
  );
}
