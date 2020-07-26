import {EventEmitter} from 'events'

const eventEmitter = new EventEmitter();

eventEmitter.on("TestEvent", obj =>{
    console.log(obj)
})

eventEmitter.on("TestEvent", () =>{
    console.log("ouvindo tambem ")
})

eventEmitter.emit("TestEvent", "ouvindo evento")