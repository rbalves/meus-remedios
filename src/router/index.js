import Vue from 'vue';
import Router from 'vue-router';
import RemediosLista from '../views/remedios/Lista.vue';
import RemediosCadastro from '../views/remedios/Cadastro.vue';
import RemediosEditar from '../views/remedios/Editar.vue';
import Notfound from '../views/Notfound.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/meus-remedios/',
            name: 'RemediosLista',
            component: RemediosLista,
        },
        {
            path: '/meus-remedios/cadastro',
            name: 'RemediosCadastro',
            component: RemediosCadastro,
        },
        {
            path: '/meus-remedios/editar/:id',
            name: 'RemediosEditar',
            component: RemediosEditar,
        },
        {
            path: '*',
            name: 'Not found',
            component: Notfound,
        },
    ],
});
