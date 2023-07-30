import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendInformationService<T> {

  default: string;
  data: Array<BehaviorSubject<T>> = [];
  subscriptions: Array<{key: string, sub: Subscription}>;

  constructor() {
    this.default = 'default';
    this.subscriptions = [];
  }

   /**
     *
     * @param data Informción a Enviar
     * @param key Clave de Acceso al Observador
     */
   sendData(data: T, key: string = this.default): void {
    let _key: any = key;
    if (!this.data[_key]) {
        this.getData(key);
    }
    this.data[_key].next(data);
}

/**
 * envia null al observador
 * @param key Clave de Acceso al Observador
 */
clearData(key: string = this.default): void {
    let _key: any = key;
    let _null: any = null;
    if (!this.data[_key]) {
        this.data[_key] = new BehaviorSubject<T>(_null);
        return;
    }
    this.data[_key].next(_null);
}

/**
 * subscribción al observador y los datos que fluyan por el mismo
 * @param key Clave de Acceso al Observador
 */
getData(key: string = this.default): Observable<T> {
    let _key: any = key;
    if (!this.data[_key]) {
        let _null: any = null;
        this.data[_key] = new BehaviorSubject<T>(_null);
    }
    return this.data[_key].asObservable();
}




  


  /**
   * Cancela la subscripción
   * @param observador subscripcion
   */
  unSubscribe(observador: Subscription): void {
    observador.unsubscribe();
  }
}