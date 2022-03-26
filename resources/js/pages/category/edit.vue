<template lang="">
    <div class="container py-4">
        <div class="row">
            <div class="col-md-8 offset-2">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-item-center">
                        <h5>Edit Category- {{categoryForm.name}}</h5>
                        <router-link class="btn btn-info" :to="{name: 'Category'}">Category List</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="updateCategory">
                                    <div class="form-group">
                                     <label for="" class="mb-2">Category Name:</label>
                                     <input type="text" v-model="categoryForm.name" class="form-control" name="name"  placeholder="Category Name" />
                                     <div v-if="categoryForm.errors.has('name')" v-html="categoryForm.errors.get('name')" />
                                    </div>   
                                    <div class="form-group">
                                     <button type="submit" class="btn btn-primary mt-3">Update Category</button>
                                    </div>  
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Form from 'vform';

export default {
   

    data: () => ({
    categoryForm: new Form({
      name: '',    
    })
   }),
    methods: {
        async updateCategory() {
            let id = this.$route.params.id;
             const response = await this.categoryForm.put(`/api/category/${id}`)
            .then(response=>{ 
                this.$toast.success(`Category Updated Successfully`);
                
            })
           
        },

        loadCategory(){
            let id = this.$route.params.id;
            axios.get(`/api/category/${id}/edit`).then(response=>{
               this.categoryForm.name = response.data.name;
            });
        }
    },
    mounted () {
        this.loadCategory();
    },
}
</script>
<style lang="">
    
</style>