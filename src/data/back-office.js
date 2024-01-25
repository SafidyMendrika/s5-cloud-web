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
    pathImage: "/images/marques/toyota.png",
    nombreModele: 23,
  },
  {
    id: 2,
    nom: "BMW",
    pathImage: "/images/marques/bmw.png",
    nombreModele: 12,
  },
  {
    id: 3,
    nom: "Mercedes-Benz",
    pathImage: "/images/marques/mercedes-benz.png",
    nombreModele: 31,
  },
  {
    id: 4,
    nom: "Honda",
    pathImage: "/images/marques/honda.png",
    nombreModele: 4,
  },
  {
    id: 5,
    nom: "Ford",
    pathImage: "/images/marques/ford.png",
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
    voiture: {
      id: 1,
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
    },
    description: "Voiture en bon état",
    prix: 10000000,
    dateAnnonce: "2021-09-01",
    dateValidation: null,
    status: 0,
    pathImage: "/images/annonces/annonce1.png",
  },
  {
    id: 2,
    utilisateur: {
      id: 2,
      nom: "Jane",
    },
    voiture: {
      id: 2,
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
    },
    description: "Voiture en bon état",
    prix: 15000000,
    dateAnnonce: "2021-09-02",
    dateValidation: "2021-09-02",
    status: 10,
    pathImage: "/images/annonces/annonce2.png",
  },
  {
    id: 3,
    utilisateur: {
      id: 3,
      nom: "Jack",
    },
    voiture: {
      id: 3,
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
    },
    description: "Voiture en bon état",
    prix: 250000000,
    dateAnnonce: "2021-09-03",
    dateValidation: "2021-09-03",
    status: 20,
    pathImage: "/images/annonces/annonce3.png",
  },
  {
    id: 4,
    utilisateur: {
      id: 4,
      nom: "Jill",
    },
    voiture: {
      id: 4,
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
    },
    description: "Voiture en bon état",
    prix: 200000000,
    dateAnnonce: "2021-09-04",
    dateValidation: null,
    status: 0,
    pathImage: "/images/annonces/annonce4.png",
  },
  {
    id: 5,
    utilisateur: {
      id: 5,
      nom: "James",
    },
    voiture: {
      id: 5,
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
    },
    description: "Voiture en bon état",
    prix: 100000000,
    dateAnnonce: "2021-09-05",
    dateValidation: "2021-09-06",
    status: 10,
    pathImage: "/images/annonces/annonce5.png",
  },
];

export var dataMoteur = [
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
