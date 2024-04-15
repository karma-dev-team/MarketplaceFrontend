import { Dispatch } from "react"

export type NavbarCategories = 'Товары' | 'Каталог игр' | 'Сообщение' | 'Покупки' | 'Продажи' | 'Аналитика' | 'Продать' | 'Управление' | ''; 

export type NavbarProps = { 
    setCategory: Dispatch<NavbarCategories>
}