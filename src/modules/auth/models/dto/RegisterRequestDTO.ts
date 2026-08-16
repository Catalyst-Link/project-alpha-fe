export class RegisterRequestDTO {
    firstName!: string;
    lastName!: string;
    email!: string;
    phone!: string;
    password!: string;
    birthDate!: string;
    gender!: Gender;

    setFirstName(value: string) {
        this.firstName = value;
        return this;
    }

    setLastName(value: string) {
        this.lastName = value;
        return this;
    }

    setEmail(value: string) {
        this.email = value;
        return this;
    }

    setPhone(value: string) {
        this.phone = deserializePhoneNumber(value);
        return this;
    }

    setPassword(value: string) {
        this.password = encryptAES(value);
        return this;
    }

    setBirthDate(value: string) {
        this.birthDate = value;
        return this;
    }

    setGender(value: Gender) {
        this.gender = value;
        return this;
    }
}
