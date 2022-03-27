<template>
    <div class="container py-3">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card ">
                    <div class="card-header d-flex justify-content-between align-item-center">
                        <h4 class="mb-0">Product Category</h4>
                        <router-link :to="{name: 'CategoryCreate'}" class="btn btn-primary">Create Category</router-link>
                    </div>
                    <div class="card-body">
                       <table class="table table-dark table-striped">
                           <thead>
                               <tr>
                                   <th style="width:100px">Id</th>
                                   <th>Name</th>
                                   <th>Slug</th>
                                   <th style="width:170px">Actions</th>
                               </tr>
                           </thead>
                           <tbody v-if="categories.length">
                               <tr v-for="category in categories" :key="category.id">
                                   <td style="width:100px">{{category.id}}</td>
                                   <td>{{category.name}}</td>
                                   <td>{{category.slug}}</td>
                                   <td style="width:170px">
                                       <router-link :to="{name: 'EditCategory',params:{id: category.id}}" class="btn btn-success btn-sm mx-2">Edit</router-link>
                                       <a @click.prevent="deleteCategory(category)" href="#" class="btn btn-danger btn-sm">Delete</a>
                                   </td>
                               </tr>
                               
                           </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4">
                                        <h5 class="text-center mt-4 mb-4">No products found.</h5>
                                    </td>
                                </tr>
                            </tbody>
                       </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        data() {
            return {
                categories: [],
            }
        },
        methods: {
            loadCategory() {
                axios.get('/api/category').then(response=>{
                    this.categories=response.data;
                });
            },
            deleteCategory(category){
               axios.delete(`/api/category/${category.id}`).then(()=>{
                   this.$toast.success(`Category Deleted Successfully`);
               });

               let index = this.categories.indexOf(category);
               this.categories.splice(index,1);
            }
        },
        mounted() {
            this.loadCategory();
        }
    }
</script>
