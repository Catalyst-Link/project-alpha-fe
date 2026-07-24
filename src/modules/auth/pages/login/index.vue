<script lang="ts" setup>
definePage({
    name: 'auth-login',
    meta: { requiresAuth: false },
    beforeEnter: () => {
        const authStore = useAuthStore();
        const router = useRouter();

        if (authStore.isAuthenticated) {
            router.push({ name: 'index' });
        }
    },
});

const { mutate, isPending } = useMutationLogin();
const state = reactive(new LoginRequestDTO());
const schema = computed(() => object({
    email: string().email().required(),
    password: string().min(8).required(),
}));
const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(schema.value),
});
const handleFormSubmit = handleSubmit(() =>
    mutate(
        new LoginRequestDTO()
            .setEmail(state.email)
            .setPassword(state.password),
    ),
);
</script>

<template>
    <VContainer>
        <form
            class="flex flex-col gap-y-4"
            @submit.prevent="handleFormSubmit"
        >
            <VInput
                v-model="state.email"
                name="email"
                label="Email"
                type="email"
            />

            <VInput
                v-model="state.password"
                name="password"
                label="Password"
                type="password"
            />

            <VButton
                type="submit"
                :disabled="isPending"
                :is-loading="isPending"
            >
                Sign in
            </VButton>
        </form>
    </VContainer>
</template>
