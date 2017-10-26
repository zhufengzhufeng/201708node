<template>
  <div>
    {{count}} {{type}}
  </div>
</template>
<script>
  import {mapState,mapGetters} from 'vuex';
    export default {
        methods: {},
        computed: {
          ...mapGetters(['type']),
          ...mapState(['count'])
        },
        components: {}
    }
</script>
<style scoped>

</style>
