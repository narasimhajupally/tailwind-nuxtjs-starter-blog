<script setup>
const posts = await queryContent('blog').only('tags').find();
const tags = {};

posts.forEach((post) => {
    if (post.tags && post.draft !== true) {
        post.tags.forEach((tag) => {
            const formattedTag = kebabCase(tag)
            if (formattedTag in tags) {
                tags[formattedTag] += 1
            } else {
                tags[formattedTag] = 1
            }
        })
    }
})

const sortedTags = computed(() => Object.keys(tags).sort((a, b) => tags[b] - tags[a]))

</script>
<template>
    <div
        class="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <div class="space-x-2 pt-6 pb-8 md:space-y-5">
            <h1
                class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
                Tags
            </h1>
        </div>
        <div class="flex max-w-lg flex-wrap">
            <template v-if="Object.keys(tags).length === 0">No tags found.</template>
            <template v-else>
                <div v-for="tag in sortedTags" :key="tag" class="mt-2 mb-2 mr-5">
                    <Tag :text="tag" />
                    <NuxtLink :href="`/tags/${kebabCase(tag)}`"
                        class="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300">
                        {{ ` (${tags[tag]})` }}
                    </NuxtLink>
                </div>
            </template>
        </div>
    </div>
</template>