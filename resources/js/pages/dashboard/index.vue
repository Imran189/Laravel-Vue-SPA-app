<template lang="">
    <div class="container py-3">
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">Dashboard</div>
                    <div class="card-body">
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action">Demo Link</a>
                            <a href="#" class="list-group-item list-group-item-action"  @click.prevent="logout">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Dashboard-1</div>
                    <div class="card-body">
                      <p>{{message}}, {{user.name}}</p>
                 </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
import { mapState, mapGetters} from "vuex"
export default {
    methods:{
          logout(){
           axios.post('/logout').then(response=>{
               this.$toast.success(`Logout Is Successful`);    
               this.$router.push({name:'home'})       
           });
       }
    },
    
    computed: {
        
       ...mapState(["message","user"]),
       ...mapGetters(["getMessage", "getUser"])
        },
   

    
}
</script>
<style lang="">
    
</style>