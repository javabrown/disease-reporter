import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class CommonUtils {
  constructor() {}

  public addToLocalStore(name, value) {
    if (localStorage) {
      localStorage.setItem(name, value);
    }
  }

  public getFromLocalStore(name) {
    return localStorage.getItem(name);
  }

  public deleteFromLocalStore(name) {
    return localStorage.removeItem(name);
  }
}
