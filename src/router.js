import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home'),
      children: [
        // {
        //   path: '/',
        //   name: 'DashBoard',
        //   component: () => import('@/views/Dashboard'),
        //   props: true
        // },
        {
          path: '/',
          name: 'TaoBaoCao',
          component: () => import('@/views/FormTaoBaoCao'),
          props: true
        },
        {
          path: '/tao-bao-cao',
          name: 'TaoBaoCao',
          component: () => import('@/views/FormTaoBaoCao'),
          props: true
        },
        {
          path: '/bao-cao/:type',
          name: 'BaoCao',
          component: () => import('@/views/BaoCaoTongHop'),
          props: true
        },
        {
          path: '/bao-cao/:type/:id',
          name: 'BaoCao',
          component: () => import('@/views/ChiTietBaoCao'),
          props: true
        },
        {
          path: '/co-quan-don-vi',
          name: 'CoQuanDonVi',
          component: () => import('@/views/CoQuanDonVi'),
          props: true
        },
        {
          path: '/co-quan-don-vi/:id',
          name: 'ThongTinDonVi',
          component: () => import('@/views/ThongTinCoQuanDonVi'),
          props: true
        },
        {
          path: '/can-bo',
          name: 'CanBo',
          component: () => import('@/views/CanBo'),
          props: true
        },
        {
          path: '/can-bo/:id',
          name: 'ThongTinCanBo',
          component: () => import('@/views/ThongTinCanBo'),
          props: true
        },
        {
          path: '/vi-tri-chuc-danh',
          name: 'ViTriChucDanh',
          component: () => import('@/views/ViTriChucDanh'),
          props: true
        },
        {
          path: '/quan-ly-danh-muc',
          name: 'QuanLyDanhMuc',
          component: () => import('@/views/QuanLyDanhMuc'),
          props: true
        }
      ],
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/views/Login')
    }
  ]
})
