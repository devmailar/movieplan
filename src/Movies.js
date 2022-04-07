import React from "react";

const API_URL = "https://api.themoviedb.org/3";
const API_GATEWAY = "/discover/movie?sort_by=popularity.desc&"
const API_KEY = "api_key=54cfa8fd3e538287147c85dbc892b4da";
const API_REQUEST = API_URL + API_GATEWAY + API_KEY

export default function Movies() {

  const searchForMovies = async (req, res) => {
    const response = await fetch(API_REQUEST);
    const data = await response.json();
    console.log(data);
    return data;
  }

  React.useEffect(() => {
    searchForMovies();
  }, []);

  const [movieData] = React.useState([
    {
      "adult": false,
      "backdrop_path": "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
      "genre_ids": [
        16,
        10751,
        35,
        14
      ],
      "id": 508947,
      "original_language": "en",
      "original_title": "Turning Red",
      "overview": "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
      "popularity": 5830.184,
      "poster_path": "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
      "release_date": "2022-03-01",
      "title": "Turning Red",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 1300
    },
    {
      "adult": false,
      "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 634649,
      "original_language": "en",
      "original_title": "Spider-Man: No Way Home",
      "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      "popularity": 5743.837,
      "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      "release_date": "2021-12-15",
      "title": "Spider-Man: No Way Home",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 10795
    },
    {
      "adult": false,
      "backdrop_path": "/t7I942V5U1Ggn6OevN75u3sNYH9.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 760868,
      "original_language": "sv",
      "original_title": "Svart krabba",
      "overview": "To end an apocalyptic war and save her daughter, a reluctant soldier embarks on a desperate mission to cross a frozen sea carrying a top-secret cargo.",
      "popularity": 2638.559,
      "poster_path": "/mcIYHZYwUbvhvUt8Lb5nENJ7AlX.jpg",
      "release_date": "2022-03-18",
      "title": "Black Crab",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 232
    },
    {
      "adult": false,
      "backdrop_path": "/ewUqXnwiRLhgmGhuksOdLgh49Ch.jpg",
      "genre_ids": [
        28,
        12,
        35,
        878,
        18
      ],
      "id": 696806,
      "original_language": "en",
      "original_title": "The Adam Project",
      "overview": "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self on a mission to save the future.",
      "popularity": 2547.296,
      "poster_path": "/wFjboE0aFZNbVOF05fzrka9Fqyx.jpg",
      "release_date": "2022-03-11",
      "title": "The Adam Project",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 1429
    },
    {
      "adult": false,
      "backdrop_path": "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
      "genre_ids": [
        16,
        35,
        10751,
        14
      ],
      "id": 568124,
      "original_language": "en",
      "original_title": "Encanto",
      "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      "popularity": 2166.812,
      "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
      "release_date": "2021-11-24",
      "title": "Encanto",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 5751
    },
    {
      "adult": false,
      "backdrop_path": "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
      "genre_ids": [
        80,
        9648,
        53
      ],
      "id": 414906,
      "original_language": "en",
      "original_title": "The Batman",
      "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
      "popularity": 2015.683,
      "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
      "release_date": "2022-03-01",
      "title": "The Batman",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 2579
    },
    {
      "adult": false,
      "backdrop_path": "/2hGjmgZrS1nlsEl5PZorn7EsmzH.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 823625,
      "original_language": "en",
      "original_title": "Blacklight",
      "overview": "Travis Block is a shadowy Government agent who specializes in removing operatives whose covers have been exposed. He then has to uncover a deadly conspiracy within his own ranks that reaches the highest echelons of power.",
      "popularity": 1930.834,
      "poster_path": "/7gFo1PEbe1CoSgNTnjCGdZbw0zP.jpg",
      "release_date": "2022-02-10",
      "title": "Blacklight",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 223
    },
    {
      "adult": false,
      "backdrop_path": "/tq3klWQevRK0Or0cGhsw0h3FDWQ.jpg",
      "genre_ids": [
        12,
        16,
        35,
        10751,
        14
      ],
      "id": 676705,
      "original_language": "fr",
      "original_title": "Pil's Adventures",
      "overview": "Pil, a little vagabond girl, lives on the streets of the medieval city of Roc-en-Brume, along with her three tame weasels. She survives of food stolen from the castle of the sinister Regent Tristain. One day, to escape his guards, Pil disguises herself as a princess. Thus she embarks upon a mad, delirious adventure, together with Crobar, a big clumsy guard who thinks she's a noble, and Rigolin, a young crackpot jester. Pil is going to have to save Roland, rightful heir to the throne under the curse of a spell. This adventure will turn the entire kingdom upside down, and teach Pil that nobility can be found in all of us.",
      "popularity": 1865.415,
      "poster_path": "/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg",
      "release_date": "2021-08-11",
      "title": "Pil's Adventures",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 32
    },
    {
      "adult": false,
      "backdrop_path": "/AqwA5sHHIhrz0r1TpwPl0Uh3nMG.jpg",
      "genre_ids": [
        27
      ],
      "id": 661791,
      "original_language": "es",
      "original_title": "La abuela",
      "overview": "A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke. But spending just a few days with this relative turns into an unexpected nightmare.",
      "popularity": 1622.589,
      "poster_path": "/cdzUKycvzn0X6mQMxDZP9el81lz.jpg",
      "release_date": "2022-01-28",
      "title": "The Grandmother",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 49
    },
    {
      "adult": false,
      "backdrop_path": "/tj4lzGgHrfjnjVqAKkLIjFqPSyO.jpg",
      "genre_ids": [
        28,
        878,
        14,
        27
      ],
      "id": 526896,
      "original_language": "en",
      "original_title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "popularity": 1548.576,
      "poster_path": "/h4WLN3cmEjCsH1fNGRfvGV6IPBX.jpg",
      "release_date": "2022-03-30",
      "title": "Morbius",
      "video": false,
      "vote_average": 5.7,
      "vote_count": 94
    },
    {
      "adult": false,
      "backdrop_path": "/f2J8DpT5bqV0AiI9VVcfiuqKo5l.jpg",
      "genre_ids": [
        28,
        99,
        35
      ],
      "id": 656663,
      "original_language": "en",
      "original_title": "Jackass Forever",
      "overview": "Celebrate the joy of a perfectly executed shot to the groin as Johnny Knoxville, Steve-O and the rest of the gang return alongside some newcomers for one final round of hilarious, wildly absurd and often dangerous displays of stunts and comedy.",
      "popularity": 1250.551,
      "poster_path": "/ugIdyvtAzHWOguD91UjHKoAvfum.jpg",
      "release_date": "2022-02-01",
      "title": "Jackass Forever",
      "video": false,
      "vote_average": 7,
      "vote_count": 181
    },
    {
      "adult": false,
      "backdrop_path": "/33wnBK5NxvuKQv0Cxo3wMv0eR7F.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 833425,
      "original_language": "en",
      "original_title": "No Exit",
      "overview": "Stranded at a rest stop in the mountains during a blizzard, a recovering addict discovers a kidnapped child hidden in a car belonging to one of the people inside the building which sets her on a terrifying struggle to identify who among them is the kidnapper.",
      "popularity": 1364.771,
      "poster_path": "/5cnLoWq9o5tuLe1Zq4BTX4LwZ2B.jpg",
      "release_date": "2022-02-25",
      "title": "No Exit",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 287
    },
    {
      "adult": false,
      "backdrop_path": "/yzH5zvuEzzsHLZnn0jwYoPf0CMT.jpg",
      "genre_ids": [
        53,
        28
      ],
      "id": 760926,
      "original_language": "en",
      "original_title": "Gold",
      "overview": "In the not-too-distant future, two drifters traveling through the desert stumble across the biggest gold nugget ever found and the dream of immense wealth and greed takes hold. They hatch a plan to excavate their bounty, with one man leaving to secure the necessary tools while the other remains with the gold. The man who remains must endure harsh desert elements, ravenous wild dogs, and mysterious intruders, while battling the sinking suspicion that he has been abandoned to his fate.",
      "popularity": 1426.199,
      "poster_path": "/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg",
      "release_date": "2022-01-13",
      "title": "Gold",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 150
    },
    {
      "adult": false,
      "backdrop_path": "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg",
      "genre_ids": [
        28,
        35,
        80,
        53
      ],
      "id": 512195,
      "original_language": "en",
      "original_title": "Red Notice",
      "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
      "popularity": 1305.887,
      "poster_path": "/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
      "release_date": "2021-11-04",
      "title": "Red Notice",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 3360
    },
    {
      "adult": false,
      "backdrop_path": "/7CamWBejQ9JQOO5vAghZfrFpMXY.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 928381,
      "original_language": "fr",
      "original_title": "Sans répit",
      "overview": "After going to extremes to cover up an accident, a corrupt cop's life spirals out of control when he starts receiving threats from a mysterious witness.",
      "popularity": 1170.848,
      "poster_path": "/9MP21x0OPv0R72obd63tMHssmGt.jpg",
      "release_date": "2022-02-25",
      "title": "Restless",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 192
    },
    {
      "adult": false,
      "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
      "genre_ids": [
        28,
        878,
        35,
        10751
      ],
      "id": 675353,
      "original_language": "en",
      "original_title": "Sonic the Hedgehog 2",
      "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
      "popularity": 1595.034,
      "poster_path": "/1j6JtMRAhdO3RaXRtiWdPL5D3SW.jpg",
      "release_date": "2022-03-30",
      "title": "Sonic the Hedgehog 2",
      "video": false,
      "vote_average": 8.2,
      "vote_count": 40
    },
    {
      "adult": false,
      "backdrop_path": "/lRbDyjI7HEaXxflFQbYpqHRGFBJ.jpg",
      "genre_ids": [
        80,
        18,
        9648,
        53
      ],
      "id": 505026,
      "original_language": "en",
      "original_title": "Death on the Nile",
      "overview": "Belgian sleuth Hercule Poirot boards a glamorous river steamer with enough champagne to fill the Nile. But his Egyptian vacation turns into a thrilling search for a murderer when a picture-perfect couple’s idyllic honeymoon is tragically cut short.",
      "popularity": 1409.658,
      "poster_path": "/kVr5zIAFSPRQ57Y1zE7KzmhzdMQ.jpg",
      "release_date": "2022-02-09",
      "title": "Death on the Nile",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 846
    },
    {
      "adult": false,
      "backdrop_path": "/qBLEWvJNVsehJkEJqIigPsWyBse.jpg",
      "genre_ids": [
        16,
        10751,
        14,
        35,
        12
      ],
      "id": 585083,
      "original_language": "en",
      "original_title": "Hotel Transylvania: Transformania",
      "overview": "When Van Helsing's mysterious invention, the \"Monsterfication Ray,\" goes haywire, Drac and his monster pals are all transformed into humans, and Johnny becomes a monster. In their new mismatched bodies, Drac and Johnny must team up and race across the globe to find a cure before it's too late, and before they drive each other crazy.",
      "popularity": 1138.353,
      "poster_path": "/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg",
      "release_date": "2022-02-25",
      "title": "Hotel Transylvania: Transformania",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 580
    },
    {
      "adult": false,
      "backdrop_path": "/cugmVwK0N4aAcLibelKN5jWDXSx.jpg",
      "genre_ids": [
        16,
        28,
        14,
        12
      ],
      "id": 768744,
      "original_language": "ja",
      "original_title": "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
      "overview": "A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.",
      "popularity": 1141.7,
      "poster_path": "/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg",
      "release_date": "2021-08-06",
      "title": "My Hero Academia: World Heroes' Mission",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 132
    },
    {
      "adult": false,
      "backdrop_path": "/4OTYefcAlaShn6TGVK33UxLW9R7.jpg",
      "genre_ids": [
        28,
        12,
        53,
        10752
      ],
      "id": 476669,
      "original_language": "en",
      "original_title": "The King's Man",
      "overview": "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
      "popularity": 1054.626,
      "poster_path": "/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg",
      "release_date": "2021-12-22",
      "title": "The King's Man",
      "video": false,
      "vote_average": 7,
      "vote_count": 2199
    }
  ]);

  return (

    movieData.map((movieData) => {
      return (
        <div className="App-movies" >
          <div className="movie">
            <div className="movie-poster">
              <img src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt="movie-poster" />
            </div>

            <div className="movie-info">
              <h2 className="movie-title">{movieData.title}</h2>
              <p className="movie-description">{movieData.overview}</p>
              {/* <p className="movie-rating">Movie Rating</p> */}
            </div>
          </div>
        </div >
      )
    })
  )
}