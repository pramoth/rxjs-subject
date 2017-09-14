let Rx = require('rxjs/Rx');
//source of event
// create Observable that fire 'Hello' once ( it will fire when subscribe() was call )
let observeable = Rx.Observable.of('Hello');

//Create subject act as proxy to distribute event across subscriber
let subject = new Rx.Subject();
//We add 4 Observer to  listen event from 'observeable'
subject.subscribe(e => console.log(`Observer 1 .next was call with value = ${e}`)) //e => console.log(e) is Observer who observe 'observeable'
subject.subscribe(e => console.log(`Observer 2 .next was call with value = ${e}`)) //e => console.log(e) is Observer who observe 'observeable'
subject.subscribe(e => console.log(`Observer 3 .next was call with value = ${e}`)) //e => console.log(e) is Observer who observe 'observeable'
subject.subscribe(e => console.log(`Observer 4 .next was call with value = ${e}`)) //e => console.log(e) is Observer who observe 'observeable'

//'observeable' will fire 'Hello' once when subscribe() call 
observeable.subscribe(data => subject.next(data)) //subject.next(data) will fire event on each Observer (4 Observer above)