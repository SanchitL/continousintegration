const TeemoJS = require('teemojs');

const api = TeemoJS('RGAPI-5d1e0e71-8f70-43db-abeb-2a1deaa894a5');

let accountID;

api.get('na1', 'summoner.getBySummonerName', 'Doublelift')
  .then((data) => {
    accountID = data.accountId;
    // console.log(accountID);
  })
  .then(() => {
    api.get('na1', 'champion-masteries.getBySummonerId', accountID);
  });
