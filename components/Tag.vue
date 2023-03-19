<script setup>
defineProps({
    text: String
})
</script>
<template>
    <NuxtLink :href="`/tags/${kebabCase(text)}`"
        class="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
        {{ text.split(' ').join('-') }}
    </NuxtLink>
</template>