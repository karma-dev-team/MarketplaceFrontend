import { FileEntity } from "restclient"
import { OptionType } from "src/Schemas/Option"

export interface ConvertableOption { 
    id: string 
    name: string, 
    logo?: FileEntity
}

export const convertObjectToOptions = (op: ConvertableOption[]): OptionType[] => { 
    var options: OptionType[] = []
    op.forEach((value) => { 
        options.push({ 
            label: value.name, 
            value: value.id, 
            icon: value.logo?.id, 
        })
    })

    return options
}