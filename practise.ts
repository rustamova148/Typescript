type ad = {
    ad:string
}

type soyad = {
    soyad:string
}

type Fullname = ad & soyad;

const nezrinhaqda: Fullname = {
    ad:"nezrin",
    soyad:"rustemova"
}

type Konum = {
    lat:number,
    long:number
}

type Loc = {
    x:number,
    y:number
}

let koordinatlar: Konum | Loc = {
lat:5676,
long:7687
}

koordinatlar = {
    x:6,
    y:9
}

function printAge(age: number | string ): void {
    console.log(`Yasiniz ${age} qederdir.`);
}

function calculateTax(price: number | string, tax: number): number {
    if(typeof price === "string"){
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}

const stuff: (number | string)[]  = [1,2,3,"hjk"];
// const stuff2: number[] | string[] = [1,3,4,"dg","dgg"];

const coords: (Konum | Loc)[] = [{x:4, y:5},{lat:2323,long:2789}];
coords.push({x:2,y:7});
console.log(coords);

interface Productt {
    name:string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Productt  = {
    name: "Blue suede shoes",
    price:100,
    applyDiscount(discount) {
        const newPrice = this.price * (1-discount);
        this.price = newPrice;
        return this.price;
    }
}

console.log(shoes.applyDiscount(0.4));

interface Dog {
    name: string;
    age:number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF! WOOF!";
    }
}

interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF! WOOF!";
    },
    job: "guide dog"
}

interface Human {
    name:string;
}

interface Employee {
    readonly id:number;
    email:string;
}

interface Engineer extends Human,Employee {
    level:string;
    languages: string[]
}

const pierre: Engineer = {
    name:"Pierre",
    id:7898,
    email:"pierre8@gmail.com",
    level: "senior",
    languages: ["JS","Python"]
}

//tuple

const arr: [number,string,boolean] = [2,"sfsf",true];

type HTTPResponse = [number,string];

// const goodResponse: HTTPResponse = [200,'OK'];
// const badGetaway: HTTPResponse = [400, 'bgaway'];
// const error: HTTPResponse = [404,'Not Found'];

const responses: HTTPResponse[] = [
    [200,'OK'],
    [400, 'bgaway'],
    [404,'Not Found']
]

enum OrderStatus {
    PENDING = 0,
    SHIPPED,
    DELIVERED, 
    RETURNED
}

const isDelivered = (status: OrderStatus): boolean => {
return status === OrderStatus.DELIVERED;
}

console.log(isDelivered(OrderStatus.DELIVERED));

enum Arrowkeys {
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT"
}

const printLetters = (word?: string) => {
    if(word){
    for(let char of word){
        console.log(char);
    }
    }else{
        console.log('YOU DID NOT PASS IN A WORD');
    }
}

interface Moviee {
    title:string,
    duration:number
}

interface TVshow {
    title:string,
    numEpisodes:number,
    episodeDuration:number
}

const getRuntime = (media: Moviee | TVshow )  => {
if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
}else {
    return media.duration;
}
}

console.log(getRuntime({title: "Amadeus", duration: 140}));
console.log(getRuntime({title: "Spongebob", numEpisodes: 50, episodeDuration: 2}));

interface Cat {
    name: string,
    numLives: number
}

interface Dog {
    name: string,
    breed: string
}

function isCat(animal: Cat | Dog): animal is Cat {
return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)){
     return "meow";
    }else{
        return "woof!"
    }
}

//discriminated unions

interface Rooster {
    name: string,
    weight: number,
    age: number,
    kind: "rooster"
}

interface Cow {
    name: string,
    weight: number,
    age: number,
    kind: "cow"
}

interface Pig {
    name: string,
    weight: number,
    age: number,
    kind: "pig"
}

interface Sheep {
    name: string,
    weight: number,
    age: number,
    kind: "sheep"
}

type FarmAnimal = Rooster | Cow | Pig | Sheep;

function getAnimalSound(animal: FarmAnimal): string {
    switch(animal.kind) {
        case "rooster":
        return "cockadoodledoo!";
        case "cow":
        return "moo!";
        case "pig":
        return "oink!";
        case "sheep":
        return "baaa!"
        default:
        const _exhaustiveCheck: never = animal;
        return _exhaustiveCheck;
    }
}

const stevie: Rooster = {
    name: "stevie",
    weight: 2,
    age: 1.5,
    kind: "rooster"
}

console.log(getAnimalSound(stevie));


function identity<T>(item: T): T {
    return item;
}

identity<string>("hello");
identity<number>(6);

const usernameEl = document.querySelector<HTMLInputElement>("#username")!;
const button = document.querySelector<HTMLButtonElement>(".btn")!;

function getRandomElement<T>(list: T[]): T {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}

getRandomElement<number>([1,2,3,4,5]);
getRandomElement<string>(["a","b","c","d"]);

function merge<T extends object, U extends object>(object1: T,object2: U) {
    return {
        ...object1,
        ...object2
    };
};

merge<{name: string},{pets: string[]}> (
    {name: "colt"},{pets:["blue","elton"]}
); //1

console.log(merge({name: "colt"},{pets:["blue","elton"]})); //2

const comboObj = merge({name: "colt"},{pets:["blue","elton"]});
console.log(comboObj); //3



