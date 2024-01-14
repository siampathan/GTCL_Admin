import { Helmet } from 'react-helmet-async';

import { CounterInfoView } from 'src/sections/counterInfo/view';

// ----------------------------------------------------------------------

export default function PostPage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <CounterInfoView />
    </>
  );
}
