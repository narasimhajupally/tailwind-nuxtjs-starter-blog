<script setup>
const { currentPage, totalPages } = defineProps({
    currentPage: {
        required: true,
    },
    totalPages: {
        required: true,
    }
})
const prevPage = computed(() => parseInt(currentPage) - 1 > 0);
const nextPage = computed(() => parseInt(currentPage) + 1 <= parseInt(totalPages));

</script>
<template>
    <div class="space-y-2 pt-6 pb-8 md:space-y-5">
        <nav class="flex justify-between">
            <button v-show="!prevPage" rel="previous" class="cursor-auto disabled:opacity-50" :disabled="!prevPage">
                Previous
            </button>
            <NuxtLink v-show="prevPage" :href="currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`">
                <button rel="previous">Previous</button>
            </NuxtLink>
            <span>
                {{ currentPage }} of {{ totalPages }}
            </span>
            <button v-show="!nextPage" rel="next" class="cursor-auto disabled:opacity-50" :disabled="!nextPage">
                Next
            </button>
            <NuxtLink v-show="nextPage" :href="`/blog/page/${currentPage + 1}`">
                <button rel="next">Next</button>
            </NuxtLink>
        </nav>
    </div>
</template>