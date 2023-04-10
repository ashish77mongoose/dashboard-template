import React, { useState } from "react";
import { FiAward } from "react-icons/fi";
import { BiDollarCircle } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { MdComputer, MdThumbUp } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { LinearProgress } from "@mui/material";
const DashboardLanding = () => {
  const data = [
    {
      id: 1,
      first_name: "Arlee",
      last_name: "Kobierski",
      email: "akobierski0@shinystat.com",
      gender: "Female",
    },
    {
      id: 2,
      first_name: "Robenia",
      last_name: "Burk",
      email: "rburk1@hexun.com",
      gender: "Female",
    },
    {
      id: 3,
      first_name: "Helyn",
      last_name: "Faint",
      email: "hfaint2@flavors.me",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Lazare",
      last_name: "McCritichie",
      email: "lmccritichie3@purevolume.com",
      gender: "Male",
    },
    {
      id: 5,
      first_name: "Trevor",
      last_name: "Bruyett",
      email: "tbruyett4@google.pl",
      gender: "Male",
    },
    {
      id: 6,
      first_name: "Reuben",
      last_name: "Gonsalo",
      email: "rgonsalo5@nationalgeographic.com",
      gender: "Male",
    },
    {
      id: 7,
      first_name: "Berny",
      last_name: "Bockman",
      email: "bbockman6@wp.com",
      gender: "Male",
    },
    {
      id: 8,
      first_name: "Reta",
      last_name: "Burress",
      email: "rburress7@seesaa.net",
      gender: "Female",
    },
    {
      id: 9,
      first_name: "Washington",
      last_name: "Westrey",
      email: "wwestrey8@blog.com",
      gender: "Male",
    },
    {
      id: 10,
      first_name: "Evelina",
      last_name: "Kopec",
      email: "ekopec9@nih.gov",
      gender: "Female",
    },
    {
      id: 11,
      first_name: "Hestia",
      last_name: "Titley",
      email: "htitleya@dropbox.com",
      gender: "Female",
    },
    {
      id: 12,
      first_name: "Krishna",
      last_name: "Moreing",
      email: "kmoreingb@bandcamp.com",
      gender: "Male",
    },
    {
      id: 13,
      first_name: "Egbert",
      last_name: "Ganders",
      email: "egandersc@infoseek.co.jp",
      gender: "Male",
    },
    {
      id: 14,
      first_name: "Astrix",
      last_name: "Nevill",
      email: "anevilld@deviantart.com",
      gender: "Female",
    },
    {
      id: 15,
      first_name: "Willey",
      last_name: "MacCoughan",
      email: "wmaccoughane@stanford.edu",
      gender: "Male",
    },
    {
      id: 16,
      first_name: "Kirsteni",
      last_name: "Wallach",
      email: "kwallachf@usnews.com",
      gender: "Agender",
    },
    {
      id: 17,
      first_name: "Harvey",
      last_name: "Hurdwell",
      email: "hhurdwellg@ucsd.edu",
      gender: "Bigender",
    },
    {
      id: 18,
      first_name: "Maryanna",
      last_name: "Hewins",
      email: "mhewinsh@businessinsider.com",
      gender: "Female",
    },
    {
      id: 19,
      first_name: "Carlyle",
      last_name: "De Minico",
      email: "cdeminicoi@yandex.ru",
      gender: "Male",
    },
    {
      id: 20,
      first_name: "Danila",
      last_name: "Ive",
      email: "divej@hatena.ne.jp",
      gender: "Female",
    },
    {
      id: 21,
      first_name: "Lila",
      last_name: "Beharrell",
      email: "lbeharrellk@webmd.com",
      gender: "Non-binary",
    },
    {
      id: 22,
      first_name: "Teressa",
      last_name: "Jaulmes",
      email: "tjaulmesl@hostgator.com",
      gender: "Female",
    },
    {
      id: 23,
      first_name: "Cathlene",
      last_name: "Giblin",
      email: "cgiblinm@github.com",
      gender: "Female",
    },
    {
      id: 24,
      first_name: "Bee",
      last_name: "Thornally",
      email: "bthornallyn@ed.gov",
      gender: "Female",
    },
    {
      id: 25,
      first_name: "Sandro",
      last_name: "Landeg",
      email: "slandego@blinklist.com",
      gender: "Male",
    },
    {
      id: 26,
      first_name: "Lenora",
      last_name: "Corneck",
      email: "lcorneckp@newyorker.com",
      gender: "Female",
    },
    {
      id: 27,
      first_name: "Nikita",
      last_name: "Fenny",
      email: "nfennyq@noaa.gov",
      gender: "Male",
    },
    {
      id: 28,
      first_name: "Tildy",
      last_name: "Feldberg",
      email: "tfeldbergr@amazon.co.uk",
      gender: "Female",
    },
    {
      id: 29,
      first_name: "Inglebert",
      last_name: "Tooting",
      email: "itootings@symantec.com",
      gender: "Male",
    },
    {
      id: 30,
      first_name: "Rowan",
      last_name: "Hardesty",
      email: "rhardestyt@bing.com",
      gender: "Male",
    },
    {
      id: 31,
      first_name: "Alair",
      last_name: "Manolov",
      email: "amanolovu@bing.com",
      gender: "Male",
    },
    {
      id: 32,
      first_name: "Harry",
      last_name: "Stevings",
      email: "hstevingsv@chronoengine.com",
      gender: "Male",
    },
    {
      id: 33,
      first_name: "Maxy",
      last_name: "Yeell",
      email: "myeellw@weibo.com",
      gender: "Male",
    },
    {
      id: 34,
      first_name: "Waneta",
      last_name: "Shard",
      email: "wshardx@oaic.gov.au",
      gender: "Female",
    },
    {
      id: 35,
      first_name: "Almeda",
      last_name: "Coatman",
      email: "acoatmany@weebly.com",
      gender: "Female",
    },
    {
      id: 36,
      first_name: "Johnathan",
      last_name: "Bartoszewicz",
      email: "jbartoszewiczz@arstechnica.com",
      gender: "Male",
    },
    {
      id: 37,
      first_name: "Joletta",
      last_name: "Wimms",
      email: "jwimms10@ibm.com",
      gender: "Female",
    },
    {
      id: 38,
      first_name: "Nehemiah",
      last_name: "Hallatt",
      email: "nhallatt11@163.com",
      gender: "Male",
    },
    {
      id: 39,
      first_name: "Arlana",
      last_name: "Swyer",
      email: "aswyer12@godaddy.com",
      gender: "Female",
    },
    {
      id: 40,
      first_name: "Mildrid",
      last_name: "Wace",
      email: "mwace13@oaic.gov.au",
      gender: "Female",
    },
    {
      id: 41,
      first_name: "Eldin",
      last_name: "Cassels",
      email: "ecassels14@oakley.com",
      gender: "Genderqueer",
    },
    {
      id: 42,
      first_name: "Pip",
      last_name: "Pine",
      email: "ppine15@alexa.com",
      gender: "Polygender",
    },
    {
      id: 43,
      first_name: "Rabbi",
      last_name: "Gatecliff",
      email: "rgatecliff16@adobe.com",
      gender: "Male",
    },
    {
      id: 44,
      first_name: "Leia",
      last_name: "Oulett",
      email: "loulett17@cargocollective.com",
      gender: "Female",
    },
    {
      id: 45,
      first_name: "Sibbie",
      last_name: "Dowears",
      email: "sdowears18@reference.com",
      gender: "Female",
    },
    {
      id: 46,
      first_name: "Vasili",
      last_name: "Proger",
      email: "vproger19@dmoz.org",
      gender: "Male",
    },
    {
      id: 47,
      first_name: "Kenyon",
      last_name: "Entissle",
      email: "kentissle1a@naver.com",
      gender: "Male",
    },
    {
      id: 48,
      first_name: "Karla",
      last_name: "Kelner",
      email: "kkelner1b@com.com",
      gender: "Female",
    },
    {
      id: 49,
      first_name: "Sibeal",
      last_name: "Maffi",
      email: "smaffi1c@cloudflare.com",
      gender: "Female",
    },
    {
      id: 50,
      first_name: "Ferdinande",
      last_name: "Moreno",
      email: "fmoreno1d@nsw.gov.au",
      gender: "Female",
    },
    {
      id: 51,
      first_name: "Joycelin",
      last_name: "Pabelik",
      email: "jpabelik1e@ameblo.jp",
      gender: "Female",
    },
    {
      id: 52,
      first_name: "Stinky",
      last_name: "O'Sheeryne",
      email: "sosheeryne1f@privacy.gov.au",
      gender: "Male",
    },
    {
      id: 53,
      first_name: "Kendre",
      last_name: "Strowthers",
      email: "kstrowthers1g@un.org",
      gender: "Female",
    },
    {
      id: 54,
      first_name: "Hube",
      last_name: "Leece",
      email: "hleece1h@blogspot.com",
      gender: "Male",
    },
    {
      id: 55,
      first_name: "Delmar",
      last_name: "Lamborn",
      email: "dlamborn1i@rambler.ru",
      gender: "Bigender",
    },
    {
      id: 56,
      first_name: "Lorianna",
      last_name: "Dreger",
      email: "ldreger1j@simplemachines.org",
      gender: "Female",
    },
    {
      id: 57,
      first_name: "Shea",
      last_name: "McDougal",
      email: "smcdougal1k@ucla.edu",
      gender: "Female",
    },
    {
      id: 58,
      first_name: "Cristin",
      last_name: "Dufour",
      email: "cdufour1l@163.com",
      gender: "Female",
    },
    {
      id: 59,
      first_name: "Roland",
      last_name: "Milkeham",
      email: "rmilkeham1m@de.vu",
      gender: "Male",
    },
    {
      id: 60,
      first_name: "Mycah",
      last_name: "Blaver",
      email: "mblaver1n@blogtalkradio.com",
      gender: "Male",
    },
    {
      id: 61,
      first_name: "Lesley",
      last_name: "O'Dougherty",
      email: "lodougherty1o@arizona.edu",
      gender: "Male",
    },
    {
      id: 62,
      first_name: "Kennedy",
      last_name: "Woodwing",
      email: "kwoodwing1p@gnu.org",
      gender: "Male",
    },
    {
      id: 63,
      first_name: "Toma",
      last_name: "Bordessa",
      email: "tbordessa1q@360.cn",
      gender: "Female",
    },
    {
      id: 64,
      first_name: "Reidar",
      last_name: "Barrass",
      email: "rbarrass1r@woothemes.com",
      gender: "Male",
    },
    {
      id: 65,
      first_name: "Marleah",
      last_name: "Martijn",
      email: "mmartijn1s@istockphoto.com",
      gender: "Female",
    },
    {
      id: 66,
      first_name: "Paloma",
      last_name: "Nulty",
      email: "pnulty1t@pagesperso-orange.fr",
      gender: "Female",
    },
    {
      id: 67,
      first_name: "Adele",
      last_name: "McCloch",
      email: "amccloch1u@amazon.co.uk",
      gender: "Female",
    },
    {
      id: 68,
      first_name: "Jethro",
      last_name: "Coverlyn",
      email: "jcoverlyn1v@soup.io",
      gender: "Male",
    },
    {
      id: 69,
      first_name: "Regan",
      last_name: "McBrearty",
      email: "rmcbrearty1w@acquirethisname.com",
      gender: "Male",
    },
    {
      id: 70,
      first_name: "Roxine",
      last_name: "Rapp",
      email: "rrapp1x@cyberchimps.com",
      gender: "Female",
    },
    {
      id: 71,
      first_name: "Clio",
      last_name: "Hovey",
      email: "chovey1y@amazon.com",
      gender: "Female",
    },
    {
      id: 72,
      first_name: "Bendicty",
      last_name: "Shelvey",
      email: "bshelvey1z@liveinternet.ru",
      gender: "Male",
    },
    {
      id: 73,
      first_name: "Angel",
      last_name: "Dingivan",
      email: "adingivan20@pcworld.com",
      gender: "Male",
    },
    {
      id: 1,
      first_name: "Arlee",
      last_name: "Kobierski",
      email: "akobierski0@shinystat.com",
      gender: "Female",
    },
    {
      id: 2,
      first_name: "Robenia",
      last_name: "Burk",
      email: "rburk1@hexun.com",
      gender: "Female",
    },
    {
      id: 3,
      first_name: "Helyn",
      last_name: "Faint",
      email: "hfaint2@flavors.me",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Lazare",
      last_name: "McCritichie",
      email: "lmccritichie3@purevolume.com",
      gender: "Male",
    },
    {
      id: 5,
      first_name: "Trevor",
      last_name: "Bruyett",
      email: "tbruyett4@google.pl",
      gender: "Male",
    },
    {
      id: 6,
      first_name: "Reuben",
      last_name: "Gonsalo",
      email: "rgonsalo5@nationalgeographic.com",
      gender: "Male",
    },
    {
      id: 7,
      first_name: "Berny",
      last_name: "Bockman",
      email: "bbockman6@wp.com",
      gender: "Male",
    },
    {
      id: 8,
      first_name: "Reta",
      last_name: "Burress",
      email: "rburress7@seesaa.net",
      gender: "Female",
    },
    {
      id: 9,
      first_name: "Washington",
      last_name: "Westrey",
      email: "wwestrey8@blog.com",
      gender: "Male",
    },
    {
      id: 10,
      first_name: "Evelina",
      last_name: "Kopec",
      email: "ekopec9@nih.gov",
      gender: "Female",
    },
    {
      id: 11,
      first_name: "Hestia",
      last_name: "Titley",
      email: "htitleya@dropbox.com",
      gender: "Female",
    },
    {
      id: 12,
      first_name: "Krishna",
      last_name: "Moreing",
      email: "kmoreingb@bandcamp.com",
      gender: "Male",
    },
    {
      id: 13,
      first_name: "Egbert",
      last_name: "Ganders",
      email: "egandersc@infoseek.co.jp",
      gender: "Male",
    },
    {
      id: 14,
      first_name: "Astrix",
      last_name: "Nevill",
      email: "anevilld@deviantart.com",
      gender: "Female",
    },
    {
      id: 15,
      first_name: "Willey",
      last_name: "MacCoughan",
      email: "wmaccoughane@stanford.edu",
      gender: "Male",
    },
    {
      id: 16,
      first_name: "Kirsteni",
      last_name: "Wallach",
      email: "kwallachf@usnews.com",
      gender: "Agender",
    },
    {
      id: 17,
      first_name: "Harvey",
      last_name: "Hurdwell",
      email: "hhurdwellg@ucsd.edu",
      gender: "Bigender",
    },
    {
      id: 18,
      first_name: "Maryanna",
      last_name: "Hewins",
      email: "mhewinsh@businessinsider.com",
      gender: "Female",
    },
    {
      id: 19,
      first_name: "Carlyle",
      last_name: "De Minico",
      email: "cdeminicoi@yandex.ru",
      gender: "Male",
    },
    {
      id: 20,
      first_name: "Danila",
      last_name: "Ive",
      email: "divej@hatena.ne.jp",
      gender: "Female",
    },
    {
      id: 21,
      first_name: "Lila",
      last_name: "Beharrell",
      email: "lbeharrellk@webmd.com",
      gender: "Non-binary",
    },
    {
      id: 22,
      first_name: "Teressa",
      last_name: "Jaulmes",
      email: "tjaulmesl@hostgator.com",
      gender: "Female",
    },
    {
      id: 23,
      first_name: "Cathlene",
      last_name: "Giblin",
      email: "cgiblinm@github.com",
      gender: "Female",
    },
    {
      id: 24,
      first_name: "Bee",
      last_name: "Thornally",
      email: "bthornallyn@ed.gov",
      gender: "Female",
    },
    {
      id: 25,
      first_name: "Sandro",
      last_name: "Landeg",
      email: "slandego@blinklist.com",
      gender: "Male",
    },
    {
      id: 26,
      first_name: "Lenora",
      last_name: "Corneck",
      email: "lcorneckp@newyorker.com",
      gender: "Female",
    },
    {
      id: 27,
      first_name: "Nikita",
      last_name: "Fenny",
      email: "nfennyq@noaa.gov",
      gender: "Male",
    },
    {
      id: 28,
      first_name: "Tildy",
      last_name: "Feldberg",
      email: "tfeldbergr@amazon.co.uk",
      gender: "Female",
    },
    {
      id: 29,
      first_name: "Inglebert",
      last_name: "Tooting",
      email: "itootings@symantec.com",
      gender: "Male",
    },
    {
      id: 30,
      first_name: "Rowan",
      last_name: "Hardesty",
      email: "rhardestyt@bing.com",
      gender: "Male",
    },
    {
      id: 31,
      first_name: "Alair",
      last_name: "Manolov",
      email: "amanolovu@bing.com",
      gender: "Male",
    },
    {
      id: 32,
      first_name: "Harry",
      last_name: "Stevings",
      email: "hstevingsv@chronoengine.com",
      gender: "Male",
    },
    {
      id: 33,
      first_name: "Maxy",
      last_name: "Yeell",
      email: "myeellw@weibo.com",
      gender: "Male",
    },
    {
      id: 34,
      first_name: "Waneta",
      last_name: "Shard",
      email: "wshardx@oaic.gov.au",
      gender: "Female",
    },
    {
      id: 35,
      first_name: "Almeda",
      last_name: "Coatman",
      email: "acoatmany@weebly.com",
      gender: "Female",
    },
    {
      id: 36,
      first_name: "Johnathan",
      last_name: "Bartoszewicz",
      email: "jbartoszewiczz@arstechnica.com",
      gender: "Male",
    },
    {
      id: 37,
      first_name: "Joletta",
      last_name: "Wimms",
      email: "jwimms10@ibm.com",
      gender: "Female",
    },
    {
      id: 38,
      first_name: "Nehemiah",
      last_name: "Hallatt",
      email: "nhallatt11@163.com",
      gender: "Male",
    },
    {
      id: 39,
      first_name: "Arlana",
      last_name: "Swyer",
      email: "aswyer12@godaddy.com",
      gender: "Female",
    },
    {
      id: 40,
      first_name: "Mildrid",
      last_name: "Wace",
      email: "mwace13@oaic.gov.au",
      gender: "Female",
    },
    {
      id: 41,
      first_name: "Eldin",
      last_name: "Cassels",
      email: "ecassels14@oakley.com",
      gender: "Genderqueer",
    },
    {
      id: 42,
      first_name: "Pip",
      last_name: "Pine",
      email: "ppine15@alexa.com",
      gender: "Polygender",
    },
    {
      id: 43,
      first_name: "Rabbi",
      last_name: "Gatecliff",
      email: "rgatecliff16@adobe.com",
      gender: "Male",
    },
    {
      id: 44,
      first_name: "Leia",
      last_name: "Oulett",
      email: "loulett17@cargocollective.com",
      gender: "Female",
    },
    {
      id: 45,
      first_name: "Sibbie",
      last_name: "Dowears",
      email: "sdowears18@reference.com",
      gender: "Female",
    },
    {
      id: 46,
      first_name: "Vasili",
      last_name: "Proger",
      email: "vproger19@dmoz.org",
      gender: "Male",
    },
    {
      id: 47,
      first_name: "Kenyon",
      last_name: "Entissle",
      email: "kentissle1a@naver.com",
      gender: "Male",
    },
    {
      id: 48,
      first_name: "Karla",
      last_name: "Kelner",
      email: "kkelner1b@com.com",
      gender: "Female",
    },
    {
      id: 49,
      first_name: "Sibeal",
      last_name: "Maffi",
      email: "smaffi1c@cloudflare.com",
      gender: "Female",
    },
    {
      id: 50,
      first_name: "Ferdinande",
      last_name: "Moreno",
      email: "fmoreno1d@nsw.gov.au",
      gender: "Female",
    },
    {
      id: 51,
      first_name: "Joycelin",
      last_name: "Pabelik",
      email: "jpabelik1e@ameblo.jp",
      gender: "Female",
    },
    {
      id: 52,
      first_name: "Stinky",
      last_name: "O'Sheeryne",
      email: "sosheeryne1f@privacy.gov.au",
      gender: "Male",
    },
    {
      id: 53,
      first_name: "Kendre",
      last_name: "Strowthers",
      email: "kstrowthers1g@un.org",
      gender: "Female",
    },
    {
      id: 54,
      first_name: "Hube",
      last_name: "Leece",
      email: "hleece1h@blogspot.com",
      gender: "Male",
    },
    {
      id: 55,
      first_name: "Delmar",
      last_name: "Lamborn",
      email: "dlamborn1i@rambler.ru",
      gender: "Bigender",
    },
    {
      id: 56,
      first_name: "Lorianna",
      last_name: "Dreger",
      email: "ldreger1j@simplemachines.org",
      gender: "Female",
    },
    {
      id: 57,
      first_name: "Shea",
      last_name: "McDougal",
      email: "smcdougal1k@ucla.edu",
      gender: "Female",
    },
    {
      id: 58,
      first_name: "Cristin",
      last_name: "Dufour",
      email: "cdufour1l@163.com",
      gender: "Female",
    },
    {
      id: 59,
      first_name: "Roland",
      last_name: "Milkeham",
      email: "rmilkeham1m@de.vu",
      gender: "Male",
    },
    {
      id: 60,
      first_name: "Mycah",
      last_name: "Blaver",
      email: "mblaver1n@blogtalkradio.com",
      gender: "Male",
    },
    {
      id: 61,
      first_name: "Lesley",
      last_name: "O'Dougherty",
      email: "lodougherty1o@arizona.edu",
      gender: "Male",
    },
    {
      id: 62,
      first_name: "Kennedy",
      last_name: "Woodwing",
      email: "kwoodwing1p@gnu.org",
      gender: "Male",
    },
    {
      id: 63,
      first_name: "Toma",
      last_name: "Bordessa",
      email: "tbordessa1q@360.cn",
      gender: "Female",
    },
    {
      id: 64,
      first_name: "Reidar",
      last_name: "Barrass",
      email: "rbarrass1r@woothemes.com",
      gender: "Male",
    },
    {
      id: 65,
      first_name: "Marleah",
      last_name: "Martijn",
      email: "mmartijn1s@istockphoto.com",
      gender: "Female",
    },
    {
      id: 66,
      first_name: "Paloma",
      last_name: "Nulty",
      email: "pnulty1t@pagesperso-orange.fr",
      gender: "Female",
    },
    {
      id: 67,
      first_name: "Adele",
      last_name: "McCloch",
      email: "amccloch1u@amazon.co.uk",
      gender: "Female",
    },
    {
      id: 68,
      first_name: "Jethro",
      last_name: "Coverlyn",
      email: "jcoverlyn1v@soup.io",
      gender: "Male",
    },
    {
      id: 69,
      first_name: "Regan",
      last_name: "McBrearty",
      email: "rmcbrearty1w@acquirethisname.com",
      gender: "Male",
    },
    {
      id: 70,
      first_name: "Roxine",
      last_name: "Rapp",
      email: "rrapp1x@cyberchimps.com",
      gender: "Female",
    },
    {
      id: 71,
      first_name: "Clio",
      last_name: "Hovey",
      email: "chovey1y@amazon.com",
      gender: "Female",
    },
    {
      id: 72,
      first_name: "Bendicty",
      last_name: "Shelvey",
      email: "bshelvey1z@liveinternet.ru",
      gender: "Male",
    },
    {
      id: 73,
      first_name: "Angel",
      last_name: "Dingivan",
      email: "adingivan20@pcworld.com",
      gender: "Male",
    },
    {
      id: 1,
      first_name: "Arlee",
      last_name: "Kobierski",
      email: "akobierski0@shinystat.com",
      gender: "Female",
    },
    {
      id: 2,
      first_name: "Robenia",
      last_name: "Burk",
      email: "rburk1@hexun.com",
      gender: "Female",
    },
    {
      id: 3,
      first_name: "Helyn",
      last_name: "Faint",
      email: "hfaint2@flavors.me",
      gender: "Female",
    },
    {
      id: 4,
      first_name: "Lazare",
      last_name: "McCritichie",
      email: "lmccritichie3@purevolume.com",
      gender: "Male",
    },
    {
      id: 5,
      first_name: "Trevor",
      last_name: "Bruyett",
      email: "tbruyett4@google.pl",
      gender: "Male",
    },
    {
      id: 6,
      first_name: "Reuben",
      last_name: "Gonsalo",
      email: "rgonsalo5@nationalgeographic.com",
      gender: "Male",
    },
    {
      id: 7,
      first_name: "Berny",
      last_name: "Bockman",
      email: "bbockman6@wp.com",
      gender: "Male",
    },
    {
      id: 8,
      first_name: "Reta",
      last_name: "Burress",
      email: "rburress7@seesaa.net",
      gender: "Female",
    },
    {
      id: 9,
      first_name: "Washington",
      last_name: "Westrey",
      email: "wwestrey8@blog.com",
      gender: "Male",
    },
    {
      id: 10,
      first_name: "Evelina",
      last_name: "Kopec",
      email: "ekopec9@nih.gov",
      gender: "Female",
    },
    {
      id: 11,
      first_name: "Hestia",
      last_name: "Titley",
      email: "htitleya@dropbox.com",
      gender: "Female",
    },
    {
      id: 12,
      first_name: "Krishna",
      last_name: "Moreing",
      email: "kmoreingb@bandcamp.com",
      gender: "Male",
    },
    {
      id: 13,
      first_name: "Egbert",
      last_name: "Ganders",
      email: "egandersc@infoseek.co.jp",
      gender: "Male",
    },
    {
      id: 14,
      first_name: "Astrix",
      last_name: "Nevill",
      email: "anevilld@deviantart.com",
      gender: "Female",
    },
    {
      id: 15,
      first_name: "Willey",
      last_name: "MacCoughan",
      email: "wmaccoughane@stanford.edu",
      gender: "Male",
    },
    {
      id: 16,
      first_name: "Kirsteni",
      last_name: "Wallach",
      email: "kwallachf@usnews.com",
      gender: "Agender",
    },
    {
      id: 17,
      first_name: "Harvey",
      last_name: "Hurdwell",
      email: "hhurdwellg@ucsd.edu",
      gender: "Bigender",
    },
    {
      id: 18,
      first_name: "Maryanna",
      last_name: "Hewins",
      email: "mhewinsh@businessinsider.com",
      gender: "Female",
    },
    {
      id: 19,
      first_name: "Carlyle",
      last_name: "De Minico",
      email: "cdeminicoi@yandex.ru",
      gender: "Male",
    },
    {
      id: 20,
      first_name: "Danila",
      last_name: "Ive",
      email: "divej@hatena.ne.jp",
      gender: "Female",
    },
    {
      id: 21,
      first_name: "Lila",
      last_name: "Beharrell",
      email: "lbeharrellk@webmd.com",
      gender: "Non-binary",
    },
    {
      id: 22,
      first_name: "Teressa",
      last_name: "Jaulmes",
      email: "tjaulmesl@hostgator.com",
      gender: "Female",
    },
    {
      id: 23,
      first_name: "Cathlene",
      last_name: "Giblin",
      email: "cgiblinm@github.com",
      gender: "Female",
    },
    {
      id: 24,
      first_name: "Bee",
      last_name: "Thornally",
      email: "bthornallyn@ed.gov",
      gender: "Female",
    },
    {
      id: 25,
      first_name: "Sandro",
      last_name: "Landeg",
      email: "slandego@blinklist.com",
      gender: "Male",
    },
    {
      id: 26,
      first_name: "Lenora",
      last_name: "Corneck",
      email: "lcorneckp@newyorker.com",
      gender: "Female",
    },
    {
      id: 27,
      first_name: "Nikita",
      last_name: "Fenny",
      email: "nfennyq@noaa.gov",
      gender: "Male",
    },
    {
      id: 28,
      first_name: "Tildy",
      last_name: "Feldberg",
      email: "tfeldbergr@amazon.co.uk",
      gender: "Female",
    },
    {
      id: 29,
      first_name: "Inglebert",
      last_name: "Tooting",
      email: "itootings@symantec.com",
      gender: "Male",
    },
    {
      id: 30,
      first_name: "Rowan",
      last_name: "Hardesty",
      email: "rhardestyt@bing.com",
      gender: "Male",
    },
    {
      id: 31,
      first_name: "Alair",
      last_name: "Manolov",
      email: "amanolovu@bing.com",
      gender: "Male",
    },
    {
      id: 32,
      first_name: "Harry",
      last_name: "Stevings",
      email: "hstevingsv@chronoengine.com",
      gender: "Male",
    },
    {
      id: 33,
      first_name: "Maxy",
      last_name: "Yeell",
      email: "myeellw@weibo.com",
      gender: "Male",
    },
    {
      id: 34,
      first_name: "Waneta",
      last_name: "Shard",
      email: "wshardx@oaic.gov.au",
      gender: "Female",
    },
    {
      id: 35,
      first_name: "Almeda",
      last_name: "Coatman",
      email: "acoatmany@weebly.com",
      gender: "Female",
    },
    {
      id: 36,
      first_name: "Johnathan",
      last_name: "Bartoszewicz",
      email: "jbartoszewiczz@arstechnica.com",
      gender: "Male",
    },
    {
      id: 37,
      first_name: "Joletta",
      last_name: "Wimms",
      email: "jwimms10@ibm.com",
      gender: "Female",
    },
    {
      id: 38,
      first_name: "Nehemiah",
      last_name: "Hallatt",
      email: "nhallatt11@163.com",
      gender: "Male",
    },
    {
      id: 39,
      first_name: "Arlana",
      last_name: "Swyer",
      email: "aswyer12@godaddy.com",
      gender: "Female",
    },
    {
      id: 40,
      first_name: "Mildrid",
      last_name: "Wace",
      email: "mwace13@oaic.gov.au",
      gender: "Female",
    },
    {
      id: 41,
      first_name: "Eldin",
      last_name: "Cassels",
      email: "ecassels14@oakley.com",
      gender: "Genderqueer",
    },
    {
      id: 42,
      first_name: "Pip",
      last_name: "Pine",
      email: "ppine15@alexa.com",
      gender: "Polygender",
    },
    {
      id: 43,
      first_name: "Rabbi",
      last_name: "Gatecliff",
      email: "rgatecliff16@adobe.com",
      gender: "Male",
    },
    {
      id: 44,
      first_name: "Leia",
      last_name: "Oulett",
      email: "loulett17@cargocollective.com",
      gender: "Female",
    },
    {
      id: 45,
      first_name: "Sibbie",
      last_name: "Dowears",
      email: "sdowears18@reference.com",
      gender: "Female",
    },
    {
      id: 46,
      first_name: "Vasili",
      last_name: "Proger",
      email: "vproger19@dmoz.org",
      gender: "Male",
    },
    {
      id: 47,
      first_name: "Kenyon",
      last_name: "Entissle",
      email: "kentissle1a@naver.com",
      gender: "Male",
    },
    {
      id: 48,
      first_name: "Karla",
      last_name: "Kelner",
      email: "kkelner1b@com.com",
      gender: "Female",
    },
    {
      id: 49,
      first_name: "Sibeal",
      last_name: "Maffi",
      email: "smaffi1c@cloudflare.com",
      gender: "Female",
    },
    {
      id: 50,
      first_name: "Ferdinande",
      last_name: "Moreno",
      email: "fmoreno1d@nsw.gov.au",
      gender: "Female",
    },
    {
      id: 51,
      first_name: "Joycelin",
      last_name: "Pabelik",
      email: "jpabelik1e@ameblo.jp",
      gender: "Female",
    },
    {
      id: 52,
      first_name: "Stinky",
      last_name: "O'Sheeryne",
      email: "sosheeryne1f@privacy.gov.au",
      gender: "Male",
    },
    {
      id: 53,
      first_name: "Kendre",
      last_name: "Strowthers",
      email: "kstrowthers1g@un.org",
      gender: "Female",
    },
    {
      id: 54,
      first_name: "Hube",
      last_name: "Leece",
      email: "hleece1h@blogspot.com",
      gender: "Male",
    },
    {
      id: 55,
      first_name: "Delmar",
      last_name: "Lamborn",
      email: "dlamborn1i@rambler.ru",
      gender: "Bigender",
    },
    {
      id: 56,
      first_name: "Lorianna",
      last_name: "Dreger",
      email: "ldreger1j@simplemachines.org",
      gender: "Female",
    },
    {
      id: 57,
      first_name: "Shea",
      last_name: "McDougal",
      email: "smcdougal1k@ucla.edu",
      gender: "Female",
    },
    {
      id: 58,
      first_name: "Cristin",
      last_name: "Dufour",
      email: "cdufour1l@163.com",
      gender: "Female",
    },
    {
      id: 59,
      first_name: "Roland",
      last_name: "Milkeham",
      email: "rmilkeham1m@de.vu",
      gender: "Male",
    },
    {
      id: 60,
      first_name: "Mycah",
      last_name: "Blaver",
      email: "mblaver1n@blogtalkradio.com",
      gender: "Male",
    },
    {
      id: 61,
      first_name: "Lesley",
      last_name: "O'Dougherty",
      email: "lodougherty1o@arizona.edu",
      gender: "Male",
    },
    {
      id: 62,
      first_name: "Kennedy",
      last_name: "Woodwing",
      email: "kwoodwing1p@gnu.org",
      gender: "Male",
    },
    {
      id: 63,
      first_name: "Toma",
      last_name: "Bordessa",
      email: "tbordessa1q@360.cn",
      gender: "Female",
    },
    {
      id: 64,
      first_name: "Reidar",
      last_name: "Barrass",
      email: "rbarrass1r@woothemes.com",
      gender: "Male",
    },
    {
      id: 65,
      first_name: "Marleah",
      last_name: "Martijn",
      email: "mmartijn1s@istockphoto.com",
      gender: "Female",
    },
    {
      id: 66,
      first_name: "Paloma",
      last_name: "Nulty",
      email: "pnulty1t@pagesperso-orange.fr",
      gender: "Female",
    },
    {
      id: 67,
      first_name: "Adele",
      last_name: "McCloch",
      email: "amccloch1u@amazon.co.uk",
      gender: "Female",
    },
    {
      id: 68,
      first_name: "Jethro",
      last_name: "Coverlyn",
      email: "jcoverlyn1v@soup.io",
      gender: "Male",
    },
    {
      id: 69,
      first_name: "Regan",
      last_name: "McBrearty",
      email: "rmcbrearty1w@acquirethisname.com",
      gender: "Male",
    },
    {
      id: 70,
      first_name: "Roxine",
      last_name: "Rapp",
      email: "rrapp1x@cyberchimps.com",
      gender: "Female",
    },
    {
      id: 71,
      first_name: "Clio",
      last_name: "Hovey",
      email: "chovey1y@amazon.com",
      gender: "Female",
    },
    {
      id: 72,
      first_name: "Bendicty",
      last_name: "Shelvey",
      email: "bshelvey1z@liveinternet.ru",
      gender: "Male",
    },
    {
      id: 73,
      first_name: "Angel",
      last_name: "Dingivan",
      email: "adingivan20@pcworld.com",
      gender: "Male",
    },
    {
      id: 74,
      first_name: "Sidonnie",
      last_name: "Abrahami",
      email: "sabrahami21@marriott.com",
      gender: "Female",
    },
    {
      id: 75,
      first_name: "Joannes",
      last_name: "Ferretti",
      email: "jferretti22@instagram.com",
      gender: "Female",
    },
    {
      id: 76,
      first_name: "Lynnelle",
      last_name: "Gilbey",
      email: "lgilbey23@tamu.edu",
      gender: "Female",
    },
    {
      id: 77,
      first_name: "Cilka",
      last_name: "Luffman",
      email: "cluffman24@fastcompany.com",
      gender: "Female",
    },
    {
      id: 78,
      first_name: "Ximenez",
      last_name: "Haughton",
      email: "xhaughton25@so-net.ne.jp",
      gender: "Male",
    },
    {
      id: 79,
      first_name: "Laurena",
      last_name: "Dulen",
      email: "ldulen26@dailymotion.com",
      gender: "Female",
    },
    {
      id: 80,
      first_name: "Gabi",
      last_name: "Huerta",
      email: "ghuerta27@engadget.com",
      gender: "Male",
    },
    {
      id: 81,
      first_name: "Amery",
      last_name: "Purchon",
      email: "apurchon28@example.com",
      gender: "Male",
    },
    {
      id: 82,
      first_name: "Kaleena",
      last_name: "Sore",
      email: "ksore29@yellowbook.com",
      gender: "Bigender",
    },
    {
      id: 83,
      first_name: "Cori",
      last_name: "Mennear",
      email: "cmennear2a@google.co.jp",
      gender: "Female",
    },
    {
      id: 84,
      first_name: "Rickert",
      last_name: "Antonoyev",
      email: "rantonoyev2b@ucla.edu",
      gender: "Male",
    },
    {
      id: 85,
      first_name: "Tara",
      last_name: "Mattheus",
      email: "tmattheus2c@purevolume.com",
      gender: "Female",
    },
    {
      id: 86,
      first_name: "Lexi",
      last_name: "Ziemke",
      email: "lziemke2d@jimdo.com",
      gender: "Female",
    },
    {
      id: 87,
      first_name: "Paddy",
      last_name: "Litchfield",
      email: "plitchfield2e@mapy.cz",
      gender: "Male",
    },
    {
      id: 88,
      first_name: "Shermie",
      last_name: "Filimore",
      email: "sfilimore2f@bloomberg.com",
      gender: "Male",
    },
    {
      id: 89,
      first_name: "Seamus",
      last_name: "Timeby",
      email: "stimeby2g@berkeley.edu",
      gender: "Male",
    },
    {
      id: 90,
      first_name: "Norrie",
      last_name: "Dunbleton",
      email: "ndunbleton2h@chron.com",
      gender: "Female",
    },
    {
      id: 91,
      first_name: "Sheree",
      last_name: "Poundford",
      email: "spoundford2i@nbcnews.com",
      gender: "Female",
    },
    {
      id: 92,
      first_name: "Juanita",
      last_name: "Larner",
      email: "jlarner2j@wikia.com",
      gender: "Female",
    },
    {
      id: 93,
      first_name: "Jeniffer",
      last_name: "Finnis",
      email: "jfinnis2k@google.pl",
      gender: "Polygender",
    },
    {
      id: 94,
      first_name: "Tandie",
      last_name: "Coniam",
      email: "tconiam2l@vkontakte.ru",
      gender: "Female",
    },
    {
      id: 95,
      first_name: "Myrtice",
      last_name: "Mangion",
      email: "mmangion2m@vk.com",
      gender: "Female",
    },
    {
      id: 96,
      first_name: "Cristal",
      last_name: "Sisse",
      email: "csisse2n@slate.com",
      gender: "Female",
    },
    {
      id: 97,
      first_name: "Sigismundo",
      last_name: "Louthe",
      email: "slouthe2o@newsvine.com",
      gender: "Male",
    },
    {
      id: 98,
      first_name: "Ferdinand",
      last_name: "Summerill",
      email: "fsummerill2p@ucla.edu",
      gender: "Male",
    },
    {
      id: 99,
      first_name: "Melamie",
      last_name: "Ort",
      email: "mort2q@phpbb.com",
      gender: "Female",
    },
    {
      id: 100,
      first_name: "Gram",
      last_name: "Mottershead",
      email: "gmottershead2r@census.gov",
      gender: "Male",
    },
  ];

  const [rows, setRows] = useState([...data]);

  function getFullName(params) {
    return `${params.row.first_name || ""} ${params.row.last_name || ""}`;
  }
  const handleFilter = (itemId) => {
    return setRows(rows.filter((item) => item.id !== itemId));
  };
  const columns = [
    {
      field: "first_name",
      headerName: "First Name",
      type: "string",
      flex: 2,
      // colSpan: ({ row }) => {
      //   console.log(row);
      //   if (row.id === 2) {
      //     return 6;
      //   }
      //   return undefined;
      // },
    },
    {
      field: "last_name",
      headerName: "Last Name",
      type: "string",
      flex: 2,
    },
    {
      field: "fullName",
      headerName: "Full Name",
      flex: 3,

      valueGetter: getFullName,
    },
    {
      field: "email",
      headerName: "Email",
      type: "string",
      flex: 2,
    },
    {
      field: "gender",
      headerName: "Gender",
      type: "string",
      flex: 2,
    },
    {
      field: "action",
      headerName: "Actions",
      renderCell: (params) => {
        return (
          <div>
            <button
              onClick={() => handleFilter(params.row.id)}
              className="btn btn-primary "
            >
              Open
            </button>
          </div>
        );
      },
      flex: 2,
    },
  ];
  return (
    <div>
      <div className="upper flex flex-col gap-4">
        <h6 className="flex items-center gap-2">
          Dashboard <FiAward className="text-[22px] text-themecyan-darker" />{" "}
        </h6>
        <div className="flex justify-between">
          <button className="btn-outline-primary w-fit">
            View Public Profile
          </button>
          <button className="btn btn-primary h-[48px] w-fit">
            Start Notarizing
          </button>
        </div>

        <NavLink
          to="#"
          className="text-[14px] font-medium text-themecyan-darker underline"
        >
          Show F&F Discount Code
        </NavLink>
      </div>
      <div className="stats grid grid-cols-4 gap-8 mt-10">
        <div className="p-4  shadow-lg border-2 border-grey-30 border-l-[6px] border-l-blue-dark rounded-lg flex items-center justify-between">
          <div className="space-y-1">
            <h6 className="text-themecyan-text2 mb-2 text-[16px]">Earnings</h6>
            <div className="flex gap-2">
              <span className="font-bold min-w-[80px] ">Previous</span>{" "}
              <span className="font-bold">$0.00</span>{" "}
            </div>
            <div className="flex gap-2">
              <span className="font-bold min-w-[80px] ">Current</span>{" "}
              <span className="font-bold">$8.00</span>{" "}
            </div>
          </div>
          <div>
            <BiDollarCircle className="text-[32px]" />
          </div>
        </div>
        <div className="p-4  shadow-lg border-2 border-grey-30 border-l-[6px] border-l-themecyan-darker rounded-lg flex items-center justify-between gap-2">
          <div className="space-y-1 flex-1">
            <h6 className="text-themecyan-text2 mb-2 text-[16px]">
              Review Score
            </h6>
            <div className="flex ">
              <span className="font-bold">No Reviews Yet</span>{" "}
            </div>
          </div>
          <div>
            <AiFillStar className="text-[32px]" />
          </div>
        </div>
        <div className="p-4  shadow-lg border-2 border-grey-30 border-l-[6px] border-l-yellow-dark rounded-lg flex items-center justify-between gap-2">
          <div className="space-y-1 flex-1">
            <h6 className="text-themecyan-text2 mb-2 text-[16px]">
              Average Sessions Per Day
            </h6>
            <div className="flex ">
              <span className="font-bold">2</span>{" "}
            </div>
          </div>
          <div>
            <MdComputer className="text-[32px]" />
          </div>
        </div>
        <div className="p-4  shadow-lg border-2 border-grey-30 border-l-[6px] border-l-green-dark rounded-lg flex items-center justify-between gap-2">
          <div className="space-y-1 flex-1">
            <h6 className="text-themecyan-text2 mb-2 text-[16px]">
              Credentials Status
            </h6>
            <div className="flex ">
              <span className="font-bold">Current</span>{" "}
            </div>
          </div>
          <div>
            <MdThumbUp className="text-[32px]" />
          </div>
        </div>
      </div>

      {/* tables */}
      <div className="container mt-10">
        <Box
          sx={{
            height: 600,
            width: "100%",
          }}
        >
          <DataGrid
            rows={rows}
            getEstimatedRowHeight={() => 52}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[8, 10, 15]}
            slots={{
              toolbar: GridToolbar,
              loadingOverlay: LinearProgress,
            }}
            // hideFooter
            // hideFooterPagination
            disableColumnMenu
          />
        </Box>
      </div>
    </div>
  );
};

export default DashboardLanding;
