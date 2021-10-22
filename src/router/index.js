import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,  // 布局组件
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/core/integral-grade',
    component: Layout,
    redirect: '/core/integral-grade/list',
    name: 'coreIntegralGrade',
    meta: { title: '积分等级管理', icon: 'el-icon-s-marketing' },
    // false（默认值）当且仅当父节点下只有一个子节点时，不显示父节点
    // true 任何时候都显示父节点和子节点
    alwaysShow: true, 
    children: [
      {
        path: 'list',
        name: 'coreIntegralGradeList',  // 每个路由节点的name的名字不能相同
        component: () => import('@/views/core/integral-grade/list'),  // 指向template模版组件
        meta: { title: '积分等级列表' } // 定义导航的标题
      },
      {
        path: 'create',
        name: 'coreIntegralGradeCreate',
        component: () => import('@/views/core/integral-grade/form'),
        meta: { title: '新增积分等级' }
      },
      {
        path: 'edit/:id', // :id是一个占位符，表示这部分url会是任何一个id
        name: 'coreIntegralGradeEdit',
        component: () => import('@/views/core/integral-grade/form'),
        meta: { title: '编辑积分等级' },
        hidden: true
      }
    ]
  },

  {
      path: '/core',
      component: Layout,
      redirect: '/core/dict/list',
      name: 'coreDict',
      meta: { title: '系统设置', icon: 'el-icon-setting' },
      alwaysShow: true,
      children: [
        {
          path: 'dict/list',
          name: '数据字典',
          component: () => import('@/views/core/dict/list'),
          meta: { title: '数据字典' }
        }
      ]
  },

  {
    path: '/core/user-info',
    component: Layout,
    redirect: '/core/user-info/list',
    name: 'coreUserInfo',
    meta: { title: '会员管理', icon: 'user' },
    alwaysShow: true,
    children: [
      {
        path: 'list',
        name: 'coreUserInfoList',
        component: () => import('@/views/core/user-info/list'),
        meta: { title: '会员列表' }
      }
    ]
  },

  {  
    path: '/core/borrower',
    component: Layout,
    name: 'coreBorrower',
    meta: { title: '借款管理', icon: 'el-icon-s-unfold' },
    alwaysShow: true,
    children: [
      {
        path: 'list',
        name: 'coreBorrowerList',
        component: () => import('@/views/core/borrower/list'),
        meta: { title: '借款人列表' }
      },
      {
        path: 'detail/:id',
        name: 'coreBorrowerDetail',
        component: () => import('@/views/core/borrower/detail'),
        meta: { title: '借款人详情' },
        hidden: true
      },
      {
        path: 'info-list',
        name: 'coreBorrowInfoList',
        component: () => import('@/views/core/borrow-info/list'),
        meta: { title: '借款列表' }
      },
      {
        path: 'info-detail/:id',
        name: 'coreBorrowInfoDetail',
        component: () => import('@/views/core/borrow-info/detail'),
        meta: { title: '借款详情' },
        hidden: true
      }
    ]
  },

  {
    path: '/core5',
    component: Layout,
    redirect: '/core5',
    name: 'coreDict',
    meta: { title: '抵押贷款管理（业务员）', icon: 'el-icon-service' },
    alwaysShow: true,
    children: [
      {
        path: '/1',
        name: '自助提交信息核对',
        meta: { title: '自助提交信息核对' }
      },
      {
        path: '/2',
        name: '人工服务信息录入',
        meta: { title: '人工服务信息录入' }
      },
      { 
        path: '/3',
        name: '审核反馈信息',
        meta: { title: '审核反馈信息' }
      },
      {
        path: '/4',
        name: '抵押贷款信息',
        meta: { title: '抵押贷款信息' }
      }
    ]
  },

  {
    path: '/core6',
    component: Layout,
    redirect: '/core6',
    name: 'coreDict',
    meta: { title: '抵押贷款信息管理（管理员）', icon: 'el-icon-time' },
    alwaysShow: true,
    children: [
      {
        path: '/5',
        name: '抵押贷款信息审批',
        meta: { title: '抵押贷款信息审批' }
      },
      {
        path: '/6',
        name: '审批信息通过',
        meta: { title: '审批信息通过' }
      },
      {
        path: '/7',
        name: '审批信息不通过',
        meta: { title: '审批信息不通过' }
      }
    ]
  },

  {
    path: '/core1',
    component: Layout,  
    redirect: '/core1',
    children: [{
      path: 'core1',
      name: '贷款资产审查（银行）',
      meta: { title: '贷款资产审查（银行）', icon: 'el-icon-phone' }
    }]
  },
  {
    path: '/core2',
    component: Layout,  
    redirect: '/core2',
    children: [{
      path: 'core2',
      name: '贷款申请审批（银行）',
      meta: { title: '贷款申请审批（银行）', icon: 'el-icon-phone' }
    }]
  },
  {
    path: '/core3',
    component: Layout,  
    redirect: '/core3',
    children: [{
      path: 'core3',
      name: '放款管理（银行）',
      meta: { title: '放款管理（银行）', icon: 'el-icon-phone' }
    }]
  },
  {
    path: '/core4',
    component: Layout,  
    redirect: '/core4',
    children: [{
      path: 'core4',
      name: '还款管理（银行）',
      meta: { title: '还款管理（银行）', icon: 'el-icon-phone' }
    }]
  },


  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '例子', icon: 'el-icon-s-help' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: '表格', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: '树', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: '表单', icon: 'form' }
  //     }
  //   ]
  // }
  
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },

  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router