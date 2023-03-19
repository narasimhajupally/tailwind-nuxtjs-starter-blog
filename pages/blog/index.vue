<script setup>
const siteMetadata = useAppConfig().metadata;
// definePageMeta({
//     title: ,
//     description: ,
// })
useServerSeoMeta({
    title: `Blog - ${siteMetadata.author}`,
    description: siteMetadata.description,
})
const posts = await queryContent('/').find();
</script>
<template>
    <!-- <Head :title="`Blog - ${siteMetadata.author}`" :description="siteMetadata.description"></Head> -->
    <List title="All Posts" :posts="posts" :current-page="1" />
</template>