import { Helmet } from 'react-helmet-async';

import { TeachersCreateView } from 'src/sections/teachersCreate/view';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <TeachersCreateView />
    </>
  );
}
