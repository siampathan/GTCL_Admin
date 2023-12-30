import { Helmet } from 'react-helmet-async';

import { SocialUpdateView } from 'src/sections/socialUpdate/view';

export default function SocialUpdate() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <SocialUpdateView />
    </>
  );
}
