import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const CreatePage = lazy(() => import('src/pages/create'));
export const PostPage = lazy(() => import('src/pages/post'));
export const UpdatePage = lazy(() => import('src/pages/update'));
export const SocialInfo = lazy(() => import('src/pages/social-info'));
export const SocialInfoPost = lazy(() => import('src/pages/social-post'));
export const SocialUpdate = lazy(() => import('src/pages/social-update'));
export const ViewStoriesInfo = lazy(() => import('src/pages/stories-info'));
export const CreateStoriesInfo = lazy(() => import('src/pages/stories-post'));
export const AboutPage = lazy(() => import('src/pages/content'));
export const AboutUpdate = lazy(() => import('src/pages/content-update'));
export const ContentPost = lazy(() => import('src/pages/content-post'));
export const GalleryInfo = lazy(() => import('src/pages/galleryInfo'));
export const GalleryInfoCreate = lazy(() => import('src/pages/galleryInfoCreate'));
export const GalleryInfoUpdate = lazy(() => import('src/pages/galleryInfoUpdate'));
export const CompoanyInfo = lazy(() => import('src/pages/companyInfo'));
export const CompanyInfoPost = lazy(() => import('src/pages/companyInfo-post'));
export const CompanyInfoUpdate = lazy(() => import('src/pages/companyInfo-update'));
export const AchieveInfo = lazy(() => import('src/pages/achievementInfo'));
export const AchieveInfoCreate = lazy(() => import('src/pages/achievementCreate'));
export const AchieveInfoUpdate = lazy(() => import('src/pages/achievementUpdate'));
export const Review = lazy(() => import('src/pages/review'));
export const ReviewPost = lazy(() => import('src/pages/review-post'));
export const ReviewUpdate = lazy(() => import('src/pages/review-update'));
export const RegisterInfo = lazy(() => import('src/pages/registerInfo'));
export const SliderView = lazy(() => import('src/pages/slider-info'));
export const SliderCreate = lazy(() => import('src/pages/slider-create'));
export const SliderUpdate = lazy(() => import('src/pages/slider-update'));
export const CounterInfo = lazy(() => import('src/pages/counterInfo'));
export const CounterPost = lazy(() => import('src/pages/counterPost'));
export const CounterUpdate = lazy(() => import('src/pages/counterUpdate'));
export const CoursesInfo = lazy(() => import('src/pages/courses'));
export const CoursesPost = lazy(() => import('src/pages/coursesPost'));
export const TeachersInfo = lazy(() => import('src/pages/teachers'));
export const TeachersCreate = lazy(() => import('src/pages/teachers-create'));
export const TeachersUpdate = lazy(() => import('src/pages/teachersUpdate'));
export const FooterView = lazy(() => import('src/pages/footer-view'));
export const FooterCreate = lazy(() => import('src/pages/footer-create'));
export const FooterUpdate = lazy(() => import('src/pages/footer-update'));
export const FaqView = lazy(() => import('src/pages/faqInfo'));
export const FaqCreate = lazy(() => import('src/pages/faqInfoCreate'));
export const FaqUpdate = lazy(() => import('src/pages/faqInfoUpdate'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const ForgetPage = lazy(() => import('src/pages/forget'));
export const ProductsPage = lazy(() => import('src/pages/products'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'create', element: <CreatePage /> },
        { path: 'post', element: <PostPage /> },
        { path: 'gallery', element: <GalleryInfo /> },
        { path: 'gallery-create', element: <GalleryInfoCreate /> },
        { path: 'gallery-update/:id', element: <GalleryInfoUpdate /> },
        { path: 'update/:id', element: <UpdatePage /> },
        { path: 'social', element: <SocialInfo /> },
        { path: 'social-create', element: <SocialInfoPost /> },
        { path: 'social/:id', element: <SocialUpdate /> },
        { path: 'stories', element: <ViewStoriesInfo /> },
        { path: 'stories-create', element: <CreateStoriesInfo /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'about-create', element: <ContentPost /> },
        { path: 'about/:id', element: <AboutUpdate /> },
        { path: 'company', element: <CompoanyInfo /> },
        { path: 'company-create', element: <CompanyInfoPost /> },
        { path: 'company/:id', element: <CompanyInfoUpdate /> },
        { path: 'achieve', element: <AchieveInfo /> },
        { path: 'achieve-create', element: <AchieveInfoCreate /> },
        { path: 'achieve-update/:id', element: <AchieveInfoUpdate /> },
        { path: 'slider', element: <SliderView /> },
        { path: 'slider-create', element: <SliderCreate /> },
        { path: 'slider-update/:id', element: <SliderUpdate /> },
        { path: 'review', element: <Review /> },
        { path: 'review-create', element: <ReviewPost /> },
        { path: 'review/:id', element: <ReviewUpdate /> },
        { path: 'register', element: <RegisterInfo /> },
        { path: 'counter', element: <CounterInfo /> },
        { path: 'counter-create', element: <CounterPost /> },
        { path: 'counter-update/:id', element: <CounterUpdate /> },
        { path: 'courses', element: <CoursesInfo /> },
        { path: 'courses-create', element: <CoursesPost /> },
        { path: 'teachers', element: <TeachersInfo /> },
        { path: 'teachers-create', element: <TeachersCreate /> },
        { path: 'teachers-update/:id', element: <TeachersUpdate /> },
        { path: 'footer', element: <FooterView /> },
        { path: 'footer-create', element: <FooterCreate /> },
        { path: 'footer/:id', element: <FooterUpdate /> },
        { path: 'faq', element: <FaqView /> },
        { path: 'faq-create', element: <FaqCreate /> },
        { path: 'faq-update/:id', element: <FaqUpdate /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'forget',
      element: <ForgetPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
