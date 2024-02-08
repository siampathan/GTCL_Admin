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
    title: 'post',
    path: '/post',
    icon: icon('ic_user'),
  },
  {
    title: 'Social Info',
    path: '/social',
    icon: icon('ic_user'),
  },
  {
    title: 'Content Info',
    path: '/content',
    icon: icon('ic_user'),
  },
  {
    title: 'Company Info',
    path: '/company',
    icon: icon('ic_user'),
  },
  {
    title: 'Gallery Info',
    path: '/gallery',
    icon: icon('ic_user'),
  },
  {
    title: 'Slider Info',
    path: '/slider',
    icon: icon('ic_user'),
  },
  {
    title: 'Review',
    path: '/review',
    icon: icon('ic_user'),
  },
  {
    title: 'Counter Info',
    path: '/counter',
    icon: icon('ic_user'),
  },
  {
    title: 'Faq Info',
    path: '/faq',
    icon: icon('ic_user'),
  },
  {
    title: 'Footer Info',
    path: '/footer',
    icon: icon('ic_user'),
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
