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

 /**
 * 
 *
 * @export
 * @interface Money
 */
export interface Money {

    /**
     * @type {number}
     * @memberof Money
     */
    amount?: number;

    /**
     * @type {string}
     * @memberof Money
     */
    currency?: MoneyCurrencyEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum MoneyCurrencyEnum {
    RussianRuble = 'RussianRuble',
    Dollar = 'Dollar'
}

