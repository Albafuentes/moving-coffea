export enum Coffea {
  COFFEALARGE = "coffea large",
  COFFEAMILKYLARGE = "coffea milky large",
  COFFEAMIDDLE = "coffea middle",
  COFFEAMILKYMIDDLE = "coffea milky middle",
  COFFEASHORT = "coffea short",
  COFFEAMILKYSHORT = "coffea milky short",
}
export enum CoffeaMix {
  COFFEACARAMEL = "coffea caramel",
  COFFEACHOCOLATE = "coffea chocolate",
  COFFEASPICYCINAMON = "coffea spicy cinamon",
  MILKYCHAI = "milky chai",
  MILKYMACHA = "milky macha",
  MILKYCHOCOLATE = "milky chocolate",
}
export enum Desserts {
  CARROTSHOT = "carrot shot",
  APPLESHOT = "apple shot",
  ORANGESHOT = "orange shot",
  BANANASHOT = "banana shot",
  SEASONSHOT = "season shot",
}

export type Products = Coffea & CoffeaMix & Desserts;
