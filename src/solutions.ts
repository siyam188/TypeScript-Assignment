// Problem 1:
// function multiplyValue(value:number,multiplier?:number):number
// {
//     return value*(multiplier??2);
// }

// console.log(multiplyValue(10));
// console.log(multiplyValue(10,5));
// console.log(multiplyValue(7,0));

//  Problem 2:
function processInput(value:number|string|boolean){
    if(typeof value=="string")
    {
        return value.trim().toLowerCase();
    }

    if(typeof value=="number")
    {
        return value*10;
    }
    return value ? "Active" : "Inactive";
}
 
console.log(processInput(" TypeScript "));

console.log(processInput(7));

console.log(processInput(true));

console.log(processInput(false));


// Problem 3:
function formatCoordinate(coordinate:readonly[number,number,string]):string{
   const [latitude, longitude, locationName] = coordinate;
   return `Location: ${locationName} (${latitude}, ${longitude})`;
};
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));

console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

// Problem 4:
function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
}

// Problem 5:
interface Course{
    title:string;
    students:number;
    isPublished: boolean;

}
function  getPopularCourses( courses:Course[],  minStudents: number):Course[]{
    return courses.filter((course)=>
    {
        return course.isPublished==true&&course.students>=minStudents;
    })
}
const courses: Course[] = [
    {
        title: "TypeScript Mastery",students: 120, isPublished: true },
    {
        title: "Draft Course",students: 200, isPublished: false
    },
    {
        title: "Basic HTML",students: 45,isPublished: true
    },
    {
     title: "Next.js Pro", students: 85, isPublished: true }];

const result = getPopularCourses(courses, 80);

console.log(result);

//problem 6
function pluckValues<T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] {
    return items.map((item) => item[key]);
}

const users = [
    {
        id: 1,
        name: "Rakib",
        role: "Admin"
    },
    {
        id: 2,
        name: "Sadia",
        role: "Editor"
    },
    {
        id: 3,
        name: "Tariq",
        role: "Subscriber"
    }
];

const names = pluckValues(users, "name");
const ids = pluckValues(users, "id");
console.log(names);
console.log(ids);

// Problem 7:

class Employee{
    protected name:string;
    private baseSalary:number;
    constructor(name:string,baseSalary:number){
        this.name=name;
        this.baseSalary=baseSalary;
    }
    getDetails():string{
        return `Employee:${this.name},Base salary:${this.baseSalary}`;

    }

}

class Manager extends Employee{
    private department:string;
   constructor(name:string,basesalary:number,department:string){
    super(name,basesalary);
    this.department=department;
   } 
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const manager = new Manager("Alice", 50000, "Engineering");
console.log(manager.getDetails());
console.log(manager.getRoleInfo());

// Problem 8:
function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {

        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout(() => {
            resolve("Access Granted");
        }, 1000);
    });
}

async function testAge() {
    try {
        const result1 = await validateAgeAsync(20);
        console.log(result1);
    } catch (error) {
        console.log(error);
    }

    try {
        const result2 = await validateAgeAsync(15);
        console.log(result2);
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
testAge();