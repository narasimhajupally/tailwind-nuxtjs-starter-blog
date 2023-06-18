<script setup>
const authorDetails = await queryContent().where({ _path: "/authors/default" }).findOne();
</script>
<template>
    <NuxtLayout name="author" :author-details="authorDetails"></NuxtLayout>
</template>