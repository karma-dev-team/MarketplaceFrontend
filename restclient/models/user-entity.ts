/* tslint:disable */
/* eslint-disable */
/**
 * KarmaMarketplace
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { BaseEvent } from './base-event';
import { FileEntity } from './file-entity';
 /**
 * 
 *
 * @export
 * @interface UserEntity
 */
export interface UserEntity {

    /**
     * @type {string}
     * @memberof UserEntity
     */
    id?: string;

    /**
     * @type {Array<BaseEvent>}
     * @memberof UserEntity
     */
    domainEvents?: Array<BaseEvent> | null;

    /**
     * @type {string}
     * @memberof UserEntity
     */
    createdById?: string | null;

    /**
     * @type {Date}
     * @memberof UserEntity
     */
    createdAt?: Date | null;

    /**
     * @type {string}
     * @memberof UserEntity
     */
    lastModifiedById?: string | null;

    /**
     * @type {Date}
     * @memberof UserEntity
     */
    lastModifiedAt?: Date | null;

    /**
     * @type {string}
     * @memberof UserEntity
     */
    userName: string;

    /**
     * @type {string}
     * @memberof UserEntity
     */
    hashedPassword: string;

    /**
     * @type {string}
     * @memberof UserEntity
     */
    email: string;

    /**
     * @type {string}
     * @memberof UserEntity
     */
    role?: UserEntityRoleEnum;

    /**
     * @type {FileEntity}
     * @memberof UserEntity
     */
    image?: FileEntity;

    /**
     * @type {string}
     * @memberof UserEntity
     */
    telegramId?: string | null;

    /**
     * @type {boolean}
     * @memberof UserEntity
     */
    blocked?: boolean;
}

/**
 * @export
 * @enum {string}
 */
export enum UserEntityRoleEnum {
    Other = 'Other',
    User = 'User',
    Seller = 'Seller',
    Moderator = 'Moderator',
    Admin = 'Admin',
    Owner = 'Owner',
    SuperAdmin = 'SuperAdmin'
}
