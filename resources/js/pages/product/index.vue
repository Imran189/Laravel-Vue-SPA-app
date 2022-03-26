<template>
    <div class="container py-3">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between">
                        <h4>Product Page</h4>
                        <router-link :to="{name:'ProductCreate'}" class="btn btn-info">Create Product</router-link>
                    </div>
                    <div class="card-body">
                        <table class="table  table-dark table-striped">
                            <thead>
                                <tr>
                                <th style="width:100px">Id</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="product in products" :key="product.id">
                                    <td>{{product.id}}</td>
                                    <td>
                                        <div style="max-width: 100px; max-height: 100px; overflow:hidden">
                                            <img :src="product.image" alt="" class="img-fluid">
                                        </div> 
                                    </td>
                                    <td>{{product.title}}</td>
                                    <td>{{product.price}}</td>
                                    <td>
                                        <router-link :to="{name: 'editProduct',params:{id: product.id}}" class="btn btn-primary btn-sm mx-2">Edit</router-link>
                                        <a @click.prevent="deleteProduct(product)" class="btn btn-danger btn-sm">Delete</a>
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
import axios from 'axios'
export default {
    data() {
        return {
            products: [],
        }
    },
    methods: {
        loadProduct() {
            axios.get('/api/product').then(response =>{
                this.products=response.data;
            });
        },
        async deleteProduct(product){
            axios.delete(`/api/product/${product.id}`).then(()=>{
                   this.$toast.success(`Product Deleted Successfully`);
               });
               let index = this.products.indexOf(product);
               this.products.splice(index,1);

        }
    },
    mounted () {
        this.loadProduct();
    },
}
</script>
<style >
    
</style>