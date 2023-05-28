import { UserConfig } from 'src/app/interfaces/user-config';

export type UserConfigDto = Partial<Omit<UserConfig, '_id'>>;
