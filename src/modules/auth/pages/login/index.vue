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
    <section class="flex flex-col lg:flex-row min-h-dvh">
        <div class="basis-1/2 hidden lg:flex relative items-center bg-[url(/images/auth_banner.webp)] bg-position-[75%_50%] bg-no-repeat bg-cover rounded-r-[7%]">
            <VOverlay class="rounded-r-[7%]" />
            <div class="z-10 space-y-8 w-full px-20">
                <div class="space-y-4">
                    <VText
                        as="h1"
                        variant="h1"
                        class="font-medium"
                    >
                        <span>Human Resource Management </span>
                        <span class="text-primary">Simplified</span>
                    </VText>
                    <VText
                        as="p"
                        variant="body"
                        class="max-w-lg"
                    >
                        Access your global workforce management tools with end-to-end encryption and industry-leading compliance standards.
                    </VText>
                </div>

                <VSeparator class="bg-gray-500 max-w-2xs" />

                <div class="max-w-2xs flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <VText
                            as="h4"
                            variant="h4"
                            color="primary"
                            class="font-semibold"
                        >
                            99%
                        </VText>
                        <VText
                            as="p"
                            variant="subbody"
                            class="uppercase font-semibold"
                        >
                            uptime
                        </VText>
                    </div>

                    <div>
                        <VText
                            as="h4"
                            variant="h4"
                            color="primary"
                            class="font-semibold"
                        >
                            256-bit
                        </VText>
                        <VText
                            as="p"
                            variant="subbody"
                            class="uppercase font-semibold"
                        >
                            aesdata
                        </VText>
                    </div>
                </div>
            </div>
        </div>

        <div class="basis-1/2 min-h-dvh flex flex-col justify-center px-8 xl:px-32 space-y-10">
            <img
                src="/images/hris_logo.png"
                class="w-52 mx-auto"
            >

            <div class="space-y-2">
                <VText
                    as="h4"
                    variant="h4"
                    class="font-semibold"
                >
                    Welcome Back!
                </VText>
                <VText
                    as="p"
                    variant="body"
                    class="font-extralight"
                >
                    Sign In untuk mememulai mengatur perusahaan anda
                </VText>
            </div>

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
        </div>
    </section>
</template>
