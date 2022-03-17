import { productsURL } from '../lib';
const prefix = '🐉 ';
type productType = { id: number, name: string, icon?: string };

export default async function updateOutput(id: string = 'output') {
  const products = await getProducts();
  const output = document.querySelector(`#${id}`);
  const html = layoutProducts(products);

  if (output && html) {
    output.innerHTML = html;
  }
}

function layoutProducts(products: productType[]) {
  const items = products.map(({ id, name, icon }) => {
    const productHtml = `
    <span class="card-id">#${id}</span>
      <i class="card-icon ${icon} fa-lg"></i>
    <span class="card-name">${name}</span>
    `;
    const cardHtml = `
    <li>
        <div class="card">
            <div class="card-content">
                <div class="content">
                ${productHtml}
                </div>
            </div>
        </div>
    </li>
    `;
    return cardHtml;
  });
  let productsHtml = `<ul>${items.join('')}</ul>`;
  return productsHtml;
}

async function getProducts(): Promise<productType[]> {
  const response: Response = await fetch(productsURL);
  const products: productType[] = await response.json();
  return products;
}

//run our samples
runTheLearningSamples();
function runTheLearningSamples() {
  //hoisted
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }
  displayProductInfo(25, 'Hamburga');

  console.log(`${prefix} function declaration`);
  console.log(addNumbersDeclaration(7, 18));

  function addNumbersDeclaration(x: number, y: number) {
    const sum = x + y;
    return sum;
  }

  const addNumbersExpression = function (x: number, y: number): number {
    const sum = x + y;
    return sum;
  }

  console.log(`${prefix} function expression`);
  console.log(addNumbersExpression(7, 8));

  const sampleProducts = [
    {
      id: 10,
      name: 'Pizza slice',
      icon: 'fas fa-pizza-slice',
    },
    {
      id: 20,
      name: 'Ice cream',
      icon: 'fas fa-ice-cream',
    },
    {
      id: 30,
      name: 'Cheese',
      icon: 'fas fa-cheese',
    },
  ];

  function getProductNames(): string[] {
    return sampleProducts.map((p) => p.name);
  }

  console.log(`${prefix} return array`);
  console.log(getProductNames());

  function getProductById(id: number): productType | undefined {
    return sampleProducts.find(p => id === p.id);
  }

  console.log(`${prefix} return ProductType`);
  console.log(getProductById(10));

  function displayProducts(products: productType[]) {
    const productNames = products.map((p) => {//function (p){}
      const name = p.name.toLocaleLowerCase();
      return name;
    });
    const msg = `Sample products include: ${productNames.join(', ')}`;
    console.log(`${prefix} return void`);
    console.log(msg);
  }

  displayProducts(sampleProducts);

  const {floor,random} = Math;
  const getRandomInt = (max: number = 10) => floor(random() * max);

  function createProduct(name: string, icon?: string): productType {
    const id = getRandomInt();
    return {
      id,
      name,
      icon,
    };
  }

  console.log(`${prefix} optional parameters`);
  let pineapple = createProduct('pineapple', 'pine-apple.jpg');
  let mango = createProduct('mango');
  console.log(pineapple, mango);

  function createProductWithDefaults(name: string, icon: string = 'generic_fruit.jpg'): productType {
    const id = getRandomInt();
    return {
      id,
      name,
      icon,
    };
  }

  console.log(`${prefix} Default parameters`);
  pineapple = createProductWithDefaults('pineapple');
  mango = createProductWithDefaults('mango');
  console.log(pineapple, mango);

  function buildAddress(street: string, city: string, ...restOfAddress: string[]) {
    const address = `${street} ${city} ${restOfAddress.join(' ')}`;
    return address;
  }

  //rest parameters
  const someArea = buildAddress('Mahalle', 'Sokak', 'Apartma', 'Daire', 'Semt', 'Şehir');
  console.log(`${prefix} Rest parameters`);
  console.log(someArea);

  function displayProduct({id,name}: productType): void {
    console.log(`${prefix} Destructing parameters`);
    console.log(`Product id=${id} and name=${name}`);
  }
  const prod = getProductById(10);
  if(prod){
    displayProduct(prod);
  }
}