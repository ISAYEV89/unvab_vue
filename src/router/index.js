import Home from '../pages/Home'
import Blog from '../pages/Blog'
import BlogInner from '../pages/BlogInner'
import Portfolio from '../pages/Portfolio'
import PortfolioInner from '../pages/PortfolioInner'

export const routes = [
  {
    path: '/',
    component: Home,
     name: Home,
  },

  {
    path: '/blog',
    component: Blog,
    //name: Blog,
  },

  {
    path: '/BlogInner',
    component: BlogInner,
    //name: BlogInner,
  },

  {
    path: '/Portfolio',
    component: Portfolio,
    //name: Portfolio,
  },

  {
    path: '/PortfolioInner',
    component: PortfolioInner,
    //name: PortfolioInner,
  },

];
