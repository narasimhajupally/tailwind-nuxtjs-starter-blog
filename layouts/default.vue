<script setup>
const headerNavLinks = [
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' },
];
const siteMetadata = useAppConfig().metadata;
</script>
<template>
    <Html lang="en" class="scroll-smooth">

    <Body class="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
        <SectionContainer>
            <div class="flex h-screen flex-col justify-between">
                <header class="flex items-center justify-between py-10">
                    <div>
                        <NuxtLink href="/" :aria-label="siteMetadata.headerTitle">
                            <div class="flex items-center justify-between">
                                <div class="mr-3">
                                    <img src="~/assets/icons/logo.svg" />
                                </div>
                                <div v-if="typeof siteMetadata.headerTitle === 'string'"
                                    class="hidden h-6 text-2xl font-semibold sm:block">
                                    {{ siteMetadata.headerTitle }}
                                </div>
                                <template v-else>{{ siteMetadata.headerTitle }}</template>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="flex items-center text-base leading-5">
                        <div class="hidden sm:block">
                            <NuxtLink v-for="link in headerNavLinks" :key="link.title" :href="link.href"
                                class="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
                                {{ link.title }}
                            </NuxtLink>
                        </div>
                        <ThemeSwitch />
                        <MobileNav />
                    </div>
                </header>
                <main class="mb-auto">
                    <slot />
                </main>
                <Footer />
            </div>
        </SectionContainer>
    </Body>

    </Html>
</template>