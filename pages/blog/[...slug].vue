<script setup>
const DEFAULT_LAYOUT = 'post'
const { path } = useRoute()
const { data: post } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})
const authorList = post.value.authors || ['default'];
const authorPromise = authorList.map(async (author) => {
    const authorResults = await queryContent().where({ _path: "/authors/" + author }).findOne()
    return authorResults;
})
const authorDetails = await Promise.all(authorPromise);

const [prev, next] = await queryContent('blog')
    .only(['_path', 'title'])
    .sort({ date: -1 })
    .findSurround(path)

</script>
<template>
    <NuxtLayout :name="post.layout || DEFAULT_LAYOUT" :post="post" :authorDetails="authorDetails" :next="next" :prev="prev">
    </NuxtLayout>
</template>