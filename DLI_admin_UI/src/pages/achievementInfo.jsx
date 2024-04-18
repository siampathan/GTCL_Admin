import { Helmet } from 'react-helmet-async';

import AchievementInfoView from 'src/sections/achievementInfo/view/achievementInfo-view';

// ----------------------------------------------------------------------

export default function CreatePage() {
  return (
    <>
      <Helmet>
        <title> User | Minimal UI </title>
      </Helmet>

      <AchievementInfoView />
    </>
  );
}
