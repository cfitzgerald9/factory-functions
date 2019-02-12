const createDoctor = (name, specialty, address) =>({
    "name" : name,
    "specialty" : specialty,
    "address" : address
})
createDoctor("malcolm falcon", "feet", "5050 nest lane")
const BowWowKennels = [{
    name: "corki", breed: "corgi"
}]
const createPet = (dogName, breed) =>({
    "name": dogName, "breed": breed
})
var chewy = createPet("chewy", "chihuaha")
BowWowKennels.push(chewy)
console.log(BowWowKennels)
var oscar = createPet("oscar", "chonk")
BowWowKennels.push(oscar)
console.log(BowWowKennels)
// Practice: Music Row
// Your job is to sign each of these promising young music stars to the appropriate label.
// JumpStop Records works with Funk and Rap artists.
// Chatten Records works with Country and Bluegrass artists.
// Polar Records works with Pop artists.
// Create an array for each of these record labels.
const JumpStop = []
const Chatten = []
const Polar = []
// Create a factory function for each possible genre (e.g. createBluegrassArtist()). Then invoke the appropriate function for each of the following artists and place the resulting object in the corresponding label array.
const createArtist = (artistName, age, genre) =>({
    "name":artistName,
    "age":age,
    "genre":genre
    })
const pushToChatten = (artist)=>{
    Chatten.push(artist)
}
const pushToPolar = (artist) =>{
    Polar.push(artist)
}
const pushToJumpstop = (artist) =>{
    JumpStop.push(artist)
}
// Bruce Atikins is a Country artist and is 23 years old
var bruce = createArtist("bruce atikins", 23, "country")
pushToChatten(bruce)
// Jensen Brown is a Pop artist and is 20 years old
var jensen = createArtist("jensen brown", 20, "pop" )
pushToPolar(jensen)
// Dre Funkz is a Funk artist and is 25 years old
var dre = createArtist("dre funkz",25,"funk")
pushToJumpstop(dre)
// Dusta Grimes is a Rap artist and is 21 years old
var dusta = createArtist("dusta grimes", 21, "rap")
pushToJumpstop(dusta)
// Bartholomew Danielson is a Bluegrass artist and is 23 years old
var barty = createArtist("bartholomew danielson", 23, "bluegrass")
pushToChatten(barty)
// Avilee Dallas is a Country artist and is 19 years old
var avilee =  createArtist("avilee dallas", 19, "country")
pushToChatten(avilee)
// Austin Kinkaid is a Pop artist and is 22 years old
var austin = createArtist("austin kinkaid", 22 , "pop")
pushToPolar(austin)
// Loyoncé Branis is a Rap artist and is 27 years old
var loyoncé = createArtist ("loyoncé branis", 27, "rap")
pushToJumpstop(loyoncé)
console.log(Chatten, Polar, JumpStop)




