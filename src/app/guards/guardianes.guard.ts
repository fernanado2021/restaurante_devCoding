import { CanActivateFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('admin')=='true'){
    return true
  }else{
  return false;
  }
};
export const meseroGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token')=='true'){
    return true;
  }else{
  return false;
  }
};
