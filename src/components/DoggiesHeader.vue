<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <h1>{{ msg }}</h1>
</template>

<style scoped lang="scss">
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}
</style>
