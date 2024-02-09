export var dataMarque = [
  {
    id: 1,
    nom: "Toyota",
    lien: `${process.env.PUBLIC_URL}/images/marques/toyota.png`,
  },
  {
    id: 2,
    nom: "BMW",
    lien: `${process.env.PUBLIC_URL}/images/marques/bmw.png`,
  },
  {
    id: 3,
    nom: "Mercedes-Benz",
    lien: `${process.env.PUBLIC_URL}/images/marques/mercedes-benz.png`,
  },
  {
    id: 4,
    nom: "Honda",
    lien: `${process.env.PUBLIC_URL}/images/marques/honda.png`,
  },
  {
    id: 5,
    nom: "Ford",
    lien: `${process.env.PUBLIC_URL}/images/marques/ford.png`,
  },
  {
    id: 6,
    nom: "Audi",
    lien: `${process.env.PUBLIC_URL}/images/marques/audi.png`,
  },
  {
    id: 7,
    nom: "Chevrolet",
    lien: `${process.env.PUBLIC_URL}/images/marques/chev.png`,
  },
  {
    id: 8,
    nom: "Citroen",
    lien: `${process.env.PUBLIC_URL}/images/marques/citr.png`,
  },
  {
    id: 9,
    nom: "Great Wall",
    lien: `${process.env.PUBLIC_URL}/images/marques/great.png`,
  },
  {
    id: 10,
    nom: "Kia",
    lien: `${process.env.PUBLIC_URL}/images/marques/kia.png`,
  },
  {
    id: 11,
    nom: "Nissan",
    lien: `${process.env.PUBLIC_URL}/images/marques/niss.png`,
  },
  {
    id: 12,
    nom: "Opel",
    lien: `${process.env.PUBLIC_URL}/images/marques/opel.png`,
  },
  {
    id: 13,
    nom: "Peugeot",
    lien: `${process.env.PUBLIC_URL}/images/marques/peu.png`,
  },
  {
    id: 14,
    nom: "Chevrolet",
    lien: `${process.env.PUBLIC_URL}/images/marques/chev.png`,
  },
  {
    id: 15,
    nom: "Porshe",
    lien: `${process.env.PUBLIC_URL}/images/marques/porshe.png`,
  },
  {
    id: 16,
    nom: "Renault",
    lien: `${process.env.PUBLIC_URL}/images/marques/ren.png`,
  },
  {
    id: 17,
    nom: "Seat",
    lien: `${process.env.PUBLIC_URL}/images/marques/seat.png`,
  },
  {
    id: 18,
    nom: "Subaru",
    lien: `${process.env.PUBLIC_URL}/images/marques/sub.png`,
  },
  {
    id: 19,
    nom: "Suzuki",
    lien: `${process.env.PUBLIC_URL}/images/marques/suz.png`,
  },
  {
    id: 20,
    nom: "wolkswagen",
    lien: `${process.env.PUBLIC_URL}/images/marques/w.png`,
  },
  {
    id: 21,
    nom: "Volvo",
    lien: `${process.env.PUBLIC_URL}/images/marques/volvo.png`,
  },
];

export var dataClassementsAnnonces = [
  {
    id: 1,
    utilisateur: {
      nom: "John",
    },
    modele: {
      nom: "Toyota Corolla",
      marque: {
        nom: "Toyota",
      },
      categorie: {
        nom: "Compacte",
      },
    },
    moteur: {
      nom: "Moteur 2 temps",
    },
    vitesse: {
      nom: "Manuelle",
    },
    energie: {
      nom: "Essence",
    },
    description: "Voiture en bon état",
    prix: 100000000,
    dateAnnonce: "2024-01-01",
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce1.png` },
    ],
    count: "12.7K",
  },
  {
    id: 2,
    utilisateur: {
      nom: "Jane",
    },
    modele: {
      nom: "BMW Serie 3",
      marque: {
        nom: "BMW",
      },
      categorie: {
        nom: "Berline",
      },
    },
    moteur: {
      nom: "Moteur 2 temps",
    },
    vitesse: {
      nom: "Manuelle",
    },
    energie: {
      nom: "Essence",
    },
    description: "Voiture en bon état",
    prix: 150000000,
    dateAnnonce: "2024-01-02",
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce2.png` },
    ],
    count: "8.9K",
  },
  {
    id: 3,
    utilisateur: {
      nom: "Jack",
    },
    modele: {
      nom: "Mercedes Classe C",
      marque: {
        nom: "Mercedes-Benz",
      },
      categorie: {
        nom: "Berline",
      },
    },
    moteur: {
      nom: "Moteur 2 temps",
    },
    vitesse: {
      nom: "Manuelle",
    },
    energie: {
      nom: "Essence",
    },
    description: "Voiture en bon état",
    prix: 250000000,
    dateAnnonce: "2024-01-03",
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce3.png` },
    ],
    count: "5.7K",
  },
];

export var dataCategorie = [
  {
    id: 1,
    nom: "Compacte",
  },
  {
    id: 2,
    nom: "Berline",
  },
  {
    id: 3,
    nom: "SUV",
  },
  {
    id: 4,
    nom: "Coupé",
  },
  {
    id: 5,
    nom: "Monospace",
  },
];

export var dataAnnonce = [
  {
    id: 1,
    utilisateur: {
      nom: "John",
    },
    modele: {
      nom: "Toyota Corolla",
      marque: {
        nom: "Toyota",
      },
      categorie: {
        nom: "Compacte",
      },
    },
    moteur: {
      nom: "Moteur 2 temps",
    },
    vitesse: {
      nom: "Manuelle",
    },
    energie: {
      nom: "Essence",
    },
    description: "Voiture en bon état",
    prix: 10000000,
    dateAnnonce: "2021-09-01",
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce1.png` },
    ],
    count: "5.7K",
  },
  {
    id: 2,
    utilisateur: {
      nom: "Jane",
    },
    modele: {
      nom: "BMW Serie 3",
      marque: {
        nom: "BMW",
      },
      categorie: {
        nom: "Berline",
      },
    },
    moteur: {
      nom: "Moteur 2 temps",
    },
    vitesse: {
      nom: "Manuelle",
    },
    energie: {
      nom: "Essence",
    },
    description: "Voiture en bon état",
    prix: 15000000,
    dateAnnonce: "2021-09-02",
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce2.png` },
    ],
    count: "1K",
  },
  {
    id: 3,
    utilisateur: {
      nom: "Jack",
    },
    modele: {
      nom: "Mercedes Classe C",
      marque: {
        nom: "Mercedes-Benz",
      },
      categorie: {
        nom: "Berline",
      },
    },
    moteur: {
      nom: "Moteur 2 temps",
    },
    vitesse: {
      nom: "Manuelle",
    },
    energie: {
      nom: "Essence",
    },
    description: "Voiture en bon état",
    prix: 250000000,
    dateAnnonce: "2021-09-03",
    dateValidation: "2021-09-03",
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce3.png` },
    ],
    count: "103",
  },
  {
    id: 4,
    utilisateur: {
      nom: "Jill",
    },
    modele: {
      nom: "Honda Civic",
      marque: {
        nom: "Honda",
      },
      categorie: {
        nom: "Compacte",
      },
    },
    moteur: {
      nom: "Moteur 2 temps",
    },
    vitesse: {
      nom: "Manuelle",
    },
    energie: {
      nom: "Essence",
    },
    description: "Voiture en bon état",
    prix: 200000000,
    dateAnnonce: "2021-09-04",
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce4.png` },
    ],
    count: "1.5K",
  },
  {
    id: 5,
    utilisateur: {
      nom: "James",
    },
    modele: {
      nom: "Ford Focus",
      marque: {
        nom: "Ford",
      },
      categorie: {
        nom: "Compacte",
      },
    },
    moteur: {
      nom: "Moteur 2 temps",
    },
    vitesse: {
      nom: "Manuelle",
    },
    energie: {
      nom: "Essence",
    },
    description: "Voiture en bon état",
    prix: 100000000,
    dateAnnonce: "2021-09-05",
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce5.png` },
    ],
    count: "405",
  },
];

export var dataProfil = {
  id: 1,
  nom: "Toky",
  email: "toky@email.com",
  telephone: "0340596000",
  date: "2004-12-14",
  genre: "Homme",
  fcm: null,
  etat: 0,
};
