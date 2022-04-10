client1 = {
  fullName: "Ivanov Ivan Ivanovich",
  clientLevel: "basik",
  money: 100000,
};
client2 = {
  fullName: "Petrov Petr Petrovich",
  clientLevel: "pro",
  money: 100000,
};
client3 = {
  fullName: "Antonov Anton Antonovich",
  clientLevel: "platinum",
  money: 100000,
};
bank = {
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

const {
  clientLevels: {
    basik: { discount: level1 },
    pro: { discount: level2 },
    platinum: { discount: level3 },
  },
} = bank;

let map = new Map();

map.set(client1.clientLevel, level1);
map.set(client2.clientLevel, level2);
map.set(client3.clientLevel, level3);

function priceDiscount(client, price) {
  if (map.get(client.clientLevel) !== undefined && client.money > price) {
    let priceDisc = price - (map.get(client.clientLevel) / 100) * price;
    client.money -= priceDisc;
    return priceDisc;
  } else if (map.get(client.clientLevel) === undefined && client.money > price) {
    client.money -= price;
    return price;
  } else if (map.get(client.clientLevel) === undefined) {
    throw new Error(`не хватает денег до покупки ${price - client.money}`);
  } else {
    throw new Error(`не хватает денег до покупки с учетом скидки ${
        price - (map.get(client.clientLevel) / 100) * price - client.money
      }`);
  }
}
