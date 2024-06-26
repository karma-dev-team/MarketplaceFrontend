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
import { CategoryEntity } from './category-entity';
import { FileEntity } from './file-entity';
 /**
 * 
 *
 * @export
 * @interface GameEntity
 */
export interface GameEntity {

    /**
     * @type {string}
     * @memberof GameEntity
     */
    id: string;

    /**
     * @type {Array<BaseEvent>}
     * @memberof GameEntity
     */
    domainEvents?: Array<BaseEvent> | null;

    /**
     * @type {string}
     * @memberof GameEntity
     */
    createdById?: string | null;

    /**
     * @type {Date}
     * @memberof GameEntity
     */
    createdAt?: Date | null;

    /**
     * @type {string}
     * @memberof GameEntity
     */
    lastModifiedById?: string | null;

    /**
     * @type {Date}
     * @memberof GameEntity
     */
    lastModifiedAt?: Date | null;

    /**
     * @type {string}
     * @memberof GameEntity
     */
    name: string;

    /**
     * @type {string}
     * @memberof GameEntity
     */
    slug: string;

    /**
     * @type {string}
     * @memberof GameEntity
     */
    description: string;

    /**
     * @type {string}
     * @memberof GameEntity
     */
    type: GameEntityTypeEnum;

    /**
     * @type {string}
     * @memberof GameEntity
     */
    tags?: string | null;

    /**
     * @type {string}
     * @memberof GameEntity
     */
    logoID?: string | null;

    /**
     * @type {FileEntity}
     * @memberof GameEntity
     */
    logo: FileEntity;

    /**
     * @type {Array<CategoryEntity>}
     * @memberof GameEntity
     */
    categories: Array<CategoryEntity>;

    /**
     * @type {string}
     * @memberof GameEntity
     */
    bannerID?: string | null;

    /**
     * @type {FileEntity}
     * @memberof GameEntity
     */
    banner?: FileEntity;
}

/**
 * @export
 * @enum {string}
 */
export enum GameEntityTypeEnum {
    Game = 'Game',
    Application = 'Application'
}

