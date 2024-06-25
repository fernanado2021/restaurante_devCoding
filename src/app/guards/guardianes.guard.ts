import { CanActivateFn, CanMatchFn } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('tipo')=='1'){
    return true
  }else{
  return false;
  }
};

export const meseroGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('tipo')=='2'){
    return true
  }else{
  return false;
  }
};

export const susucripcionGuard: CanMatchFn = (route, state) => {
  if (localStorage.getItem('token') == 'true') {
    return false;
  } else {
    return true;
  }};