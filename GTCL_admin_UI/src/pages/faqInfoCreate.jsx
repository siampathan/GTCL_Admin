import { Helmet } from 'react-helmet-async';

import { FaqCreateView } from 'src/sections/faqInfoCreate/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <FaqCreateView />
    </>
  );
}
