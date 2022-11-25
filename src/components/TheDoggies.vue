<script setup lang="ts">
import DoggiesSearchForm from "./DoggiesSearchForm.vue";
import DoggiesDetails from "./DoggiesDetails.vue";

defineProps<{
  msg: string;
}>();
</script>

<template>
  <section>
    <DoggiesSearchForm />
  </section>

  <section>
    <DoggiesDetails
      :dog="{
        name: 'Dogo',
        description:
          'This breed has its origin in the province of Cordoba, in the central (Mediterranean) region of the Republic of Argentina. Its creator was Dr.Antonio Nores Martinez',
        owner: 'Dr.Antonio Nores Martinez',
        thumbnail:
          'https://www.akc.org/wp-content/uploads/2017/11/Dogo-puppy.jpg',
        traits: [],
      }"
    />
  </section>
</template>
