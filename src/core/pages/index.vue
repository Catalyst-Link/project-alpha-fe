<script lang="ts" setup>
definePage({
    name: 'index',
    meta: {
        requiresAuth: true,
    },
    beforeEnter: () => {
        const router = useRouter();
        router.push({ name: 'dashboard' });
    },
});
</script>

<template>
    <div />
</template>
