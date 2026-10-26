<template>
    <div class="min-h-screen bg-gray-50 text-gray-800">
        <div
            v-if="sidebarOpen"
            class="fixed inset-0 z-30 bg-gray-900/40 lg:hidden"
            aria-hidden="true"
            @click="sidebarOpen = false"
        ></div>

        <aside
            class="fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-gray-200 bg-white shadow-xl transition-transform duration-300 lg:shadow-sm"
            :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'"
        >
            <div
                class="flex h-20 items-center justify-between border-b border-gray-100 px-6"
            >
                <Link :href="route('home')" class="flex items-center gap-3">
                    <span
                        class="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-lg font-black text-white"
                    >
                        C
                    </span>
                    <span>
                        <span class="block text-lg font-bold text-gray-900"
                            >Crud-App</span
                        >
                        <span class="block text-xs font-medium text-gray-500"
                            >Simple workspace</span
                        >
                    </span>
                </Link>
                <button
                    type="button"
                    class="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700 lg:hidden"
                    aria-label="Close sidebar"
                    @click="sidebarOpen = false"
                >
                    <span class="text-xl leading-none">&times;</span>
                </button>
            </div>

            <nav
                class="flex-1 space-y-2 overflow-y-auto px-4 py-6"
                aria-label="Sidebar navigation"
            >
                <p
                    class="px-3 pb-2 text-xs font-bold uppercase tracking-wider text-gray-400"
                >
                    Workspace
                </p>
                <Link
                    :href="route('home')"
                    class="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition"
                    :class="
                        $page.url === '/'
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    "
                    @click="sidebarOpen = false"
                >
                    <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5v14m8-7h-2m0 0h-2m2 0v2m0-2v-2M3 11h6m-6 4h6m11 4H4c-.55228 0-1-.4477-1-1V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v12c0 .5523-.4477 1-1 1Z"
                        />
                    </svg>

                    Dashboard
                </Link>
            </nav>

            <div class="m-4 rounded-2xl border border-gray-200 bg-gray-50 p-4">
                <p class="text-sm font-bold text-gray-800">Stay organized</p>
                <p class="mt-1 text-xs leading-5 text-gray-500">
                    Keep your work moving with a clear, focused dashboard.
                </p>
            </div>
        </aside>


        <div
            class="flex min-h-screen flex-col transition-[padding] duration-300"
            :class="sidebarOpen ? 'lg:pl-72' : 'lg:pl-0'"
        >
            <header
                class="sticky top-0 z-20 border-b border-gray-200 bg-white px-4 sm:px-6"
            >
                <nav
                    class="mx-auto flex h-20 max-w-7xl items-center justify-between"
                    aria-label="Top navigation"
                >
                    <div class="flex items-center gap-3">
                        <button
                            type="button"
                            class="rounded-xl p-2.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                            aria-label="Toggle sidebar"
                            :aria-expanded="sidebarOpen"
                            @click="sidebarOpen = !sidebarOpen"
                        >
                            <span class="text-2xl leading-none">☰</span>
                        </button>
                        <div></div>
                    </div>

                    <fwb-dropdown
                        :text="$page.props.auth.user?.name ?? $page.props.auth.user"
                        color="light"
                    >
                        <nav
                            class="py-2 text-sm text-gray-700 dark:text-gray-200">
                            <Link
                                href="#"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >Settings</Link
                            >
                            <Link
                                :href="route('register')"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >Register</Link
                            >
                            <Link
                                :href="route('login')"
                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >Login</Link
                            >
                        </nav>
                    </fwb-dropdown>
                </nav>
            </header>

            <main class="mx-auto w-full max-w-7xl flex-1 p-4 sm:p-6 lg:p-10">
                <slot></slot>
            </main>

            <footer class="border-t border-gray-200 bg-white px-4 py-6 sm:px-6">
                <div
                    class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-sm text-gray-400 sm:flex-row sm:text-left"
                >
                    <p>
                        &copy; {{ new Date().getFullYear() }} Crudly. All rights
                        reserved.
                    </p>
                    <div class="flex gap-5">
                        <a href="#" class="hover:text-gray-700">Privacy</a>
                        <a href="#" class="hover:text-gray-700">Terms</a>
                        <a href="#" class="hover:text-gray-700">Contact</a>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { FwbDropdown } from "flowbite-vue";
import { route } from "../../../vendor/tightenco/ziggy/src/js";

const sidebarOpen = ref(false);
</script>
