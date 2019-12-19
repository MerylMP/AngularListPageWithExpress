export class Person {
    private _id: string;
    private name: string;
    private surname: string;
    private age: number;
    private dni: string;
    private dateOfBirth: Date;
    private favouriteColour: string;
    private gender: string;
    private notes: string;


    constructor(id: string, name: string, surname: string, age: number, dni: string, dateOfBirth: Date,
                favouriteColour: string, gender: string, notes: string) {
        this._id = id;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.dni = dni;
        this.dateOfBirth = dateOfBirth;
        this.favouriteColour = favouriteColour;
        this.gender = gender;
        this.notes = notes;
    }

    public getId(): string {
        return this._id;
    }

    public setId(id: string): string {
        return this._id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): string {
        return this.name = name;
    }

    public getSurname(): string {
        return this.surname;
    }

    public setSurname(surname: string): string {
        return this.surname = surname;
    }

    public getAge(): number {
        return this.age;
    }

    public setAge(age: number): number {
        return this.age = age;
    }

    public getDni(): string {
        return this.dni;
    }

    public setDni(dni: string): string {
        return this.dni = dni;
    }

    public getDateOfBirth(): Date {
        return this.dateOfBirth;
    }

    public setDateOfBirth(dateOfBirth: Date): Date {
        return this.dateOfBirth = dateOfBirth;
    }

    public getFavouriteColour(): string {
        return this.favouriteColour;
    }

    public setFavouriteColour(favouriteColour: string): string {
        return this.favouriteColour = favouriteColour;
    }

    public getGender(): string {
        return this.gender;
    }

    public setGender(gender: string): string {
        return this.gender = gender;
    }

    public getNotes(): string {
        return this.notes;
    }

    public setNotes(notes: string): string {
        return this.notes = notes;
    }

    public printPersonData(): string {
        return `${this.getName()} ${this.getSurname()}.
         Fecha de nacimiento: ${this.getDateOfBirth().toLocaleDateString('es')}, edad: ${this.getAge()}.
         DNI: ${this.getDni()}, sexo: ${this.getGender()}, color favorito:  ${this.getFavouriteColour()}.
         Notas: ${this.getNotes()}`;
    }
}
