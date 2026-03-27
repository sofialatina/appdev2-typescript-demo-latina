let hobbies = ["Reading Manhwa or Manga", "Gaming"];

// hobbies.push(10)

// let userList: (string | number)[];
let userList: Array<string | number>;

userList = ["Shofi", "Shobe11", 4783];

// console.log(userList)

let user: {
    name: string;
    age: number;
    hobbies: Array<string>;
    role: {
        description: string;
        id: number;
    };
} = {
    name: "Shofi",
    age: 21,
    hobbies: ["Reading Manhwa or Manga", "Gaming"],
    role: {
        description: 'Echo Remnant Keeper',
        id: 4
    }
};

// Must not null or undefined
let val: {} = "Shofi Latina";

// Flexible Object - Record Type
let data: Record<string, number | string>;

data = {
    id: 4,
    name: 'Shofi'
    // isPartTimeInstructor: true
};

console.log("Hobbies:", hobbies);
console.log("User List:", userList);
console.log("User:", user);
console.log("Value:", val);
console.log("Data:", data);