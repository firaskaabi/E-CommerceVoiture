var voitures=[]

voitures= [
  {
    _id: "5ff0843a23c3bda6f65e1ac9",
    prix: "49990TND",
    picture: "https://catalogue.automobile.tn/big/2020/12/46475.jpg",
    stock: 10,
    marque: "Peugeot",
    name: "Peugeot 208",
    registered: "2014-09-08T06:14:17 -02:00"
  },
    {
      _id: "5ff0843a2167ffe70ea4838a",
      prix: "375690TND",
      picture: "https://catalogue.automobile.tn/big/2020/07/46383.jpg",
      stock: 2,
      marque: "Arnold Santana",
      name: "Bond Mcgee",
      registered: "2017-01-28T01:52:50 -01:00"
    },
    {
      _id: "5ff0843ac800c40e4c661a8f",
      prix: "29650TND",
      picture: "https://catalogue.automobile.tn/big/2019/04/43808.jpg",
      stock: 16,
      marque: "Fiat ",
      name: "Fait Panda Populaire",
      registered: "2018-03-05T04:27:12 -01:00"
    },
    {
      _id: "5ff0843a3b209a647addf99b",
      prix: "202194TND",
      picture: "https://catalogue.automobile.tn/big/2020/11/46435.jpg?t=1609323979",
      stock: 32,
      marque: "Wendi Barron",
      name: "Conner Hurst",
      registered: "2019-06-11T12:45:01 -02:00"
    },
    {
      _id: "5ff0843a67b78d684c10767d",
      prix: "73890ND",
      picture: "https://catalogue.automobile.tn/big/2020/12/46475.jpg",
      stock: 31,
      marque: "Skoda ",
      name: "Skoda Kamiq",
      registered: "2014-04-09T06:28:46 -02:00"
    },
    {
      _id: "5ff0843a6223e5301d620ddb",
      prix: "257200TND",
      picture: "https://catalogue.automobile.tn/max/2020/12/46483.jpg?t=1608594095",
      stock: 10,
      marque: "BMW",
      name: "BMW Série 4 Coupé",
      registered: "2017-08-06T12:19:45 -02:00"
    },
    {
      _id: "5ff0843aa56f658031cc4872",
      prix: "106900TND",
      picture: "https://catalogue.automobile.tn/max/2020/06/46376.jpg?t=1591882786",
      stock: 32,
      marque: "DS",
      name: "DS 3 Crossback",
      registered: "2014-02-08T08:00:48 -01:00"
    },
    {
      _id: "5ff0843a23c3bda6f65e1ac9",
      prix: "335000TND",
      picture: "https://catalogue.automobile.tn/max/2020/01/46311.jpg?t=1578604447",
      stock: 10,
      marque: "Jeep",
      name: "Jeep Wrangler Unlimited",
      registered: "2014-09-08T06:14:17 -02:00"
    },
    {
      _id: "5ff0843a23c3bda6f65e1ac9",
      prix: "335 000 TND",
      picture: "https://catalogue.automobile.tn/max/2019/12/46301.png?t=1577407146",
      stock: 10,
      marque: "Ssangyong",
      name: "Ssangyong Korando",
      registered: "2014-09-08T06:14:17 -02:00"
    },
    
  
  
  
  
  
  ]/*,
    {
      "_id": "5ff0843abecc3d708df317b2",
      "prix": "349407TND",
      "picture": "http://placehold.it/32x32",
      "stock": 36,
      "marque": "Everett Parks",
      "name": "Parrish Gregory",
      "registered": "2014-01-03T06:39:18 -01:00"
    },
    {
      "_id": "5ff0843a7496200e434077fd",
      "prix": "333837TND",
      "picture": "http://placehold.it/32x32",
      "stock": 27,
      "marque": "Slater Carr",
      "name": "Hartman Cleveland",
      "registered": "2014-02-20T10:28:52 -01:00"
    },
    {
      "_id": "5ff0843a1d5c16325b91a3d2",
      "prix": "147602TND",
      "picture": "http://placehold.it/32x32",
      "stock": 36,
      "marque": "Moreno Kent",
      "name": "Marilyn Guerra",
      "registered": "2014-10-13T01:04:11 -02:00"
    },
    {
      "_id": "5ff0843a827465e62ca116d0",
      "prix": "62979TND",
      "picture": "http://placehold.it/32x32",
      "stock": 40,
      "marque": "Odessa Coleman",
      "name": "Lizzie Stuart",
      "registered": "2019-01-10T08:39:54 -01:00"
    },
    {
      "_id": "5ff0843a9a0a875492ad5032",
      "prix": "41330TND",
      "picture": "http://placehold.it/32x32",
      "stock": 19,
      "marque": "Casey Raymond",
      "name": "Lucille Conner",
      "registered": "2020-05-03T10:18:44 -02:00"
    },
    {
      "_id": "5ff0843a09c6841d5a125437",
      "prix": "306667TND",
      "picture": "http://placehold.it/32x32",
      "stock": 19,
      "marque": "Nettie Knight",
      "name": "Potts Gonzalez",
      "registered": "2019-11-25T02:12:41 -01:00"
    },
    {
      "_id": "5ff0843a605ce3505e445373",
      "prix": "169854TND",
      "picture": "http://placehold.it/32x32",
      "stock": 5,
      "marque": "Sherry Hartman",
      "name": "Latasha Ellison",
      "registered": "2017-05-01T08:50:27 -02:00"
    },
    {
      "_id": "5ff0843a3e50c817bb733d66",
      "prix": "325399TND",
      "picture": "http://placehold.it/32x32",
      "stock": 6,
      "marque": "Deloris Patton",
      "name": "Ruth Alvarado",
      "registered": "2018-07-17T02:49:47 -02:00"
    },
    {
      "_id": "5ff0843af5e35623c9775cc2",
      "prix": "181706TND",
      "picture": "http://placehold.it/32x32",
      "stock": 13,
      "marque": "Kerry Petty",
      "name": "Pansy Lane",
      "registered": "2014-11-19T02:54:52 -01:00"
    },
    {
      "_id": "5ff0843a7d59accc3fa36c9b",
      "prix": "326583TND",
      "picture": "http://placehold.it/32x32",
      "stock": 7,
      "marque": "Webb Freeman",
      "name": "Charlotte Best",
      "registered": "2017-06-07T10:05:30 -02:00"
    },
    {
      "_id": "5ff0843a1006e7e9af3698bf",
      "prix": "89361TND",
      "picture": "http://placehold.it/32x32",
      "stock": 21,
      "marque": "Tiffany Dyer",
      "name": "Galloway Hanson",
      "registered": "2015-10-06T10:44:32 -02:00"
    },
    {
      "_id": "5ff0843afa89f6fb99a0bc86",
      "prix": "334894TND",
      "picture": "http://placehold.it/32x32",
      "stock": 31,
      "marque": "Katie Mckinney",
      "name": "Danielle Underwood",
      "registered": "2017-06-29T11:55:18 -02:00"
    },
    {
      "_id": "5ff0843a17b2473ea4b9a263",
      "prix": "110595TND",
      "picture": "http://placehold.it/32x32",
      "stock": 33,
      "marque": "Yvonne Mercer",
      "name": "Celeste Payne",
      "registered": "2014-05-27T02:08:41 -02:00"
    },
    {
      "_id": "5ff0843a331d6b4729d6bf1c",
      "prix": "322432TND",
      "picture": "http://placehold.it/32x32",
      "stock": 17,
      "marque": "Hudson Fitzgerald",
      "name": "Rodgers Horne",
      "registered": "2018-01-29T08:25:04 -01:00"
    },
    {
      "_id": "5ff0843abff6480510553303",
      "prix": "356478TND",
      "picture": "http://placehold.it/32x32",
      "stock": 39,
      "marque": "Joanne Haney",
      "name": "Bobbie Kidd",
      "registered": "2019-05-26T10:21:30 -02:00"
    },
    {
      "_id": "5ff0843af9540d8f2d027bdc",
      "prix": "41603TND",
      "picture": "http://placehold.it/32x32",
      "stock": 27,
      "marque": "Barnett Wright",
      "name": "Constance Jensen",
      "registered": "2014-05-16T02:18:35 -02:00"
    },
    {
      "_id": "5ff0843a45d899ad191ac86f",
      "prix": "315574TND",
      "picture": "http://placehold.it/32x32",
      "stock": 16,
      "marque": "Walton Drake",
      "name": "Laura Dickerson",
      "registered": "2018-05-30T01:40:32 -02:00"
    },
    {
      "_id": "5ff0843abe7b517ecd2ec545",
      "prix": "352156TND",
      "picture": "http://placehold.it/32x32",
      "stock": 39,
      "marque": "Miller Mcfadden",
      "name": "Castillo Finley",
      "registered": "2018-08-06T09:19:09 -02:00"
    },
    {
      "_id": "5ff0843a9fa9162a30a337ff",
      "prix": "150566TND",
      "picture": "http://placehold.it/32x32",
      "stock": 19,
      "marque": "Knapp Hamilton",
      "name": "Munoz Sears",
      "registered": "2019-07-03T07:24:38 -02:00"
    },
    {
      "_id": "5ff0843a4447b13f00d4b71e",
      "prix": "363274TND",
      "picture": "http://placehold.it/32x32",
      "stock": 6,
      "marque": "Alexandria Meadows",
      "name": "Macdonald Nash",
      "registered": "2017-02-04T08:17:14 -01:00"
    },
    {
      "_id": "5ff0843adc9d73cbfcec289f",
      "prix": "159659TND",
      "picture": "http://placehold.it/32x32",
      "stock": 27,
      "marque": "Tamra Galloway",
      "name": "Vincent Justice",
      "registered": "2018-04-01T06:01:26 -02:00"
    },
    {
      "_id": "5ff0843a487fb288349852ed",
      "prix": "234105TND",
      "picture": "http://placehold.it/32x32",
      "stock": 20,
      "marque": "Thomas Waller",
      "name": "Beverly Sparks",
      "registered": "2020-08-12T04:57:27 -02:00"
    },
    {
      "_id": "5ff0843a0ead696eaf2f8552",
      "prix": "81694TND",
      "picture": "http://placehold.it/32x32",
      "stock": 22,
      "marque": "Gray Boone",
      "name": "Weiss Carpenter",
      "registered": "2016-01-12T06:39:01 -01:00"
    },
    {
      "_id": "5ff0843a9326fa00fdad6d65",
      "prix": "379299TND",
      "picture": "http://placehold.it/32x32",
      "stock": 38,
      "marque": "Burke Gould",
      "name": "Mueller Sawyer",
      "registered": "2014-06-29T12:41:55 -02:00"
    },
    {
      "_id": "5ff0843a24f5eb16499e514d",
      "prix": "263738TND",
      "picture": "http://placehold.it/32x32",
      "stock": 15,
      "marque": "Roberta Dunlap",
      "name": "Ola Vaughan",
      "registered": "2018-02-14T10:02:00 -01:00"
    },
    {
      "_id": "5ff0843afcf69465f59ce60e",
      "prix": "35358TND",
      "picture": "http://placehold.it/32x32",
      "stock": 11,
      "marque": "Chandra Spears",
      "name": "Sue Slater",
      "registered": "2017-09-07T11:14:29 -02:00"
    },
    {
      "_id": "5ff0843ac57b0c287872787a",
      "prix": "246437TND",
      "picture": "http://placehold.it/32x32",
      "stock": 19,
      "marque": "Kathie Green",
      "name": "Nichole Greer",
      "registered": "2018-04-11T11:12:31 -02:00"
    },
    {
      "_id": "5ff0843a9dc85f08551b0eb4",
      "prix": "364779TND",
      "picture": "http://placehold.it/32x32",
      "stock": 13,
      "marque": "Janis Cooper",
      "name": "Reba Pace",
      "registered": "2016-05-17T09:58:26 -02:00"
    },
    {
      "_id": "5ff0843acf0b5fa17a04d50b",
      "prix": "261855TND",
      "picture": "http://placehold.it/32x32",
      "stock": 20,
      "marque": "Pittman Frost",
      "name": "Nancy Gross",
      "registered": "2014-07-31T01:56:48 -02:00"
    },
    {
      "_id": "5ff0843a8ddcc1ec64a59104",
      "prix": "204979TND",
      "picture": "http://placehold.it/32x32",
      "stock": 10,
      "marque": "Mcleod Rocha",
      "name": "Martha Le",
      "registered": "2018-01-29T06:41:57 -01:00"
    },
    {
      "_id": "5ff0843a134da47ee4a0c0ce",
      "prix": "158089TND",
      "picture": "http://placehold.it/32x32",
      "stock": 25,
      "marque": "Jacqueline Chandler",
      "name": "Juana Bryan",
      "registered": "2018-09-07T01:01:06 -02:00"
    },
    {
      "_id": "5ff0843a60b4907df4064f92",
      "prix": "389793TND",
      "picture": "http://placehold.it/32x32",
      "stock": 30,
      "marque": "Kelsey Malone",
      "name": "Holly Sherman",
      "registered": "2020-06-24T02:10:58 -02:00"
    },
    {
      "_id": "5ff0843a7875911742af9a37",
      "prix": "48380TND",
      "picture": "http://placehold.it/32x32",
      "stock": 36,
      "marque": "Poole Doyle",
      "name": "Effie Hudson",
      "registered": "2019-09-26T09:38:58 -02:00"
    },
    {
      "_id": "5ff0843a89f5b3f049005e6b",
      "prix": "191255TND",
      "picture": "http://placehold.it/32x32",
      "stock": 27,
      "marque": "Angelia Goff",
      "name": "Yolanda Gallagher",
      "registered": "2014-06-12T11:42:37 -02:00"
    },
    {
      "_id": "5ff0843a8803eb71819d5a3f",
      "prix": "41911TND",
      "picture": "http://placehold.it/32x32",
      "stock": 20,
      "marque": "Leola Valencia",
      "name": "Alisa Tate",
      "registered": "2017-06-03T02:36:22 -02:00"
    },
    {
      "_id": "5ff0843a26958e060bf3a2d6",
      "prix": "147465TND",
      "picture": "http://placehold.it/32x32",
      "stock": 37,
      "marque": "Elnora Lucas",
      "name": "Richardson Gilbert",
      "registered": "2018-01-29T03:38:17 -01:00"
    },
    {
      "_id": "5ff0843ad4e1060881051458",
      "prix": "208428TND",
      "picture": "http://placehold.it/32x32",
      "stock": 11,
      "marque": "Virgie Bartlett",
      "name": "Grant Roth",
      "registered": "2017-05-18T01:54:42 -02:00"
    },
    {
      "_id": "5ff0843ae10a390e8fcfba1a",
      "prix": "195376TND",
      "picture": "http://placehold.it/32x32",
      "stock": 28,
      "marque": "Savannah Edwards",
      "name": "Lowe Mccray",
      "registered": "2018-08-20T01:10:08 -02:00"
    },
    {
      "_id": "5ff0843a59a45e6f3aa39c28",
      "prix": "256926TND",
      "picture": "http://placehold.it/32x32",
      "stock": 25,
      "marque": "Gilliam Callahan",
      "name": "Gordon Leonard",
      "registered": "2018-08-01T03:50:08 -02:00"
    },
    {
      "_id": "5ff0843ab1cab5d863ad87d0",
      "prix": "393440TND",
      "picture": "http://placehold.it/32x32",
      "stock": 11,
      "marque": "Acevedo Small",
      "name": "Celina Porter",
      "registered": "2017-05-15T01:34:19 -02:00"
    },
    {
      "_id": "5ff0843a106963994b000480",
      "prix": "257167TND",
      "picture": "http://placehold.it/32x32",
      "stock": 14,
      "marque": "Mildred Phillips",
      "name": "Buck Carter",
      "registered": "2020-12-07T12:32:46 -01:00"
    },
    {
      "_id": "5ff0843a64d713985c8e4bcf",
      "prix": "242289TND",
      "picture": "http://placehold.it/32x32",
      "stock": 22,
      "marque": "Brandi Maxwell",
      "name": "Shelley Robbins",
      "registered": "2020-08-27T10:23:07 -02:00"
    },
    {
      "_id": "5ff0843af8921b0c89ee30f8",
      "prix": "88416TND",
      "picture": "http://placehold.it/32x32",
      "stock": 22,
      "marque": "Weaver Strickland",
      "name": "Jaime Griffin",
      "registered": "2019-02-17T11:57:44 -01:00"
    }]*/
  
function upload(){
console.log(voitures.length)
for(let i=0;i<voitures.length,i<3;i++){
    console.log(i)
    console.log(voitures[i])
}
    localStorage.removeItem("v")
  localStorage.setItem("v",voitures)
}