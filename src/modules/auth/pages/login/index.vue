<script lang="ts" setup>
definePage({
    name: 'auth-login',
    meta: {
        requiresAuth: false,
        layout: 'Blank',
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
    <section class="min-h-dvh flex flex-col md:flex-row">
        <div class="bg-yellow-500 hidden md:block basis-1/2">
            1
        </div>
        <div class="basis-1/2 min-h-dvh">
            <div>
                <h2>Welcome Back</h2>
                <p>
                    Please sign in to your corporate account
                </p>
            </div>

            <form
                class="flex flex-col gap-y-3"
                @submit.prevent="handleFormSubmit"
            >
                <VInput
                    v-model="state.email"
                    name="email"
                    label="Work Email Address"
                    type="email"
                    placeholder="name@company.com"
                />

                <VInput
                    v-model="state.password"
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="Security Password"
                />

                <div class="flex items-center gap-1.5">
                    <VCheckbox id="remember" />
                    <VLabel for="remember">
                        Remember this device for 30 days
                    </VLabel>
                </div>

                <VButton
                    type="submit"
                    :disabled="isPending"
                    :is-loading="isPending"
                >
                    <span>Sign in</span>
                    <span>
                        <IconLucideLogIn />
                    </span>
                </VButton>
            </form>
        </div>
    </section>
</template>
