<!-- TODO: Setup Variants & Styling the component -->

<script lang="ts" setup>
import type { Props } from '.';

const props = defineProps<Props>();
const { value, errorMessage } = useField(toRef(props, 'name'), undefined, {
    initialValue: props.modelValue,
    validateOnMount: false,
    syncVModel: true,
});
</script>

<template>
    <div class="input-wrapper">
        <input v-model="value">
        <span
            v-if="errorMessage"
            class="error"
        >
            {{ errorMessage }}
        </span>
    </div>
</template>
