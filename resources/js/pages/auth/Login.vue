<template>
    <fwb-card class="p-4">
        <fwb-heading tag="h3" class="flex justify-center items-center"
            >Login pages
        </fwb-heading>
        <form @submit.prevent="submit">
            <fwb-input
                v-model="form.username"
                label="Username"
                placeholder="Enter your Username"
                type="text"
                size="sm"
            />
            <fwb-input
                v-model="form.email"
                label="Email"
                placeholder="name@example.com"
                type="email"
                size="sm"
            />
            <fwb-input
                v-model="form.password"
                label="Password"
                placeholder="••••••••"
                type="password"
                size="sm"
            />

            <div class="p-2 text-sm flex gap-1">
                <p class="">Already have an account ?</p>
                <Link class="text-blue-600" :href="route('register')"
                    >Register</Link
                >
            </div>
            <fwb-button type="submit"> Login </fwb-button>
        </form>
    </fwb-card>
</template>

<script setup>
import { reactive } from "vue";
import Layout from "../../layouts/GuestLayout.vue";
import { FwbCard, FwbHeading, FwbInput, FwbButton } from "flowbite-vue";
const form = reactive({
    username: "",
    email: "",
    password: "",
});
function submit() {
    alert(JSON.stringify(form));
}
defineOptions({
    layout: Layout,
});
</script>
