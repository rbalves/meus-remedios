<template>
    <div class="container-fluid mt-2">
        <div class="card m-2" v-if="remedios.length == 0">
            <div class="card-body text-center">
                {{ mensagem }}
            </div>
        </div>

        <div class="list-group" v-if="remedios.length > 0">
            <a
                href="#"
                class="list-group-item list-group-item-action flex-column align-items-start"
                v-for="remedio in remedios"
                :key="remedio._id"
            >
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ remedio.remedio }}</h5>
                    <small class="text-muted">{{ formatarValidade(remedio.validade) }}</small>
                </div>
                <p class="mb-1">{{ remedio.funcao }}</p>

                <div class="row">
                    <div class="col">
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="editarRemedio(remedio._id)"
                        >
                            Editar
                        </button>
                    </div>
                    <div class="col">
                        <button
                            type="button"
                            class="btn btn-danger pull-right"
                            @click="deletarRemedio(remedio)"
                        >
                            Excluir
                        </button>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import Remedio from '../../api/remedio';

export default {
    data() {
        return {
            mensagem: '',
            remedios: [],
            remedio: null,
        };
    },
    created() {
        this.getRemedios();
    },
    methods: {
        async getRemedios() {
            try {
                this.remedios = [];
                this.mensagem = 'Buscando...';
                const response = await Remedio.getRemedios();
                this.remedios = response.data.sort((a, b) => {
                    if (a.validade < b.validade) {
                        return -1;
                    }
                    if (a.validade > b.validade) {
                        return 1;
                    }
                    return 0;
                });
            } catch {
                /* eslint-disable */
                alert('Ocorreu um erro ao consultar a API');
                this.mensagem = 'Nenhum cliente encontrado.';
            }
        },
        async deletarRemedio(remedio) {
            /* eslint-disable */
            if (window.confirm(`Desejar deletar o remédio ${remedio.remedio}?`)) {
                const response = await Remedio.deletarRemedio(remedio._id);
                if (response.status === 200) {
                    this.getRemedios();
                    alert('Cliente removido com sucesso!');
                }
            }
        },
        editarRemedio(id) {
            this.$router.push(`/meus-remedios/editar/${id}`);
        },
        formatarValidade(data) {
            const ano = data.substr(0, 4);
            const mes = data.substr(5, 2);
            return `${mes}/${ano}`
        },
    },
};
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
