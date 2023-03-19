<script setup>
const { title, posts, currentPage } = defineProps({
    title: {
        required: true
    },
    posts: {
        required: true
    },
    currentPage: {
        required: true
    }
});
const POSTS_PER_PAGE = 5;
const searchValue = ref('');
const filteredBlogPosts = computed(() => {
    if (!searchValue.value) {
        return posts.slice(0, POSTS_PER_PAGE);
    }
    return posts.filter((post) => {
        const searchContent = post.title + post.summary + post.tags.join(' ')
        return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
});
const totalPages = computed(() => Math.ceil(posts.length / POSTS_PER_PAGE));
</script>
<template>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1
                class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                {{ title }}
            </h1>
            <div class="relative max-w-lg">
                <input aria-label="Search articles" type="text" v-model="searchValue" placeholder="Search articles"
                    class="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100" />
                <svg class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>
        </div>
        <ul>
            <template v-if="!filteredBlogPosts.length">No posts found.</template>
            <template v-else>
                <li v-for="post in filteredBlogPosts" :key="post._path" class="py-4">
                    <article class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                        <dl>
                            <dt class="sr-only">Published on</dt>
                            <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                <time dateTime={date}>{{ formatDate(post.date) }}</time>
                            </dd>
                        </dl>
                        <div class="space-y-3 xl:col-span-3">
                            <div>
                                <h3 class="text-2xl font-bold leading-8 tracking-tight">
                                    <NuxtLink :href="`/blog/${post.slug}`" class="text-gray-900 dark:text-gray-100">
                                        {{ post.title }}
                                    </NuxtLink>
                                </h3>
                                <div class="flex flex-wrap">
                                    <Tag v-for="tag in post.tags" :key=tag :text=tag />
                                </div>
                            </div>
                            <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                                {{ post.summary }}
                            </div>
                        </div>
                    </article>
                </li>
            </template>
        </ul>
    </div>
    <Pagination v-show="totalPages > 1 && !searchValue" :currentPage="currentPage" :totalPages="totalPages" />
</template>