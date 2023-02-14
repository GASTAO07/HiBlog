
export interface User {
    email: string,
    nom?: string,
    prenom?: string,
    motdepasse: {
        pwd: string,
        confirmPwd?: string,
    },
}
