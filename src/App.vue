<template lang="pug">
  div
    footer-items
    router-view
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FooterItems from '@/components/FooterItems.vue'

@Component({
  components: {
    FooterItems,
  },
})
export default class App extends Vue {
}
</script>