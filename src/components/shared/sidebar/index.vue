<template>
  <nav>
    <ul class="list-group">
      <li class="list-group-item"><router-link to="/">Dashboard</router-link></li>
      <li class="list-group-item"><router-link to="/product">Products</router-link></li>
      <li class="list-group-item"><router-link to="/user">Users</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>
