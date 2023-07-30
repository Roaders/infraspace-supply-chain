import { Injectable } from '@morgan-stanley/needle';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'dark' | 'light';

const themeStorageKey = `user_preference_app_theme`;

@Injectable()
export class ThemeService {
    private _theme: BehaviorSubject<Theme>;

    constructor() {
        let theme: Theme;
        const preference = window.localStorage.getItem(themeStorageKey);

        switch (preference) {
            case 'dark':
            case 'light':
                theme = preference;
                break;
            default:
                theme = 'light';
        }

        this._theme = new BehaviorSubject<Theme>(theme);
    }

    public get theme(): Theme {
        return this._theme.value;
    }

    public get $theme(): Observable<Theme> {
        return this._theme.asObservable();
    }

    public updateTheme(value: Theme): void {
        window.localStorage.setItem(themeStorageKey, value);
        this._theme.next(value);
    }
}
