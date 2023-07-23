import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TaskView from "@/views/TaskView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ListView from "@/views/Projects/ListView.vue";
import FormView from "@/views/Projects/FormView.vue";

const rotes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tasks',
        component: TaskView
    },
    {
        path: '/projects',
        component: ProjectView,
        children: [
            {
                path: '',
                name: 'Projects',
                component: ListView
            },
            {
                path: 'new',
                name: 'New Project',
                component: FormView
            },
            {
                path: ':id',
                name: 'Edit Project',
                component: FormView,
                props: true,
            },
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: rotes
})

export default router;