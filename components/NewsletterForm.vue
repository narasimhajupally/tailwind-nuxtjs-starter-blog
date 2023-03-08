<script setup>
defineProps({
    title: {
        type: String,
        default: 'Subscribe to the newsletter',
    }
})

const newsletter = useAppConfig().newsletter;
const email = ref('');
const error = ref(false);
const message = ref('');
const subscribed = ref(false);

const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/${newsletter.provider}`, {
        body: JSON.stringify({
            email: email.value,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
        error.value = true;
        message.value = "Your e-mail address is invalid or you are already subscribed!";
        return
    }

    email.value = '';
    error.value = false;
    subscribed.value = true;
    message.value = 'Successfully! 🎉 You are now subscribed.';
}
</script>
<template>
    <div>
        <div class="pb-1 text-lg font-semibold text-gray-800 dark:text-gray-100">{{ title }}</div>
        <form class="flex flex-col sm:flex-row" @submit="subscribe">
            <div>
                <label class="sr-only" htmlFor="email-input">
                    Email address
                </label>
                <input autoComplete="email"
                    class="w-72 rounded-md px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-black"
                    id="email-input" name="email" :placeholder="subscribed ? `You're subscribed !  🎉` : 'Enter your email'"
                    v-model="email" required type="email" :disabled="subscribed" />
            </div>
            <div class="mt-2 flex w-full rounded-md shadow-sm sm:mt-0 sm:ml-3">
                <button
                    class="w-full rounded-md bg-primary-500 py-2 px-4 font-medium text-white sm:py-0  focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black"
                    :class="[subscribed ? 'cursor-default' : 'hover:bg-primary-700 dark:hover:bg-primary-400']"
                    type="submit" :disabled="subscribed">
                    {{ subscribed ? 'Thank you!' : 'Sign up' }}
                </button>
            </div>
        </form>
        <div v-if="error" class="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{{ message }}</div>
    </div>
</template>