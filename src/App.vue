<template lang="pug">
  .container
    .columns
      draggable(
        v-model="forms"
        v-bind="dragOption"
        @start="drag = true"
        @end="drag = false"
      ).main-field.column.is-three-fifths.is-offset-one-fifth
        transition-group(
          type="transition"
          :name="!drag ? 'flip-list' : null"
        )
          .box(v-for="(element, index) in forms" :key="index")
            b-field
              b-select(placeholder="Select a name" v-model="formType")
                option(v-for="formType in formTypes") {{ formType }}
              b-checkbox.check-required(v-model="element.isRequired") required
            b-field
              b-input(v-model="element.title" placeholder="form title")
      a(@click="addForm").button.is-success.is-medium add
    pre {{ forms }}
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
  private forms: { id: number; title: string; formType: string; isRequired: boolean; }[] = [
    {
      id: 0,
      title: '',
      formType: 'input',
      isRequired: false,
    },
  ];

  private dragOption: { animation: number; group: string; disabled: boolean; ghostClass: string;}[] = [
    {
      animation: 200,
      group: "description",
      disabled: false,
      ghostClass: "ghost"
    }
  ]

  private formTypes: string[] = [
    'input',
    'email',
    'number',
    'textarea',
  ];

  private inputValue: string = '';

  public addForm() {
    const formId: number[] = this.forms.map((x) => x.id);
    const maxVal = Math.max.apply(null, formId);
    this.forms.push({ id: maxVal + 1, title: '', formType: 'input', isRequired: false });
  }
}
</script>

<style lang="scss" scoped>

.main-field {
  margin-top: 50px;
}

.check-required {
  margin-left: 30px;
}

</style>
