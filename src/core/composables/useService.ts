import type { InjectionToken } from 'tsyringe';
import { container } from 'tsyringe';

export const useService = <T>(service: InjectionToken<T>) => container.resolve<T>(service);
