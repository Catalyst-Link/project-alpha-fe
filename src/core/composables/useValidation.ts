import type { StringSchema } from 'yup';

export function useValidation() {
    addMethod<StringSchema>(
        string,
        'validatePhoneNumber',
        function validatePhoneNumber() {
            return this.test({
                message({ label }: { label: string }) {
                    return `${label} must start with 08 and have 10-13 digits.`;
                },
                test: value => /^08\d{8,11}$/.test(String(value)),
            });
        },
    );

    setLocale({
        mixed: {
            required: ({ label }: { label: string }) => `Please fill in ${label}.`,
            notType: <T>({ label, type }: { label: string; type: T }) => `The ${label} field must be of type ${type}.`,
        },
        number: {
            min: ({ label, min }: { label: string; min: number }) => `${label} must be at least ${min}.`,
            max: ({ label, max }: { label: string; max: number }) => `${label} must be at most ${max}.`,
        },
        string: {
            email: ({ label }: { label: string }) => `${label} must be a valid email address.`,
            min: ({ label, min }: { label: string; min: number }) => `${label} must be at least ${min} characters.`,
            max: ({ label, max }: { label: string; max: number }) => `${label} must be at most ${max} characters.`,
        },
    });
}
