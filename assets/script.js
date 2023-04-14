/*
let arr = [
  "theRaid2",
  "cloudAtlas",
  "getOut",
  "drive",
  "whiteChicks",
  "trainingDay",
  "the-hatefulHeight",
  "the-guardiansOfTheGalaxy",
  "fastAndFurious",
  "avatar",
];
*/
let collection = [
  {
    name: "The Raid 2",
    releaseYear: "2014",
    director: "Gareth Evans",
    casting: [
      "Iko Uwais",
      "Yayan Ruhian",
      "Arifin Putra",
      "Oka Antara",
      "Tio Pakusadewo",
      "Alex Abbad",
    ],
    picture:
      "https://confessionsfromageekmind.files.wordpress.com/2014/09/the-raid-2.jpg",
    genres: ["Action", "Policier", "Thriller"],
    description:
      "Only a short time after the first raid, Rama goes undercover with the thugs of Jakarta and plans to bring down the syndicate and uncover the corruption within his police force.",
    linkTrailer: "https://www.youtube.com/watch?v=22KAzBWsTWQ",
  },
  {
    name: "Cloud Atlas",
    releaseYear: "2012",
    director: ["Tom Tykwer", "Lana Wachowski", "Lilly Wachowski"],
    casting: [
      "Tom Hanks",
      "Halle Berry",
      "Jim Sturgess",
      "Hugo Weaving",
      "Jim Broadbent",
    ],
    picture:
      "https://www.france.tv/image/vignette_16x9/800/450/9/1/b/7489889c-vodvignette16x917b63f455b8f49b0139bca9bd5688a31b4146adc5a690c5b27f68cc714559b19.jpg",
    genres: ["Drama", "Mystery", "Sci-Fi"],
    description:
      "The stories of six people's 'souls' across time, and the stories are interweaved as they advance, showing how they all interact. It is about how the people's lives are connected with and influence each other.",
    linkTrailer: "https://www.youtube.com/watch?v=ByehYal_cCs",
  },
  {
    name: "Get Out",
    releaseYear: "2017",
    director: "Jordan Peele",
    casting: [
      "Daniel Kaluuya",
      "Allison Williams",
      "Lakeith Stanfield",
      "Lil Rel Howery",
      "Catherine Keener",
    ],
    picture:
      "https://charactersonthecouch.com/wp-content/uploads/2020/11/get-out-high-rez.jpg",
    genres: ["Horreur", "Thriller"],
    description:
      "A young African-American visits his White girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
    linkTrailer: "https://www.youtube.com/watch?v=DzfpyUB60YY",
  },
  {
    name: "Drive",
    releaseYear: "2011",
    director: "Nicolas Winding Refn",
    casting: [
      "Ryan Gosling",
      "Carey Mulligan",
      "Bryan Cranston",
      "Albert Brooks",
      "Oscar Isaac",
    ],
    picture:
      "https://variety.com/wp-content/uploads/2018/10/drive.jpg?w=681&h=383&crop=1",
    genres: ["Action", "Drama"],
    description:
      "A mysterious Hollywood action film stuntman gets in trouble with gangsters when he tries to help his neighbor's husband rob a pawn shop while serving as his getaway driver.",
    linkTrailer: "https://www.youtube.com/watch?v=KBiOF3y1W0Y",
  },
  {
    name: "White Chicks",
    releaseYear: "2004",
    director: "Keenen Ivory Wayans",
    casting: [
      "Marlon Wayans",
      "Shawn Wayans",
      "Busy Philipps",
      "Maitland Ward",
      "Jaime King",
    ],
    picture:
      "https://img2.hulu.com/user/v3/artwork/fb55ca74-e775-412e-b0bd-33e40414f3f3?base_image_bucket_name=image_manager&base_image=150625a3-fde3-4e2e-aee6-e8ff56330ac4&region=US&format=jpeg&size=952x536",
    genres: ["Comedy", "Crime"],
    description:
      "Two disgraced FBI agents go way undercover in an effort to protect hotel heiresses the Wilson sisters from a kidnapping plot.",
    linkTrailer: "https://www.youtube.com/watch?v=aeVkbNka9HM",
  },
  {
    name: "Training Day",
    releaseYear: "2001",
    director: "Antoine Fuqua",
    casting: [
      "Denzel Washington",
      "Ethan Hawke",
      "Scott Glenn",
      "Cliff Curtis",
      "Harris Yulin",
    ],
    picture:
      "https://benjweinberg.files.wordpress.com/2018/01/training-day.jpg?w=640",
    genres: ["Action", "Crime", "Drama"],
    description:
      "A rookie cop spends his first day as a Los Angeles narcotics officer with a rogue detective who isn't what he appears to be.",
    linkTrailer: "https://www.youtube.com/watch?v=DXPJqRtkDP0",
  },
  {
    name: "The Hatefull Height",
    releaseYear: "2015",
    director: "Quentin Tarantino",
    casting: [
      "Samuel L. Jackson",
      "Jennifer Jason Leigh",
      "Kurt Russel",
      "Tim Roth",
      "Walton Goggins",
    ],
    picture:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/05/11/hateeightposter.jpg",
    genres: ["Crime", "Drama", "Mystery"],
    description:
      "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
    linkTrailer: "https://www.youtube.com/watch?v=nIOmotayDMY",
  },
  {
    name: "Guardians of the Galaxy",
    releaseYear: "2014",
    director: "James Gunn",
    casting: [
      "Chris Pratt",
      "Vin Diesel",
      "Bradley Cooper",
      "Zoe Saldana",
      "Dave Bauista",
    ],
    picture:
      "https://bibliosanctumblog.files.wordpress.com/2014/08/guardians_poster_via_marvel.jpg?w=980&h=600&crop=1",
    genres: ["Action", "Adventure", "Comedy"],
    description:
      "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
    linkTrailer: "https://www.youtube.com/watch?v=d96cjJhvlMA",
  },
  {
    name: "Fast and Furious",
    releaseYear: "2001",
    director: "Rob Cohen",
    casting: [
      "Vin Diesel",
      "Paul Walker",
      "Michelle Rodriguez",
      "Jordana Bezwster",
      "Matt Schulde",
    ],
    picture:
      "https://i0.wp.com/jasonsmovieblog.com/wp-content/uploads/2019/07/the-fast-and-the-furious-banner.jpg?fit=1000%2C320&ssl=1",
    genres: ["Action", "Crime", "Thriller"],
    description:
      "Los Angeles police officer Brian O'Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
    linkTrailer: "https://www.youtube.com/watch?v=2TAOizOnNPo",
  },
  {
    name: "Avatar",
    releaseYear: "2009",
    director: "James Cameron",
    casting: [
      "Sam Worthington",
      "Zoe Saldana",
      "Sigourney",
      "Michelle Rodriguez",
      "Stephen Lang",
    ],
    picture:
      "https://www.intelligence-artificielle-school.com/wp-content/uploads/2022/11/718285-avatar-2-a-enfin-sa-date-de-sortie-en-france-1-1368x513.jpeg",
    genres: ["Action", "Adventure", "Fantasy"],
    description:
      "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    linkTrailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
  },
];
let main = document.querySelector("main");

collection.forEach((i) => {
  let article = document.createElement("article");
  let sectionOne = document.createElement("section");
  let sectionTwo = document.createElement("section");
  let divOne = document.createElement("div");
  let divTwo = document.createElement("div");
  let divGenre = document.createElement("div");

  let a = i.genres;
  a.forEach((c) => {
    let p = document.createElement("p");
    p.textContent = c;
    divGenre.append(p);
  });

  let h2 = document.createElement("h2");
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let aLink = document.createElement("a");
  let Trailer = document.createTextNode("Trailer");
  let trashBin = document.createElement("div");

  sectionOne.setAttribute("class", "image");
  sectionTwo.setAttribute("class", "content");
  divOne.setAttribute("class", "text");
  divTwo.setAttribute("class", "footer");
  divGenre.setAttribute("class", "genres");
  trashBin.setAttribute("class", "trashBin");

  h2.setAttribute("class", "name");
  p1.setAttribute("class", "releaseYear");
  p2.setAttribute("class", "directory");
  p3.setAttribute("class", "casting");
  p4.setAttribute("class", "description");

  sectionOne.style.backgroundImage = "url(" + i.picture + ")";

  h2.textContent = i.name;
  p1.textContent = i.releaseYear;
  p2.textContent = "By " + i.director;
  p3.textContent = "Casting : " + i.casting;
  p4.textContent = i.description;
  aLink.href = i.linkTrailer;
  aLink.target = "_blank";

  main.append(article);
  article.append(sectionOne);
  article.append(sectionTwo);
  sectionTwo.append(divOne);
  sectionTwo.append(divTwo);
  divOne.append(divGenre);
  divTwo.append(trashBin);

  divOne.append(h2);
  divOne.append(p1);
  divOne.append(p2);
  divOne.append(p3);
  divOne.append(p4);
  divTwo.append(aLink);
  aLink.append(Trailer);
});
