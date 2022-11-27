<script lang="ts">
export default {
  data() {
    return {
      doggieToken: "",
    };
  },
  methods: {
    onSearchDoggies() {
      if (this.doggieToken) {
        this.$emit("doggieToken", this.doggieToken);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="container__item">
      <div class="container__label">Token ID</div>
      <form class="form" @submit.prevent="onSearchDoggies">
        <input
          type="text"
          class="form__field"
          id="doggieToken"
          v-model="doggieToken"
          placeholder="Enter Doggie Token ID"
        />
      </form>
      <div class="container__buttons">
        <!-- Search doggies -->
        <button class="btn btn__primary" @click="onSearchDoggies">
          Search
        </button>
        <!-- Random search for doggies -->
        <button class="btn">
          <span class="material-symbols-outlined container__buttons__random">
            casino
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
//** variables
$background: #f5f6fa;
$text: #9c9c9c;
$input-bg-color: #fff;
$input-text-color: #1b1b1b;
$button-bg-color: #81d4fa;
$button-text-color: #fff;

h3 {
  font-size: 1.2rem;
}

//** helper
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__label {
    font-weight: 500;
    color: #1b1b1b;
    align-self: flex-start;
    margin-bottom: 0.25rem;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &__random {
      font-size: 2rem;
      color: $button-bg-color;
      margin-left: 0.5rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
}

//** button
.btn {
  display: inline-block;
  background: transparent;
  color: inherit;
  font: inherit;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 0.5rem 0;
  transition: all 200ms ease-in;
  cursor: pointer;

  &__primary {
    color: $button-text-color;
    border-radius: 4px;
    padding: 8px 24px;
    width: 24rem;

    color: #81d4fa;
    letter-spacing: 0.5px;
    border: 1px solid #81d4fa;
    border-color: #81d4fa;

    &:hover {
      background: darken($button-bg-color, 2%);
      color: $input-bg-color;
    }
  }
}

//** form
.form {
  &__field {
    font-size: 14px;
    width: 100%;
    background: #fff;
    color: $input-text-color;
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: 0;
    outline: 0;
    padding: 1.25rem 1.5rem;
    margin: 0 0 1rem 0;
  }
}
</style>
