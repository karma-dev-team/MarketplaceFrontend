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
import { UserAnalyticsSchema } from '../models';
/**
 * AnalyticsApi - axios parameter creator
 * @export
 */
export const AnalyticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiAnalyticsUserUserIdAnalyticsGet: async (userId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            if (userId === null || userId === undefined) {
                throw new RequiredError('userId','Required parameter userId was null or undefined when calling apiAnalyticsUserUserIdAnalyticsGet.');
            }
            const localVarPath = `/api/analytics/user/{userId}/analytics`
                .replace(`{${"userId"}}`, encodeURIComponent(String(userId)));
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
    }
};

/**
 * AnalyticsApi - functional programming interface
 * @export
 */
export const AnalyticsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiAnalyticsUserUserIdAnalyticsGet(userId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<UserAnalyticsSchema>>> {
            const localVarAxiosArgs = await AnalyticsApiAxiosParamCreator(configuration).apiAnalyticsUserUserIdAnalyticsGet(userId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AnalyticsApi - factory interface
 * @export
 */
export const AnalyticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} userId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiAnalyticsUserUserIdAnalyticsGet(userId: string, options?: AxiosRequestConfig): Promise<AxiosResponse<UserAnalyticsSchema>> {
            return AnalyticsApiFp(configuration).apiAnalyticsUserUserIdAnalyticsGet(userId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AnalyticsApi - object-oriented interface
 * @export
 * @class AnalyticsApi
 * @extends {BaseAPI}
 */
export class AnalyticsApi extends BaseAPI {
    /**
     * 
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    public async apiAnalyticsUserUserIdAnalyticsGet(userId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<UserAnalyticsSchema>> {
        return AnalyticsApiFp(this.configuration).apiAnalyticsUserUserIdAnalyticsGet(userId, options).then((request) => request(this.axios, this.basePath));
    }
}