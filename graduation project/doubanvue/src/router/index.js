import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movie from '@/components/Movie'
import Login from '@/components/Login'
import Signin from '@/components/Signin'
import Caidan from '@/components/Caidan'
import Introduce from '@/components/Introduce'
import Book from '@/components/Book'
import Radio from '@/components/Radio'
import Movies from '@/components/Movies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: '/movie',
    	name: 'Movie',
    	component: Movie
    },
    {
    	path: '/login',
    	name: 'Login',
    	component: Login
    },
    {
    	path: '/signin',
    	name: 'Signin',
    	component: Signin
    },
    {
    	path: '/caidan',
    	name: 'Caidan',
    	component: Caidan
    },
    {
    	path:'/introduce/:id',
    	name:'intruduce',
    	component: Introduce
    },
     {
    	path:'/book',
    	name:'book', 
    	component: Book
    },
    {
    	path:'/radio',
    	name:'radio',
    	component: Radio
    },
    {
    	path:'/movies',
    	name:'movies',
    	component: Movies
    }
  ]
})