import { IParamsRym } from "../base";
import { ILocation } from "./shared.model";

export interface ICharacter {
    id:       number;
    name:     string;
    status:   string;
    species:  string;
    type:     string;
    gender:   string;
    origin:   ILocation;
    location: ILocation;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export interface IParamsCharacterRym extends IParamsRym {
    gender?: '' | 'female' | 'male' | 'genderless' | 'unknown'
    status?: '' | 'alive' | 'dead' | 'unknown'
}