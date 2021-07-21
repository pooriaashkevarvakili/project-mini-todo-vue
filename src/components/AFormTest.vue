<template>
<div>
<a-form :v-model="FormState" ref="formRef" layout="vertical" :form="form" :rules="rules">
<FormOne @onValidate='onSumbit'/>
<div class="grid grid-cols-2 gap-6">
<a-form-item has-feedback ref="education" name="education" label="تحصیلات">
<a-select showSearch  v-model:value="selectEducation">
<a-select-option :key="educations.id" :value="educations.value" v-for="educations in education ">
{{educations.value}}
</a-select-option>
</a-select>
</a-form-item>
<a-form-item has-feedback ref="madrak" name="madrak" label="مدرک">
<a-select showSearch v-model="selectedMadrak">
<a-select-option :key="madraks.id" :value="madraks.value" v-for="madraks in madrak ">
{{madraks.value}}
</a-select-option>
</a-select>
</a-form-item>

</div>
<div class="grid place-items-end grid-flow-col place-content-end">
<a-button @click="onVisible" class="mr-3" type="danger">بازگشت </a-button>
<a-button @click="onSumbit" type="danger">ثبت </a-button>
</div>
</a-form>
</div>
</template>
<script lang="ts">
import {useStore} from "vuex"
import FormOne from './FormOne.vue'
import { defineComponent,computed,ref,UnwrapRef,reactive,toRaw } from "@vue/runtime-core";
interface FormState{
    email:string;
mobile:string|number;
education:string;
madrak:string;
}
export default defineComponent( {
name:'aformtest',
components:{FormOne},
setup(props,context){
    const selectedMobile=ref('')
    const FormState:UnwrapRef<FormState>=reactive({
        email:'',
        mobile:'',
        education:'',
        madrak:''
    })
    const visible=ref<boolean>(false)
    const onVisible=()=>{
        context.emit('onClose',visible.value=false)
    }
const rules={
    
    education:[{
        required:true,message:'تحصیلات واردکنید'
    }],
    madrak:[{
        required:true,message:'مدرک واردکنید'
    }]
}
const formRef=ref('')
  const onSumbit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', FormState, toRaw(FormState));
        })
        .catch(error => {
          console.log('error', error);
        });
    };
    const store=useStore()
    store.dispatch('education/getEducation')
    const education=computed(()=>store.state.education)
        store.dispatch('madrak/getMadrak')
    const madrak=computed(()=>store.state.madrak)
    return{ selectedMobile,rules,FormState,education,madrak,visible,onVisible,formRef,onSumbit}
}
})
</script>

<style>

</style>