import { Observable } from "rxjs";
import { IDelete, IGet, IInsert, IUpdate } from "./crud.interface";


export abstract class BaseRepository<T> implements IGet<T>, IInsert<T>, IUpdate<T>, IDelete<T> {
	get(): Observable<T[]> {
		return ;
	}
	insert(item: T): Observable<T> {
		return ;
	}
	update(item: T): Observable<T> {
		return ;
	}
	delete(id: string) {
		return;
	}
}