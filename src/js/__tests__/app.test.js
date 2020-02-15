import { newPerson } from '../app';

function checkArr () {

  const finnalArr = {name2: 'Misha', health2: 100, level2: 1, attack2: 40, defence2: 10};
  const {name2, health2, level2, attack2 , defence2} = finnalArr;

  const {name, health, level, attack , defence} = newPerson;
  if (name == name2, health == health2, level == level2, attack == attack2, defence == defence2) {
    return true
  } else {
    return false
  }
}

function checkArrLevelUp () {

  newPerson.levelUp()
  const { name, health, level, attack , defence} = newPerson;

  const finnalArrLevelUp = {name3: 'Misha', health3: 100, level3: 2, attack3: 48, defence3: 12};
  const {name3,health3, level3, attack3 , defence3} = finnalArrLevelUp;
  
  if (name == name3, health == health3, level == level3, attack == attack3, defence == defence3) {
    return true
  } else {
    return false
  }
}


test('checkArr', () => {
  let received = checkArr();
  let expected = true;
  expect(received).toBe(expected);
});

test('should introduce correct healthpoint', () => {
  let received = checkArrLevelUp();
  let expected = true;
  expect(received).toBe(expected);
});

