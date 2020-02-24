import { read } from './reader';
import { json } from './parser';


class GameSavingLoader {

  load() {
    
    (async () => {
      const dataFromRead = await read();
      const parserJson = await json(dataFromRead);
      return parserJson
    })();
  }
}    

 export const newSave = new GameSavingLoader();