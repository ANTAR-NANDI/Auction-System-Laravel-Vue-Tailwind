<template>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"> Add Category </h2>
            <!-- <div class="bg-gray-500 pt-3">
                <div class="rounded-tl-4xl bg-gradient-to-r from-blue-400 to-gray-400 p-4 shadow text-2xl text-white">
                    <h3 class="font-bold pl-2">Add Category</h3>
                </div>
            </div> -->
    <div class="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <form @submit.prevent="storeCategory()" class="mt-4">
            <label class="block text-sm">
                <span class="text-gray-700 dark:text-gray-400"> Name </span>
                <input v-model="form_data.name" required class=" block w-full mt-1 text-sm dark:text-gray-300 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-red form-input rounded" placeholder="category name"/>
            </label>

            <label class="block text-sm mt-4">
                <span class="text-gray-700 dark:text-gray-400"> Description </span>
                <textarea v-model="form_data.description" required class="block w-full mt-1 text-sm dark:text-gray-300 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-red form-input rounded" placeholder="category description"/>
            </label>
            
            <div class="mt-4 mb-2 flex flex-col md:flex-row items-center justify-between">
                <button v-if="!is_saved" type="submit" :disabled="is_loading" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 flex-none bg-gray-900 hover:bg-gray-700 text-gray-100 text-sm leading-6 font-semibold py-2 px-4 border border-transparent rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black focus:outline-none transition-colors duration-300">
                    <span>Add Category</span> 
                    <span v-if="is_loading">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 animate-spin" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd"/>
                        </svg>
                    </span> 
                </button>
                <button v-if="is_saved" @click="back" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 flex-none bg-gray-900 hover:bg-gray-700 text-gray-100 text-sm leading-6 font-semibold py-2 px-4 border border-transparent rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-black focus:outline-none transition-colors duration-300">
                    <span>Back To Category</span> 
                     
                </button>
                <span v-if="is_saved" class="mt-2 px-2 py-1 text-sm font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    Category has been added
                </span>
            </div>
        </form>
        <div v-if="errors" class="mt-4 px-3 py-2 w-full rounded text-sm text-red-500 bg-red-100 animate-pulse">
            <p class="font-semibold tracking-wide">
                <strong>Error:</strong> {{ errors.message }}
            </p>
            <ul class="mt-1 ml-2 list-disc list-inside">
                <li v-for="allErrors in errors.errors" :key="allErrors">
                    <span v-for="errorKeys in allErrors" :key="errorKeys">
                        <span v-for="errorMessage in errorKeys" :key="errorMessage">
                            {{ errorMessage }}
                        </span> 
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import router from '../../../router/index'
import {ref} from "vue";
import CategoryService from "../../../services/CategoryService";

const form_data = ref({name: ""});
const is_loading = ref(false);
const is_saved = ref(false);
const errors = ref(null);
function storeCategory() {
    is_loading.value = true;
    CategoryService.storeCategory(form_data.value)
    .then((storeCategoryResponse) => {
        is_saved.value = storeCategoryResponse.data.status;
        is_loading.value = false;
        form_data.value.name = "";
        errors.value = null;
        
    })
    .catch((storeCategoryError) => {
        errors.value = storeCategoryError.data.status;
        is_saved.value = false;
        is_loading.value = false;
    });
}
function back()
{
    window.location.reload();
}
</script>