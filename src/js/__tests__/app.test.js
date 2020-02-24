import { newSave } from '../app';

test('checkArr', () => {

  let received = newSave.load();
  let expected = '{"id":9,"created":1546300800,"userInfo":{"id":1,name":"Hitman","level":10,"points":2000}}';

  newSave.load().then((saving) => {
    received = saving
    expect(received).toBe(expected);

}, (error) => {
  console.log('ERORRR')
});
});