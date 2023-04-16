---
title: Images in Nuxt.js
date: "2020-11-11"
tags: ["nuxt js", "guide"]
draft: false
summary: "In this article we introduce adding images in the tailwind starter blog and the benefits and limitations of the nuxt/image module."
authors: ["sparrowhawk"]
---

# Introduction

The tailwind starter blog has out of the box support for [Nuxt.js's built-in image component](https://v1.image.nuxtjs.org/) and automatically swaps out default image tags in markdown or mdx documents to use the Image component provided.

# Usage

To use in a new page route / javascript file, simply import the image component and call it e.g.

```js
<template>
    <h1>My Homepage</h1>
    <nuxt-img src="/me.png" alt="Picture of the author" width={500} height={500} />
    <p>Welcome to my homepage!</p>
</template>
```

For a markdown file, the default image tag can be used and the default `img` tag gets replaced by the `Image` component in the build process.

Assuming we have a file called `ocean.jpg` in `data/img/ocean.jpg`, the following line of code would generate the optimized image.

```
![ocean](/images/ocean.jpg)
```

Alternatively, since we are using mdx, we can just use the image component directly! Note, that you would have to provide a fixed width and height. The `img` tag method parses the dimension automatically.

```js
<nuxt-img alt="ocean" src="/images/ocean.jpg" width={256} height={128} />
```

_Note_: If you try to save the image, it is in webp format, if your browser supports it!

![ocean](/images/ocean.jpeg)

<p>
  Photo by [YUCAR
  FotoGrafik](https://unsplash.com/@yucar?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
  on
  [Unsplash](https://unsplash.com/s/photos/sea?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
</p>

# Benefits

-   Smaller image size with Webp (~30% smaller than jpeg)
-   Responsive images - the correct image size is served based on the user's viewport
-   Lazy loading - images load as they are scrolled to the viewport
-   Avoids [Cumulative Layout Shift](https://web.dev/cls/)
-   Optimization on demand instead of build-time - no increase in build time!

# Limitations
