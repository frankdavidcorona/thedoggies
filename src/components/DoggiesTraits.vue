<script setup lang="ts">
import type { Doggie } from "@/interfaces/Doggie";

defineProps<{
  doggie: Doggie | null;
}>();
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Trait</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(trait, index) in doggie?.traits" v-bind:key="index">
        <td>{{ trait.trait }}</td>
        <td>{{ trait.value }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
$gl-ms: "screen and (max-width: 23.5em)"; // up to 360px
$gl-xs: "screen and (max-width: 35.5em)"; // up to 568px
$gl-sm: "screen and (max-width: 48em)"; // max 768px
$gl-md: "screen and (max-width: 64em)"; // max 1024px
$gl-lg: "screen and (max-width: 80em)"; // max 1280px

//* table style
table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  * {
    position: relative;
  }

  td,
  th {
    padding-left: 24px;
  }

  thead tr {
    height: 60px;
    background: #81d4fa;
    font-size: 14px;
  }

  tbody tr {
    height: 48px;
    border-bottom: 1px solid #bcbcbc;

    &:last-child {
      border: 0;
    }
  }

  td,
  th {
    text-align: left;

    &.l {
      text-align: right;
    }

    &.c {
      text-align: center;
    }

    &.r {
      text-align: center;
    }
  }
}

@media #{$gl-xs} {
  table {
    display: block;

    > *,
    tr,
    td,
    th {
      display: block;
    }

    thead {
      display: none;
    }

    tbody tr {
      height: auto;
      padding: 8px 0;

      td {
        padding-left: 45%;
        margin-bottom: 12px;

        &:last-child {
          margin-bottom: 0;
        }

        &:before {
          position: absolute;
          font-weight: 700;
          width: 40%;
          left: 10px;
          top: 0;
        }

        &:nth-child(1):before {
          content: "Trait";
        }

        &:nth-child(2):before {
          content: "Value";
        }
      }
    }
  }
}
</style>
