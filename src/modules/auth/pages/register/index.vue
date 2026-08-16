<script lang="ts" setup>
definePage({
    name: 'auth-register',
    meta: {
        requiresAuth: false,
        layout: 'Auth',
        text: {
            heading: 'Welcome Back!',
            subheading: 'Sign Up untuk mememulai mengatur perusahaan anda',
        },
    },
});

useHead({
    title: 'Sign Up',
});

const { mutate, isPending } = useMutationRegister();
const state = reactive(new RegisterRequestDTO());
const schema = computed(() => object({
    firstName: string().min(1).required().label('First Name'),
    lastName: string().min(1).required().label('Last Name'),
    email: string().email().required(),
    phone: string().required(),
    password: string().min(8).required(),
    birthDate: date().required().label('Birth Date'),
    gender: string().required(),
}));
const { handleSubmit } = useForm({
    validationSchema: toTypedSchema(schema.value),
});
const handleFormSubmit = handleSubmit(() => {
    mutate(
        new RegisterRequestDTO()
            .setFirstName(state.firstName)
            .setLastName(state.lastName)
            .setEmail(state.email)
            .setPhone(state.phone)
            .setPassword(state.password)
            .setBirthDate(state.birthDate)
            .setGender(state.gender),
    );
});
</script>

<template>
    <form @submit.prevent="handleFormSubmit">
        <VFlex
            direction="col"
            gap="6"
        >
            <VGrid
                grid="2"
                gap="4"
            >
                <VInput
                    v-model="state.firstName"
                    name="firstName"
                    label="First Name"
                    type="text"
                    placeholder="John"
                />

                <VInput
                    v-model="state.lastName"
                    name="lastName"
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                />
            </VGrid>

            <VInput
                v-model="state.email"
                name="email"
                label="Email / Username"
                type="email"
                placeholder="johndoe@company.com"
            />

            <VInput
                v-model="state.phone"
                name="phone"
                label="Phone Number"
                type="phone"
                placeholder="+62 812-3456-7890"
            />

            <VInput
                v-model="state.password"
                name="password"
                label="Password"
                type="password"
                placeholder="••••••••"
            />

            <VDatePicker
                v-model="state.birthDate"
                name="birthDate"
                label="Birth Date"
                placeholder="Pick your birth date"
            />

            <VSelect
                v-model="state.gender"
                name="gender"
                label="Gender"
                placeholder="Choose a gender"
            >
                <VSelectItem :value="GENDER.MALE">
                    Male
                </VSelectItem>
                <VSelectItem :value="GENDER.FEMALE">
                    Female
                </VSelectItem>
            </VSelect>

            <VButton
                type="submit"
                :disabled="isPending"
                :is-loading="isPending"
                size="full"
                class="h-12"
            >
                Sign Up
                <template #icon>
                    <IconLucideLogIn />
                </template>
            </VButton>
        </VFlex>
    </form>
</template>
