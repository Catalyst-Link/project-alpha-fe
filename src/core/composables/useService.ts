import type { InjectionToken } from 'tsyringe';
import { container } from '@/core/di/tsyringe';

export const useService = <T>(service: InjectionToken<T>) => container.resolve<T>(service);
