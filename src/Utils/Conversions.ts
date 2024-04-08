import { UserRoles } from "./Enums"

export const RoleConversion: Map<string, string> = new Map<string, string>()

RoleConversion.set(UserRoles.Moderator, "Модератор")
RoleConversion.set(UserRoles.Admin, "Адмиг")
RoleConversion.set(UserRoles.Other, "")
RoleConversion.set(UserRoles.Seller, "Продовец")
RoleConversion.set(UserRoles.Superadmin, "Суперадмин")
RoleConversion.set(UserRoles.User, "Пользватель")
RoleConversion.set(UserRoles.Owner, "Владелец")
