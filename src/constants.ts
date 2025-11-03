import { version } from '../package.json';

export const HOST = process.env.NEXT_PUBLIC_HOST ?? '';

export const VERSION = version ?? '0.0.0';

export const NAME = process.env.NEXT_PUBLIC_NAME ?? '';

export const DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION ?? '';
