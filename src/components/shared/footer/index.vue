<template>
  <footer>
    <p class="text-center">&copy; {{ company }} {{ date.getFullYear() }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      company: 'Admin App',
      date: new Date()
    }
  }
}
</script>

<style scoped>
footer {
  padding: 30px 0;
}
</style>
