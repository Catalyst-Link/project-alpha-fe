export class LoginRequestDTO {
    email!: string;
    password!: string;

    setEmail(value: string) {
        this.email = value;
        return this;
    }

    setPassword(value: string) {
        this.password = value;
        return this;
    }
}
