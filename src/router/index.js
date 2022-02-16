import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
    {
        path: '/pdfpage1',
        name: 'PdfPage1',
        component: () => import('@/views/PdfPage1')
    },
    {
        path: '/pdfpage2',
        name: 'PdfPage2',
        component: () => import('@/views/PdfPage2')
    },
    {
        path: '/tablepage',
        name: 'tablePage',
        component: () => import('@/views/TablePage')
    },
    {
        path: '/dark-model-page',
        name: 'DarkModelPage',
        component: () => import('@/views/DarkModelPage')
    },
];

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

export default router
