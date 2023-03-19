<script setup>
const siteMetadata = useAppConfig().metadata;
</script>
<template>
    <footer>
        <div class="mt-16 flex flex-col items-center">
            <div class="mb-3 flex space-x-4">
                <SocialIcon kind="mail" :href="`mailto:${siteMetadata.email}`" :size="6" />
                <SocialIcon kind="github" :href=siteMetadata.github :size="6" />
                <SocialIcon kind="facebook" :href=siteMetadata.facebook :size="6" />
                <SocialIcon kind="youtube" :href=siteMetadata.youtube :size="6" />
                <SocialIcon kind="linkedin" :href=siteMetadata.linkedin :size="6" />
                <SocialIcon kind="twitter" :href=siteMetadata.twitter :size="6" />
            </div>
            <div class="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <div>{{ siteMetadata.author }}</div>
                <div>{{ ` • ` }}</div>
                <div>{{ `© ${new Date().getFullYear()}` }}</div>
                <div>{{ ` • ` }}</div>
                <NuxtLink href="/">{{ siteMetadata.title }}</NuxtLink>
            </div>
            <div class="mb-8 text-sm text-gray-500 dark:text-gray-400">
                <NuxtLink href="https://github.com/narasimhajupally/tailwind-nuxtjs-starter-blog">
                    Tailwind Nuxtjs Theme
                </NuxtLink>
            </div>
        </div>
    </footer>
</template>