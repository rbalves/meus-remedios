import api from './index';

class Remedio {
    getRemedios = () => api.get();

    getRemedio = (id) => api.get(`/${id}`);

    salvarRemedio = (remedio) => api.post('/', remedio);

    atualizarRemedio = (id, remedio) => api.put(`/${id}`, remedio);

    deletarRemedio = (id) => api.delete(`/${id}`);
}

export default new Remedio();
