'use strict'

const client1 = {
  fullName: "Ivanov Ivan Ivanovich",
  clientLevel: "basik",
  money: 100000,
  bankName: "Sib",
};
const client2 = {
  fullName: "Petrov Petr Petrovich",
  clientLevel: "medium",
  money: 100000,
  bankName: "Ukr",
};
const client3 = {
  fullName: "Antonov Anton Antonovich",
  clientLevel: "premium",
  money: 100000,
  bankName: "Allo",
};
const bank1 = {
  bankName: "Sib",
  clientLevels: {
    basik: {
      discount: 10,
    },
    pro: {
      discount: 20,
    },
    platinum: {
      discount: 30,
    },
  },
};
const bank2 = {
  bankName: "Ukr",
  clientLevels: {
    minimum: {
      discount: 5,
    },
    medium: {
      discount: 15,
    },
    maximum: {
      discount: 25,
    },
  },
};
const bank3 = {
  bankName: "Allo",
  clientLevels: {
    start: {
      discount: 12,
    },
    large: {
      discount: 18,
    },
    premium: {
      discount: 22,
    },
  },
};

const {
  clientLevels: {
    basik: { discount: level1 },
    pro: { discount: level2 },
    platinum: { discount: level3 },
  },
} = bank1;
const {
  clientLevels: {
    minimum: { discount: rate1 },
    medium: { discount: rate2 },
    maximum: { discount: rate3 },
  },
} = bank2;
const {
  clientLevels: {
    start: { discount: tariffPlan1 },
    large: { discount: tariffPlan2 },
    premium: { discount: tariffPlan3 },
  },
} = bank3;

let map = new Map();
map.set('basik',level1)
map.set('pro',level2)
map.set('platinum',level3)

let map2 = new Map();
map2.set('minimum', rate2);
map2.set('medium', rate2);
map2.set('maximum', rate2);
let map3 = new Map();
map3.set('start', tariffPlan3);
map3.set('large', tariffPlan3);
map3.set('premium', tariffPlan3);

let bank = new Map();
bank.set('Sib', map);
bank.set('Ukr', map2);
bank.set('Allo', map3);

function priceDiscount(client, price) {
  const bankMap = bank.get(client.bankName);
if (bankMap === undefined) {
  throw new Error('поддельная карта');
  } else {
    const discount = bankMap.get(client.clientLevel);
    const priceWithDiscount = 
    discount === undefined ? price : price - (discount/100)*price;
    if(priceWithDiscount > client.money) {
      throw new RangeError(
        `не хватает денег до покупки ${priceWithDiscount - client.money}`
      );
    }else {
      client.money -= priceWithDiscount;
      return priceWithDiscount;
    }
  }

}
//   if (bank.has(client.bankName) === false) {
//     throw new Error("поддельная карта");
//   } else if (bankMap.get(client.clientLevel) !== undefined && client.money > price
//   ) {
//     let priceDisc = price - (bankMap.get(client.clientLevel) / 100) * price;
//     client.money -= priceDisc;
//     return priceDisc;
//   } else if (
//     bankMap.get(client.clientLevel) === undefined && client.money > price) {
//     client.money -= price;
//     return price;
//   } else if (bankMap.get(client.clientLevel) === undefined) {
//     throw new RangeError(`не хватает денег до покупки ${price - client.money}`);
//   } else {throw new RangeError(
//       `не хватает денег до покупки с учетом скидки ${
//         price - (bankMap.get(client.clientLevel) / 100) * price - client.money
//       }`
//     );
//   }
// }
