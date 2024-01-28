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
    dateValidation: null,
    etat: 0,
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce1.png` },
    ],
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
    dateValidation: "2021-09-02",
    etat: 10,
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce2.png` },
    ],
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
    etat: 20,
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce3.png` },
    ],
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
    dateValidation: null,
    etat: 0,
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce4.png` },
    ],
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
    dateValidation: "2021-09-06",
    etat: 10,
    photoAnnonces: [
      { path: `${process.env.PUBLIC_URL}/images/annonces/annonce5.png` },
    ],
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

export var dataStatistiques = {
  rendementVoitures: [
    { mois: 1, vendus: 1, annonces: 3 },
    { mois: 2, vendus: 12, annonces: 17 },
    { mois: 3, vendus: 10, annonces: 12 },
    { mois: 4, vendus: 5, annonces: 8 },
    { mois: 5, vendus: 4, annonces: 9 },
    { mois: 6, vendus: 10, annonces: 11 },
    { mois: 7, vendus: 1, annonces: 10 },
    { mois: 8, vendus: 2, annonces: 13 },
    { mois: 9, vendus: 4, annonces: 15 },
    { mois: 10, vendus: 10, annonces: 14 },
    { mois: 11, vendus: 6, annonces: 16 },
    { mois: 12, vendus: 11, annonces: 18 },
  ],
  benefice: 100000000,
  nombreUtilisateurs: 5,
  classementsAnnonces: [
    {
      annonce: {
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
        dateValidation: null,
        etat: 10,
        photoAnnonces: [
          { path: `${process.env.PUBLIC_URL}/images/annonces/annonce1.png` },
        ],
      },
      count: 100,
    },
    {
      annonce: {
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
        dateValidation: "2021-09-02",
        etat: 10,
        photoAnnonces: [
          { path: `${process.env.PUBLIC_URL}/images/annonces/annonce2.png` },
        ],
      },
      count: 98,
    },
    {
      annonce: {
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
        etat: 20,
        photoAnnonces: [
          { path: `${process.env.PUBLIC_URL}/images/annonces/annonce3.png` },
        ],
      },
      count: 79,
    },
  ],
};
