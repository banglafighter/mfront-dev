import {ENV_KEY, envValue, type MConfig} from "mfront";

export default class AppConfig implements MConfig {
    apiBaseUrl: string = envValue(ENV_KEY.API_BASE_URL, "http://127.0.0.1:1530/assets")
}