const LgImgData = (req,res) => {
    res.send([
      {
        img:"https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?cs=srgb&dl=pexels-pixabay-257360.jpg&fm=jpg",
        text:"Nature is a art of a God.. ",
        type:"Travel",
        date:"Nov 12, 2022"
      }
    ])
}
const SmImgData = (req,res) => {
    res.send([
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmjPqt_nU_HQgdi0Ki3QvACncwyAzC_2rHA&usqp=CAU",
        text:"Land is the best art.",
        text1:"—Andy Warhol",
        type:"Travel",
        date:"Nov 12, 2022"
    },
    {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmjPqt_nU_HQgdi0Ki3QvACncwyAzC_2rHA&usqp=CAU",
        text:"Land is the best art.",
        text1:"—Andy Warhol",
        type:"Travel",
        date:"Nov 12, 2022"
    }
    ])
}

module.exports.getLgImgData = LgImgData;
module.exports.getSmImgData = SmImgData;
