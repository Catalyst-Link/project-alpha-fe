<script lang="ts" setup>
useAuthStore();

useHead({
    titleTemplate: 'Catalyst Link - %s',
});
</script>

<template>
    <VLayout />
    <VToast />
</template>
