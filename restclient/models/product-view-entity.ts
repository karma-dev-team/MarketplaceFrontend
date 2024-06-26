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
 * @interface ProductViewEntity
 */
export interface ProductViewEntity {

    /**
     * @type {string}
     * @memberof ProductViewEntity
     */
    id: string;

    /**
     * @type {Array<BaseEvent>}
     * @memberof ProductViewEntity
     */
    domainEvents?: Array<BaseEvent> | null;

    /**
     * @type {string}
     * @memberof ProductViewEntity
     */
    createdById?: string | null;

    /**
     * @type {Date}
     * @memberof ProductViewEntity
     */
    createdAt?: Date | null;

    /**
     * @type {string}
     * @memberof ProductViewEntity
     */
    lastModifiedById?: string | null;

    /**
     * @type {Date}
     * @memberof ProductViewEntity
     */
    lastModifiedAt?: Date | null;

    /**
     * @type {string}
     * @memberof ProductViewEntity
     */
    productId?: string;

    /**
     * @type {string}
     * @memberof ProductViewEntity
     */
    userId?: string;

    /**
     * @type {string}
     * @memberof ProductViewEntity
     */
    info?: string | null;
}
