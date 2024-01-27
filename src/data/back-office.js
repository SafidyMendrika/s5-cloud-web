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

export var dataModele = [
  {
    id: 1,
    nom: "Toyota Corolla",
    marque: {
      id: 1,
      nom: "Toyota",
    },
    categorie: {
      id: 1,
      nom: "Compacte",
    },
  },
  {
    id: 2,
    nom: "BMW Serie 3",
    marque: {
      id: 2,
      nom: "BMW",
    },
    categorie: {
      id: 2,
      nom: "Berline",
    },
  },
  {
    id: 3,
    nom: "Mercedes Classe C",
    marque: {
      id: 3,
      nom: "Mercedes-Benz",
    },
    categorie: {
      id: 2,
      nom: "Berline",
    },
  },
  {
    id: 4,
    nom: "Honda Civic",
    marque: {
      id: 4,
      nom: "Honda",
    },
    categorie: {
      id: 1,
      nom: "Compacte",
    },
  },
  {
    id: 5,
    nom: "Ford Focus",
    marque: {
      id: 5,
      nom: "Ford",
    },
    categorie: {
      id: 1,
      nom: "Compacte",
    },
  },
];

export var dataMarque = [
  {
    id: 1,
    nom: "Toyota",
    lien: `${process.env.PUBLIC_URL}/images/marques/toyota.png`,
    nombreModele: 23,
  },
  {
    id: 2,
    nom: "BMW",
    lien: `${process.env.PUBLIC_URL}/images/marques/bmw.png`,
    nombreModele: 12,
  },
  {
    id: 3,
    nom: "Mercedes-Benz",
    lien: `${process.env.PUBLIC_URL}/images/marques/mercedes-benz.png`,
    nombreModele: 31,
  },
  {
    id: 4,
    nom: "Honda",
    lien: `${process.env.PUBLIC_URL}/images/marques/honda.png`,
    nombreModele: 4,
  },
  {
    id: 5,
    nom: "Ford",
    lien: `${process.env.PUBLIC_URL}/images/marques/ford.png`,
    nombreModele: 10,
  },
];

export var dataAnnonce = [
  {
    id: 1,
    utilisateur: {
      id: 1,
      nom: "John",
    },
    modele: {
      id: 1,
      nom: "Toyota Corolla",
      marque: {
        id: 1,
        nom: "Toyota",
      },
      categorie: {
        id: 1,
        nom: "Compacte",
      },
    },
    description: "Voiture en bon état",
    prix: 10000000,
    dateAnnonce: "2021-09-01",
    dateValidation: null,
    etat: 0,
    pathImage: `${process.env.PUBLIC_URL}/images/annonces/annonce1.png`,
  },
  {
    id: 2,
    utilisateur: {
      id: 2,
      nom: "Jane",
    },
    modele: {
      id: 2,
      nom: "BMW Serie 3",
      marque: {
        id: 2,
        nom: "BMW",
      },
      categorie: {
        id: 2,
        nom: "Berline",
      },
    },
    description: "Voiture en bon état",
    prix: 15000000,
    dateAnnonce: "2021-09-02",
    dateValidation: "2021-09-02",
    etat: 10,
    pathImage: `${process.env.PUBLIC_URL}/images/annonces/annonce2.png`,
  },
  {
    id: 3,
    utilisateur: {
      id: 3,
      nom: "Jack",
    },
    modele: {
      id: 3,
      nom: "Mercedes Classe C",
      marque: {
        id: 3,
        nom: "Mercedes-Benz",
      },
      categorie: {
        id: 2,
        nom: "Berline",
      },
    },
    description: "Voiture en bon état",
    prix: 250000000,
    dateAnnonce: "2021-09-03",
    dateValidation: "2021-09-03",
    etat: 20,
    pathImage: `${process.env.PUBLIC_URL}/images/annonces/annonce3.png`,
  },
  {
    id: 4,
    utilisateur: {
      id: 4,
      nom: "Jill",
    },
    modele: {
      id: 4,
      nom: "Honda Civic",
      marque: {
        id: 4,
        nom: "Honda",
      },
      categorie: {
        id: 1,
        nom: "Compacte",
      },
    },
    description: "Voiture en bon état",
    prix: 200000000,
    dateAnnonce: "2021-09-04",
    dateValidation: null,
    etat: 0,
    pathImage: `${process.env.PUBLIC_URL}/images/annonces/annonce4.png`,
  },
  {
    id: 5,
    utilisateur: {
      id: 5,
      nom: "James",
    },
    modele: {
      id: 5,
      nom: "Ford Focus",
      marque: {
        id: 5,
        nom: "Ford",
      },
      categorie: {
        id: 1,
        nom: "Compacte",
      },
    },
    description: "Voiture en bon état",
    prix: 100000000,
    dateAnnonce: "2021-09-05",
    dateValidation: "2021-09-06",
    etat: 10,
    pathImage: `${process.env.PUBLIC_URL}/images/annonces/annonce5.png`,
  },
];

export var dataMoteur = [
  {
    id: 1,
    nom: "Moteur 2 temps",
  },
  {
    id: 2,
    nom: "Motorisation hybride",
  },
  {
    id: 3,
    nom: "Moteur 4 temps",
  },
  {
    id: 4,
    nom: "Motorisation électrique",
  },
  {
    id: 5,
    nom: "Moteur à explosion",
  },
];

export var dataVitesse = [
  {
    id: 1,
    nom: "Manuelle",
  },
  {
    id: 2,
    nom: "Automatique",
  },
];

export var dataEnergie = [
  {
    id: 1,
    nom: "Essence",
  },
  {
    id: 2,
    nom: "Diesel",
  },
  {
    id: 3,
    nom: "Hybride",
  },
  {
    id: 4,
    nom: "Electrique",
  },
];

export var dataCommissions = [
  {
    id: 1,
    commission: 12,
    dateInsertion: "2021-09-02T17:30:14",
  },
  {
    id: 2,
    commission: 11,
    dateInsertion: "2021-09-03T17:30:14",
  },
  {
    id: 3,
    commission: 11,
    dateInsertion: "2021-09-04T17:30:14",
  },
  {
    id: 4,
    commission: 14,
    dateInsertion: "2021-09-05T17:30:14",
  },
  {
    id: 5,
    commission: 13,
    dateInsertion: "2024-01-25T17:30:14",
  },
];
