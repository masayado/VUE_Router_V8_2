<template>
    <div>
    <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="post-heading">
                    <h1><strong>Esta página de administración está en construcción. Intente como administrador simple.</strong></h1>
                    <router-link to="/administrador/simple">Administrador Simple</router-link>
                </div>
            </div>
        </div>
    </div>
</header>
    </div>
</template>

<script>
export default {
    name: 'administradoravanzado-component',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
        // -- Metodos
    },
    //components: {},
}
</script>

<style scoped>
    a{
        color:#fff;
    }
</style>