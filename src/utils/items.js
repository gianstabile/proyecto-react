const items = [
    {
      id: 1,
      categoryId: 1,
      category: "Sex Toys",
      image:
        "https://www.puntosexshop.com.ar/thumb/1636053494027_800x800.jpg",
      title: "Dados Eróticos Lugares-Posiciones",
      description: "Juego de dados erótico. Combina acciones, con las partes del cuerpo. Te puede tocar morder-cuello, acariciar-boca, y muchas combinaciones.",
      alt: "Dados Eróticos Lugares-Posiciones",
      price: 600,
      stock: 100,
    },
    {
      id: 2,
      categoryId: 2,
      category: "Cosmética",
      image:
        "https://www.puntosexshop.com.ar/thumb/1635461351828_800x800.jpg",
      title: "Aceite para masajes y lubricación comestible",
      description:
        "Dejate acariciar con este exquisito aceite comestible. Su riquísimo aroma, sabor y calidez te estimularan para lograr un encuentro irresistible e inolvidable.",
      alt: "Aceite para masajes y lubricante",
      price: 1300,
      stock: 150,
      
    },
    {
      id: 3,
      categoryId: 4,
      category: "Bondage",
      image:
        "https://www.puntosexshop.com.ar/thumb/1645646982825_800x800.jpg",
      title: "Collar de cuero con púas",
      description: "Choker de cuero eco con púas. Sado, BDSM, Heavy Metal, Dark",
      alt: "Collar de cuero ",
      price: 2500,
      stock: 50,
    },
    {
      id: 5,
      categoryId: 1,
      category: "Sex Toys",
      image:
        "https://www.puntosexshop.com.ar/thumb/1634244407435_800x800.jpg",
      title: "Macizo con testículos y sopapa",
      description:
        "Para una experiencia extrema y excitante, con mas detalles de texturas y colores, su longitud de 16 cm de largo y 4 cm de diámetro en su parte más ancha. Apto para ambos sexos. Para esta experiencia, es mejor estar en pareja ya que quien recibe la penetración debe estar relajado/a para favorecer la dilatación. Se recomienda el uso de lubricantes",
      alt: "Macizo con testículos y sopapa",
      price: 5300,
      stock: 30,
    },
    {
      id: 6,
      categoryId: 1,
      category: "Sex Toys",
      image:
        "https://www.puntosexshop.com.ar/thumb/1643049767514_800x800.jpg",
      title: "Masturbador Masculino 23x10cm",
      description:
        "HOMBRES si están buscando un juguete para darle una vuelta a su vida sexual en los momentos de soledad estos masturbadores son todo lo que necesitas. Poseen una manga en su interior fabricada para simular la piel humana con un tacto muy suave, sedoso y muy agradable. Con un poco de lubricante será una experiencia maravillosa. MEDIDAS: 23 cm x 10 cm",
      alt: "Masturbador Masculino 23x10cm",
      price: 4300,
      stock: 50,
    },
    {
      id: 7,
      categoryId: 2,
      category: "Cosmética",
      image:
        "https://www.puntosexshop.com.ar/thumb/1635707538008_800x800.jpg",
      title: "Perfume con feromona femenina Sexitive Capricious",
      description:
        "Perfume con feromonas femeninas Sexitive Capricious Afrodisíaco x50ml ",
      alt: "Perfume con feromona femenina Sexitive Capricious",
      price: 4280,
      stock: 20,
    },
    {
      id: 8,
      categoryId: 2,
      category: "Cosmética",
      image:
        "https://www.puntosexshop.com.ar/thumb/1635461007917_800x800.jpg",
      title: "Crema intensificante Black Dragon 50ml",
      description:
        "Crema potenciadora de la erección que además sensibiliza el área genital femenina para alcanzar múltiples orgasmos.Más resistencia, vitalidad y erecciones más intensas son los efectos que la crema otorga a la pareja. La crema ideal para garantizar una relación sexual de alto voltaje y gran sensibilidad en el que la satisfacción queda más que garantizada gracias a sus vitalizantes efectos.",
      alt: "Crema intensificante Black Dragon 50ml",
      price: 2650,
      stock: 50,
    },
    {
      id: 9,
      categoryId: 3,
      category: "Lencería",
      image:
        "https://www.puntosexshop.com.ar/thumb/1634409656405_800x800.jpg",
      title: "Body de puntilla abierto",
      description:
        "Con un diseño seductor y provocador el body Malena realza tu figura destacando tus curvas. Confeccionado enteramente en delicada puntilla. Talle único. El body de puntilla Malena es un producto destacado.",
      alt: "Body de puntilla abierto",
      price: 6500,
      stock: 20,
    },
    {
      id: 10,
      categoryId: 3,
      category: "Lencería",
      image:
        "https://www.puntosexshop.com.ar/thumb/1650914593621_800x800.jpg",
      title: "Baby Doll de tul de lycra con taza y cola less - Rojo",
      description:
        "Baby doll de tul, con taza soft. Incluye colaless.",
      alt: "Baby Doll de tul de lycra",
      price: 6750,
      stock: 20,
    },
    {
      id: 11,
      categoryId: 4,
      category: "Bondage",
      image:
        "https://www.puntosexshop.com.ar/thumb/1640907281136_400x400.jpg",
      title: "Body de eco cuero con inmovilizador de brazo",
      description:
        "Body con inmovilizador de brazos realizado en eco cuero.",
      alt: "Body de eco cuero",
      price: 3800,
      stock: 15,
    },
    {
      id: 12,
      categoryId: 4,
      category: "Bondage",
      image:
        "https://www.puntosexshop.com.ar/thumb/1640369949104_800x800.jpg",
      title: "Arnés doble penetración - 3 aros",
      description:
        "Arnés reforzado, con 3 medidas diferentes de aros. Diseño de cuero",
      alt: "Arnés doble penetración",
      price: 2899,
      stock: 20,
    },
    {
      id: 13,
      categoryId: 4,
      category: "Bondage",
      image:
        "https://www.puntosexshop.com.ar/thumb/1645744672884_800x800.jpg",
      title: "Fusta corta de cuero",
      description:
        "Arnés reforzado, con 3 medidas diferentes de aros. Diseño de cuero",
      alt: "Fusta corta de cuero",
      price: 3100,
      stock: 20,
    },
  ];

  export default items;