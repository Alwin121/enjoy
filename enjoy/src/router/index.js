import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index'
import List from '../components/list'
import Listdetail from '../components/listdetail'
import Product from '../components/products'
import Productdetail from '../components/productdetail'
import Login from '../components/login'
import Register from '../components/register'
import Shopcar from '../components/shopcar'
import Myuser from '../components/myuser'
import Cover from '../components/cover'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      	path:'/list',
      	component:List
    },
    {
    	path:'/product',
    	component:Product,
    	children:[
    		{
    			path:':product',
    			component:Productdetail
    		}
    	]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/shopcar',
      component:Shopcar
    },
    {
      path:'/myuser',
      component:Myuser
    },
    {
      path:'/cover',
      component:Cover
    },
    {
      path:'/product',
      component:Product,
      children:[
        {
          path:':product',
          component:Productdetail
        }
      ]
    },
    {
        path:'/listdata',
        component:Index,
        children:[
          {
            path:':enjoy',
            component:Listdetail
          }
        ]
    },
    

  ]
})
