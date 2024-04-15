import { Configuration } from "restclient";
import { AuthKey, baseDownloadPath, basePath } from "./Consts";


export let ApiConfig = new Configuration({ 
    basePath: basePath,
});  

export function setToken(token: string, setCookie: any) { 
    setAccessTokenForClient(token)
    setCookie(AuthKey, token, {
        path: '/', 
        maxAge: 3600 * 24 
    }); 
}

export function removeToken(removeCookie: any) { 
    ApiConfig.accessToken = undefined
    removeCookie(AuthKey)
}

export function setAccessTokenForClient(token: string) { 
    if (
        ApiConfig.accessToken === null ||
        ApiConfig.accessToken === undefined ||
        ApiConfig.accessToken !== token
    ) { 
        ApiConfig.accessToken = token 
    }
}

export function isAuthorized(cookies: any) { 
    const cookie = cookies.get(AuthKey); 
    if (cookie) { 
        setAccessTokenForClient(cookie)
        return true; 
    } else { 
        return false;
    }
}

export function asFileUrl(fileUrl: string | null | undefined) { 
    return baseDownloadPath + fileUrl
}
