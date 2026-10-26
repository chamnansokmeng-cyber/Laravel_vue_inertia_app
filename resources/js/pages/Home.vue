<template>
    <Head title="Home" />
   <fwb-alert type="success">
    Success! You can now use Flowbite Vue in your Vue application 🎉
  </fwb-alert>
    <div>
        <h1>Welcome to the Home Page</h1>
    </div>
</template>
<script setup>
import Layout from "../layouts/AuthLayout.vue";
import { FwbAlert } from 'flowbite-vue'
defineOptions({
    layout: Layout,
});
</script>
