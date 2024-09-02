// Admin Imports
import MainDashboard from '@pages/admin/views/admin/default'
import Product from './pages/admin/views/admin/product'
import Category from './pages/admin/views/admin/category'
import Promotion from './pages/admin/views/admin/promotion'

// Icon Imports
import { MdHome, MdOutlineShoppingCart, MdBarChart, MdPerson } from 'react-icons/md'

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: 'manager-dashboard',
    icon: <MdHome className='h-6 w-6' />,
    component: <MainDashboard />,
  },
  {
    name: 'Manage Product',
    layout: '/admin',
    path: 'manager-product',
    icon: <MdOutlineShoppingCart className='h-6 w-6' />,
    component: <Product />,
  },
  {
    name: 'Manager Promotion',
    layout: '/admin',
    icon: <MdBarChart className='h-6 w-6' />,
    path: 'manager-promotion',
    component: <Promotion />,
  },
  {
    name: 'Manager Category',
    layout: '/admin',
    path: 'manager-category',
    icon: <MdPerson className='h-6 w-6' />,
    component: <Category />,
  },
]

export default routes
