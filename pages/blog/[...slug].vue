<script setup>
const DEFAULT_LAYOUT = 'post'
const { path } = useRoute()
const { data: post } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})
const { data: authorDetails } = await useAsyncData(`author`, () => {
    return queryContent().where({ _path: "/authors/default" }).findOne()
})
// const { page: post, prev, next } = useContent();
console.log(authorDetails.value);

</script>
<template>
    <NuxtLayout :name="post.layout || DEFAULT_LAYOUT" :post="post" :authorDetails="[authorDetails]" :next="null"
        :prev="null">
    </NuxtLayout>
</template>