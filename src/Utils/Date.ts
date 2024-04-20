import { format } from "date-fns";
import { ru } from "date-fns/locale";

export function formatDefault(date: Date | string | number | undefined | null, formatString?: string | undefined) { 
    return format(date || "", formatString || "eeee в HH:mm", { locale: ru })  // нахер i18n!!!  
}