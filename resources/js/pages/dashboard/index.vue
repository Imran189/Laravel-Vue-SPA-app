<template lang="">
    <div class="container py-3">
        <div class="card">
            <div class="card-header">Dashboard</div>
            <div class="card-body">
                <p>{{message}}, {{user}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState,mapGetters} from "vuex"
export default {
    
    computed: {
        
       ...mapState(["message","user"]),
       ...mapGetters(["getMessage", "getUser"])
        },
   

    
}
</script>
<style lang="">
    
</style>