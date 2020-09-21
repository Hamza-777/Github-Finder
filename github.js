class GitHub {
    constructor() {
        this.client_id = '03f4188ca87e5533441f';
        this.client_secret = '1cc948d0fc0a086b5bda5f529a379bbe1377c976';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}