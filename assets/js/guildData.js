const guilds = [
    {
        name: 'Aegix',
        alliance: null,
        standing: true
    },
    {
        name: 'Arbormill',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Armora',
        alliance: 'Boulder',
        standing: true
    },
    {
        name: 'Arxikara',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Aygennore',
        alliance: null,
        standing: true
    },
    {
        name: 'Befford',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Black Forge',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Blade Planes',
        alliance: null,
        standing: false
    },
    {
        name: 'Daghurst',
        alliance: 'Void Dream Deserters',
        standing: true
    },
    {
        name: 'Deadrun',
        alliance: null,
        standing: false
    },
    {
        name: 'Befford',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Delywara',
        alliance: 'Ansydel',
        standing: true
    },
    {
        name: 'Dominion',
        alliance: "Founders' Alliance",
        standing: true
    },
    {
        name: 'Ebonheart',
        alliance: 'Beue Bell Alliance',
        standing: true
    },
    {
        name: 'Ellyndowin',
        alliance: 'Ansydel',
        standing: true
    },
    {
        name: 'Faeodail',
        alliance: null,
        standing: true
    },
    {
        name: 'Farwater',
        alliance: null,
        standing: true
    },
    {
        name: 'Feltch',
        alliance: null,
        standing: false
    },
    {
        name: 'Frostmore',
        alliance: "Founders' Alliance",
        standing: true
    },
    {
        name: 'Gadenwazier',
        alliance: 'Azilla Lassezlond',
        standing: true
    },
    {
        name: 'Ghenmore',
        alliance: "Founders' Alliance",
        standing: true
    },
    {
        name: 'Golden Glade Planes',
        alliance: "August Vow",
        standing: true
    },
    {
        name: 'Great Porsastone',
        alliance: 'Boulder',
        standing: true
    },
    {
        name: 'Green Borough',
        alliance: null,
        standing: false
    },
    {
        name: 'Greengard',
        alliance: 'August Vow',
        standing: true
    },
    {
        name: 'Greia',
        alliance: 'Void Dream Deserters',
        standing: true
    },
    {
        name: 'Gullkress',
        alliance: null,
        standing: true
    },
    {
        name: 'Hastinia',
        alliance: 'Void Dream Deserters',
        standing: true
    },
    {
        name: 'Herbora',
        alliance: null,
        standing: true
    },
    {
        name: 'High Aegis',
        alliance: "Founders' Alliance",
        standing: true
    },
    {
        name: 'Hoarstead',
        alliance: null,
        standing: false
    },
    {
        name: 'Kaya',
        alliance: 'Boulder',
        standing: true
    },
    {
        name: 'Lavorgrave',
        alliance: null,
        standing: true
    },
    {
        name: 'Llesowyl',
        alliance: null,
        standing: true
    },
    {
        name: "Maritime Trader's Guild",
        alliance: 'Arbicastar',
        standing: true
    },
    {
        name: 'Meridale',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Merigan',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Nabella',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: "Naks'rakmix'vinik",
        alliance: null,
        standing: true
    },
    {
        name: 'Nambindizlin',
        alliance: 'Azilla Lassezlond',
        standing: true
    },
    {
        name: 'Namora',
        alliance: 'Boulder',
        standing: true
    },
    {
        name: 'New Haven',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Newcrest',
        alliance: null,
        standing: true
    },
    {
        name: 'Norawindia',
        alliance: null,
        standing: true
    },
    {
        name: 'Norwyllia',
        alliance: 'Ansydel',
        standing: true
    },
    {
        name: 'Oberston',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Ohrang',
        alliance: null,
        standing: true
    },
    {
        name: 'Old Capri',
        alliance: null,
        standing: true
    },
    {
        name: 'Oradoroh',
        alliance: null,
        standing: true
    },
    {
        name: 'Rawaerk',
        alliance: 'August Vow',
        standing: true
    },
    {
        name: 'Reag',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Redclaw',
        alliance: 'Beue Bell Alliance',
        standing: true
    },
    {
        name: 'Reddale',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Riondesmal',
        alliance: null,
        standing: false
    },
    {
        name: 'Roodhaven',
        alliance: null,
        standing: false
    },
    {
        name: 'Ryxal',
        alliance: 'Azilla Lassezlond',
        standing: true
    },
    {
        name: 'Selssawore',
        alliance: null,
        standing: true
    },
    {
        name: 'Serabose',
        alliance: 'Boulder',
        standing: true
    },
    {
        name: 'Silverspire',
        alliance: 'Arbicastar',
        standing: true
    },
    {
        name: 'Soffemound',
        alliance: 'Boulder',
        standing: true
    },
    {
        name: 'Steonella',
        alliance: null,
        standing: true
    },
    {
        name: 'Tara Madres',
        alliance: 'Arbicastar',
        standing: true
    },
    {
        name: 'Tunstead',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Umbercopse',
        alliance: null,
        standing: true
    },
    {
        name: 'Vandel',
        alliance: 'Andsydel',
        standing: true
    },
    {
        name: 'Vindenburg',
        alliance: 'Nivea',
        standing: true
    },
    {
        name: 'Vinroove',
        alliance: 'Beue Bell Alliance',
        standing: true
    },
    {
        name: 'Wyl',
        alliance: 'Ansydel',
        standing: true
    },
    {
        name: 'Wysper',
        alliance: 'Ansydel',
        standing: true
    },
    {
        name: 'Wytheog',
        alliance: null,
        standing: true
    },
    {
        name: 'Yage',
        alliance: null,
        standing: false
    },
];
