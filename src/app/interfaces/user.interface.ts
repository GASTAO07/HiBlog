export interface User {
    id?: number,
    email: string,
    nom?: string,
    prenom?: string,
    motdepasse: {
        pwd: string,
        confirmPwd?: string,
    },
}
