import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Billy',
  gender: 'male',
  age: 27,
  address: 'Guayaquil, Ecuador',
};
const client2 = {
  name: 'Melissa',
  gender: 'female',
  age: 20,
  address: 'Toronto, Canada',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    SlicePipe,
    JsonPipe,
    UpperCasePipe,
    KeyValuePipe,
    TitleCasePipe,
    AsyncPipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  // i18nSelect
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return;
    }

    this.client.set(client1);
  }

  // i18nPlural
  clientsMap = signal({
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos 1 cliente',
    other: 'tenemos # clientes',
  });

  clients = signal([
    'Joselyn',
    'Billy',
    'Melissa',
    'Romina',
    'Caroline',
    'Genesis',
    'Kirei',
    'Stefanie',
  ]);

  deleteClient() {
    this.clients.update((prev) => prev.slice(1));
  }

  //KeyValuePipe
  profile = {
    name: 'Billy',
    age: 26,
    address: ' Guayaquil, Ecuador'
  }

  // AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=>{
      // reject('Tenemos un error en la data')
      resolve('Tenemos data en la promesa');
      console.log('Promesa finalizada');
    }, 3500);
  })

  myObservableTimer = interval(2000).pipe(
    map( (value) => value + 1 ),
    tap( (value) => console.log('tap:', value) ),
  );
}
