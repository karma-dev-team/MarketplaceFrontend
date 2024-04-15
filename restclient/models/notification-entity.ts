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
 /**
 * 
 *
 * @export
 * @interface NotificationEntity
 */
export interface NotificationEntity {

    /**
     * @type {string}
     * @memberof NotificationEntity
     */
    id?: string;

    /**
     * @type {Array<BaseEvent>}
     * @memberof NotificationEntity
     */
    domainEvents?: Array<BaseEvent> | null;

    /**
     * @type {string}
     * @memberof NotificationEntity
     */
    createdById?: string | null;

    /**
     * @type {Date}
     * @memberof NotificationEntity
     */
    createdAt?: Date | null;

    /**
     * @type {string}
     * @memberof NotificationEntity
     */
    lastModifiedById?: string | null;

    /**
     * @type {Date}
     * @memberof NotificationEntity
     */
    lastModifiedAt?: Date | null;

    /**
     * @type {string}
     * @memberof NotificationEntity
     */
    title: string;

    /**
     * @type {string}
     * @memberof NotificationEntity
     */
    text: string;

    /**
     * @type {string}
     * @memberof NotificationEntity
     */
    fromUserId?: string | null;

    /**
     * @type {string}
     * @memberof NotificationEntity
     */
    toUserId?: string;

    /**
     * @type {string}
     * @memberof NotificationEntity
     */
    type?: NotificationEntityTypeEnum;

    /**
     * @type {string}
     * @memberof NotificationEntity
     */
    data?: string | null;
}

/**
 * @export
 * @enum {string}
 */
export enum NotificationEntityTypeEnum {
    Other = 'Other',
    Purchase = 'Purchase',
    Buy = 'Buy',
    Wallet = 'Wallet',
    Withdraw = 'Withdraw',
    System = 'System'
}

