import { Helmet } from 'react-helmet-async';

import { FaqUpdateView } from 'src/sections/faqInfoUpdate/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <FaqUpdateView />
    </>
  );
}
