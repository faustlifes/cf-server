import {Observable} from "rxjs";


export interface IGet<T> {
	get(): Observable<T[]>;
}

export interface IUpdate<T> {
	update(item: T): Observable<T>;
}

export interface IInsert<T> {
	insert(item: T): Observable<T>;
}

export interface IDelete<T> {
	delete(id: string);
}