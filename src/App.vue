<template lang="pug">
  .container
    .columns
      draggable(v-model="forms").main-field.column.is-three-fifths.is-offset-one-fifth
        .box(v-for="(element, index) in forms" :key="index")
          b-field
            b-input(v-model="element.title")
          b-field
            b-input
    a(@click="addForm").button.is-success.is-medium.is-three-fifths add
    div {{ forms }}
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import draggable from 'vuedraggable';

@Component({
  components: {
    draggable,
  },
})
export default class Index extends Vue {
  private forms: { id: number; title: string; }[] = [
    {
      id: 0,
      title: '',
    },
  ];

  inputValue: string = '';

  public addForm() {
    const formId: number[] = this.forms.map((x) => x.id);
    const maxVal = Math.max.apply(null, formId);
    this.forms.push({ id: maxVal + 1, title: '' });
  }
}
</script>