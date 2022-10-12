import { Injectable } from '@morgan-stanley/needle';
import { Observable, Subject } from 'rxjs';

import { factoryLookup } from '../constants';
import { IFactory } from '../contracts';

@Injectable()
export class EfficiencyHelper {
    private _efficiencyLookup = new Map<IFactory, number>();

    private _updatesSubject = new Subject<IFactory>();

    public get efficiencyUpdates(): Observable<IFactory> {
        return this._updatesSubject.asObservable();
    }

    public get factories(): IFactory<any>[] {
        const factorySet = Object.values(factoryLookup).reduce((factories, materialFactories) => {
            materialFactories.forEach((factory) => factories.add(factory));
            return factories;
        }, new Set<IFactory<any>>());

        return Array.from(factorySet).sort((one, two) => one.name.localeCompare(two.name));
    }

    public getEfficiency(factory: IFactory<any>): number {
        return this._efficiencyLookup.get(factory) ?? 100;
    }

    public updateEfficiency(efficiency: number, factory: IFactory<any>): void {
        this._efficiencyLookup.set(factory, efficiency);

        this._updatesSubject.next(factory);
    }
}
