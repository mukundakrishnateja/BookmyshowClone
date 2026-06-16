import logo from './logo.svg'
import marvelLogo from './marvelLogo.svg'
import googlePlay from './googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'
import universalpicturesLogo from './universalpicturesLogo.svg'
import bookmyshowLogo from './bookmyshowLogo.svg'

export const assets = {
    logo,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
    universalpicturesLogo,
    bookmyshowLogo
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=WpW36ldAqnM'
    },
    {
        image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=-sAOWhvheK8'
    },
    {
        image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=1pHDWnXmK7Y'
    },
    {
        image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=umiKiW4En9g'
    },
]

const dummyCastsData = [
    { "name": "Milla Jovovich", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Dave Bautista", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Arly Jover", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Amara Okereke", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Fraser James", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Deirdre Mullins", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Sebastian Stankiewicz", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Tue Lunding", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Jacek Dzisiewicz", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Ian Hanmore", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Eveline Hall", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
    { "name": "Kamila Klamut", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Caoilinn Springall", "profile_path": "https://image.tmdb.org/t/p/original/uZNtbPHowlBYo74U1qlTaRlrdiY.jpg", },
    { "name": "Jan Kowalewski", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Pawel Wysocki", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Simon Lööf", "profile_path": "https://image.tmdb.org/t/p/original/cbZrB8crWlLEDjVUoak8Liak6s.jpg", },
    { "name": "Tomasz Cymerman", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", }
    ,
{ 
    "name": "Robert Downey Jr.", 
    "profile_path": "https://image.tmdb.org/t/p/original/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg", 
},
{ 
    "name": "Chris Hemsworth", 
    "profile_path": "https://image.tmdb.org/t/p/original/piQGdoIQOFdXMRo0V49GelNgxdJ.jpg", 
},
{ 
    "name": "Tom Hiddleston", 
    "profile_path": "https://image.tmdb.org/t/p/original/mclHxMm8aPlCPKptP67257F5GPo.jpg", 
},
{ 
    "name": "Anthony Mackie", 
    "profile_path": "https://image.tmdb.org/t/p/original/8gkJyIoR3XJfKJzL8f8s8QdJ7oa.jpg", 
},
{ 
    "name": "Florence Pugh", 
    "profile_path": "https://image.tmdb.org/t/p/original/6Sjz9teWjrMY9lF2oSErZn8scl9.jpg", 
},
{ 
    "name": "Pedro Pascal", 
    "profile_path": "https://image.tmdb.org/t/p/original/9VYK7oxcqhjd5LAH6ZFJ3XzOlID.jpg", 
},
{ 
    "name": "Timothée Chalamet", 
    "profile_path": "https://image.tmdb.org/t/p/original/BE2sdjpgsa2rNTFa66f7upkaOP.jpg", 
},
{ 
    "name": "Zendaya", 
    "profile_path": "https://image.tmdb.org/t/p/original/tylFh0KAmxYh7O8J9s2Wgk6VQQP.jpg", 
},
{ 
    "name": "Anya Taylor-Joy", 
    "profile_path": "https://image.tmdb.org/t/p/original/vEYQ0Kj7YtC5Jt6B7c2E31E4G8o.jpg", 
},
{ 
    "name": "Rebecca Ferguson", 
    "profile_path": "https://image.tmdb.org/t/p/original/lJloTOheuQSirSLXNA3JHsrMNfH.jpg", 
},
{ 
    "name": "Javier Bardem", 
    "profile_path": "https://image.tmdb.org/t/p/original/IShnFg6ijWhpbu29dFBd9PtqQg.jpg", 
},
{ 
    "name": "Tom Holland", 
    "profile_path": "https://image.tmdb.org/t/p/original/2qhIDp44cAqP2clOgt2afQI07X8.jpg", 
},
{ 
    "name": "Jacob Batalon", 
    "profile_path": "https://image.tmdb.org/t/p/original/eZE3XyNf2qLQtcir9L0i9Vj7V8x.jpg", 
},
{ 
    "name": "Sadie Sink", 
    "profile_path": "https://image.tmdb.org/t/p/original/oQZ7K3F1mK6E5lbxQz6T7lYh6xV.jpg", 
},
{ 
    "name": "Charlie Cox", 
    "profile_path": "https://image.tmdb.org/t/p/original/5oH6rMe2b6XGzQxN0v0Q0w6pQ7D.jpg", 
},
{ 
    "name": "Benedict Cumberbatch", 
    "profile_path": "https://image.tmdb.org/t/p/original/fBEucxECxGLKVHBznO0qHtCGiMO.jpg", 
},
{ 
    "name": "Oscar Isaac", 
    "profile_path": "https://image.tmdb.org/t/p/original/dW5U5yrIIPmMjRThR9KT2xH6nTz.jpg", 
},
{ 
    "name": "Rami Malek", 
    "profile_path": "https://image.tmdb.org/t/p/original/k3JmJBb6T0V3b1Q0Y3Yw8l7iV6K.jpg", 
},
{ 
    "name": "Emily Blunt", 
    "profile_path": "https://image.tmdb.org/t/p/original/jxAbDJWvz4p1hoFpJYG5vY2dQmq.jpg", 
},
{ 
    "name": "Cillian Murphy", 
    "profile_path": "https://image.tmdb.org/t/p/original/2lKs67r8n7dD6Q0j6g6s8M8w6sX.jpg", 
}
]

export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "In the Lost Lands",
        "overview": "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
        "poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 14, "name": "Fantasy" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-02-27",
        "original_language": "en",
        "tagline": "She seeks the power to free her people.",
        "vote_average": 6.4,
        "vote_count": 15000,
        "runtime": 102,
    },
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "Until Dawn",
        "overview": "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
        "poster_path": "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        "genres": [
            { "id": 27, "name": "Horror" },
            { "id": 9648, "name": "Mystery" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-23",
        "original_language": "en",
        "tagline": "Every night a different nightmare.",
        "vote_average": 6.405,
        "vote_count": 18000,
        "runtime": 103,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "Lilo & Stitch",
        "overview": "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
        "poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Comedy" },
            { "id": 878, "name": "Science Fiction" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Hold on to your coconuts.",
        "vote_average": 7.117,
        "vote_count": 27500,
        "runtime": 108,
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": "Havoc",
        "overview": "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
        "poster_path": "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 80, "name": "Crime" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-25",
        "original_language": "en",
        "tagline": "No law. Only disorder.",
        "vote_average": 6.537,
        "vote_count": 35960,
        "runtime": 107,
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": "A Minecraft Movie",
        "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
        "poster_path": "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        "genres": [
            { "id": 10751, "name": "Family" },
            { "id": 35, "name": "Comedy" },
            { "id": 12, "name": "Adventure" },
            { "id": 14, "name": "Fantasy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-03-31",
        "original_language": "en",
        "tagline": "Be there and be square.",
        "vote_average": 6.516,
        "vote_count": 15225,
        "runtime": 101,
    },
    {
        "_id": "575265",
        "id": 575265,
        "title": "Mission: Impossible - The Final Reckoning",
        "overview": "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
        "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "backdrop_path": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mm1QhHHYGslZCWbCTSGei57WyCuhSQDrjYGGY5rkebu_f2s86UZkxWciBsTerN_5RZk4&s=10",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Thriller" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-05-17",
        "original_language": "en",
        "tagline": "Our lives are the sum of our choices.",
        "vote_average": 7.042,
        "vote_count": 19885,
        "runtime": 170,
    },
    {
        "_id": "986056",
        "id": 986056,
        "title": "Thunderbolts*",
        "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
        "poster_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 878, "name": "Science Fiction" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-30",
        "original_language": "en",
        "tagline": "Everyone deserves a second shot.",
        "vote_average": 7.443,
        "vote_count": 23569,
        "runtime": 127,
    },
    {
    "_id": "999001",
    "id": 999001,
    "title": "Avengers: Doomsday",
    "overview": "The Avengers assemble once again to face Doctor Doom, one of the most dangerous threats the multiverse has ever seen.",
    "poster_path": "https://image.tmdb.org/t/p/original/7MrgIUeq0DD2iF7GR6wqJfYZNeC.jpg",
    "backdrop_path": "https://upload.wikimedia.org/wikipedia/en/e/ee/Avengers_Doomsday_poster.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 878, "name": "Science Fiction" },
        { "id": 12, "name": "Adventure" }
    ],
    "casts": [
        { "name": "Robert Downey Jr.", "profile_path": "https://image.tmdb.org/t/p/original/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg" },
        { "name": "Chris Hemsworth", "profile_path": "https://image.tmdb.org/t/p/original/piQGdoIQOFdXMRo0V49GelNgxdJ.jpg" },
        { "name": "Tom Hiddleston", "profile_path": "https://image.tmdb.org/t/p/original/mclHxMm8aPlCPKptP67257F5GPo.jpg" },
        { "name": "Anthony Mackie", "profile_path": "https://image.tmdb.org/t/p/original/8gkJyIoR3XJfKJzL8f8s8QdJ7oa.jpg" },
        { "name": "Florence Pugh", "profile_path": "https://image.tmdb.org/t/p/original/6Sjz9teWjrMY9lF2oSErZn8scl9.jpg" }
    ],
    "release_date": "2026-05-01",
    "original_language": "en",
    "tagline": "A new era of heroes begins.",
    "vote_average": 8.5,
    "vote_count": 50000,
    "runtime": 180,
},

{
    "_id": "999002",
    "id": 999002,
    "title": "Dune: Part Three",
    "overview": "Paul Atreides faces the consequences of prophecy, power, and war as the saga of Arrakis continues.",
    "poster_path": "https://image.tmdb.org/t/p/original/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    "genres": [
        { "id": 878, "name": "Science Fiction" },
        { "id": 12, "name": "Adventure" },
        { "id": 18, "name": "Drama" }
    ],
    "casts": [
        { "name": "Timothée Chalamet", "profile_path": "https://image.tmdb.org/t/p/original/BE2sdjpgsa2rNTFa66f7upkaOP.jpg" },
        { "name": "Zendaya", "profile_path": "https://image.tmdb.org/t/p/original/tylFh0KAmxYh7O8J9s2Wgk6VQQP.jpg" },
        { "name": "Anya Taylor-Joy", "profile_path": "https://image.tmdb.org/t/p/original/vEYQ0Kj7YtC5Jt6B7c2E31E4G8o.jpg" },
        { "name": "Rebecca Ferguson", "profile_path": "https://image.tmdb.org/t/p/original/lJloTOheuQSirSLXNA3JHsrMNfH.jpg" },
        { "name": "Javier Bardem", "profile_path": "https://image.tmdb.org/t/p/original/IShnFg6ijWhpbu29dFBd9PtqQg.jpg" }
    ],
    "release_date": "2026-12-18",
    "original_language": "en",
    "tagline": "The prophecy becomes destiny.",
    "vote_average": 8.8,
    "vote_count": 42000,
    "runtime": 175,
},

{
    "_id": "999003",
    "id": 999003,
    "title": "Spider-Man: Brand New Day",
    "overview": "Peter Parker begins a new chapter in his life while balancing college, responsibility, and new enemies in New York City.",
    "poster_path": "https://image.tmdb.org/t/p/original/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "backdrop_path": "https://wallpaperaccess.com/full/22845304.jpg",
    "genres": [
        { "id": 28, "name": "Action" },
        { "id": 878, "name": "Science Fiction" },
        { "id": 12, "name": "Adventure" }
    ],
    "casts": [
        { "name": "Tom Holland", "profile_path": "https://image.tmdb.org/t/p/original/2qhIDp44cAqP2clOgt2afQI07X8.jpg" },
        { "name": "Jacob Batalon", "profile_path": "https://image.tmdb.org/t/p/original/eZE3XyNf2qLQtcir9L0i9Vj7V8x.jpg" },
        { "name": "Sadie Sink", "profile_path": "https://image.tmdb.org/t/p/original/oQZ7K3F1mK6E5lbxQz6T7lYh6xV.jpg" },
        { "name": "Charlie Cox", "profile_path": "https://image.tmdb.org/t/p/original/5oH6rMe2b6XGzQxN0v0Q0w6pQ7D.jpg" },
        { "name": "Benedict Cumberbatch", "profile_path": "https://image.tmdb.org/t/p/original/fBEucxECxGLKVHBznO0qHtCGiMO.jpg" }
    ],
    "release_date": "2026-07-31",
    "original_language": "en",
    "tagline": "Every hero gets a fresh start.",
    "vote_average": 8.4,
    "vote_count": 39000,
    "runtime": 145,
},

{
    "_id": "999004",
    "id": 999004,
    "title": "Disclosure Day",
    "overview": "After classified information about alien life is revealed to the world, humanity struggles to adapt to a shocking new reality.",
    "poster_path": "https://image.tmdb.org/t/p/original/yF1eOkaYvwiORauRCPWznV9xVvi.jpg",
    "backdrop_path": "https://image.tmdb.org/t/p/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
    "genres": [
        { "id": 878, "name": "Science Fiction" },
        { "id": 53, "name": "Thriller" },
        { "id": 18, "name": "Drama" }
    ],
    "casts": [
        { "name": "Oscar Isaac", "profile_path": "https://image.tmdb.org/t/p/original/dW5U5yrIIPmMjRThR9KT2xH6nTz.jpg" },
        { "name": "Rami Malek", "profile_path": "https://image.tmdb.org/t/p/original/k3JmJBb6T0V3b1Q0Y3Yw8l7iV6K.jpg" },
        { "name": "Emily Blunt", "profile_path": "https://image.tmdb.org/t/p/original/jxAbDJWvz4p1hoFpJYG5vY2dQmq.jpg" },
        { "name": "Cillian Murphy", "profile_path": "https://image.tmdb.org/t/p/original/2lKs67r8n7dD6Q0j6g6s8M8w6sX.jpg" }
    ],
    "release_date": "2026-09-12",
    "original_language": "en",
    "tagline": "The truth changes everything.",
    "vote_average": 7.9,
    "vote_count": 21000,
    "runtime": 138,
},
{
    "_id": "999005",
    "id": 999005,
    "title": "Narnia: The Magician's Nephew",
    "overview": "Two children uncover magical rings that transport them into different worlds, leading to the creation of Narnia and the rise of the White Witch.",
    "poster_path": "https://image.tmdb.org/t/p/original/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg",
    "backdrop_path": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAERCAMAAAD/iZ1nAAABNVBMVEUAAAD2kkQAAAYAAAPzj0H6lEXIZxrMah3+mEjBZh4BAAD6k0LKZxgrGxLQbyL1kEFGKRnFdjukAwO1AAD/ypXphDPVdCf/y5f/xpJrUkD8v40bFhR9YkzSbR4eEwwOCQgwHRHpAAg6LiZlUELiqn9aRDTrs4fLnHX/0JvVpH5ZNRjhhj+1bjc/IxHthTSoVxtTMxulXyvjfS+iYjPCayqHUytrPyB4SihzXUxQPjYxJx4qIx9ANitRPTCLblkhGBE+LyRYQDVXST+adlmYdFezi2u7kWx0XEa1jm5lTjx+Z1TDlnKohWkTEhCWemIdDgaWTRiNTB9ZNh54Qxp6Ty9oPyLQfj9lNBOuaTU/KhyJSBRSMx60XRygUxt/RRhEJQ/NBAmMBwdfBQncAglTBwirAwZ9BQlA6spfAAALDElEQVR4nO2ci1/ixhaABwgvAwR2DfIwBImAEB5KeIusVXG7124VuCKrKO1ut///n3DP5AEJaCt6V6+35/v5q0lMhm9OzpyZpLqEIAiCIAiCIAiCIAiCIAiCIAiCIMgCUvOwKZJmy9Em7c/7cKDd7MSPmlKn2WqmCEl3iNg8FA+ba+lmvNNsN5v7rSZJS6+tTUiTHJCoRDpSN/7rfivV+tBMfZLITyRN2i1pn3TTJJU6iHZJs0k6aSISqXMA2+Lrm/8qpaPSJ0K67W4nRZpdKdVsSqAdlQ42m+JRWtpPpUi3Kx11JSlOyJoEytHNaOe1vYlEDg46LamZahP4+tjejB9ILdIi0k+tI7gRR91UOwqdOWw1f9pvSvtrRyKkkZTefy3ftdf64H8kB9uxzLGdtLe3tzdhF75l0uQgA99zsHu8PTvxl0wse0DICfykp553TEhqW0vv7ShJ5yDpD3LQmONlvDfOol0QOYz80luPEhI5PT5OkcPjs9jxCfw4tr6pn3gW6UZP04T0MifHcCzSO47ACZke+dAhHzdgjMbi5GA9qzb2EpypIXWA+D45y4JQVEzQIx9j2n+zWe289kZU2+hlSUIkZCOt3o2TGPnYI/QkKn62fd9H/BgyvxCS3elScTuEj8Q2dnZacHwzBnYke9baiKvnpXcISexAb3qRnZ2fVfEc6O6vt7IxeySqiW9DY2fQ2EtwmiHEvt0lqUgkkvkMEf+kHVfFRTi4fqLu79Ocobehp92CGJwOcynYxyJn9O5Qca2xkxcRT0W2u8eRTYj4ZuwU9iPZ09OOKg696MbSaSpD6a33urkY7WnvFNQ2TjI5tYPrmex6TxeHxk6OIy8TcZI6y9By0s7FD3P/gggCUDuIlIWI/wyFo5NLaSd2tzNnsNmFEyAjcp3PuV/p4Vz3U4729CgLPW1DYy/kbcWxWMqWpiacqxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRDkH0xc/Q0i+8v8zuR/kavAOZleeF0u7+3V8+TX7r38RwWkKPjKZZ/PBfh8E/9zmhL7k/758uG9arU/HNZCtee0vcyd4Har2qq6a/qsxq4E19XSQaUa5ks8Xx08q+klhiCuRlsLujfxrNauBWG4nBz2Ks83ntXuPSQDbgi5+/a6P6HqvovnteZ2g/kSfb704Vnt3scwILgv1NTMe0HdfU+WPh6HF8zzSyGv8/yzRs/9+KdJ/ZP8YO5bTtJVAHF3ILl4NF8qWcXjj2hqlXJUdLt8t8aOfYULZ1Bx99JAyfML4rV5iXm4D/9Wgo/+3Gufa6L31F5+QgV2qOLCZOHSJXFZnoWlUbhJxBP+ZHAwGFxe5oOmS0ee0aXlskRtT6nv7u72aWTs+Xo9Py0W80XY8cM8pCf5lfCEpFFzHL5urYcXxS9Zdl5lRh6PzWbzGMjj2T2IM05nwdJfluGgspaqdKdcqQgqSbo38bmT2kkT32R1cbvX7epT8/5fio84Tp7vfWkojBPcZVkGf6fTNuvU2MmwI1PKDhxElHm+TrfFBKmHA4FAXlR/dOHWxa9gnOafIu61X4N5wFIUF8QvbQzDWpKg5rE5Q3B5olij0TdGQINlrObAHs8bqZ8Eca++fW2IQ1X3lZ8kLpKJ4A4Edh8WH3EMw43M1wU1cXWTmt9o2zcgDuZW8dJMvGgWF1xqSYDJ2+USik8TF70C3MPkQ+KXLAPqIDf/xXaTOFEgbZikfphZMreIh8OGeFmvCBPfrctUGlcTJ0XwFqrzQmcVH7HjL06GC5muM4sPYKw6GYVenaTDFszNp4K4Ec9iJRyu6tteQc2PvOC2l2EeTT5NHK4HdRjcomNZfJdlgjRbbF/+QlxWMy3hsckjp9Uccvwe8aS+1JgIF/Dhq69cDHHSB3NhUq4TXdw05YeoBqSLudItporeqYQHjoacHMPOz90r6XlkER9qVXEq0CEK49MtPlEcuh4IzO4jiBsfRnYZlg49meOc88ZN4qLsnJUVUT06giFKe9nwPywOKa59o9kNA9R391TxBORKIJxfFg9pY60GIVfuEb8ZgbcRfE3crmZLYcw4HhRPCGqmTAVhSoc8rLm8q837c3E1WQLh4qJ4kOPUCu5gOI6ZhVwV9w9qYxnmH2bWIVHvDsyYDMdqh2FwGmk3F+8LXlrty9oIJXc+132r60eJn1cvqHhALa75SskQDxlzpgKz4myppYpfwoTPwsAMzWYcQ/yDTCv/WBNnZhEP8uGKKn4eCFPP3YCg3eIEfSRaaZE4F5+eQ6oFICL0eiPiuwWZ4QraTQxyDGcbKXNxyCD7jQID0+mR5YZFnJzTgs6q5krJJF7RxGnAxQsvPBPpBefW7XJPbo3zVhKnDGGCCJfn4o5LeKJgOKYwEHcLDA2iPA6axekWXbY4bX6rOMz9cLqaLAq3JF4MV6bky+6tEBCEydDvH07Up9HrFbLFKk76IF7Zg0gbOV4vMYUax0J9Y51w+2dLrbm4XsYdVvFxMEnznJorHGfUcUO8WqFrOoc3ELiaCHSJJ3i9MO+vsrpdECd9GD6VOzI1cnzEM3HiD7EcCzMMmBtZbhInYzpdJqzitOmRZr4s3q+opfAqTNek9EnUfacuWRafCv5a3GcRJ7c05vWiLn5ZKql5WmMUu1oRbXpozeKEFvKFHKc4Qqo5iBtrFU28XqmqH1kNh2l3/ZNJER77Vgw5jbjladsxUfO8oqVKiNfzU+sc5K1uaBGnO/KyOCEFWhXh68YsXq+EtUf9cFib57W/WryDSWiFkEPEXdYHTnuVmocrVHhQ4gvmv3VUWCPLLeKk4bF5FF3ctDJ00BIKWCJe4dU4Ewd8TtL0ueJqIXd4fdb3G2tEVM3ViFf5knmVTj6AhVMN+Q3Ub9MzkQLmdJrye8xHwbxGF+ic0YgqXtUKUL5C65cpKtfw4P/4Z7i8W+umw5TofjXiQbUoLrzQGtHCQl8VKXTiGc8vKsAAHXwOQgec1isu6eyvL93IbqnCV/R5pqpPGbPsmMLwfOz0WSwLPliYXdyVTc9Oa+p6vzIs3vGlEl+SR7L+0BYfwDhjnaxHLhRsTvju8cxfWow9Tk+t4GGdTs9oZM7zG5jC9FmrDo+fPL+Xz+fFerVCKZf39H7Yp/AYBg/S3sesb6987tsyVH63t2/9s94piJeTe3uNfL5WKBgvP+OFUGis1GqFRlEJhQq1fPBGuZldo4B5YVBTlJAcsrxegYIu01vTkBmer4ZkXq5O7cO9Wj5f37u902+avR/wli+Gw375EW9xRQHqELGfJ5aXwpCAlVXfAzfgLtiUe+qCo8CExJrMlRhlxUX3A5xfPFx98uGKZcw/huQIMhyWXsuvunbHdGkZ+nLPRQb/tb/TFvvV8OXfn2alZmNhxcWEaoN5pSo2xvAMwnGjlVt7MmJy5TAkFBtdcrEwgOVRKBQajWQnS7VDq7/yeUnWqLrsoa8rbDaOgy86b9pk5Qe8s/4BDMayjdWxwQr+5u8v+Z/BTusi0Lh50rvv1+LN/R9YBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ5Kmo//6Qw/H2/sWJ97+9J+T3d7+/tsfK/La19ZW8e//uzYX8+9bWdyr+2h4r8+7b1tbbFKe58ibF30OuvEnx79+2vr1J8fcQ8t/epDgMz2/f36T4u62ttxnxPyBX3qQ4ocPztT1Whoq/o7PnW+M7iNNceW2PVVn7+vUP4vj655+vLYIgCIIgCIIgCIIgCIL8n/Af8SZvbC0yimoAAAAASUVORK5CYII=",
    "genres": [
        { "id": 14, "name": "Fantasy" },
        { "id": 12, "name": "Adventure" },
        { "id": 10751, "name": "Family" }
    ],
    "casts": [
        { "name": "Daniel Craig", "profile_path": "https://image.tmdb.org/t/p/original/mBBV5D7h2y5f0gkVbM8l2L4vV8P.jpg" },
        { "name": "Emma Mackey", "profile_path": "https://image.tmdb.org/t/p/original/jtKp4C0Y0Jk4w1Wn2gR0wV9X8YV.jpg" },
        { "name": "Carey Mulligan", "profile_path": "https://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg" },
        { "name": "Meryl Streep", "profile_path": "https://image.tmdb.org/t/p/original/eMst2s2Q5v2L8FhJr6g1J7n7bXU.jpg" },
        { "name": "Denise Gough", "profile_path": "https://image.tmdb.org/t/p/original/9xV6Qf7d8lQk2xWbY5p8M0vXrQ1.jpg" }
    ],
    "release_date": "2026-11-26",
    "original_language": "en",
    "tagline": "Every world begins with a single door.",
    "vote_average": 8.3,
    "vote_count": 22000,
    "runtime": 150,
}
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0],
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1],
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2],
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3],
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4],
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5],
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "Krishna", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "krishna", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[1],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "krishna", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[2],
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]