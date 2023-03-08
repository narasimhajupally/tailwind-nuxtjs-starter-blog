<script setup>
const posts = [];
const MAX_DISPLAY = 5;
const siteMetadata = useAppConfig().metadata;
const newsletter = useAppConfig().newsletter;
</script>
<template>
    <!-- <PageSEO title={siteMetadata.title} description={siteMetadata.description} /> -->
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1
                class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Latest
            </h1>
            <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
                {{ siteMetadata.description }}
            </p>
        </div>
        <ul class="divide-y divide-gray-200 dark:divide-gray-700">
            <ContentList path="/blog" :query="{ sort: [{ date: -1 }] }" v-slot="{ list }">
                <template v-for="post in list" :key="post._path">
                    <li class="py-12">
                        <article>
                            <div class="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                <dl>
                                    <dt class="sr-only">Published on</dt>
                                    <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        <time :dateTime="post.date">{{ formatDate(post.date) }}</time>
                                    </dd>
                                </dl>
                                <div class="space-y-5 xl:col-span-3">
                                    <div class="space-y-6">
                                        <div>
                                            <h2 class="text-2xl font-bold leading-8 tracking-tight">
                                                <NuxtLink class="text-gray-900 dark:text-gray-100">
                                                    {{ post.title }}
                                                </NuxtLink>
                                            </h2>
                                            <div class="flex flex-wrap">
                                                <Tag v-for="tag in post.tags" :key=tag :text=tag />
                                            </div>
                                        </div>
                                        <div class="prose max-w-none text-gray-500 dark:text-gray-400">
                                            {{ post.summary }}
                                        </div>
                                    </div>
                                    <div class="text-base font-medium leading-6">
                                        <NuxtLink
                                            class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                            :aria-label="`Read '${post.title}'`">
                                            Read more &rarr;
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </li>
                </template>
            </ContentList>
        </ul>
    </div>
    <div v-if="posts.length > MAX_DISPLAY" class="flex justify-end text-base font-medium leading-6">
        <NuxtLink href="/blog" class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts">
            All Posts &rarr;
        </NuxtLink>
    </div>
    <div v-if="newsletter.provider !== ''" class="flex items-center justify-center pt-4">
        <NewsletterForm />
    </div>
</template>