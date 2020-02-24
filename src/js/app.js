import { read } from './reader';
import { json } from './parser';


class GameSavingLoader {

  load() {
  return new Promise((resolve, reject) => {
    read().then((dataFromRead) => {
     return json(dataFromRead);
    }).then((parserJson) => {
     resolve(parserJson);
    })
  })
  
  }
}  

 export const newSave = new GameSavingLoader();
