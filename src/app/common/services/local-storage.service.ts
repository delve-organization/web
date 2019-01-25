import {Injectable} from '@angular/core';
import {StorageKey} from '../types/storage.types';

@Injectable({providedIn: 'root'})
export class LocalStorageService {

    public setItem(key: StorageKey, value: string): void {
        localStorage.setItem(key, value);
    }

    public getItem(key: StorageKey): string | null {
        return localStorage.getItem(key);
    }

    public removeItem(key: StorageKey): void {
        localStorage.removeItem(key);
    }

    public clear(): void {
        localStorage.clear();
    }
}
