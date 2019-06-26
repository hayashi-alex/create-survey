<template lang="pug">
  div
    navbar
    router-view
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import navbar from '@/components/Navbar.vue'

@Component({
  components: {
    navbar,
  },
})
export default class Index extends Vue {
}
</script>