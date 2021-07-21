<template>
<div class="grid grid-flow-col place-content-center mt-36">
<a-button @click="handleCancel" class="bg-green-400 text-white p-5 grid grid-flow-col place-content-center ">show modal</a-button>
<a-modal width="1058px"  :footer="null" title="درخواست" @click="handleOk" v-model:visible="visible">
<div class="h-52">
<div>
<AFormTest @onClose="closeModal"/>
</div>
</div>
</a-modal>

</div>
</template>

<script lang="ts">
import AFormTest from './components/AFormTest.vue'
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    AFormTest
  },
  setup(){
    const visible=ref<boolean>(false)
    const loading=ref<boolean>(false)
    const handleOk=()=>{
      loading.value=true
    }
    const handleCancel=()=>{
      visible.value=true
    }
    const closeModal=()=>{
      visible.value=false
    }
    return{ visible,handleCancel,handleOk,loading,closeModal}
  }
})
</script>

<style>

</style>
