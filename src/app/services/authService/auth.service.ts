import {Injectable} from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public isLoggedIn = false;

    constructor() {
    }

    serviceLogin(email: string, password: string): Promise<any> {
        this.isLoggedIn = true;
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }
    serviceSignup(email: string, password: string,username): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(email , password).then(() => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    this.isLoggedIn = true;
                }
            });
        });
    }
    signOut() {
        this.isLoggedIn = false;
        return firebase.auth().signOut();
    }
}

