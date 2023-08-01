import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detials',
  templateUrl: './movie-detials.component.html',
  styleUrls: ['./movie-detials.component.css']
})
export class MovieDetialsComponent {
  basepath = 'https://image.tmdb.org/t/p/w780';

  selectedmovie;
  selectedMovieId:any='';
  
  allMovies = [
    {
      adult: false,
      backdrop_path: '/yF1eOkaYvwiORauRCPWznV9xVvi.jpg',
      genre_ids: [28, 12, 878],
      id: 298618,
      original_language: 'en',
      original_title: 'The Flash',
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      popularity: 5312.805,
      poster_path: '/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
      release_date: '2023-06-13',
      title: 'The Flash',
      video: false,
      vote_average: 6.9,
      vote_count: 1630,
    },
    {
      adult: false,
      backdrop_path: '/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg',
      genre_ids: [35, 12, 14],
      id: 346698,
      original_language: 'en',
      original_title: 'Barbie',
      overview:
        'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
      popularity: 5224.37,
      poster_path: '/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
      release_date: '2023-07-19',
      title: 'Barbie',
      video: false,
      vote_average: 7.6,
      vote_count: 1244,
    },
    {
      adult: false,
      backdrop_path: '/2vFuG6bWGyQUzYS9d69E5l85nIz.jpg',
      genre_ids: [28, 12, 878],
      id: 667538,
      original_language: 'en',
      original_title: 'Transformers: Rise of the Beasts',
      overview:
        'When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.',
      popularity: 4835.711,
      poster_path: '/gPbM0MK8CP8A174rmUwGsADNYKD.jpg',
      release_date: '2023-06-06',
      title: 'Transformers: Rise of the Beasts',
      video: false,
      vote_average: 7.5,
      vote_count: 1940,
    },
    {
      adult: false,
      backdrop_path: '/f7UI3dYpr7ZUHGo0iIr1Qvy1VPe.jpg',
      genre_ids: [16, 10751, 14, 35],
      id: 1040148,
      original_language: 'en',
      original_title: 'Ruby Gillman, Teenage Kraken',
      overview:
        "Ruby Gillman, a sweet and awkward high school student, discovers she's a direct descendant of the warrior kraken queens. The kraken are sworn to protect the oceans of the world against the vain, power-hungry mermaids. Destined to inherit the throne from her commanding grandmother, Ruby must use her newfound powers to protect those she loves most.",
      popularity: 2631.829,
      poster_path: '/kgrLpJcLBbyhWIkK7fx1fM4iSvf.jpg',
      release_date: '2023-06-28',
      title: 'Ruby Gillman, Teenage Kraken',
      video: false,
      vote_average: 7.7,
      vote_count: 246,
    },
    {
      adult: false,
      backdrop_path: '/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg',
      genre_ids: [16, 12, 10751, 14],
      id: 459003,
      original_language: 'uk',
      original_title: 'Мавка: Лісова пісня',
      overview:
        'Mavka — a Soul of the Forest and its Warden — faces an impossible choice between love and her duty as guardian to the Heart of the Forest, when she falls in love with a human — the talented young musician Lukas.',
      popularity: 1952.718,
      poster_path: '/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg',
      release_date: '2023-03-02',
      title: 'Mavka: The Forest Song',
      video: false,
      vote_average: 7.5,
      vote_count: 128,
    },
    {
      adult: false,
      backdrop_path: '/J0XkW5toJLGEucm1pLDvTHXaKC.jpg',
      genre_ids: [28, 18, 10752],
      id: 1076487,
      original_language: 'en',
      original_title: 'Warhorse One',
      overview:
        'A gunned down Navy SEAL Master Chief must guide a child to safety through a gauntlet of hostile Taliban insurgents and survive the brutal Afghanistan wilderness.',
      popularity: 1712.952,
      poster_path: '/laFhAOqkWFi4sFeGPg8uun2Julw.jpg',
      release_date: '2023-06-30',
      title: 'Warhorse One',
      video: false,
      vote_average: 7,
      vote_count: 59,
    },
    {
      adult: false,
      backdrop_path: '/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
      genre_ids: [18, 36],
      id: 872585,
      original_language: 'en',
      original_title: 'Oppenheimer',
      overview:
        'The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.',
      popularity: 1330.42,
      poster_path: '/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
      release_date: '2023-07-19',
      title: 'Oppenheimer',
      video: false,
      vote_average: 8.4,
      vote_count: 743,
    },
    {
      adult: false,
      backdrop_path: '/oqP1qEZccq5AD9TVTIaO6IGUj7o.jpg',
      genre_ids: [14, 28, 12],
      id: 455476,
      original_language: 'en',
      original_title: 'Knights of the Zodiac',
      overview:
        'When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?',
      popularity: 1285.258,
      poster_path: '/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg',
      release_date: '2023-04-27',
      title: 'Knights of the Zodiac',
      video: false,
      vote_average: 6.6,
      vote_count: 624,
    },
    {
      adult: false,
      backdrop_path: '/uyi0Ytkkw4pgT4GkYZHdqravjT5.jpg',
      genre_ids: [28, 18],
      id: 678512,
      original_language: 'en',
      original_title: 'Sound of Freedom',
      overview:
        'The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.',
      popularity: 1165.548,
      poster_path: '/1laG6ntAYpTOxx2H5Gh0Ku0HZON.jpg',
      release_date: '2023-07-03',
      title: 'Sound of Freedom',
      video: false,
      vote_average: 8,
      vote_count: 200,
    },
    {
      adult: false,
      backdrop_path: '/s381LdkcRY27rVsIiEZK5IPOe4W.jpg',
      genre_ids: [16, 28, 27],
      id: 1083862,
      original_language: 'ja',
      original_title: 'バイオハザード：デスアイランド',
      overview:
        'In San Francisco, Jill Valentine is dealing with a zombie outbreak and a new T-Virus, Leon Kennedy is on the trail of a kidnapped DARPA scientist, and Claire Redfield is investigating a monstrous fish that is killing whales in the bay. Joined by Chris Redfield and Rebecca Chambers, they discover the trail of clues from their separate cases all converge on the same location, Alcatraz Island, where a new evil has taken residence and awaits their arrival.',
      popularity: 1139.274,
      poster_path: '/qayga07ICNDswm0cMJ8P3VwklFZ.jpg',
      release_date: '2023-06-22',
      title: 'Resident Evil: Death Island',
      video: false,
      vote_average: 8.3,
      vote_count: 169,
    },
    {
      adult: false,
      backdrop_path: '/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
      genre_ids: [28, 12, 16, 878],
      id: 569094,
      original_language: 'en',
      original_title: 'Spider-Man: Across the Spider-Verse',
      overview:
        'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      popularity: 1066.694,
      poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      release_date: '2023-05-31',
      title: 'Spider-Man: Across the Spider-Verse',
      video: false,
      vote_average: 8.5,
      vote_count: 2476,
    },
    {
      adult: false,
      backdrop_path: '/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg',
      genre_ids: [16, 35, 10751, 14, 10749],
      id: 976573,
      original_language: 'en',
      original_title: 'Elemental',
      overview:
        'In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.',
      popularity: 983.361,
      poster_path: '/8riWcADI1ekEiBguVB9vkilhiQm.jpg',
      release_date: '2023-06-14',
      title: 'Elemental',
      video: false,
      vote_average: 7.6,
      vote_count: 617,
    },
    {
      adult: false,
      backdrop_path: '/hjyqNFHx5wIO8dqaRi0v2ix1wiR.jpg',
      genre_ids: [28, 80, 27],
      id: 808396,
      original_language: 'en',
      original_title: 'God Is a Bullet',
      overview:
        'Based on true events and the novel of the same name. Vice detective Bob Hightower finds his ex-wife murdered and daughter kidnapped by a cult. Frustrated by the botched official investigations, he quits the force and infiltrates the cult to hunt down the leader with the help of the cult’s only female victim escapee, Case Hardin.',
      popularity: 924.003,
      poster_path: '/5kiLS9nsSJxDdlYUyYGiSUt8Fi8.jpg',
      release_date: '2023-06-22',
      title: 'God Is a Bullet',
      video: false,
      vote_average: 6.2,
      vote_count: 34,
    },
    {
      adult: false,
      backdrop_path: '/sGGNrDPV8VFJzOTZOcsFiJ45Xp3.jpg',
      genre_ids: [28, 80],
      id: 987507,
      original_language: 'ja',
      original_title: 'バッドシティ',
      overview:
        'Kensuke Sonomura directs the legendary Hitoshi Ozawa in this ultimate V-Cinema actioner.  Kaiko City is plagued with poverty and crime. When a corrupt businessman decides to run for mayor and starts eliminating opponents from the rival mafia, a former police captain serving time for murder is secretly released and put in charge of a special task force to arrest him.',
      popularity: 706.538,
      poster_path: '/zjWAjosdXELkaqCnlc1s8FQtIZL.jpg',
      release_date: '2022-07-05',
      title: 'Bad City',
      video: false,
      vote_average: 7,
      vote_count: 6,
    },
    {
      adult: false,
      backdrop_path: '/qe0oK0A5ovrlgH39Ga13dxxw9MU.jpg',
      genre_ids: [28, 35, 80, 12],
      id: 1130818,
      original_language: 'en',
      original_title: 'Sheroes',
      overview:
        'When four thick-as-thieves friends arrive in Thailand, they quickly find themselves in over their heads. Fighting to stay alive, they employ their unique set of skills and unleash their fierce loyalty in a heart-pumping battle for survival.',
      popularity: 674.836,
      poster_path: '/itUAkQmihFmRxMYTa3AkvIzMCV4.jpg',
      release_date: '2023-06-23',
      title: 'Sheroes',
      video: false,
      vote_average: 6.4,
      vote_count: 83,
    },
    {
      adult: false,
      backdrop_path: '/euO884625eFLfKLoc0MtFs5QiOS.jpg',
      genre_ids: [9648, 53, 28],
      id: 1070802,
      original_language: 'en',
      original_title: 'Confidential Informant',
      overview:
        'During a crack epidemic two narcotics agents hunting for a cop killer. Hoping for leads, Moran and Thorton pay off a junkie informant. To provide for his wife and son, Moran involves the stool pigeon in a deadly scheme. This causes the partners to come under the scrutiny of a suspicious internal affairs agent.',
      popularity: 671.791,
      poster_path: '/kCyAyqF6TKylJFuddaHtqq20b62.jpg',
      release_date: '2023-06-27',
      title: 'Confidential Informant',
      video: false,
      vote_average: 6.4,
      vote_count: 68,
    },
    {
      adult: false,
      backdrop_path: '/hPcP1kv6vrkRmQO3YgV1H97FE5Q.jpg',
      genre_ids: [27, 9648, 53],
      id: 614479,
      original_language: 'en',
      original_title: 'Insidious: The Red Door',
      overview:
        "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
      popularity: 631.34,
      poster_path: '/uS1AIL7I1Ycgs8PTfqUeN6jYNsQ.jpg',
      release_date: '2023-07-05',
      title: 'Insidious: The Red Door',
      video: false,
      vote_average: 6,
      vote_count: 235,
    },
    {
      adult: false,
      backdrop_path: '/wRxLAw4l17LqiFcPLkobriPTZAw.jpg',
      genre_ids: [28, 53],
      id: 697843,
      original_language: 'en',
      original_title: 'Extraction 2',
      overview:
        "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
      popularity: 625.947,
      poster_path: '/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg',
      release_date: '2023-06-09',
      title: 'Extraction 2',
      video: false,
      vote_average: 7.6,
      vote_count: 1460,
    },
    {
      adult: false,
      backdrop_path: '/1kSpSW5geG01phAYENdFeWDZXMy.jpg',
      genre_ids: [28, 12, 53],
      id: 575264,
      original_language: 'en',
      original_title: 'Mission: Impossible - Dead Reckoning Part One',
      overview:
        "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
      popularity: 516.709,
      poster_path: '/NNxYkU70HPurnNCSiCjYAmacwm.jpg',
      release_date: '2023-07-08',
      title: 'Mission: Impossible - Dead Reckoning Part One',
      video: false,
      vote_average: 7.8,
      vote_count: 684,
    },
    {
      adult: false,
      backdrop_path: '/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg',
      genre_ids: [27, 53],
      id: 890771,
      original_language: 'en',
      original_title: 'The Black Demon',
      overview:
        "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
      popularity: 458.925,
      poster_path: '/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg',
      release_date: '2023-04-26',
      title: 'The Black Demon',
      video: false,
      vote_average: 6.3,
      vote_count: 377,
    },
  ];

  constructor(public myRouts:ActivatedRoute) {
    this.selectedMovieId=this.myRouts.snapshot.paramMap.get('id');
      for (const element of this.allMovies) {
        if(element.id==this.selectedMovieId){
          this.selectedmovie=element
        }
      }
      console.log(this.selectedmovie)
     }
}
