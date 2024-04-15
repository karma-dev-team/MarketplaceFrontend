import { OptionType } from "src/Schemas/Option"

export interface ConvertableOption { 
    id: string 
    name: string
}

export const convertObjectToOptions = (op: ConvertableOption[]): OptionType[] => { 
    var options: OptionType[] = []
    op.forEach((value) => { 
        options.push({ 
            label: value.name, 
            value: value.id
        })
    })

    return options
}