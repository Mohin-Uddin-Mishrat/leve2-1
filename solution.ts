// 1

function formatValue(value: string | number | boolean){
    if(typeof value == 'string'){
        return value.toUpperCase()
    }
    else if(typeof value === 'number'){
        return value *10
    }
    else{
        return !value
    }
}






// 2
function getLength(value: string | any[]): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}




// 3

class Person {
    name:string;
    age : number;
    constructor(name :string , age: number){
        this.name =name;
        this.age = age;
    }


    getDetails(){
        return `Name: ${this.name} , Age: ${this.age}`
    }
}




// 4


type item ={
    title : string ,
    rating : number
}


function filterByRating(value : item[]):item[]{
    return value.filter(item => item.rating >= 4 )
}







// 5

type Item ={
    id : number
    name : string ,
    email : string,
    isActive : boolean
}


function filterActiveUsers(value : Item[]):Item[]{
    return value.filter(Item => Item.isActive )
}






// 6

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}


function printBookDetails(myBook:Book){
  console.log(`Title: ${myBook.title}, Author:${myBook.author}, Published: ${myBook.publishedYear}, Available: ${myBook.isAvailable ? 'Yes' : 'No'}`)
}
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};


printBookDetails(myBook);





// 7

function getUniqueValues(array1: (string | number)[], array2: (string | number)[]): (string | number)[] {
    const uniqueMap = new Map<string | number, boolean>();


    for (let i = 0; i < array1.length; i++) {
        uniqueMap.set(array1[i], true);
    }


    for (let i = 0; i < array2.length; i++) {
        uniqueMap.set(array2[i], true);
    }
    return Array.from(uniqueMap.keys());
}








// 8

interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}


function calculateTotalPrice(products: Product[]): number {
    return products.reduce((acc, product) => {
        const discount = product.discount ?? 0;
        const total = (product.price * product.quantity) * (1 - discount / 100);
        return acc + total;
    }, 0);
}













