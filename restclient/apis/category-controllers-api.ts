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
import { CategoryEntity } from '../models';
import { CreateCategoryDto } from '../models';
import { UpdateCategoryDto } from '../models';
/**
 * CategoryControllersApi - axios parameter creator
 * @export
 */
export const CategoryControllersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} categoryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCategoryCategoryIdDelete: async (categoryId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryId' is not null or undefined
            if (categoryId === null || categoryId === undefined) {
                throw new RequiredError('categoryId','Required parameter categoryId was null or undefined when calling apiCategoryCategoryIdDelete.');
            }
            const localVarPath = `/api/category/{categoryId}`
                .replace(`{${"categoryId"}}`, encodeURIComponent(String(categoryId)));
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
         * @param {string} categoryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCategoryCategoryIdGet: async (categoryId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryId' is not null or undefined
            if (categoryId === null || categoryId === undefined) {
                throw new RequiredError('categoryId','Required parameter categoryId was null or undefined when calling apiCategoryCategoryIdGet.');
            }
            const localVarPath = `/api/category/{categoryId}`
                .replace(`{${"categoryId"}}`, encodeURIComponent(String(categoryId)));
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
         * @param {string} categoryId 
         * @param {UpdateCategoryDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCategoryCategoryIdPatch: async (categoryId: string, body?: UpdateCategoryDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'categoryId' is not null or undefined
            if (categoryId === null || categoryId === undefined) {
                throw new RequiredError('categoryId','Required parameter categoryId was null or undefined when calling apiCategoryCategoryIdPatch.');
            }
            const localVarPath = `/api/category/{categoryId}`
                .replace(`{${"categoryId"}}`, encodeURIComponent(String(categoryId)));
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
        /**
         * 
         * @param {string} [gameId] 
         * @param {string} [gameName] 
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCategoryGet: async (gameId?: string, gameName?: string, name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/category`;
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

            if (gameId !== undefined) {
                localVarQueryParameter['GameId'] = gameId;
            }

            if (gameName !== undefined) {
                localVarQueryParameter['GameName'] = gameName;
            }

            if (name !== undefined) {
                localVarQueryParameter['Name'] = name;
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
         * @param {CreateCategoryDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiCategoryPost: async (body?: CreateCategoryDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/category`;
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
    }
};

/**
 * CategoryControllersApi - functional programming interface
 * @export
 */
export const CategoryControllersApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} categoryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryCategoryIdDelete(categoryId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CategoryEntity>>> {
            const localVarAxiosArgs = await CategoryControllersApiAxiosParamCreator(configuration).apiCategoryCategoryIdDelete(categoryId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} categoryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryCategoryIdGet(categoryId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CategoryEntity>>> {
            const localVarAxiosArgs = await CategoryControllersApiAxiosParamCreator(configuration).apiCategoryCategoryIdGet(categoryId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} categoryId 
         * @param {UpdateCategoryDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryCategoryIdPatch(categoryId: string, body?: UpdateCategoryDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CategoryEntity>>> {
            const localVarAxiosArgs = await CategoryControllersApiAxiosParamCreator(configuration).apiCategoryCategoryIdPatch(categoryId, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} [gameId] 
         * @param {string} [gameName] 
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryGet(gameId?: string, gameName?: string, name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<CategoryEntity>>>> {
            const localVarAxiosArgs = await CategoryControllersApiAxiosParamCreator(configuration).apiCategoryGet(gameId, gameName, name, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {CreateCategoryDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryPost(body?: CreateCategoryDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CategoryEntity>>> {
            const localVarAxiosArgs = await CategoryControllersApiAxiosParamCreator(configuration).apiCategoryPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CategoryControllersApi - factory interface
 * @export
 */
export const CategoryControllersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} categoryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryCategoryIdDelete(categoryId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CategoryEntity>> {
            return CategoryControllersApiFp(configuration).apiCategoryCategoryIdDelete(categoryId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} categoryId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryCategoryIdGet(categoryId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<CategoryEntity>> {
            return CategoryControllersApiFp(configuration).apiCategoryCategoryIdGet(categoryId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} categoryId 
         * @param {UpdateCategoryDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryCategoryIdPatch(categoryId: string, body?: UpdateCategoryDto, options?: AxiosRequestConfig): Promise<AxiosResponse<CategoryEntity>> {
            return CategoryControllersApiFp(configuration).apiCategoryCategoryIdPatch(categoryId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} [gameId] 
         * @param {string} [gameName] 
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryGet(gameId?: string, gameName?: string, name?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<CategoryEntity>>> {
            return CategoryControllersApiFp(configuration).apiCategoryGet(gameId, gameName, name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateCategoryDto} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiCategoryPost(body?: CreateCategoryDto, options?: AxiosRequestConfig): Promise<AxiosResponse<CategoryEntity>> {
            return CategoryControllersApiFp(configuration).apiCategoryPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CategoryControllersApi - object-oriented interface
 * @export
 * @class CategoryControllersApi
 * @extends {BaseAPI}
 */
export class CategoryControllersApi extends BaseAPI {
    /**
     * 
     * @param {string} categoryId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllersApi
     */
    public async apiCategoryCategoryIdDelete(categoryId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CategoryEntity>> {
        return CategoryControllersApiFp(this.configuration).apiCategoryCategoryIdDelete(categoryId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} categoryId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllersApi
     */
    public async apiCategoryCategoryIdGet(categoryId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<CategoryEntity>> {
        return CategoryControllersApiFp(this.configuration).apiCategoryCategoryIdGet(categoryId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} categoryId 
     * @param {UpdateCategoryDto} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllersApi
     */
    public async apiCategoryCategoryIdPatch(categoryId: string, body?: UpdateCategoryDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<CategoryEntity>> {
        return CategoryControllersApiFp(this.configuration).apiCategoryCategoryIdPatch(categoryId, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} [gameId] 
     * @param {string} [gameName] 
     * @param {string} [name] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllersApi
     */
    public async apiCategoryGet(gameId?: string, gameName?: string, name?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<CategoryEntity>>> {
        return CategoryControllersApiFp(this.configuration).apiCategoryGet(gameId, gameName, name, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {CreateCategoryDto} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryControllersApi
     */
    public async apiCategoryPost(body?: CreateCategoryDto, options?: AxiosRequestConfig) : Promise<AxiosResponse<CategoryEntity>> {
        return CategoryControllersApiFp(this.configuration).apiCategoryPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}