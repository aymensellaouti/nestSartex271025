import { v4 as uuidv4 } from 'uuid';
import { TOKEN_PROVIDERS } from '../../config/token-provider.config';
export const UUID_PROVIDER = {
    provide: TOKEN_PROVIDERS.uuid,
    useValue: uuidv4
}