export class Money {
  constructor(private value: Number, private currency_code: string = 'BRL') {}
  setValue(value: Number) {
    this.value = value;
  }
  getValue() {
    return `R$ ${this.value}`;
  }
}
export class ItemAmount extends Money {
  breakdown: {
    item_total: Money;
    shipping: Money;
    handling: Money;
    shipping_discount: Money;
    discount: Money;
  };
  constructor({
    item_total_value,
    shipping_value,
    handling_value,
    shipping_discount_value,
    discount_value,
  }: {
    item_total_value: number;
    shipping_value: number;
    handling_value: number;
    shipping_discount_value: number;
    discount_value: number;
  }) {
    const breakdown = {
      item_total: new Money(item_total_value),
      shipping: new Money(shipping_value),
      handling: new Money(handling_value),
      shipping_discount: new Money(shipping_discount_value),
      discount: new Money(discount_value),
    };
    const amountValue =
      item_total_value +
      shipping_value +
      handling_value -
      shipping_discount_value -
      discount_value;
    super(amountValue);
    this.breakdown = breakdown;
  }
}

export class Item {
  id: string;
  name: string;
  unit_amount: Money;
  description: string;
  img: string;
  category: string;
  quantity: number = 0;
  constructor({
    id,
    name,
    unit_amount,
    description,
    quantity,
    img,
    category,
  }: {
    id: string;
    name: string;
    unit_amount: Money;
    description: string;
    img: string;
    category: string;
    quantity: number;
  }) {
    this.id = id;
    this.name = name;
    this.unit_amount = unit_amount;
    this.description = description;
    this.img = img;
    this.category = category;
    this.quantity = quantity;
  }
}

export class Client {
  constructor(
    public id: string = '',
    public full_name: string = '',
    public email: string = '',
    public phone_number: string = '',
    public date_of_birth: Date | null = null,
    public addresses: Array<Address> = [new Address()]
  ) {}
}

export class Address {
  constructor(
    public address_line_1: string = '', // String number and street
    public address_line_2: string = '', // Suite or apartament
    public admin_area_1: string = '', // province or state (UK= A county.)
    public admin_area_2: string = '', // city, town or village
    public postal_code: string = '', // https://en.wikipedia.org/wiki/Postal_code#United_Kingdom
    public country_code: string = '' //The two-character ISO 3166-1 code that identifies the country or region.
  ) {}
}
