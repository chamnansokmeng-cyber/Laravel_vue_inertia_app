<template>
    <fwb-card class="p-4 ">
        <fwb-heading tag="h3" class="flex justify-center items-center"
            >register pages
        </fwb-heading>
        <form @submit.prevent="submit">
            <fwb-input
                v-model="form.firstname"
                label="Firstname"
                placeholder="Enter your Firstname"
                type="text"
                size="sm"
            />
            <fwb-input
                v-model="form.lastname"
                label="Lastname"
                placeholder="Enter your Lastname"
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
            <fwb-input
                v-model="form.confirm_password"
                label="Confirm_Password"
                placeholder="Verify your Password"
                type="password"
                size="sm"
            />

            <div class="p-2 text-sm flex gap-1">
                <p class="">Already have an account ?</p>
                <Link class="text-blue-600" :href="route('login')" >Login</Link>
            </div>
            <fwbButton type="submit">
                Register
            </fwbButton>
        </form>
    </fwb-card>
</template>

<script setup>
import { reactive } from "vue";
import Layout from "../../layouts/GuestLayout.vue";
import { FwbCard, FwbHeading, FwbInput, FwbButton } from "flowbite-vue";

const form = reactive({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm_password: ''
});
function submit() {
    alert(JSON.stringify(form));
}
defineOptions({
    layout: Layout,
});
</script>
