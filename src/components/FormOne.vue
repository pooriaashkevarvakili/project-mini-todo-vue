<template>
<a-form :v-model="FormState" ref="formRef" layout="vertical" :form="form" :rules="rules">

<div class="grid grid-cols-2 gap-6">

<a-form-item has-feedback ref="mobile" name="mobile" label="شماره موبایل">
<a-input  v-model:value="selectedMobile" value/>
</a-form-item>
<a-form-item has-feedback ref="email" name="email" label="ایمیل">
<a-input v-model:value="FormState.email" />
</a-form-item>
</div>
<div>
<a-button class="hidden"   @click="onSumbit">ثبت</a-button>
</div>
</a-form>
</template>

<script lang="ts">
import {defineComponent,reactive,ref, UnwrapRef} from "vue"
interface formState{
    email:string;
    mobile:string|number
}
export default defineComponent({
    name:'formone',
    setup(props,context){
const formRef=ref()
  const FormState:UnwrapRef<formState>=reactive({
        email:'',
        mobile:'',
        
    })
    const onSumbit=()=>{
        context.emit('onValidate',formRef.value.validate())
        
    }
    const rules={
      email:[
    {
        required:true,message:"ایمیل درست واردکنید"
    }],
    mobile:[    {
required:true,message:'موبایل واردکنید',
    }],  
    }
    return{rules,formRef,FormState,onSumbit}
    }
}) 


</script>

<style>

</style>