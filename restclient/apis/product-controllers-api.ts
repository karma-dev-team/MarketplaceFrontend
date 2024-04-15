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

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CreateProductDto } from '../models';
import { ProductEntity } from '../models';
import { UpdateProductDto } from '../models';
/**
 * ProductControllersApi - axios parameter creator
 * @export
 */
export const ProductControllersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [name] 
         * @param {string} [categoryId] 
         * @param {string} [gameId] 
         * @param {string} [status] 
         * @param {string} [userId] 
         * @param {number} [start] 
         * @param {number} [ends] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProductGet: async (name?: string, categoryId?: string, gameId?: string, status?: string, userId?: string, start?: number, ends?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/product`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (name !== undefined) {
                localVarQueryParameter['Name'] = name;
            }

            if (categoryId !== undefined) {
                localVarQueryParameter['CategoryId'] = categoryId;
            }

            if (gameId !== undefined) {
                localVarQueryParameter['GameId'] = gameId;
            }

            if (status !== undefined) {
                localVarQueryParameter['Status'] = status;
            }

            if (userId !== undefined) {
                localVarQueryParameter['UserId'] = userId;
            }

            if (start !== undefined) {
                localVarQueryParameter['Start'] = start;
            }

            if (ends !== undefined) {
                localVarQueryParameter['Ends'] = ends;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateProductDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProductPost: async (body?: CreateProductDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/product`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProductProductIdDelete: async (productId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            if (productId === null || productId === undefined) {
                throw new RequiredError('productId','Required parameter productId was null or undefined when calling apiProductProductIdDelete.');
            }
            const localVarPath = `/api/product/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProductProductIdGet: async (productId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            if (productId === null || productId === undefined) {
                throw new RequiredError('productId','Required parameter productId was null or undefined when calling apiProductProductIdGet.');
            }
            const localVarPath = `/api/product/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} productId 
         * @param {UpdateProductDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiProductProductIdPatch: async (productId: string, body?: UpdateProductDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'productId' is not null or undefined
            if (productId === null || productId === undefined) {
                throw new RequiredError('productId','Required parameter productId was null or undefined when calling apiProductProductIdPatch.');
            }
            const localVarPath = `/api/product/{productId}`
                .replace(`{${"productId"}}`, encodeURIComponent(String(productId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ProductControllersApi - functional programming interface
 * @export
 */
export const ProductControllersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} [name] 
         * @param {string} [categoryId] 
         * @param {string} [gameId] 
         * @param {string} [status] 
         * @param {string} [userId] 
         * @param {number} [start] 
         * @param {number} [ends] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductGet(name?: string, categoryId?: string, gameId?: string, status?: string, userId?: string, start?: number, ends?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<ProductEntity>>>> {
            const localVarAxiosArgs = await ProductControllersApiAxiosParamCreator(configuration).apiProductGet(name, categoryId, gameId, status, userId, start, ends, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CreateProductDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductPost(body?: CreateProductDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProductEntity>>> {
            const localVarAxiosArgs = await ProductControllersApiAxiosParamCreator(configuration).apiProductPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductProductIdDelete(productId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProductEntity>>> {
            const localVarAxiosArgs = await ProductControllersApiAxiosParamCreator(configuration).apiProductProductIdDelete(productId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductProductIdGet(productId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProductEntity>>> {
            const localVarAxiosArgs = await ProductControllersApiAxiosParamCreator(configuration).apiProductProductIdGet(productId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} productId 
         * @param {UpdateProductDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductProductIdPatch(productId: string, body?: UpdateProductDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ProductEntity>>> {
            const localVarAxiosArgs = await ProductControllersApiAxiosParamCreator(configuration).apiProductProductIdPatch(productId, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ProductControllersApi - factory interface
 * @export
 */
export const ProductControllersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} [name] 
         * @param {string} [categoryId] 
         * @param {string} [gameId] 
         * @param {string} [status] 
         * @param {string} [userId] 
         * @param {number} [start] 
         * @param {number} [ends] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductGet(name?: string, categoryId?: string, gameId?: string, status?: string, userId?: string, start?: number, ends?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<ProductEntity>>> {
            return ProductControllersApiFp(configuration).apiProductGet(name, categoryId, gameId, status, userId, start, ends, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateProductDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductPost(body?: CreateProductDto, options?: AxiosRequestConfig): Promise<AxiosResponse<ProductEntity>> {
            return ProductControllersApiFp(configuration).apiProductPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductProductIdDelete(productId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ProductEntity>> {
            return ProductControllersApiFp(configuration).apiProductProductIdDelete(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} productId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductProductIdGet(productId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<ProductEntity>> {
            return ProductControllersApiFp(configuration).apiProductProductIdGet(productId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} productId 
         * @param {UpdateProductDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiProductProductIdPatch(productId: string, body?: UpdateProductDto, options?: AxiosRequestConfig): Promise<AxiosResponse<ProductEntity>> {
            return ProductControllersApiFp(configuration).apiProductProductIdPatch(productId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ProductControllersApi - object-oriented interface
 * @export
 * @class ProductControllersApi
 * @extends {BaseAPI}
 */
export class ProductControllersApi extends BaseAPI {
    /**
     * 
     * @param {string} [name] 
     * @param {string} [categoryId] 
     * @param {string} [gameId] 
     * @param {string} [status] 
     * @param {string} [userId] 
     * @param {number} [start] 
     * @param {number} [ends] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllersApi
     */
    public async apiProductGet(name?: string, categoryId?: string, gameId?: string, status?: string, userId?: string, start?: number, ends?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<ProductEntity>>> {
        return ProductControllersApiFp(this.configuration).apiProductGet(name, categoryId, gameId, status, userId, start, ends, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CreateProductDto} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllersApi
     */
    public async apiProductPost(body?: CreateProductDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProductEntity>> {
        return ProductControllersApiFp(this.configuration).apiProductPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} productId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllersApi
     */
    public async apiProductProductIdDelete(productId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProductEntity>> {
        return ProductControllersApiFp(this.configuration).apiProductProductIdDelete(productId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} productId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllersApi
     */
    public async apiProductProductIdGet(productId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProductEntity>> {
        return ProductControllersApiFp(this.configuration).apiProductProductIdGet(productId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} productId 
     * @param {UpdateProductDto} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ProductControllersApi
     */
    public async apiProductProductIdPatch(productId: string, body?: UpdateProductDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<ProductEntity>> {
        return ProductControllersApiFp(this.configuration).apiProductProductIdPatch(productId, body, options).then((request) => request(this.axios, this.basePath));
    }
}
