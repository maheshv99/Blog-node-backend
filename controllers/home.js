const LatestData = (req, res) => {
  res.send([
    {
      id: 1,
      img: "https://static.toiimg.com/thumb/msid-70555190,width-800,height-600,resizemode-75,imgsize-506827,pt-32,y_pad-40/70555190.jpg",
      title: "Running for weight loss",
      details:
        "Running is a great way to exercise and lose weight. It not just burns high number of calories (running at a normal pace for 30 minutes, on an average burns 259 calories.), but it also tones up your body. ",
      date: "Nov 12, 2022",
      type: "Fitness",
    },
    {
      id: 2,
      img: "https://static.toiimg.com/thumb/msid-51478778,width-800,height-600,resizemode-75,imgsize-51683,pt-32,y_pad-40/51478778.jpg",
      title: "Simple ways to relax your body in office",
      details:
        " Setting small goals can help you achieve a healthy lifestyle. Here are simple ways to relax your body , increase physical movement while avoiding sitting down for long times",
      date: "Nov 12, 2022",
      type: "Fitness",
    },
    {
      id: 3,
      img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/13B2F/production/_127678608_gettyimages-1244636244.jpg.webp",
      title: "Is this really the end of Twitter?",
      details:
        "Twitter today is awash with people saying goodbye. The hashtag 'RIPTwitter' is trending and lots of the site's users are scrambling to download their data.",
      date: "Nov 12, 2022",
      type: "Technology",
    },
    {
      id: 4,
      img: "https://images.news18.com/ibnlive/uploads/2022/11/redmi-pad-16684932063x2.jpg?impolicy=website&width=510&height=356",
      title: "Redmi Tablet Budget is Worth Buying",
      details:
        "Budget tablets have grown, and they are quite likeable now. After using the new tablets in the market, we had set our expectations for the Redmi Pad, and thankfully it came through nicely.",
      date: "Nov 12, 2022",
      type: "Technology",
    },
    {
      id: 5,
      img: "https://static.toiimg.com/thumb/95606600.cms?width=680&height=512&imgsize=94134",
      title: "Fruit can fix breathing issues to digestion",
      details:
        "As kids we have been told about the umpteen benefits of including fruits in our day-to-day diet. Well, here’s all you need to know about this exotic fruit.",
      date: "Nov 12, 2022",
      type: "Food",
    },
    {
      id: 6,
      img: "https://static.toiimg.com/thumb/95560619.cms?width=680&height=512&imgsize=198828",
      title: "To make restaurant style Italian food at home",
      details:
        "We all love and crave Italian food. But eating out daily might not be the best option and a viable one.  So why not dish out some healthy Italian fare at home?",
      date: "Nov 12, 2022",
      type: "Food",
    },
  ]);
};
const LatestArticleData = (req, res) => {
  res.send([
    {
      id: 1,
      img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/superman-henry-cavill-hasnt-signed-any-deal-with-wb-to-return-in-man-of-steel-2-reports-01.jpg",
      title: "Henry Cavill’s Return As Superman",
      details:
        "The future of Henry Cavill as Superman is uncertain, no deal signed for Man Of Steel 2 yet.and earlier reports suggesting that a Man of Steel 2 is in development, nothing is set in stone yet.",
      date: "Nov 12, 2022",
      type: "Hollywood",
    },
    {
      id: 2,
      img: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/bts-jungkook-releases-song-dreamers-ahead-of-his-performance-at-fifa-world-cup-2022-001.jpg",
      title: "BTS Jungkook ‘Dreamers’ declared as a ‘Banger’",
      details:
        "It was earlier revealed that BTS member Jungkook will be performing his song Dreamers at the FIFA World Cup Qatar 2022, ",
      date: "Nov 12, 2022",
      type: "Hollywood",
    },
    {
        id:3,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtG9otwLKCsqLKzJIsQaWAAp9SxvlEl6AtA&usqp=CAU",
        title:"Akshay Kumar on having Canadian citizenship",
        details: "Earlier Akshay revealed that he got his Canadian citizenship at a time when his films flopped and he was thinking about moving to Canada.",
        date:"Nov 12, 2022",
        type:"Bollywood",
        num:1
    }    
  ]);
};

module.exports.getLatestData = LatestData;
module.exports.getLatestArticleData = LatestArticleData;
