<template>
    <div class="container text-center">
        <div class="row">
            <div class="col-md-12">
                <div class="error-template">
                    <h1>Oops!</h1>
                    <h2>Página não encontrada!</h2>
                    <div class="error-details">
                        Desculpe, ocorreu um erro: esta página não foi encontrada!
                    </div>
                    <div class="error-actions">
                        <router-link to="/meus-remedios" class="btn btn-success btn-lg">
                            <span class="fa fa-home"></span> Ir para a página inicial
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.error-template {padding: 40px 15px;text-align: center;}
.error-actions {margin-top:15px;margin-bottom:15px;}
.error-actions .btn { margin-right:10px; }
</style>
