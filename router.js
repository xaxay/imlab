import { createRouter, createWebHistory, useRoute } from 'vue-router';
import routesConfig from '@xaxay/portal/config/routes';

const routeEntries = Object.entries(routesConfig);

const currentPath = window.location.pathname;
let BASE_URL = currentPath.substring(0, currentPath.length-1);
console.log('BASE_URL', BASE_URL);

// Define routes
const routes = [
    ...routeEntries.map(([path, data]) => ({
        path: `${path}`,
        component: () => import(data.module),
        meta: { title: data.title }
    }))
];

console.log('dynamic routes:', routes);

const defaultRouteEntry = routeEntries.find(([_routePath, routeData]) => routeData.default);

if (defaultRouteEntry) {
    const [defaultRoutePath] = defaultRouteEntry;
    console.log('default route:', defaultRoutePath);
    routes.unshift({ path: '/', redirect: defaultRoutePath });
}

export const router = createRouter({
    history: createWebHistory(BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    console.log('[router]', 'to', to?.path, 'from', from?.path)
    next();
});
