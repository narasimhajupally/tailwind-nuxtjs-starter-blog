<script setup>
const { body: projectsData } = await queryContent("projectsdata").findOne();
</script>
<template>
    <div class="divide-y divide-gray-200 dark:divide-gray-700">
        <div class="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1
                class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                Projects
            </h1>
            <p class="text-lg leading-7 text-gray-500 dark:text-gray-400">
                Showcase your projects with a hero image (16 x 9)
            </p>
        </div>
        <div class="container py-12">
            <div class="-m-4 flex flex-wrap">
                <Card v-for="d in projectsData" :key="d.title" :title="d.title" :description="d.description"
                    :imgSrc="d.imgSrc" :href="d.href" />
            </div>
        </div>
    </div>
</template>