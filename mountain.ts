interface Mountain {
    name: string;
    height: number; 
}

const mountain1: Mountain = {name: 'Kilimanjaro', height: 19341};
const mountain2: Mountain = {name: 'Everest', height: 29029};
const mountain3: Mountain = {name: 'Denali', height: 20310};

const mountains: Mountain[] = [mountain1, mountain2, mountain3];

function findNameOfTallestMountain (mountains:Mountain[]){

    let tallestMountain: Mountain = { name: '', height: 0};
    for (let i = 0; i < mountains.length; i++) {
        if (mountains[i].height > tallestMountain.height) {
            tallestMountain = mountains[i];
        }
    
    
    }

    return tallestMountain;

}



let nameOfTallestMountain = findNameOfTallestMountain(mountains);
console.log(`The tallest mountain: ${findNameOfTallestMountain}`);


interface Product {
    name: string;
    price: number; 
}



const product1: Product = { name: 'Green Tea', price: 5}
const product2: Product = { name:'Jam Jar Wine', price: 9}
const product3: Product = { name:'Spinach Dip', price: 5}

const products: Product[] = [product1, product2, product3];

function calcAverageProductPrice (products:Product[]){

    let sumProducts = 0;
    let avgProducts = 0;
    for (let i = 0; i < products.length; i++) {
        sumProducts += products[i].price
    }
    avgProducts =  sumProducts / products.length;
    return avgProducts;

}

calcAverageProductPrice(products);
console.log(`The average price is ${calcAverageProductPrice}`);


interface InventoryItem extends Product {
    quantity: number;
}

const inventory1: InventoryItem = {name: 'motor', price: 10.00, quantity: 10};
const inventory2: InventoryItem = {name: 'sensor', price: 12.50, quantity: 4};
const inventory3: InventoryItem = {name: 'LED', price: 1.00, quantity: 20};

const inventory: InventoryItem[] = [inventory1, inventory2, inventory3];


function calcInventoryValue (inventory: InventoryItem[]){

    let sumInventory = 0;
    for (let i = 0; i < inventory.length; i++) {
        sumInventory += inventory[i].price * inventory[i].quantity
    }
    return sumInventory;

}

calcInventoryValue(inventory);
console.log(`The total value of all products are ${calcInventoryValue}`);







