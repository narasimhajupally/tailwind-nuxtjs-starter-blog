<script setup>
defineProps({
    kind: String,
    href: String,
    size: {
        type: Number,
        default: 8,
    }
})

const icons = {
    mail: "fluent:mail-24-filled",
    github: "simple-icons:github",
    facebook: "simple-icons:facebook",
    youtube: "simple-icons:youtube",
    linkedin: "simple-icons:linkedin",
    twitter: "simple-icons:twitter",
}
</script>
<template>
    <a v-if="kind && href" class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank"
        rel="noopener noreferrer" :href="href">
        <span class="sr-only">{{ kind }}</span>
        <Icon :name="icons[kind]"
            class="fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400"
            :height="size * 4" :width="size * 4" />
    </a>
</template>