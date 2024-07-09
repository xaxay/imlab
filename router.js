import { createRouter, createWebHistory, useRoute } from 'vue-router';
import routesConfig from '@xaxay/portal/config/routes';

const routeEntries = Object.entries(routesConfig);

// Define routes
const routes = [
    ...routeEntries.map(([path, data]) => ({
        path,
        component: () => import(data.module),
        meta: { title: data.title }
    }))
];

const defaultRouteEntry = routeEntries.find(([_routePath, routeData]) => routeData.default);

if (defaultRouteEntry) {
    const [defaultRoutePath] = defaultRouteEntry;
    routes.unshift({ path: '/', redirect: defaultRoutePath });
}

console.log('dynamic routes:', routes);



export const router = createRouter({
    history: createWebHistory('/'),
    routes
});

router.beforeEach((to, from, next) => {
    console.log('[router]', 'to', to?.path, 'from', from?.path)
    next();
});

