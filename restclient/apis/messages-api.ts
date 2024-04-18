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
import { MessageEntity } from '../models';
import { SendMessageScheme } from '../models';
/**
 * MessagesApi - axios parameter creator
 * @export
 */
export const MessagesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} chatId 
         * @param {number} [start] 
         * @param {number} [ends] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMessagesChatChatIdMessagesGet: async (chatId: string, start?: number, ends?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatId' is not null or undefined
            if (chatId === null || chatId === undefined) {
                throw new RequiredError('chatId','Required parameter chatId was null or undefined when calling apiMessagesChatChatIdMessagesGet.');
            }
            const localVarPath = `/api/messages/chat/{chatId}/messages`
                .replace(`{${"chatId"}}`, encodeURIComponent(String(chatId)));
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
         * @param {string} chatId 
         * @param {SendMessageScheme} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMessagesChatChatIdSendPost: async (chatId: string, body?: SendMessageScheme, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'chatId' is not null or undefined
            if (chatId === null || chatId === undefined) {
                throw new RequiredError('chatId','Required parameter chatId was null or undefined when calling apiMessagesChatChatIdSendPost.');
            }
            const localVarPath = `/api/messages/chat/{chatId}/send`
                .replace(`{${"chatId"}}`, encodeURIComponent(String(chatId)));
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiMessagesSubscribePost: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/messages/subscribe`;
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
 * MessagesApi - functional programming interface
 * @export
 */
export const MessagesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} chatId 
         * @param {number} [start] 
         * @param {number} [ends] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMessagesChatChatIdMessagesGet(chatId: string, start?: number, ends?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<MessageEntity>>>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).apiMessagesChatChatIdMessagesGet(chatId, start, ends, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {string} chatId 
         * @param {SendMessageScheme} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMessagesChatChatIdSendPost(chatId: string, body?: SendMessageScheme, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<MessageEntity>>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).apiMessagesChatChatIdSendPost(chatId, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMessagesSubscribePost(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await MessagesApiAxiosParamCreator(configuration).apiMessagesSubscribePost(options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MessagesApi - factory interface
 * @export
 */
export const MessagesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @param {string} chatId 
         * @param {number} [start] 
         * @param {number} [ends] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMessagesChatChatIdMessagesGet(chatId: string, start?: number, ends?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<MessageEntity>>> {
            return MessagesApiFp(configuration).apiMessagesChatChatIdMessagesGet(chatId, start, ends, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} chatId 
         * @param {SendMessageScheme} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMessagesChatChatIdSendPost(chatId: string, body?: SendMessageScheme, options?: AxiosRequestConfig): Promise<AxiosResponse<MessageEntity>> {
            return MessagesApiFp(configuration).apiMessagesChatChatIdSendPost(chatId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiMessagesSubscribePost(options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return MessagesApiFp(configuration).apiMessagesSubscribePost(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MessagesApi - object-oriented interface
 * @export
 * @class MessagesApi
 * @extends {BaseAPI}
 */
export class MessagesApi extends BaseAPI {
    /**
     * 
     * @param {string} chatId 
     * @param {number} [start] 
     * @param {number} [ends] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public async apiMessagesChatChatIdMessagesGet(chatId: string, start?: number, ends?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<MessageEntity>>> {
        return MessagesApiFp(this.configuration).apiMessagesChatChatIdMessagesGet(chatId, start, ends, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {string} chatId 
     * @param {SendMessageScheme} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public async apiMessagesChatChatIdSendPost(chatId: string, body?: SendMessageScheme, options?: AxiosRequestConfig) : Promise<AxiosResponse<MessageEntity>> {
        return MessagesApiFp(this.configuration).apiMessagesChatChatIdSendPost(chatId, body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MessagesApi
     */
    public async apiMessagesSubscribePost(options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return MessagesApiFp(this.configuration).apiMessagesSubscribePost(options).then((request) => request(this.axios, this.basePath));
    }
}
