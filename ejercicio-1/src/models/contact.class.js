export class Contact {
    name = ''; //que será un String.
    surname = ''; //también un String.
    email = ''; //de nuevo un String.
    connected = false; // será un booleano que nos indicará si la persona está conectada o no.

    constructor (name, surname, email, connected){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.connected = connected;
    }
}