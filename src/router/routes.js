
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path:'signup', component:() => import('pages/SignupPage.vue')},
      { path:'signin', component:() => import('src/pages/SigninPage.vue')},
      {path:'signup2', component:() => import('src/pages/signuppage2.vue')},
      {path:'signup3', component:() => import('src/pages/signuppage3.vue')},
      {path:'blogslist', component:() => import('pages/BlogList.vue')},
      {path:'qwe', component:() => import('layouts/UserAreaLayout.vue')},
    ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
