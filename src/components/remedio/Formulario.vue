<template>
    <div class="container-fluid mt-2">
        <div class="row">
            <div class="col">
                <div class="box">
                    <div class="box-header with-border">
                        <h3 class="box-title">
                            {{ titulo }}
                        </h3>
                    </div>
                    <form @submit.prevent="submit">
                        <fieldset :disabled="formDisabled">
                        <div class="box-body">
                            <div class="row">
                                <div class="form-group col-12">
                                    <label for="input-remedio">Remédio</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="input-remedio"
                                        id="input-remedio"
                                        required
                                        v-model="remedio.remedio"
                                        v-model.trim="$v.remedio.remedio.$model"
                                    >
                                    <div
                                        v-if="!$v.remedio.remedio.required"
                                    >
                                        <strong style="color: red;">Nome do remédio é obrigatório!</strong>
                                    </div>
                                </div>
                                <div class="form-group col-12">
                                    <label for="input-validade">Data de validade</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        name="input-validade"
                                        id="input-validade"
                                        required
                                        v-model="remedio.validade"
                                        v-model.trim="$v.remedio.validade.$model"
                                    >
                                    <div
                                        v-if="!$v.remedio.validade.required"
                                    >
                                        <strong style="color: red;">Data de validade é obrigatória!</strong>
                                    </div>
                                </div>
                                <div class="form-group col-12">
                                    <label for="input-funcao">Pra que serve?</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="input-funcao"
                                        id="input-funcao"
                                        required
                                        v-model="remedio.funcao"
                                        v-model.trim="$v.remedio.funcao.$model"
                                    >
                                    <div
                                        v-if="!$v.remedio.funcao.required"
                                    >
                                        <strong style="color: red;">Função é obrigatória!</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="box-footer">
                            <button type="submit" class="btn btn-success m-1">Salvar</button>
                            <router-link to="/meus-remedios" class="btn btn-danger m1">
                                Voltar
                            </router-link>
                            <span class="ml-2" v-if="mensagem">{{ mensagem }}</span>
                        </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

export default {
    props: [
        'titulo',
        'remedio',
        'mensagem',
        'formDisabled',
    ],
    data() {
        return {};
    },
    validations: {
        remedio: {
            remedio: {
                required,
                minLength: minLength(3),
            },
            validade: {
                required,
            },
            funcao: {
                required,
                minLength: minLength(5),
            },
        },
    },
    methods: {
        submit() {
            let formValido = false;
            formValido = !this.$v.remedio.remedio.$invalid
                    && !this.$v.remedio.validade.$invalid
                    && !this.$v.remedio.funcao.$invalid;
            if (formValido) {
                if (this.remedio.validade.includes('/')) {
                    const [dia, mes, ano] = this.remedio.validade.split('/');
                    this.remedio.validade = `${ano}-${mes}-${dia}`;
                }
                this.$emit('remedio', this.remedio);
            } else {
                /* eslint-disable */
                alert('Corrija os campos inválidos!');
            }
        },
    },
};
</script>
