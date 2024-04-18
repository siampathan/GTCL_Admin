import { Helmet } from 'react-helmet-async';

import { AchieveCreateView } from 'src/sections/achievementInfoCreate/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <AchieveCreateView />
    </>
  );
}
