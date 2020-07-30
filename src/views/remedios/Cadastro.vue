<template>
    <Formulario
        titulo="Cadastrar remédio"
        :remedio="remedio"
        @remedio="addRemedio($event)"
        :mensagem="mensagem"
        :formDisabled="formDisabled"
    />
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
            remedio: {
                remedio: '',
                validade: '',
                funcao: '',
            },
            mensagem: '',
            formDisabled: false,
        };
    },
    methods: {
        async addRemedio(remedio) {
            this.formDisabled = true;
            this.mensagem = 'Salvando as informações...';
            const response = await Remedio.salvarRemedio(remedio);
            this.formDisabled = false;
            this.mensagem = '';
            if (response.status === 200) {
                alert('Remédio salvo com sucesso!');
                this.$router.push('/meus-remedios/');
            } else {
                alert('Ocorreu um erro! Os dados não foram salvos');
            }
        },
    },
};
</script>
