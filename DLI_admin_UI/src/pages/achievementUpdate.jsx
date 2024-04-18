import { Helmet } from 'react-helmet-async';

import { AchieveInfoUpdate } from 'src/sections/achievementInfoUpdate/view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <AchieveInfoUpdate />
    </>
  );
}
