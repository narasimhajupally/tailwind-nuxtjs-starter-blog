<script setup>
const siteMetadata = useAppConfig().metadata;
definePageMeta({
    // title: ,
    // description: ,

})
useServerSeoMeta({
    title: `Blog - ${siteMetadata.author}`,
    description: siteMetadata.description,
})
const posts = await queryContent('blog').find();
</script>
<template>
    <NuxtLayout name="list" title="All Posts" :posts="posts" :current-page="1">
    </NuxtLayout>
</template>