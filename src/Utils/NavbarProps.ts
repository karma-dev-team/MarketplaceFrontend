import { Dispatch } from "react"
import { UserEntity } from "restclient";

export type NavbarCategories = 'Товары' | 'Каталог игр' | 'Сообщение' | 'Покупки' | 'Продажи' | 'Аналитика' | 'Продать' | 'Управление' | ''; 

export type NavbarProps = { 
    setCategory: Dispatch<NavbarCategories>, 
    user?: UserEntity | undefined, 
}