import { CanActivateFn } from '@angular/router';

export const guardianesGuard: CanActivateFn = (route, state) => {
  return true;
};
