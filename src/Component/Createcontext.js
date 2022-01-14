import React, { createContext, useState } from 'react'


export const Createcontext = createContext();

export const Provider = (props) => {
    const [data, setData] = useState([{

        "Id": "1",
        "imageurl":"https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/golden-globes-1483816829.jpg?crop=1.00xw:0.752xh;0,0.0414xh&resize=1200:*",
        "title":"Golden Globe Awards",
        "description":"The Golden Globe Awards are accolades bestowed by the 87 members of the Hollywood Foreign Press Association beginning in January 1944, recognizing excellence in both American and international film and television.",
        "category": "Hollywood",
        "date":"Jan 10 2022",
        "likes":"100",
        "details":"The Golden Globes awards ceremony began in 1944. Members of the Hollywood Foreign Press Association present awards for achievement in film and television.The Power of the Dog is a 2021 Western psychological drama film[6][7][8] written and directed by Jane Campion, based on the 1967 novel of the same name by Thomas Savage. The film stars Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, and Kodi Smit-McPhee. Shot mostly across rural Otago, New Zealand, the film is an international co-production among New Zealand, Australia, the United Kingdom, and Canada. The film deals with themes such as love, grief, resentment, jealousy and sexuality.[9].It also received seven nominations at the 79th Golden Globe Awards, winning Best Motion Picture – Drama, Best Supporting Actor – Motion Picture for Smit-McPhee and Best Director for Campion and ten nominations at the 27th Critics' Choice Awards, including Best Picture.",
        "detailsimage":"https://img.jagranjosh.com/images/2022/January/1012022/Untitled%20design%20(1).jpg",
    },
    {

        "Id": "2",
        "imageurl":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcShoWb4WDDvS4t6tZ13tOJ-zdnrJiIoB4yTswLx8gLjZTuYwPte",
        "title":"Brahmāstra",
        "description":"Brahmāstra, is an upcoming Indian Hindi-language superhero film written and directed by Ayan Mukerji, and produced by Karan Johar. It stars Amitabh Bachchan, Ranbir Kapoor, Alia Bhatt, Mouni Roy and Nagarjuna Akkineni",
        "category": "Bollywood",
        "date":"December 16 2021",
        "likes":"100",
        "details":"BRAHMASTRA - the Trilogy, is a 3-part film franchise and the beginning of India's first original universe - the Astraverse. It is a new original cinematic universe inspired by deeply rooted concepts and tales in Indian mythology but set in the modern world, with epic storytelling of fantasy, adventure, good vs evil, love and hope; all told using cutting edge technology and never-seen-before visual spectacles.",
        "detailsimage":"https://imageory.clapnumber.com/albums/large/aaadum_1570386312_poster_0.jpg",
    },
    {

        "Id": "3",
        "imageurl":"https://cdn.geekwire.com/wp-content/uploads/2021/10/Meta_lockup_primary_RGB-630x307.jpg",
        "title":"META",
        "description":"The future of the internet is going to be virtual and Meta the company known to the public as Facebook says, believing that 1 billion people will be working and playing in the immersive, three-dimensional world referred to as the Metaverse by the end of the decade.",
        "category": "Technology",
        "date":"December 24 2022",
        "likes":"100",
        "details":"Meta is a prefix — a word put before another — that means after or or beyond, to operate at a higher level, or change. For example, metacarpus (the finger bones after the wrist), metalanguage (language used to describe another language) and metamorphosis (a change of form).Facebook announced that they were rebranding. Just a few weeks later, Zuckerberg then announced Facebook's new name would be Meta, inspired by the Greek word meaning beyond and their plan to created a next-gen metaverse internet.",
        "detailsimage":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg31GuBTLuOFUIULy3qS8lLCv08HNzv083lQ&usqp=CAU",
    },
    {

        "Id": "4",
        "imageurl":"https://pravase.co.in/admin_pravase/uploads/yatradham/Srisailam-Yatradham_1603345052.JPG",
        "title":"Srisailam",
        "description":"Srisailam is one of the popular tourist destinations in Andhra Pradesh and considered one of the most important pilgrimage centres of Lord Shiva.",
        "category": "Travel",
        "date":"December 24 2022",
        "likes":"100",
        "details":"It is located at 180Kms from Kurnool and 210 Kms from Hyderabad an attitude of over 1500 ft. above the Sea level in the picturesque natural environment in the Northern most part of the Nallamalas hill range. The temple at Srisailam is the ancient and sacred place of South India. The presiding deity of the place is Brahmaramba Mallikarjuna Swamy in natural stone formations in the shape of Lingam and is listed as one of the twelve Jyotirlingams existing in the country. The Temple built in 14th Century and the walls are carved with depictions of elephants hunting scenes and Lord Shiva in different manifestations. Apart from the main temple there are other places like Sikhareswaram, the gates of Heaven, Hatakeswaram and PalaDhara  PanchaDhara, Sakshi Ganapathi, Sivaji spurthikendra, Pathala Ganga, Chenchu Lakshmi Tribal Museum & Rajeev Gandhi Wild life sanctuary etc. are well worth for visit.",
        "detailsimage":"https://static2.tripoto.com/media/filter/tst/img/292917/TripDocument/1541089680_maxresdefault_1.jpg",
    },
    {

        "Id": "5",
        "imageurl":"https://previews.123rf.com/images/snapgalleria/snapgalleria1902/snapgalleria190200005/117399411-illustration-of-delicious-traditional-food-of-andhra-pradesh-india.jpg",
        "title":"Delicious traditional food of Andhra Pradesh",
        "description":"",
        "category": "Food",
        "date":"December 24 2020",
        "likes":"100",
        "details":"The state that gave a whole new definition and taste to Biryani is famous for giving birth to some of the most palatable Biryani and Pulao recipes. The original mouth-watering Andhra Chicken Biryani uses a rich combination of aromatic herbs and spices to give the long thin rice grains, a succulent taste. Tossed vegetables are mixed with Chicken to bring the taste it is best known for. Try the Andhra Chicken Biryani for your lunch to have a juicy fulfilling experience.",
        "detailsimage":"https://www.holidify.com/images/cmsuploads/compressed/andhra_20191112141755.jpg",
    },
    {

        "Id": "6",
        "imageurl":"https://img.traveltriangle.com/blog/wp-content/uploads/2020/03/Picnic-spots-near-Tirupati.jpg",
        "title":"TIRUPATI",
        "description":"Tirupati is a city in the Indian state of Andhra Pradesh. Its Sri Venkateswara Temple sits atop one of the the 7 peaks of Tirumala Hills, attracting scores of Hindu pilgrims.",
        "category": "Travel",
        "date":"December 04 2021",
        "likes":"100",
        "details":"Tirupati Balaji temple is the most popular temple on the earth today inviting the maximum number of devotes on any given day and attracting the largest amount of donations from them on a daily basis. Devotees pray the Lord to fulfill their wishes and upon their wishes getting fulfilled, it is a customary practice to offer their donations at the temple Hundi. In this manner lakhs of devotees pour into the temple to make their contributions.",
        "detailsimage":"https://static.toiimg.com/thumb/msid-87752765,width-1200,height-900,resizemode-4/.jpg",
    },
    {

        "Id": "7",
        "imageurl":"https://images.newscientist.com/wp-content/uploads/2021/12/14131831/PRI_212734844.jpg?width=800",
        "title":"Space tourism",
        "description":"A flurry of short flights aboard privately funded craft saw space tourism begin with a bang for billionaires in 2021.",
        "category": "Technology",
        "date":"December 15 2021",
        "likes":"100",
        "details":"Three different commercial ventures carried ultra-rich passengers into space in 2021. It began with Richard Branson, who took a 90-minute suborbital flight aboard his Virgin Galactic space plane, SpaceShipTwo, on 11 July. Whether or not the flight counts as having gone to space, though, remains a contentious subject  the US government defines space as beginning 50 miles (or just over 80 kilometres) up, which was the altitude of Bransons flight, but the internationally held definition of space, the Kármán line, is 100 kilometres above Earth.Following the US government definition, Branson was the first person to visit space on a spacecraft made by his own company. Amazon founder Jeff Bezos came a close second on 20 July, when he rode his firm Blue Origins New Shepard rocket on a suborbital flight past the Kármán line. While he reached a higher altitude than Branson at 107 km, the flight was shorter at 11 minutes, including 3 minutes of weightlessness. New Shepard flew again on 12 October with new passengers, including Star Trek actor William Shatner.",
        "detailsimage":"https://images.newscientist.com/wp-content/uploads/2021/12/14131830/PRI_212735243.jpg?width=800",
    },
    {
    "Id": "8",
        "imageurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAjSq2LACshpvxVl1jDIwh6_T1WleBdCKyw&usqp=CAU",
        "title":"Dangal",
        "description":"Highest-grossing Indian film",
        "category": "Bollywood",
        "date":"December 24 2016",
        "likes":"100",
        "details":"Dangal is loosely based on the Phogat family in Haryana. According to Mans World India, Mahavir Singh trained under Chandgi Ram, a Padma Shri winner, in Delhi after which he became a successful mercenary wrestler and won numerous dangals in various villages of Himachal, Uttar Pradesh, Punjab, and other states. Mahavir decided to train his daughters in the year 2000 when Indian weightlifter Karnam Malaeshwari became the first Indian woman to win an Olympic medal. He trained his daughters in a sport that was traditionally male-dominated and in a state which was known for gender inequality and low sex ratio. Phogat quit his job at the Haryana State Electricity Board to give more time to his daughter’s training and the girls used to practice with the boys since there were no other girls who practiced this sport at the time. However, people did not let them fight at local dangals due to conservative views and he took them to the Sports Authority of India Centre in Sonipat where they trained further.",
        "detailsimage":"https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
    },
    {
    "Id": "9",
        "imageurl":"https://1.bp.blogspot.com/-Yf9CV59_UfU/XyKfWeW6ToI/AAAAAAAAcP8/giR_Dkc95OgHyha42N5nsm2Ic8cYUxaugCLcBGAsYHQ/s1600/SpiderMan%2BImages%2B%2B%25281%2529.png",
        "title":"SpiderMan",
        "description":"Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko",
        "category": "Hollywood",
        "date":"December 14 2021",
        "likes":"100",
        "details":"There have been nine Spider-Man movies since 2002: but which Spider-Man movie is best? Marvel's web-slinger is one of the most popular movie properties today, but it took a long time for Hollywood to realize how lucrative he could be. Until relatively recently, the wall-crawler had only ever journeyed to the small screen. He was the star of several series and TV films starring Nicholas Hammond, along with various acclaimed cartoons, such as the Spider-Man: The Animated Series. Although that isn’t to say that no one was trying to bring Spider-Man to the big screen.",
        "detailsimage":"https://1.bp.blogspot.com/-Yf9CV59_UfU/XyKfWeW6ToI/AAAAAAAAcP8/giR_Dkc95OgHyha42N5nsm2Ic8cYUxaugCLcBGAsYHQ/s1600/SpiderMan%2BImages%2B%2B%25281%2529.png",
    },
    {
    "Id": "10",
        "imageurl":"https://www.holidify.com/blog/wp-content/uploads/2016/08/Hyderabadi-Dum-Chicken-Biryani-5.jpg",
        "title":"Andhra Chicken Biryani",
        "description":"Andhra Chicken Biryani for your lunch to have a juicy fulfilling experience.",
        "category": "Food",
        "date":"December 04 2021",
        "likes":"100",
        "details":"The state that gave a whole new definition and taste to Biryani is famous for giving birth to some of the most palatable Biryani and Pulao recipes. The original mouth-watering Andhra Chicken Biryani uses a rich combination of aromatic herbs and spices to give the long thin rice grains, a succulent taste. Tossed vegetables are mixed with Chicken to bring the taste it is best known for. Try the Andhra Chicken Biryani for your lunch to have a juicy fulfilling experience.",
        "detailsimage":"https://www.holidify.com/blog/wp-content/uploads/2016/08/Hyderabadi-Dum-Chicken-Biryani-5.jpg",
    },
    
   

])

        return (
            <Createcontext.Provider value={[data,setData]}>
                {props.children}
            </Createcontext.Provider>
        )
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
