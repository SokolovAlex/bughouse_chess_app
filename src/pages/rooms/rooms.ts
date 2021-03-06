import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/do';

import { AppState } from '../../store/reducers';
import * as Selectors from '../../store/selectors/rooms';
import { ChangeState, SaveRoom, FetchRooms, DeleteRoom } from '../../store/actions/rooms';
import { RoomSocketService } from '../../services/room.socket.service';

import { PageStates } from '../../models/Enums';
import { Room } from '../../models/Room';

@Component({
    selector: 'rooms',
    templateUrl: 'rooms.html'
})
export class RoomsPage implements OnInit {
    state$: Observable<PageStates>;

    rooms$: Observable<Room[]>;

    PageStates = PageStates;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private store: Store<AppState>,
        public socketService: RoomSocketService) {
        this.state$ = store.select(Selectors.getState);
        this.rooms$ = this.store.select(Selectors.getRooms);

        this.socketService.start();
    }

    ngOnInit() {
        this.store.dispatch(new FetchRooms());
    }

    onEdit(room: Room){
        this.store.dispatch(new ChangeState(PageStates.Edit));
    }

    onCreateNew(room: Room){
        this.store.dispatch(new SaveRoom(room));
    }

    onDelete(room: Room){
        this.store.dispatch(new DeleteRoom(room.id));
    }
}
