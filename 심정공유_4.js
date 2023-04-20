let myArray = ["양성민","조나단","장승진","켄신","김기성",
"완율","신요환","요시후미","박은서","성희영","가연","도모카",
"아쓰미","조기하","김화성","향리","조예지"];

let copyArray = [];
myArray.forEach(function(item) {
    copyArray.push(item);
});

let m1 = document.querySelector('.m1');
let m2 = document.querySelector('.m2');
let m3 = document.querySelector('.m3');
let m4 = document.querySelector('.m4');
let m5 = document.querySelector('.m5');
let m6 = document.querySelector('.m6');
let m7 = document.querySelector('.m7');
let m8 = document.querySelector('.m8');
let m9 = document.querySelector('.m9');
let m10 = document.querySelector('.m10');
let m11 = document.querySelector('.m11');
let m12 = document.querySelector('.m12');
let m13 = document.querySelector('.m13');
let m14 = document.querySelector('.m14');
let m15 = document.querySelector('.m15');
let m16 = document.querySelector('.m16');
let m17 = document.querySelector('.m17');

let x1 = 0; let x2 = 0; let x3 = 0; let x4 = 0; let x5 = 0;
let x6 = 0; let x7 = 0; let x8 = 0; let x9 = 0; let x10 = 0; 
let x11 = 0; let x12 = 0; let x13 = 0; let x14 = 0; let x15 = 0;
let x16 = 0; let x17 = 0; 

m1.addEventListener('click', function() {  
    x1 += 1
    m1.classList.toggle("flipped");
    console.log(x1);
})
m2.addEventListener('click', function() {  
    x2 += 1
    m2.classList.toggle("flipped");
})
m3.addEventListener('click', function() {  
    x3 += 1
    m3.classList.toggle("flipped");
})
m4.addEventListener('click', function() {  
    x4 += 1
    m4.classList.toggle("flipped");
})
m5.addEventListener('click', function() {  
    x5 += 1
    m5.classList.toggle("flipped");
})
m6.addEventListener('click', function() {  
    x6 += 1
    m6.classList.toggle("flipped");
})
m7.addEventListener('click', function() {  
    x7 += 1
    m7.classList.toggle("flipped");
})
m8.addEventListener('click', function() {  
    x8 += 1
    m8.classList.toggle("flipped");
})
m9.addEventListener('click', function() {  
    x9 += 1
    m9.classList.toggle("flipped");
})
m10.addEventListener('click', function() {  
    x10 += 1
    m10.classList.toggle("flipped");
})
m11.addEventListener('click', function() {  
    x11 += 1
    m11.classList.toggle("flipped");
})
m12.addEventListener('click', function() {  
    x12 += 1
    m12.classList.toggle("flipped");
})
m13.addEventListener('click', function() {  
    x13 += 1
    m13.classList.toggle("flipped");
})
m14.addEventListener('click', function() {  
    x14 += 1
    m14.classList.toggle("flipped");
})
m15.addEventListener('click', function() {  
    x15 += 1
    m15.classList.toggle("flipped");
})
m16.addEventListener('click', function() {  
    x16 += 1
    m16.classList.toggle("flipped");
})
m17.addEventListener('click', function() {  
    x17 += 1
    m17.classList.toggle("flipped");
})

function exclude() {
    for(let i=1;i<18;i++) {
        let check = eval('x'+i)%2
        if(check==1){
            delete copyArray[i-1]
        } else {

        }
    }
    console.log(myArray);
    console.log(copyArray);
}

let touch = 0;

function roulette() {
    const ul = document.querySelector('.slide_box');

    function shuffle(array) {
        for (let index = array.length - 1; index > 0; index--) {
            const randomPosition = Math.floor(Math.random() * (index + 1));
        
            const temporary = array[index];
            array[index] = array[randomPosition];
            array[randomPosition] = temporary;
        }
    }
    
    function removeItem() {
        const items = ul.getElementsByTagName('li'); 
    
        while(items.length>0){
            items[0].remove();
        }
    }
    
    function addList()  {
        filtered  = copyArray.filter(function(item) {
            return item !== null && item !== undefined && item !== '';
        });
    
        shuffle(filtered);
    
        for(i=0;i<20;i++){
            if(i<filtered.length){
                const addValue = filtered[i];
                const li = document.createElement("li");
                
                li.setAttribute('id',addValue);
                
                const textNode = document.createTextNode(addValue);
                li.appendChild(textNode);
                
                document
                    .getElementById('slide_box')
                    .appendChild(li);
            } else {
                j = Math.floor(Math.random()*filtered.length)
                const addValue = filtered[j];
                const li = document.createElement("li");
                
                li.setAttribute('id',addValue);
                
                const textNode = document.createTextNode(addValue);
                li.appendChild(textNode);
                
                document
                    .getElementById('slide_box')
                    .appendChild(li);
            }
        }
    }
    
    //ul.style.webkitAnimationPlayState = 'running';
    removeItem();
    const li0 = document.createElement("li");
    li0.setAttribute('id','&nbsp');
    document.getElementById('slide_box').append(li0);
    addList();
    console.log(filtered);
    console.log(document.querySelector('.slide_box'));
    
    setTimeout(function() {
        console.log('stop');
        for(i=0;i<2;i++){
            ul.animate({
                marginTop: '-1050px'
            },{
                duration: 1750,
                easing: "linear",
                fill: "both"
            })
        }
        ul.animate({
            marginTop: '-1000px'
        },{
            duration: 1750,
            easing: "ease-out",
            fill: "both"
        })
    },100)
}

function reset() {
    const slide = document.querySelector('.slide_box');
    
    slide.animate({
        marginTop: '0px'
    },{
        duration: 1,
        fill: "both"
    })
    touch += 1;
}

function draw() {
    if(touch==0){
        roulette();
        touch += 1;
        console.log(touch);
    } else {
        reset();
        setTimeout(roulette(),50);
        console.log(touch);
    }
}