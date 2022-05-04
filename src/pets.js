import connection from "./db.js";

// const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species,gender, is_hyopallergenic, is_kid_friendly)
// VALUES (?, ?, ?, ?, ?, ?, ?)`;

// const input = ["Xave", 8, "Yorkie", "Dog", "male", true, true];

// const [rows, fields] = await connection.promise().query(insertQuery, input);

// console.log("This is all my rows", rows);

export const createPet = async (pet) => {
  const name = pet.name,
    age = pet.age,
    breed = pet.breed,
    species = pet.species,
    gender = pet.gender,
    is_kid_friendly = pet.is_kid_friendly,
    is_hyopallergenic = pet.is_hyopallergenic;

  const insertQuery = `INSERT INTO Pets (pet_name, age, breed, species,gender, is_hyopallergenic, is_kid_friendly)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  const input = [
    name,
    age,
    breed,
    species,
    gender,
    is_kid_friendly,
    is_hyopallergenic,
  ];

  try {
    const [results] = await connection.query(insertQuery, input);
    return results;
  } catch (error) {
    console.error(error);
  }
};
// const newPet = {
//   name: "Fluffy",
//   age: 8,
//   breed: "poodle",
//   species: "dog",
//   gender: "female",
//   is_kid_friendly: true,
//   is_hyopallergenic: false,
// };

export const getPets = async () => {
  const selectQuery = "SELECT * FROM pets";
  try {
    const [results] = await connection.query(selectQuery);
    return results;
  } catch (error) {
    console.log(error);
  }
};
// console.log("this is the new pet", await createPet(newPet));

// console.log("all the pets", await getPets());

// connection.end();
