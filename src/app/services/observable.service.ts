import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ObservableService {

    data: Observable<any>;

    constructor() {
    }

    test() {
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(1);
            }, 5000);

            setTimeout(() => {
                observer.next(2);
            }, 10000);

            setTimeout(() => {
                observer.next(3);
            }, 15000);

            setTimeout(() => {
                observer.next({ name: 'Amitabh' });
            }, 20000);
        });

        return this.data;
    }

    /////////////////////
    // Lamda Expression //

    //1. Anonynymous function
    //f= function(){
    //some code
    //};

    //2. Lambda exaple 
    //(x,y) =>{
    //    a= x+5;
    //    b=y-10;

    // return a+b;
    //};

    //3. Lambda Parameterless
    //() =>{
    //    some code
    //};

    //4. Lambda single paramter
    //myparam => {
    //    some code
    //}

    //5. Lambda - Only one expression statement and it return 
    //param => expression;
}
