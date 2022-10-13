
//------ #### Menu Bar START #### ------\\
const menuBar = document.querySelector(".menu");
const links = document.querySelectorAll(".sci ul li a");

links.forEach(function(link){
    link.addEventListener("click", function(){
        menuBar.classList.remove("active");
    })
})
menuBar.addEventListener("click", function(){
    menuBar.classList.toggle("active");
})
//------ #### Menu Bar END #### ------\\



//------#### Slide Images START #### ------\\
const sliderItem = [
    {
        id: 01,
        heading : "If you do not at least try, you will never change.",
        peragraph : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.`,
        image : "slider image/status1.png",
    },
    {
        id: 02,
        heading : "Nobody is perfect. Sometimes, people do mistakes",
        peragraph : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.`,
        image : "slider image/status2.png",
    },
    {
        id: 03,
        heading : "Beauty is not in the face, but in the heart",
        peragraph : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.`,
        image : "slider image/status3.png",
    },
    {
        id: 04,
        heading : "Strong means not just fighting but help friends and others",
        peragraph : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit.`,
        image : "slider image/status4.png",
    }
];
const Heading = document.querySelector(".heading");
const Peragraph = document.querySelector(".pera");
const Image = document.querySelector(".image img");
let currentItem = 0;

//  ### Slide Event Listener ### \\
window.addEventListener("DOMContentLoaded", function(){
    showDisplay(currentItem);
    showCharactre(Characters);
    ShowCharacterListBtn(Characters)
});

 // ### Show Items Function ### \\
function showDisplay(indexNumber){
    let item = sliderItem[indexNumber];
    Heading.innerHTML = item.heading;
    Peragraph.innerHTML = item.peragraph;
    Image.src = item.image;
}
 // ### Auto Slide Function ### \\
 setInterval(function autoSlide(){
    currentItem ++;
    if(currentItem === sliderItem.length -1){
        currentItem = 0;
    }
    showDisplay(currentItem)
},5000);
//------ #### Slide Images END #### ------\\

 

//------ #### Show Character START #### ------\\
const Characters = [
    {
        id:01,
        name: "nobita nobi",
        gender : "male",
        chatagory : "hero",
        work : "student",
        part : "main character",
        image : "character/nobita.jpeg",
    },
    {
        id: 02,
        name: "Shizuka Minamoto",
        gender : "female",
        chatagory : "hero",
        work : "student",
        part : "main character",
        image : "character/shizuka.jpeg",
    },
    {
        id: 03,
        name: "doraemon",
        gender : "male(robot)",
        chatagory : "hero",
        work : "help nobita",
        part : "main character",
        image : "character/doraemon.jpg",
    },
    {
        id: 04,
        name: "Takeshi Gouda",
        gender : "male",
        chatagory : "hero",
        work : "student",
        part : "main character",
        image : "character/gian.jpeg",
    },
    {
        id: 05,
        name: "Suneo Honekawa",
        gender : "male",
        chatagory : "hero",
        work : "student",
        part : "main character",
        image : "character/suneo.jpeg",
    },
    {
        id: 06,
        name: "Hidetoshi Dekisugi",
        gender : "male",
        chatagory : "hero",
        work : "student",
        part : "main character",
        image : "character/dekisugi.jpeg",
    },
    {
        id: 07,
        name: "dorami",
        gender : "female(robot)",
        chatagory : "hero",
        work : "student",
        part : "doreamon sister",
        image : "character/dorami.jpeg",
    },
    {
        id: 08,
        name: "Jaiko Gouda",
        gender : "female",
        chatagory : "sister",
        work : "artist",
        part : "gian sister",
        image : "character/jaiko.jpeg",
    },
    {
        id: 09,
        name: "Tamako Nobi",
        gender : "female",
        chatagory : "mother",
        work : "housewife",
        part : "nobita mother",
        image : "character/tamako.jpeg",
    },
    {
        id: 10,
        name: "nobisuke nobi",
        gender : "male",
        chatagory : "father",
        work : "salaryman.",
        part : "nobita father",
        image : "character/nobisuke.jpeg",
    },
    {
        id: 11,
        name: "Kazuyo Aok",
        gender : "female",
        chatagory : "mother",
        work : "shopkeeper",
        part : "gian mother",
        image : "character/Kazuyo_Aok.jpeg",
    },
    {
        id: 12,
        name: "Masako Matsubara",
        gender : "female",
        chatagory : "mother",
        work : "housewife",
        part : "shizuka mother",
        image : "character/Masako_Matsubara.jpeg",
    },
    {
        id: 13,
        name: "Sasuke Goda",
        gender : "male",
        chatagory : "father",
        work : "shopkeeper",
        part : "gian father",
        image : "character/Sasuke_Goda.jpeg",
    },
    {
        id: 14,
        name: "Mrs. Honekawa",
        gender : "female",
        chatagory : "mother",
        work : "housewife",
        part : "suneo mother",
        image : "character/Mrs_Honekawa.jpeg",
    },
    {
        id: 15,
        name: " Mr. Honekawa",
        gender : "male",
        chatagory : "father",
        work : "business man",
        part : "suneo father",
        image : "character/Mr_Honekawa.jpeg",
    },
    {
        id: 16,
        name: "Shizuka Minamoto",
        gender : "female",
        chatagory : "hero",
        work : "student",
        part : "main character",
        image : "character/shizuka.jpeg",
    },
    {
        id: 17,
        name: "Yoshio Minamoto",
        gender : "male",
        chatagory : "father",
        work : "employer",
        part : "shizuka father",
        image : "character/yoshio_minamoto.jpg",
    },
    {
        id: 18,
        name: "Honekawa Sunetsugu",
        gender : "male",
        chatagory : "brother",
        work : "student",
        part : "shizuka cousine",
        image : "character/sunetsugu_honekawa.jpeg",
    },
    {
        id: 19,
        name: "sensei",
        gender : "male",
        chatagory : "teacher",
        work : "teaching",
        part : "school teacher",
        image : "character/sensei.jpeg",
    },
    {
        id: 20,
        name: "Oba chan",
        gender : "female",
        chatagory : "mother",
        work : "idk",
        part : "nobita grand mom",
        image : "character/oba_chan.webp",
    },
    {
        id: 21,
        name: "Suneo no Obaasan",
        gender : "female",
        chatagory : "mother",
        work : "idk",
        part : "suneo grand mom",
        image : "character/Suneo_no_Obaasan.webp",
    }

];
const HeroSection = document.querySelector("#hero");
const increaseDivBtn = document.querySelector("#btn_increase");
const Box = document.querySelector(".list_box");
const listBtn = document.querySelector(".list ul");

 //  ### Show Character Function ### \\
function showCharactre(Character){
    let elememt = Character.map(function(item){
        return `<div class="box">
        <div class="image_segment">
        <div class="image">
            <img src="${item.image}">
        </div>
    </div>
    <div class="text_segment">
        <ul>
            <li>name  <span>${item.name}</span></li>
            <li>gender  <span>${item.gender}</span> </li>
            <li>chatagory  <span>${item.chatagory}</span></li>
            <li>work  <span>${item.work}</span></li>
            <li>part  <span>${item.part}</span></li>
        </ul>
    </div>
    </div>`
    })
    let disElement = elememt.join("");
    Box.innerHTML = disElement;
}
 //  ### Show Character List Button ### \\
function ShowCharacterListBtn(ListItem){
    const li = ListItem.map(function(item){
        let demo = item.chatagory;
        return demo
    });
    ///method number 01
    // let specificListBtn = li.filter(function(currentValue, index, arr){
    //     if(arr.indexOf(currentValue)===index){
    //         return arr;
    //     }
    // });
    // specificListBtn.splice(0,0,"all");

    ///method number 02
    let specificListBtn = [...new Set(li)];
    specificListBtn.splice(0,0,"all");


    // add list btn in DOM
    let listBtnNames = specificListBtn.map(function(libtn){
        return `<li class="list ${libtn}" data-id="${libtn}">${libtn}</li>`
    })
    let displayLiBtn = listBtnNames.join("");
    listBtn.innerHTML = displayLiBtn;

    const fliterBtn = document.querySelectorAll(".list ul li");
     //  ### Show Character Filtter Function ### \\
     fliterBtn.forEach(function(btn){
        btn.addEventListener("click", function(x){
            
            /// methood 01 : for add class or remove
    
            // fliterBtn.forEach(function(e){
            //     if(btn.className !== e.className){
            //         e.classList.remove("active");
            //     }
            // })
            // btn.classList.add("active");
    
            /// methood 02 : for add class or remove
            
            let id = x.target.dataset.id;
            if(id){
                fliterBtn.forEach( function(y) {
                    y.classList.remove("active");
                });
                x.target.classList.add("active");
            }
            const clickedChatagory = btn.dataset.id;
            const specificChatagory = Characters.filter(function(item){
                if(item.chatagory === clickedChatagory){
                    return item;
                }
            })
            let specificCharacter = specificChatagory
            if(clickedChatagory === "all"){
                showCharactre(Characters);
            }else{
                showCharactre(specificCharacter)
            }
        })
    })
};
//------ #### Show Character END #### ------\\


//------ #### Copy Text #### ------\\
const icon = document.querySelectorAll(".sec .icon");
icon.forEach(function(iconEle){
    iconEle.addEventListener("click", function(e){
        let element = e.target.parentElement.parentElement;
        let copiedText = element.querySelector("input.text");
        element.classList.add("active");

        setInterval(function(){
            element.classList.remove("active");
        },500)
        copiedText.select();
        document.execCommand('copy');
    })
})





let texxt = "i love you";
for(i=0; i<100; i++){
    console.log(i)
}