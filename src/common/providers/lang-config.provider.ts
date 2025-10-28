import { TOKEN_PROVIDERS } from "../../config/token-provider.config";

export const LANG_PROVIDER = // Wafart dépendance jdida
    {
        // Chesm el plat
        provide: TOKEN_PROVIDERS.langConfig,
        // Kifech n7adhrou
        useValue: {lang: 'ar', langAbrev: 'ar_TN'}
    };