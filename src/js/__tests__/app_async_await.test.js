import { GameSavingLoader } from '../app_async_await';

it('works with async/await', async () => {
  const newSave = new GameSavingLoader();
  expect.assertions(1);
  const data = await newSave.load();
  expect(data).toEqual('{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}');
});