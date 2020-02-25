import { GameSavingLoader} from '../app';

it('works with resolves', () => {
  const newSave = new GameSavingLoader();
  expect.assertions(1);
  return expect(newSave.load()).resolves.toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});