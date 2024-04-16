import { UserEntityRoleEnum } from "restclient"

export const RoleConversion: Map<string, string> = new Map<string, string>()

RoleConversion.set(UserEntityRoleEnum.Moderator, "Модератор")
RoleConversion.set(UserEntityRoleEnum.Admin, "Админ")
RoleConversion.set(UserEntityRoleEnum.Other, "Особая")
RoleConversion.set(UserEntityRoleEnum.Seller, "Продовец")
RoleConversion.set(UserEntityRoleEnum.SuperAdmin, "Суперадмин")
RoleConversion.set(UserEntityRoleEnum.User, "Пользватель")
RoleConversion.set(UserEntityRoleEnum.Owner, "Владелец")
