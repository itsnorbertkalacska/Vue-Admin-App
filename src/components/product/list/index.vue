<template>
  <div>
    <h1>Products</h1>

    <input type="text" v-model="newProduct" v-on:keyup.13="addProduct(newProduct)" placeholder="Name" /><br>
    <button v-on:click="addProduct(newProduct)">Add Product</button>

    <hr>

    <ul>
      <li v-for="product in products" :key="product.id">
        <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">{{product.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import ProductStore from '@/stores/ProductStore'

export default {
  name: 'ProductList',
  data () {
    return {
      newProduct: null,
      products: ProductStore.data.products
    }
  },
  methods: {
    addProduct (name) {
      ProductStore.methods.addProduct(name)
      this.newProduct = null
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 10px;
}
</style>
