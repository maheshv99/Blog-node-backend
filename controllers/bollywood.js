const BollywoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZgKbAbCbgWL5Zd81mYHbQQcgQIdtQvpHx4g&usqp=CAU",
            title:"Mithun Chakraborty doesn't want a biopic",
            details: "Explaining his reason, the actor said that he has been through a lot in life and doesn't want anyone else to face the same. ",
            moreDetails:"Elaborating on the same, Mithun spoke about how he was disrespected because of his skin colour.'I never want anybody to go through what I have gone through in life. Everyone has seen struggles and fought through difficult days, but I was always called out for my skin colour. I have been disrespected for a lot of years because of my skin colour and I have seen days when I had to sleep with an empty stomach, and I used to cry myself to sleep,' he said. The actor also mentioned that there were days when he had to think about what his next meal will be, and where he will go to sleep. He further said: 'I have also slept on the footpath for a lot of days. And that's the only reason I don't want my biopic to be ever made. My story will never inspire anyone, it will break them down (mentally) and discourage people from achieving their dreams. I don't want that to happen! If I can do it, anyone else can do it.'",
            date:"Nov 12, 2022",
            type:"Bollywood"
          },
          {
            id:2,
            img:"https://static.toiimg.com/thumb/msid-95473777,width-800,height-600,resizemode-75,imgsize-8914,pt-32,y_pad-40/95473777.jpg",
            title:"SRK receives Global Icon of Cinema award",
            details: "Bollywood megastar Shah Rukh Khan attended the Sharjah International Book Fair 2022 where he was honored with the Global Icon of Cinema and Cultural Narrative award.",
            date:"Nov 12, 2022",
            type:"Bollywood"
            
          },
          {
              id:3,
              img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_5OzWAtKrlNTq-fMMNf0PDK_iHjz6jg8Tg&usqp=CAU",
              title:"Priyanka Chopra on working in Hollywood",
              details:"Actor, producer, and entrepreneur Priyanka Chopra enjoys a massive fan following not only in Bollywood but also in Hollywood. ",
              date:"Nov 12, 2022",
              type:"Bollywood"
          },
          {
              id:4,
              img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPtG9otwLKCsqLKzJIsQaWAAp9SxvlEl6AtA&usqp=CAU",
              title:"Akshay Kumar on having Canadian citizenship",
              details: "Earlier Akshay revealed that he got his Canadian citizenship at a time when his films flopped and he was thinking about moving to Canada.",
              date:"Nov 12, 2022",
              type:"Bollywood",
              num:1
          }    
    ])
}
const BollywoodFirstData = (req,res) => {
    res.send([
      {
        id:1,
        img:"https://images.hindustantimes.com/img/2022/11/13/550x309/rajkummar_rao__1668337052380_1668337069198_1668337069198.webp",
        title:"Rajkumar reveal first pay was ₹300 ",
        date:"Nov 13, 2022",
        type:"Bollywood",
        num:"1"
      }
    ])
}
const BollywoodTopData = (req,res) => {
    res.send([
      {
        id:1,
        img:"https://images.hindustantimes.com/img/2022/11/13/550x309/Akshay-Kumar_1668328026802_1668328027071_1668328027071.jpg",
        title:"Akshay wants to reduce",
        date:"Nov 13, 2022",
        type:"Bollywood",
        num:"2"
      },
      {
        id:2,
        img:"https://images.hindustantimes.com/img/2022/11/13/550x309/Raveena_Tandon_Juhi_Chawla_1668335407809_1668335419478_1668335419478.jpg",
        title:"Raveena wished Juhi",
        date:"Nov 13, 2022",
        type:"Bollywood",
        num:"3"
      },
      {
        id:3,
        img:"https://images.hindustantimes.com/img/2022/11/12/550x309/amitabhbachchan_1668229088393_1668229088667_1668229088667.jpg",
        title:" BTS Amitabh Bachchan",
        date:"Nov 12, 2022",
        type:"Bollywood",
        num:"4"
      },
      {
        id:4,
        img:"https://images.hindustantimes.com/img/2022/11/21/550x309/aaradhya_birthday_party_1669011025847_1669011026027_1669011026027.jpg",
        title:"Aaradhya's Birthday",
        date:"Nov 12, 2022",
        type:"Bollywood",
        num:"5"
      }
    ])
}
module.exports.getBollywoodData = BollywoodData;
module.exports.getBollywoodFirstData = BollywoodFirstData;
module.exports.getBollywoodTopData = BollywoodTopData;