<script lang="ts" setup>
definePage({
    name: 'auth-login',
    meta: {
        requiresAuth: false,
        layout: 'Auth',
        text: {
            heading: 'Welcome Back!',
            subheading: 'Sign In untuk mememulai mengatur perusahaan anda',
        },
    },
});

useHead({
    title: 'Sign In',
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
    <form
        class="space-y-6"
        @submit.prevent="handleFormSubmit"
    >
        <VInput
            v-model="state.email"
            name="email"
            label="Email / Username"
            type="email"
            placeholder="Masukkan Email atau Username"
        />

        <VInput
            v-model="state.password"
            name="password"
            label="Password"
            type="password"
            placeholder="Masukkan Password"
        />

        <VCheckbox name="persistent">
            Ingat saya untuk 30 hari ke depan
        </VCheckbox>

        <VButton
            type="submit"
            :disabled="isPending"
            :is-loading="isPending"
            size="full"
            class="h-12"
        >
            <span>Sign in</span>
            <span>
                <IconLucideLogIn />
            </span>
        </VButton>
    </form>
</template>
