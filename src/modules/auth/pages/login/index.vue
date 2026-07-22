<script lang="ts" setup>
definePage({
    name: 'auth-login',
    meta: { requiresAuth: false },
});

const { mutate } = useMutationLogin();
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
    <form @submit.prevent="handleFormSubmit">
        <VInput
            v-model="state.email"
            name="email"
        />

        <VInput
            v-model="state.password"
            name="password"
        />

        <VButton type="submit">
            Sign in
        </VButton>
    </form>
</template>
