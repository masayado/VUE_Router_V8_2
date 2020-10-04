<template>
    <div>
    <header class="masthead" style="background-image: url('/assets/img/chevrolet-blazer.jpg');">
    <div class="overlay"></div>
    <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="post-heading">
                    <router-link to="/administrador/simple">Administrador Simple</router-link><br>
                    <router-link to="/administrador/avanzado">Administrador Avanzado</router-link>
                </div>
            </div>
        </div>
    </div>
</header>
    </div>
</template>

<script>
export default {
    name: 'administrador-component',
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