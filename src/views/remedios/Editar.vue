<template>
    <div>
        <div class="card m-2" v-if="!remedio">
            <div class="card-body text-center">
                Buscando informações...
            </div>
        </div>
        <Formulario
            v-if="remedio"
            titulo="Editar remédio"
            :remedio="remedio"
            @remedio="atualizarRemedio($event)"
            :mensagem="mensagem"
            :formDisabled="formDisabled"
        />
    </div>
</template>

<script>
import Formulario from '../../components/remedio/Formulario.vue';
import Remedio from '../../api/remedio';

export default {
    components: {
        Formulario,
    },
    data() {
        return {
            remedio: null,
            mensagem: '',
            formDisabled: false,
        };
    },
    created() {
        this.getRemedio();
    },
    methods: {
        async getRemedio() {
            const { id } = { ...this.$route.params };
            const response = await Remedio.getRemedio(id);
            if (response.status === 200) {
                this.remedio = response.data;
            }
        },
        async atualizarRemedio(remedio) {
            this.formDisabled = true;
            this.mensagem = 'Atualizando as informações...';
            const { id } = { ...this.$route.params };
            const response = await Remedio.atualizarRemedio(id, remedio);
            this.formDisabled = false;
            this.mensagem = '';
            if (response.status === 200) {
                alert('Remédio atualizado com sucesso!');
            } else {
                alert('Ocorreu um erro! Os dados não foram atualizados!');
            }
        },
    },
};
</script>
