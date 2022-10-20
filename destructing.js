const duck = {
    name: 'duck',
    sound: 'quack',
  };
  
  /* 지시사항 1번 내용을 따라 코드를 수정해보세요. */
  const { name: duckName, sound: duckSound } = duck;
  
  console.log('name', duckName);
  console.log('sound', duckSound);
  
  const animals = ['duck', 'cat', 'bear'];
  
  /* 지시사항 2번 내용을 따라 코드를 수정해보세요. */
  const [first, second, third] = animals;
  
  console.log('first', first);
  console.log('second', second);
  console.log('third', third);
  