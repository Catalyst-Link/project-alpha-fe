export class LoginResponseDTO {
    accessToken!: string;

    setAccessToken(value: string) {
        this.accessToken = value;
        return this;
    }
}
