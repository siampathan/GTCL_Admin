import { Helmet } from 'react-helmet-async';

import { FaqInfo } from 'src/sections/faqInfo/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <FaqInfo />
    </>
  );
}
