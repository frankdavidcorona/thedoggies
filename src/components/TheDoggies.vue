<script setup lang="ts">
import DoggiesSearchForm from "./DoggiesSearchForm.vue";
import DoggiesDetails from "./DoggiesDetails.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      doggie: {},
    };
  },
  methods: {
    onSearchDoggies(doggieToken: string): void {
      console.log("[🚀::debugger]", doggieToken);
      this.doggie = {
        name: "Dogo",
        description:
          "This breed has its origin in the province of Cordoba, in the central (Mediterranean) region of the Republic of Argentina. Its creator was Dr.Antonio Nores Martinez",
        owner: "Dr.Antonio Nores Martinez",
        thumbnail:
          "https://www.akc.org/wp-content/uploads/2017/11/Dogo-puppy.jpg",
        traits: [
          { trait: "Breed", value: "Dogo" },
          { trait: "Breed", value: "Dogo" },
          { trait: "Breed", value: "Dogo" },
        ],
      };
    },
  },
};
</script>

<template>
  <section>
    <DoggiesSearchForm @doggieToken="onSearchDoggies($event)" />
  </section>

  <section v-if="Object.keys(doggie).length">
    <DoggiesDetails :doggie="doggie" />
  </section>
</template>
