import { createRouter, createWebHistory } from "vue-router";
import PageNotFound from '../components/PageNotFound.vue';
import Home from "../pages/Home.vue";
import Form from "../pages/Form.vue";
import Category from "../pages/category/index.vue";
import CategoryCreate from "../pages/category/create.vue";
import EditCategory from "../pages/category/edit.vue";
import Product from "../pages/product/index.vue";
import ProductCreate from "../pages/product/create.vue";
import editProduct  from "../pages/product/edit.vue";


const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/form',
            name:'Form',
            component:Form
        },
        {
            path:'/category',
            name:'Category',
            component:Category
        },
        {
            path:'/create',
            name:'CategoryCreate',
            component:CategoryCreate
        },
        
        {
            path:'/edit/:id',
            name:'EditCategory',
            component:EditCategory
        },
        {
            path:'/product',
            name:'Product',
            component:Product
        },
        
        {
            path:'/product/create',
            name:'ProductCreate',
            component:ProductCreate
        },
        {
            path:'/product/edit/:id',
            name:'editProduct',
            component:editProduct
        },

        {
            path: '/:pathMatch(.*)*',
            component: PageNotFound
        }
    ]
})
export default router