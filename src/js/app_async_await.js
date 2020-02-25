import { read } from './reader';
import { json } from './parser';


export class GameSavingLoader {

  load() {
    
    return new Promise((resolve,reject)=> {
      (async () => {
      const dataFromRead = await read();
      const parserJson = await json(dataFromRead);
      return resolve(parserJson);
    })();
    }) 
  }
}    
