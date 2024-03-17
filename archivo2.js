//tarea 2
//--------------------------------Eliminar


db.users.find({ nombres: /^A/ })
db.users.insertOne({
    nombres: "Aedro",
    apellidos: "Gonzales",
    correo: "ejemplo@correo.com",
    ciudad: "London",
    país: "Estados Unidos",
    salario: 0,
    edad: 55,
    altura: 1.85,
    peso: 300
})
//punto1
db.users.deleteMany({
    salario: {$lt : 2000}
})

//punto2
db.users.deleteMany({
    edad:{$lt : 25}
})


//punto3
db.users.deleteMany({
    ciudad:"Paris"
})

//punto4
db.users.deleteMany({
    peso:{$gt : 180}
})

//punto5
db.users.deleteMany({
    altura : { $lt :160}
})

//punto6
db.users.deleteMany({
    $and:[
        {nombres : "Jhon"},
        {apellidos  : "Doe"}
    ]
})
//punto7
db.users.deleteMany({ correo: /@riwi\.com$/ })


//punto8
db.users.deleteMany({
    correo :{ $exists : false}
})

//punto 9
db.users.deleteMany({
    ciudad : "Tokio"
})

//punto10
db.users.deleteMany({
    edad : {$lt : 18}
})

//punto11
db.users.deleteMany({
    salario : 0
})

//punto12
db.users.deleteMany({
    $and: [
        {ciudad : "New York"},
        {salario: {$gt : 5000}}
    ]
})

//punto13

db.users.deleteMany({ correo: /spam$/ })

//punto14
db.users.deleteMany({
    $and:[
        {ciudad:"Bello"},
        {edad : {$gt: 50}}
    ]
})

//punto15
db.user.deleteMany({
    apellidos : "Gonzales"
})

//punto16
db.user.deleteMany({
    edad:{$gt : 70}
})


//punto17
db.user.deleteMany({
    $and:[
        {país : "Canadá"},
        {salario : {$lt : 4000}}
    ]
})

//punto18

db.users.deleteMany({
    salario :{$gt : 1000 , $lt :2000}
})

//punto19
db.user.deleteMany({
    edad : 30
})

//punto20
db.user.deleteMany({
    altura:{$gt : 190}
})

//------------------update---

//punto1
db.users.updateMany(
    {},
    { $mul: { salario: 1.1 } }
)

//punto2
db.users.updateMany(
    { ciudad: "New York" },
    { $set: { ciudad: "Los Ángeles" } }
)

//punto3
db.users.updateOne(
    { $and:[
        { nombres: "Juan" },
        { apellidos: "Perez" }
    ] },
    { $set: { correo: "nuevo@correo.com" } }
)


//punto4
db.users.updateOne({
    correo : "ejemplo@correo.com"
}, {$set :{ edad : 35}})

//punto5
db.users.updateMany({país : "Mexico"},{$set : { país : "Canadá"}})  

//punto6
db.users.updateMany({}, { $inc: { altura: 5 } })

//punto7
db.users.updateOne({apellidos : "Gonzales"}, {$set : {correo : "otro@ejemplo.com"}})

//punto8 
db.users.updateOne({nombres : "Maria"},{$set : { peso : 130}})

//punto9
db.users.updateMany(
    {país : "Estados Unidos"},
    { $mul: { salario: 1.15 } }
)

//punto10
db.users.updateOne({ nombres :"Pedro"},{$set : { correo : "nuevo_correo@riwi.co"}})

//punto11
db.users.updateMany({edad : {$lt : 30}}, {$set : {edad :30}})

//punto12
db.users.updateMany({salario : {$lt : 3000}}, { $mul: { salario: 1.20 } })

//punto13
db.users.updateMany({ciudad :"Bogotá"},{$set : {ciudad : "Medellín"}})

//punto14
db.users.updateMany({salario : {$gt : 5000}},{$set : {país : "Australia"}})

//punto15
db.users.updateMany({edad :{$gt : 50}},{$set : {edad: 5 }})

//punto16
db.users.updateMany({peso : {$gt : 200}},{$set :{ peso :180}})

//punto17
db.users.updateMany({ciudad : "London"}, { $mul: { salario: 1.25 }})

//punto18
db.users.updateMany({salario : {$gt : 3000}}, {$set : {apellidos : "Smith"}})

//punto19
db.users.updateMany(
    { nombres: /^A/ },
    { $set: { correo: "nuevo@riwi.es" } }
)

//punto20
db.users.updateMany({altura : {$lt : 160}},{$set : {ciudad : "Paris"}})