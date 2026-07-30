<script lang="ts" setup>
type Props = {
    name: string;
};
const { name } = defineProps<Props>();
</script>

<template>
    <div class="flex flex-row items-center gap-2">
        <VCheckboxRoot :id="name" />
        <VLabel
            :for="name"
            class="cursor-pointer"
        >
            <slot />
        </VLabel>
    </div>
</template>
