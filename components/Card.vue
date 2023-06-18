<script setup>
const { title, description, imgSrc, href } = defineProps(["title", "description", "imgSrc", "href"])
</script>
<template>
    <div class="md p-4 md:w-1/2" style="max-width: '544px'">
        <div
            :class="`${imgSrc && 'h-full'}  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`">
            <template v-if="imgSrc">
                <NuxtLink v-if="href" :href="href" :aria-label="`Link to ${title}`">
                    <nuxt-img :alt="title" :src="imgSrc" class="object-cover object-center md:h-36 lg:h-48" :width="544"
                        :height="306" />
                </NuxtLink>
                <nuxt-img v-else :alt="title" :src="imgSrc" class="object-cover object-center md:h-36 lg:h-48" :width="544"
                    :height="306" />
            </template>
            <div class="p-6">
                <h2 class="mb-3 text-2xl font-bold leading-8 tracking-tight">
                    <NuxtLink v-if="href" :href="href" :aria-label="`Link to ${title}`">
                        {{ title }}
                    </NuxtLink>
                    <template v-else>
                        title
                    </template>
                </h2>
                <p class="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{{ description }}</p>
                <NuxtLink v-if="href" :href="href"
                    class="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    :aria-label="`Link to ${title}`">
                    Learn more &rarr;
                </NuxtLink>
            </div>
        </div>
    </div>
</template>