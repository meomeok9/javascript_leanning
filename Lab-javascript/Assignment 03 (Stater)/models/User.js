'use strict';
const key = '49dccfe773e044378411a2f2e3d94955';
//6385a9b41dea40c4865b24318666a69a
let numberNewsinAPage = 5;
let currentPage = 1;
const categories = [
  'General',
  'Science',
  'Technology',
  'Business',
  'Entertainment',
  'Health',
  'Sports',
];
let categorySelected =
  categories[Math.floor(Math.random() * categories.length)];

const setCurrentPage = function (num) {
  currentPage += num;
};
const setNumberItemInPage = function (num) {
  numberNewsinAPage = num;
  localStorage.setItem('numberItemsInPage', JSON.stringify(numberNewsinAPage));
};
const setCategory = function (cate) {
  categorySelected = cate;
  localStorage.setItem('category', JSON.stringify(categorySelected));
};
const getCurrentPage = function () {
  return currentPage;
};
const getCategory = function () {
  return JSON.parse(localStorage.getItem('category'));
};
const getNumberItemInPage = function () {
  return JSON.parse(localStorage.getItem('numberItemsInPage'));
};

class User {
  constructor(firstName, lastName, username, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = username;
    this.passWord = password;
  }
}

// User.prototype.getAllUsers()= function(){
//   const userArr = JSON.parse(localStorage.getItem('allUsers'));
//   if (userArr != null) return userArr;
//   return [];
// };

const getAllUser = function () {
  const userArr = JSON.parse(localStorage.getItem('allUsers'));
  //check null of user arr
  if (userArr != null) return userArr;
  return [];
};

const getCurrentUser = function () {
  return JSON.parse(localStorage.getItem('currenUser'));
};

// server reject to connect so i must copy the data to this arr
let articles = [
  {
    source: {
      id: 'independent',
      name: 'Independent',
    },
    author: 'Jon Kelvey',
    title:
      'Nasa uncorking Apollo Moon sample sealed since 1972 - The Independent',
    description:
      'Nasa scientists hope studying the pristine samples from 1972 will help the US space agency prepare for taking new lunar samples as part of its Artemis III mission to the Moon in 2025.',
    url: 'https://www.independent.co.uk/space/nasa-uncorking-apollo-moon-sample-sealed-since-1972-b2031432.html',
    urlToImage:
      'https://static.independent.co.uk/2022/03/08/19/Apollo%2017%20sample%20tube.jpeg?quality=75&width=1200&auto=webp',
    publishedAt: '2022-03-09T00:14:29Z',
    content:
      'As far as claret goes, 1972 was a dismal year for the world-famous wine. But Nasa is confident the Taurus-Littrow Valley on the Moon did not suffer the same wet growing season as Bordeaux, France tha… [+2112 chars]',
  },
  {
    source: {
      id: null,
      name: 'Salon',
    },
    author: 'Matthew Rozsa',
    title:
      'A piece of space junk hit the Moon. Oddly, scientists are elated - Salon',
    description:
      'One scientist called the impact of human space debris "a fortuitous experiment"',
    url: 'https://www.salon.com/2022/03/08/a-piece-of-space-junk-hit-the-moon-oddly-scientists-are-elated/',
    urlToImage:
      'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/03/a-trip-to-the-moon-0308221.jpg',
    publishedAt: '2022-03-08T22:34:00Z',
    content: null,
  },
  {
    source: {
      id: null,
      name: 'Hipertextual',
    },
    author: 'Ara Rodríguez',
    title:
      'España ya tuvo una fábrica de semiconductores en los 90 y la dejó caer en el olvido',
    description:
      'Esta historia comienza mucho antes de que naciesen los smartphones, antes de Apple, Samsung y de cualquier otro dispositivo que Xiaomi, en su eterna innovación, pusiese en el mercado. Comienza solo cuatro años después del mismísimo nacimiento de Internet. En …',
    url: 'https://hipertextual.com/2022/10/fabrica-semiconductores-tres-cantos-el-sueno-olvidado',
    urlToImage:
      'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/10/fabrica-de-semiconductores-scaled.jpeg?fit=2560%2C1707&quality=60&strip=all&ssl=1',
    publishedAt: '2022-10-12T03:00:00Z',
    content:
      'Esta historia comienza mucho antes de que naciesen los smartphones, antes de Apple, Samsung y de cualquier otro dispositivo que Xiaomi, en su eterna innovación, pusiese en el mercado. Comienza solo c… [+8101 chars]',
  },
  {
    source: {
      id: null,
      name: 'Digital Trends',
    },
    author: 'Sascha Brodsky',
    title: 'Experts tell us why the Apple Watch Ultra doesn’t cut it for them',
    description:
      'While Apple claims its new Watch Ultra is aimed at adventurers, some professionals say there are better alternatives.',
    url: 'https://www.digitaltrends.com/mobile/apple-watch-ultra-athletes-experts-good-bad-why/',
    urlToImage:
      'https://www.digitaltrends.com/wp-content/uploads/2022/09/Apple-Watch-Ultra_diving.jpg?p=1',
    publishedAt: '2022-10-12T11:00:38Z',
    content:
      'Apple touts its new Apple Watch Ultra as the perfect wearable for athletes, but some outdoor professionals say its not the best choice as a timepiece for adventures.\r\nThe $799 Apple Watch Ultra is pa… [+5467 chars]',
  },
  {
    source: {
      id: null,
      name: 'GlobeNewswire',
    },
    author: 'Research and Markets',
    title:
      'China Autonomous Driving Data Closed Loop Market Research Report 2022: Development of Autonomous Driving is Gradually Driven by Data Rather than Technology',
    description:
      'Dublin, Oct. 12, 2022 (GLOBE NEWSWIRE) -- The "China Autonomous Driving Data Closed Loop Research Report, 2022" report has been added to ResearchAndMarkets.com\'s offering.The development of autonomous driving is gradually driven by data rather than technology',
    url: 'https://www.globenewswire.com/news-release/2022/10/12/2532635/28124/en/China-Autonomous-Driving-Data-Closed-Loop-Market-Research-Report-2022-Development-of-Autonomous-Driving-is-Gradually-Driven-by-Data-Rather-than-Technology.html',
    urlToImage:
      'https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7?size=1',
    publishedAt: '2022-10-12T10:18:00Z',
    content:
      'Dublin, Oct. 12, 2022 (GLOBE NEWSWIRE) -- The "China Autonomous Driving Data Closed Loop Research Report, 2022" report has been added to ResearchAndMarkets.com\'s offering.\r\nThe development of autonom… [+6943 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: null,
    title:
      'Apple to roll out 5G in India in Dec amid early adoption push - Reuters',
    description:
      'Apple Inc <a href="https://www.reuters.com/companies/AAPL.O" target="_blank">(AAPL.O)</a> will start upgrading its iPhone models in India in December to make them compatible with 5G networks, the company said on Wednesday, as Indian authorities pressed mobile…',
    url: 'https://www.reuters.com/technology/apple-roll-out-5g-india-dec-amid-early-adoption-push-2022-10-12/',
    urlToImage:
      'https://www.reuters.com/resizer/YHM-OjFJooXDCbhipXO8V4CBfk4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3K7PCHLAVRP4XGDFONWUBAZR5Y.jpg',
    publishedAt: '2022-10-12T07:00:00Z',
    content:
      'NEW DELHI, Oct 12 (Reuters) - Apple Inc (AAPL.O) will start upgrading its iPhone models in India in December to make them compatible with 5G networks, the company said on Wednesday, as Indian authori… [+1411 chars]',
  },
  {
    source: {
      id: 'reuters',
      name: 'Reuters',
    },
    author: null,
    title:
      'Wall St futures rise with focus on inflation data, Fed minutes - Reuters',
    description:
      "U.S. stock index futures rose on Wednesday, as a dip in Treasury yields helped ease pressure on tech and growth shares, with investors also eyeing key inflation data and minutes from the Federal Reserve's September meeting to gauge the rate-hike path.",
    url: 'https://www.reuters.com/markets/europe/wall-st-futures-rise-with-focus-inflation-data-fed-minutes-2022-10-12/',
    urlToImage:
      'https://www.reuters.com/resizer/7WPR3jtFOGY5E3_Ghkrkz78qvfs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/26VJCHCRU5JG5J45EIM4UN2LWU.jpg',
    publishedAt: '2022-10-12T09:53:00Z',
    content:
      'Oct 12 (Reuters) - U.S. stock index futures rose on Wednesday, as a dip in Treasury yields helped ease pressure on tech and growth shares, with investors also eyeing key inflation data and minutes fr… [+1785 chars]',
  },
  {
    source: {
      id: null,
      name: 'Android Central',
    },
    author: 'michael.hicks@futurenet.com (Michael L Hicks)',
    title:
      'Amazon cuts its fitness tracker prices for Prime Day to help you cut calories',
    description:
      'Snag the Amazon Halo View for $35 off or Amazon Halo for $30 off, nearly half the price on both.',
    url: 'https://www.androidcentral.com/wearables/amazon-cuts-its-fitness-tracker-prices-for-prime-day-to-help-you-cut-calories',
    urlToImage:
      'https://cdn.mos.cms.futurecdn.net/mjKa5xC4haroFgg9H952SE-1200-80.jpeg',
    publishedAt: '2022-10-12T00:46:34Z',
    content:
      "The Amazon Halo View is one of the best fitness trackers available today, thanks to Amazon's Halo membership that analyzes your body and gives you tools to get healthier (or at least know your curren… [+1289 chars]",
  },
  {
    source: {
      id: null,
      name: 'The Guardian',
    },
    author: 'Alex Hern',
    title:
      '‘The porn-friendly era of the internet is over’: why Tumblr won’t reverse ban',
    description:
      'The microblogging site was known for its ‘go nuts, show nuts’ policy. Here’s how the App Store ended Tumblr’s glory days<ul><li>Don’t get TechScape delivered to your inbox? Sign up for the full article here</li></ul>The quirks and oddities of a social network…',
    url: 'https://www.theguardian.com/technology/2022/oct/12/techscape-tumblr-porn-ban-apple-app-store',
    urlToImage:
      'https://i.guim.co.uk/img/media/c04ec218611a701f78210de0800d0cf59dd12ce3/0_239_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0e25f95005b2ae2e525952af3ca30f88',
    publishedAt: '2022-10-12T11:05:05Z',
    content:
      'The quirks and oddities of a social network affect the community that grows up around it. Instagrams lack of a repost feature pushed users to rely on hashtags to spread their pictures across the netw… [+9588 chars]',
  },
  {
    source: {
      id: null,
      name: 'MacRumors',
    },
    author: 'Tim Hardwick',
    title:
      'Intel Reportedly Plans Thousands of Layoffs Amid PC Market Slowdown',
    description:
      "Intel plans to slash its employee numbers by the thousands in a bid to cut costs in the face of the slowing global PC market, a new Bloomberg report has claimed.\n\n\n\n\n\nThe company's sales and marketing teams could see cuts affecting around 20% of staff, said t…",
    url: 'https://www.macrumors.com/2022/10/12/intel-plans-thousands-layoffs-pc-slowdown/',
    urlToImage:
      'https://images.macrumors.com/t/RQFj7aeSZDwvuRaNU_FsSKLV1-k=/2392x/article-new/2020/12/intel-logo.jpg',
    publishedAt: '2022-10-12T10:20:29Z',
    content:
      "Intel plans to slash its employee numbers by the thousands in a bid to cut costs in the face of the slowing global PC market, a new Bloomberg report has claimed.\r\nThe company's sales and marketing te… [+2197 chars]",
  },
  {
    source: {
      id: 'business-insider',
      name: 'Business Insider',
    },
    author:
      'wantonelli@insider.com (William Antonelli,Sarah Saril,Antonio Villas-Boas)',
    title:
      "LIVE: The 90 best deals to score during Amazon's Prime Day October sale before it ends tonight",
    description:
      "It's the last day of Amazon's Prime Early Access Sale, and we're keeping track of the best deals until time runs out. Act fast and get discounts on Apple Macs, Peloton bikes, and much more.",
    url: 'https://www.businessinsider.com/guides/deals/amazon-prime-day-live-deals-early-access-sale-2022-10-12',
    urlToImage:
      'https://i.insider.com/63442cfaca56b80019f32a88?width=1200&format=jpeg',
    publishedAt: '2022-10-12T07:21:07Z',
    content:
      "Sign up for Insider Reviews' weekly newsletter for more buying advice and great deals.\r\nYou can purchase logo and accolade licensing to this story here.\r\nDisclosure: Written and researched by the Ins… [+440 chars]",
  },
  {
    source: {
      id: 'independent',
      name: 'Independent',
    },
    author: 'Jon Kelvey',
    title:
      'Nasa uncorking Apollo Moon sample sealed since 1972 - The Independent',
    description:
      'Nasa scientists hope studying the pristine samples from 1972 will help the US space agency prepare for taking new lunar samples as part of its Artemis III mission to the Moon in 2025.',
    url: 'https://www.independent.co.uk/space/nasa-uncorking-apollo-moon-sample-sealed-since-1972-b2031432.html',
    urlToImage:
      'https://static.independent.co.uk/2022/03/08/19/Apollo%2017%20sample%20tube.jpeg?quality=75&width=1200&auto=webp',
    publishedAt: '2022-03-09T00:14:29Z',
    content:
      'As far as claret goes, 1972 was a dismal year for the world-famous wine. But Nasa is confident the Taurus-Littrow Valley on the Moon did not suffer the same wet growing season as Bordeaux, France tha… [+2112 chars]',
  },
  {
    source: {
      id: null,
      name: 'Salon',
    },
    author: 'Matthew Rozsa',
    title:
      'A piece of space junk hit the Moon. Oddly, scientists are elated - Salon',
    description:
      'One scientist called the impact of human space debris "a fortuitous experiment"',
    url: 'https://www.salon.com/2022/03/08/a-piece-of-space-junk-hit-the-moon-oddly-scientists-are-elated/',
    urlToImage:
      'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/03/a-trip-to-the-moon-0308221.jpg',
    publishedAt: '2022-03-08T22:34:00Z',
    content: null,
  },
  {
    source: {
      id: null,
      name: 'GlobeNewswire',
    },
    author: 'Research and Markets',
    title:
      'China Autonomous Driving Data Closed Loop Market Research Report 2022: Development of Autonomous Driving is Gradually Driven by Data Rather than Technology',
    description:
      'Dublin, Oct. 12, 2022 (GLOBE NEWSWIRE) -- The "China Autonomous Driving Data Closed Loop Research Report, 2022" report has been added to ResearchAndMarkets.com\'s offering.The development of autonomous driving is gradually driven by data rather than technology',
    url: 'https://www.globenewswire.com/news-release/2022/10/12/2532635/28124/en/China-Autonomous-Driving-Data-Closed-Loop-Market-Research-Report-2022-Development-of-Autonomous-Driving-is-Gradually-Driven-by-Data-Rather-than-Technology.html',
    urlToImage:
      'https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7?size=1',
    publishedAt: '2022-10-12T10:18:00Z',
    content:
      'Dublin, Oct. 12, 2022 (GLOBE NEWSWIRE) -- The "China Autonomous Driving Data Closed Loop Research Report, 2022" report has been added to ResearchAndMarkets.com\'s offering.\r\nThe development of autonom… [+6943 chars]',
  },
  {
    source: {
      id: 'independent',
      name: 'Independent',
    },
    author: 'Jon Kelvey',
    title:
      'Nasa uncorking Apollo Moon sample sealed since 1972 - The Independent',
    description:
      'Nasa scientists hope studying the pristine samples from 1972 will help the US space agency prepare for taking new lunar samples as part of its Artemis III mission to the Moon in 2025.',
    url: 'https://www.independent.co.uk/space/nasa-uncorking-apollo-moon-sample-sealed-since-1972-b2031432.html',
    urlToImage:
      'https://static.independent.co.uk/2022/03/08/19/Apollo%2017%20sample%20tube.jpeg?quality=75&width=1200&auto=webp',
    publishedAt: '2022-03-09T00:14:29Z',
    content:
      'As far as claret goes, 1972 was a dismal year for the world-famous wine. But Nasa is confident the Taurus-Littrow Valley on the Moon did not suffer the same wet growing season as Bordeaux, France tha… [+2112 chars]',
  },
  {
    source: {
      id: null,
      name: 'Salon',
    },
    author: 'Matthew Rozsa',
    title:
      'A piece of space junk hit the Moon. Oddly, scientists are elated - Salon',
    description:
      'One scientist called the impact of human space debris "a fortuitous experiment"',
    url: 'https://www.salon.com/2022/03/08/a-piece-of-space-junk-hit-the-moon-oddly-scientists-are-elated/',
    urlToImage:
      'https://mediaproxy.salon.com/width/1200/https://media.salon.com/2022/03/a-trip-to-the-moon-0308221.jpg',
    publishedAt: '2022-03-08T22:34:00Z',
    content: null,
  },
  {
    source: {
      id: null,
      name: 'GlobeNewswire',
    },
    author: 'Research and Markets',
    title:
      'China Autonomous Driving Data Closed Loop Market Research Report 2022: Development of Autonomous Driving is Gradually Driven by Data Rather than Technology',
    description:
      'Dublin, Oct. 12, 2022 (GLOBE NEWSWIRE) -- The "China Autonomous Driving Data Closed Loop Research Report, 2022" report has been added to ResearchAndMarkets.com\'s offering.The development of autonomous driving is gradually driven by data rather than technology',
    url: 'https://www.globenewswire.com/news-release/2022/10/12/2532635/28124/en/China-Autonomous-Driving-Data-Closed-Loop-Market-Research-Report-2022-Development-of-Autonomous-Driving-is-Gradually-Driven-by-Data-Rather-than-Technology.html',
    urlToImage:
      'https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7?size=1',
    publishedAt: '2022-10-12T10:18:00Z',
    content:
      'Dublin, Oct. 12, 2022 (GLOBE NEWSWIRE) -- The "China Autonomous Driving Data Closed Loop Research Report, 2022" report has been added to ResearchAndMarkets.com\'s offering.\r\nThe development of autonom… [+6943 chars]',
  },
];
