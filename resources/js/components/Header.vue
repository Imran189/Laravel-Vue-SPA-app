<template>
    <div>
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" :to="{name: 'home'}">Navbar</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                <li class="nav-item">
                <router-link class="nav-link " aria-current="page" :to="{name:'home'}">Home</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link " aria-current="page" :to="{name:'Form'}">Form</router-link>
                </li>
                <li class="nav-item">
                <router-link class="nav-link " aria-current="page" :to="{name:'Category'}">Category</router-link>
                </li>
                 <li class="nav-item">
                <router-link class="nav-link " aria-current="page" :to="{name:'Product'}">Product</router-link>
                </li>
                <li class="nav-item" v-if="auth">
                <router-link class="nav-link "  aria-current="page" :to="{name:'Dashboard'}">Dashboard</router-link>
                </li>
                <li class="nav-item" v-if="!auth">
                <router-link class="nav-link " aria-current="page" :to="{name:'LoginVue'}">Login</router-link>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#" @click.prevent="logout">Logout</a>
                </li>
                
                
            </ul>
            
            </div>
        </div>
        </nav>  
    </div>
</template>
<script>
import { mapState, mapGetters} from "vuex";

export default {
    
    methods: {
       logout(){
           axios.post('/logout').then(response=>{
               this.$toast.success(`Logout Is Successful`); 
               localStorage.removeItem("auth");
               this.$store.commit('SET_AUTHENTICATED', false); 
               this.$router.push({name:'home'})       
           });
       }
    },
     computed: {        
       ...mapState(["auth"]),
       ...mapGetters(["getAuthenticated"])
        },
   
    
}
</script>
<style>
    
</style>