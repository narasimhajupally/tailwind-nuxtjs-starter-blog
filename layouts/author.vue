<script setup>
const { authorDetails } = defineProps({
    authorDetails: {
        required: true
    }
})
const { name, avatar, occupation, company, email, twitter, linkedin, github } = authorDetails;
</script>
<template>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1
                class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                About
            </h1>
        </div>
        <div class="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
            <div class="flex flex-col items-center pt-8">
                <nuxt-img :src="avatar" alt="avatar" width="192px" height="192px" class="h-48 w-48 rounded-full" />
                <h3 class="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{{ name }}</h3>
                <div class="text-gray-500 dark:text-gray-400">{{ occupation }}</div>
                <div class="text-gray-500 dark:text-gray-400">{{ company }}</div>
                <div class="flex space-x-3 pt-6">
                    <SocialIcon kind="mail" :href="`mailto:${email}`" />
                    <SocialIcon kind="github" :href="github" />
                    <SocialIcon kind="linkedin" :href="linkedin" />
                    <SocialIcon kind="twitter" :href="twitter" />
                </div>
            </div>
            <div class="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
                <ContentRenderer :value="authorDetails"></ContentRenderer>
            </div>
        </div>
    </div>
</template>