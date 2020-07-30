<template>
    <header id="header">
        <nav class="navbar navbar-expand-md bg-dark navbar-dark">
            <!-- Brand -->
            <a class="navbar-brand" href="#">Meus remédios</a>

            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <router-link :to="`/meus-remedios/cadastro`" class="nav-link">
                        Novo remédio
                    </router-link>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            activeClass: 'active',
            items: [
                {
                    id: 1,
                    path: 'remedios',
                    icon: 'fa fa-list',
                    text: 'Remédios',
                },
            ],
        };
    },
    computed: {
        currentPage() {
            return this.$route.path;
        },
    },
};
</script>
