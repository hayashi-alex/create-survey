<template lang="pug">
  .container
    .columns.is-multiline
      b-button(@click="addForm").is-success.is-medium.main-field.culumn add
      b-button(@click="registForm").is-success.is-medium.main-field.culumn regist
      draggable(
        v-model="forms"
        v-bind="dragOption"
        @start="drag = true"
        @end="drag = false"
      ).main-field.column.is-full
        transition-group(
          type="transition"
          :name="!drag ? 'flip-list' : null"
        )
          .box(v-for="(el, i) in forms" :key="i")
            b-field
              b-select(placeholder="Select a name"  v-model="el.formType")
                option(v-for="formType in formTypes") {{ formType }}
              b-checkbox.check-required(v-model="el.isRequired") required
              b-button(@click="delForm(i)").is-danger.del-form delete
            b-field
              b-input(v-model="el.title" placeholder="form title")
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
export default class App extends Vue {
  private forms: Array<{ id: number; title: string; formType: string; isRequired: boolean; }> = [
    {
      id: 0,
      title: '',
      formType: 'input',
      isRequired: false,
    },
  ];

  private dragOption: Array<{ animation: number; group: string; disabled: boolean; ghostClass: string; }> = [
    {
      animation: 200,
      group: 'description',
      disabled: false,
      ghostClass: 'ghost',
    },
  ];

  private formTypes: string[] = [
    'input',
    'email',
    'number',
    'textarea',
  ];

  private inputValue: string = '';

  private addForm() {
    const formId: number[] = this.forms.map((x) => x.id);
    const maxVal = Math.max.apply(null, formId);
    this.forms.push({ id: maxVal + 1, title: '', formType: 'input', isRequired: false });
  }

  private delForm(index: number) {
    if (this.forms.length > 1) { this.forms.splice(index, 1); }
  }

  private registForm() {

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

.del-form {
  margin-left: 20px;
}

</style>
