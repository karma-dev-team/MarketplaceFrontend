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
import { Money } from './money';
import { ProductViewEntity } from './product-view-entity';
import { UserEntity } from './user-entity';
 /**
 * 
 *
 * @export
 * @interface ProductEntity
 */
export interface ProductEntity {

    /**
     * @type {string}
     * @memberof ProductEntity
     */
    id?: string;

    /**
     * @type {Array<BaseEvent>}
     * @memberof ProductEntity
     */
    domainEvents?: Array<BaseEvent> | null;

    /**
     * @type {string}
     * @memberof ProductEntity
     */
    createdById?: string | null;

    /**
     * @type {Date}
     * @memberof ProductEntity
     */
    createdAt?: Date | null;

    /**
     * @type {string}
     * @memberof ProductEntity
     */
    lastModifiedById?: string | null;

    /**
     * @type {Date}
     * @memberof ProductEntity
     */
    lastModifiedAt?: Date | null;

    /**
     * @type {UserEntity}
     * @memberof ProductEntity
     */
    createdBy?: UserEntity;

    /**
     * @type {CategoryEntity}
     * @memberof ProductEntity
     */
    category?: CategoryEntity;

    /**
     * @type {string}
     * @memberof ProductEntity
     */
    name: string;

    /**
     * @type {string}
     * @memberof ProductEntity
     */
    slug: string;

    /**
     * @type {Money}
     * @memberof ProductEntity
     */
    discountPrice?: Money;

    /**
     * @type {Money}
     * @memberof ProductEntity
     */
    basePrice?: Money;

    /**
     * @type {string}
     * @memberof ProductEntity
     */
    description?: string | null;

    /**
     * @type {string}
     * @memberof ProductEntity
     */
    status?: ProductEntityStatusEnum;

    /**
     * @type {UserEntity}
     * @memberof ProductEntity
     */
    buyerUser?: UserEntity;

    /**
     * @type {string}
     * @memberof ProductEntity
     */
    attributes?: string | null;

    /**
     * @type {Array<FileEntity>}
     * @memberof ProductEntity
     */
    images?: Array<FileEntity> | null;

    /**
     * @type {Array<ProductViewEntity>}
     * @memberof ProductEntity
     */
    productViews?: Array<ProductViewEntity> | null;

    /**
     * @type {Money}
     * @memberof ProductEntity
     */
    currentPrice?: Money;
}

/**
 * @export
 * @enum {string}
 */
export enum ProductEntityStatusEnum {
    Processing = 'Processing',
    Approved = 'Approved',
    Declined = 'Declined',
    Blocked = 'Blocked',
    Draft = 'Draft',
    Sold = 'Sold'
}

