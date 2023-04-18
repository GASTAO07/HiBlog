export interface User {
    id?: number,
    avatarUrl? : string,
    email: string,
    nom?: string,
    prenom?: string,
    motdepasse: {
        pwd: string,
        confirmPwd?: string,
    },
}
