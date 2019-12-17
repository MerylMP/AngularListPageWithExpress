export class Person {
    private name: string;
    private surname: string;
    private age: number;
    private dni: string;
    private dateOfBirth: Date;
    private favouriteColor: string;
    private gender: string;
    private notes: string;


    constructor(name: string, surname: string, age: number, dni: string, dateOfBirth: Date,
                favouriteColor: string, gender: string, notes: string) {

        this.name = name;
        this.surname = surname;
        this.age = age;
        this.dni = dni;
        this.dateOfBirth = dateOfBirth;
        this.favouriteColor = favouriteColor;
        this.gender = gender;
        this.notes = notes;
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

    public getFavouriteColor(): string {
        return this.favouriteColor;
    }

    public setFavouriteColor(favouriteColor: string): string {
        return this.favouriteColor = favouriteColor;
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
         DNI: ${this.getDni()}, sexo: ${this.getGender()}, color favorito:  ${this.getFavouriteColor()}.
         Notas: ${this.getNotes()}`;
    }
}
