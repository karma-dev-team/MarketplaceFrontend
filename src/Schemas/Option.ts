import { OptionTypes } from "src/Schemas/Enums";

export interface OptionScheme { 
    id: string, 
    group: string 
    label: string 
    type: OptionTypes
    value: string 
    field: string 
    sequence: number
    valueRangeMin?: number
    valueRangeMax?: number
} 


export interface OptionType {
    value: string;
    label: string;
    icon?: string | undefined; 
}
