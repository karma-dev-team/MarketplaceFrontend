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

import { CreateOptionDto } from './create-option-dto';
 /**
 * 
 *
 * @export
 * @interface UpdateCategoryDto
 */
export interface UpdateCategoryDto {

    /**
     * @type {string}
     * @memberof UpdateCategoryDto
     */
    categoryId: string;

    /**
     * @type {string}
     * @memberof UpdateCategoryDto
     */
    name?: string | null;

    /**
     * @type {Array<CreateOptionDto>}
     * @memberof UpdateCategoryDto
     */
    options?: Array<CreateOptionDto> | null;
}
