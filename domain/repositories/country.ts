import {ICountry} from "../models/country";
import { readFileSync } from 'fs';
import { join } from 'path';

export interface ICountryRepository {
    Get: (id: number) => ICountry | null | undefined
    Search: (name: string) => ICountry // might need to be paginated or filtered
}

export default class CountryRepository implements ICountryRepository {
    private readonly data: string

    constructor() {
        const filePath = join(__dirname, '..', '..', 'public', 'data', 'countries.json');
        this.data = readFileSync(filePath, 'utf8');
    }

    Get(id: number): ICountry {
        const countries: ICountry[] = JSON.parse(this.data);
        return countries.find(country => country.id === id);
    }

    Search(name: string): ICountry {
        const countries: ICountry[] = JSON.parse(this.data);

        return countries.find(country => country.name.toLowerCase() === name.toLowerCase());
    }
}