// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "Monica",
    gender: "Female", 
    age: 17, 
    email: "monica@dingdong.com", 
    favoriteColor: ["Yellow", "Pink", "White", "Purple"], 
    isHavePet: true, 
    education: [
        { name: "SD 01", city: "Jakarta", graduate: 2016 },
        { name: "SMP 02", city: "Jakarta", graduate: 2019 },
        { name: "SMA 03", city: "Tangerang" }
    ], 
    favoriteRestaurant: ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]
};

const secondUser = {
    name: "Wendy",
    gender: "Male", 
    age: 23, 
    email: "wendy@dingdong.com", 
    favoriteColor: ["Blue", "Black", "Grey"], 
    isHavePet: false, 
    education: [
        { name: "SD 02", city: "Jakarta", graduate: 2010 },
        { name: "SMP 03", city: "Bogor", graduate: 2013 },
        { name: "SMA 01", city: "Surabaya", graduate: 2016 },
        { name: "Universitas Maju", city: "Tangerang" }
    ],
    favoriteRestaurant: ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]
};

// TODO: Masukkan hasil akhir dari kedua user di sini

// firstUser handler
const mapRestaurant1 = new Map();
firstUser.favoriteRestaurant.forEach(firstItem => {
    mapRestaurant1.set(firstItem, firstItem);
});
firstUser.favoriteRestaurant = mapRestaurant1.values();

const mapColor1 = new Map();
firstUser.favoriteColor.forEach(firstItem => {
    mapColor1.set(firstItem, firstItem);
});
firstUser.favoriteColor = mapColor1.values();
// end of firstUser handler

// secondUser handler
const mapRestaurant2 = new Map();
secondUser.favoriteRestaurant.forEach(secondItem => {
    mapRestaurant2.set(secondItem, secondItem);
})
secondUser.favoriteRestaurant = mapRestaurant2.values();

const mapColor2 = new Map();
secondUser.favoriteColor.forEach(firstItem => {
    mapColor2.set(firstItem, firstItem);
});
secondUser.favoriteColor = mapColor2.values();
// end of secondUser handler

const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};