CREATE TABLE `pets` (
  `petid` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `species` varchar(255) NOT NULL,
  `petname` varchar(255) NOT NULL,
  `age` int(255) NOT NULL,
  `favoritefood` varchar(255) NOT NULL
)

CREATE TABLE `pastnames` (
  `nameid` int PRIMARY KEY NOT NULL  AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `petid` int NOT NULL, 
  CONSTRAINT FK_PetNames FOREIGN KEY (petid)
  REFERENCES pets(petid)
)

-- limit to cat or dog as species
ALTER TABLE pets ADD CONSTRAINT 
my_constraint CHECK (species = 'cat' OR species = 'dog')

-- example queries

-- add cat named teenie
INSERT INTO pets (species, petname, age, favoritefood)
VALUES ("cat", "teenie", 3, "tacos")
-- add dog named nugget
INSERT INTO pets (species, petname, age, favoritefood)
VALUES ("dog", "nugget", 4, "kibble")

-- select all pets with name billy
SELECT * FROM `pets` WHERE petname = "billy"

-- select pet with petid of 1
SELECT * FROM `pastnames`, `pets` WHERE pets.petid = 1 AND pastnames.petid = 1


-- list names and the alternative names if id's match
SELECT pets.petname, pastnames.name
FROM pets
LEFT JOIN pastnames ON pets.petid=pastnames.petid;
