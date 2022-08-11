const sayName=(name="Abdel")=>{
    return "Hi, my name is "+name
}

console.log(sayName("Rasul"))
console.log(sayName())


// es6
let cubedNumber=number=>number**3

// es5
function cubedNumber2(number){
    return number**3
}

console.log(cubedNumber(5))
console.log(cubedNumber2(5))


const sayName2=(name="Tahasin")=>{
    let message=`Hello, my name is ${name}`
    return message
}

console.log(sayName2())


let alvin={
    name:'Alvin',
    age:34,
    hasGlasses:true,
    favAnimes:["Mushoku Tensei"],
}

// es5
console.log(alvin.name)
console.log(alvin.age)
console.log(alvin.hasGlasses)

// es6
let{name,age,hasGlasses}=alvin
alvin.name="Tahasin"
console.log(name,age,hasGlasses)
console.log(alvin)


let coordinates=[55,-67,44]
console.log(coordinates[0])
console.log(coordinates[1])
console.log(coordinates[2])

const [lat,long,alt]=coordinates

console.log(lat,long,alt)


let medidataStudents=["Tamer","Rasul","Aunirbhan","Tasmit"]
let mlbStudents=["Uday","Owasimul","Shishir","Alan"]

let students=[...medidataStudents,...mlbStudents]
console.log(students)


let abdel={
    name:"Abdel",
    age:22,
    nationality:"Egyptian",
    hasGlasses:false
}

let abdel2={
    hasGlasses:true,
    role:"Lead Instructor",
}

let abdelUpdated={
    ...abdel,
    ...abdel2
}

console.log(abdelUpdated)


let students2=["Allen","MD","Tasmit","Christian","Michael"]

students2.forEach((student,index)=>{
    let message=`${student} is at index ${index}`
    console.log(message)
})


let numbers=[2,3,4,5]
let cubedNumbers=numbers.map((number,index)=>{
    return number**3
})

console.log(cubedNumbers)


// TBD


let staff=[
    {name:"Kenneth",age:17},
    {name:"Abdel",age:22},
    {name:"Deyby",age:19},
    {name:"Danielle",age:22},
    {name:"Kris",age:17},
]

let youngStaff=staff.filter((person)=>person.age<20)
console.log(youngStaff)


let numbers2=[3,6,9]
let cubedEvenNumbers=numbers2
    .map((number)=>number**3)
    .filter((number)=>number%2===0)
console.log(cubedEvenNumbers)


const getStudents=async()=>{
    const proxy = "https://nextjs-cors-anywhere.vercel.app/api?endpoint=";
    const api = "https://mlb-md-firebase-demo.vercel.app/api/students";

    const response=await fetch(proxy+api)
    const data=await response.json()
    
    console.log(data)
}

getStudents()