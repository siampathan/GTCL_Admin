import { Helmet } from 'react-helmet-async';

import { ContentView } from 'src/sections/content';

// ----------------------------------------------------------------------

export default function ContentPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <ContentView />
    </>
  );
}
