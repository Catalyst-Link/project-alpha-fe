<script setup lang="ts">
import type { Component } from 'vue';
import type { SidebarMenuButtonProps } from './VSidebarMenuButtonChild.vue';

defineOptions({
    inheritAttrs: false,
});

const props = withDefaults(defineProps<SidebarMenuButtonProps & {
    tooltip?: string | Component;
}>(), {
    as: 'button',
    variant: 'default',
    size: 'default',
});

const { isMobile, state } = useSidebar();
const delegatedProps = reactiveOmit(props, 'tooltip');
</script>

<template>
    <VSidebarMenuButtonChild
        v-if="!tooltip"
        v-bind="{ ...delegatedProps, ...$attrs }"
    >
        <slot />
    </VSidebarMenuButtonChild>

    <VTooltip v-else>
        <VTooltipTrigger as-child>
            <VSidebarMenuButtonChild v-bind="{ ...delegatedProps, ...$attrs }">
                <slot />
            </VSidebarMenuButtonChild>
        </VTooltipTrigger>
        <VTooltipContent
            side="right"
            align="center"
            :hidden="state !== 'collapsed' || isMobile"
        >
            <template v-if="typeof tooltip === 'string'">
                {{ tooltip }}
            </template>
            <component
                :is="tooltip"
                v-else
            />
        </VTooltipContent>
    </VTooltip>
</template>
