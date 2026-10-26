import { createApp, h } from "vue";
import { createInertiaApp,Link ,Head} from "@inertiajs/vue3";
import Layout from "./layouts/AuthLayout.vue";
import "../css/app.css";
import {ZiggyVue} from '../../vendor/tightenco/ziggy';

createInertiaApp({
    title: (title) => `My App - ${title}`,
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.vue", { eager: true });
        const page = pages[`./pages/${name}.vue`];
        page.default.layout = page.default.layout || Layout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .component("Head", Head)
            .component("Link", Link)
            .mount(el);
    },
});
