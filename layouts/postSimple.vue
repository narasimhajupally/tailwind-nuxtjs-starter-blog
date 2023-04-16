<template>
    <SectionContainer>
        <article>
            <div>
                <header>
                    <div class="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
                        <dl>
                            <div>
                                <dt class="sr-only">Published on</dt>
                                <dd class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                    <time dateTime={date}>{formatDate(date)}</time>
                                </dd>
                            </div>
                        </dl>
                        <div>
                            <PageTitle>{title}</PageTitle>
                        </div>
                    </div>
                </header>
                <div class="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0 " :style="{
                    gridTemplateRows: 'auto 1fr'
                }">
                    <div class="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                        <div class="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
                    </div>
                    <Comments frontMatter={frontMatter} />
                    <footer>
                        <div class="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">

                            <!-- <div v-if="prev" class="pt-4 xl:pt-8">
                                <Link href={`/blog/${prev.slug}`}
                                    class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                &larr; {prev.title}
                                </Link>
                            </div> -->
                            <!-- <div v-if="next" class="pt-4 xl:pt-8">
                                <Link href={`/blog/${next.slug}`}
                                    class="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
                                {next.title} &rarr;
                                </Link>
                            </div> -->
                        </div>
                    </footer>
                </div>
            </div>
        </article>
    </SectionContainer>
</template>