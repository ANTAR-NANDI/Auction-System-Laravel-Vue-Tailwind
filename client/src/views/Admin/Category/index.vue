<template>
    <h2 class="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"> Categories </h2>
           <!-- <div class="bg-gray-500 pt-3">
                <div class="rounded-tl-4xl bg-gradient-to-r from-blue-400 to-gray-400 p-4 shadow text-2xl text-white">
                    <h3 class="font-bold pl-2">Categories</h3>
                </div>
            </div> -->
    <div class="mb-4">
        <link-button to="admin.category.create" name="Add Category"></link-button>
    </div>
    <suspense>
        <template #default>
            <CategoryIndex/>
        </template>
        <template #fallback>
            <CategoryIndexSkeleton/>
        </template>      
    </suspense>
</template>

<script setup>
import CategoryIndex from "../../../components/Admin/Category/Index.vue";
import CategoryIndexSkeleton from "../../../components/Admin/Category/IndexSkeleton.vue";
import LinkButton from "../../../components/LinkButton.vue";
</script>