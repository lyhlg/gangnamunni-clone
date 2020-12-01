import VueRouter from 'vue-router';
import Hospitals from '../views/Hospitals.vue';
import HospitalDetail from '../views/HospitalDetail.vue';
import Events from '../views/Events.vue';
import More from '../views/More.vue';

const routes = [
  { path: '/hospitals', component: Hospitals },
  { path: '/hospitals/:id', component: HospitalDetail },
  { path: '/events', component: Events },
  { path: '/more', component: More },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
