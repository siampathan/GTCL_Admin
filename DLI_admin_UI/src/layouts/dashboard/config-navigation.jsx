import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Menu',
    path: '/post',
    icon: icon('ic_menu'),
  },
  {
    title: 'Social Info',
    path: '/social',
    icon: icon('ic_share'),
  },
  {
    title: 'About Info',
    path: '/about',
    icon: icon('ic_about'),
  },
  {
    title: 'Jobs Info',
    path: '/company',
    icon: icon('ic_jobs'),
  },
  {
    title: 'Achievement Info',
    path: '/achieve',
    icon: icon('ic_achieve'),
  },
  {
    title: 'Gallery Info',
    path: '/gallery',
    icon: icon('ic_gallery'),
  },
  {
    title: 'Slider Info',
    path: '/slider',
    icon: icon('ic_slider'),
  },
  {
    title: 'Client Message',
    path: '/review',
    icon: icon('ic_client'),
  },
  {
    title: 'Register Info',
    path: '/register',
    icon: icon('ic_user'),
  },
  {
    title: 'Country Info',
    path: '/counter',
    icon: icon('ic_country'),
  },
  {
    title: 'License Info',
    path: '/faq',
    icon: icon('ic_license'),
  },
  {
    title: 'Content Info',
    path: '/footer',
    icon: icon('ic_content'),
  },
  {
    title: 'Stories Info',
    path: '/stories',
    icon: icon('ic_user'),
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: icon('ic_user'),
  },
  {
    title: 'Teachers',
    path: '/teachers',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'blog',
    path: '/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
