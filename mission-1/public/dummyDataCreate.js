let email = [
  '@willie.tv',
  '@erik.us',
  '@jactinthe.info',
  '@Laisha@erik.us',
  '@willie.com',
  '@modesto.net',
  '@kellie.org',
  '@tia.me',
  '@silas.org',
  '@jon.com',
  '@judge.info',
];
let id = [
  'ElmoreProsacco',
  'Felicita',
  'Laisha',
  'Raleigh',
  'Leonor',
  'Leonor',
  'Merle',
  'JaclynKutch',
  'Daisha',
  'GeneKuvalis',
  'MikeFunk',
];

for (let i = 0; i < 10; i++) {
  let rand1 = parseInt(Math.random() * 10);
  let rand2 = parseInt(Math.random() * 10);
  console.log(`'${id[rand1]}${email[rand2]}',`);
}
