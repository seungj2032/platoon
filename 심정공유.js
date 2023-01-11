let myArray = ["강수훈", "류메이", "한금진", "장승진",
"브라이안", "켄신", "안명준", "신 요나", "소노카", "이심은", 
"이문희", "모토미", "김연정", "유리아", "세이레이", 
"에리카", "김윤희", "가연", "가나", "이정현"];

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
let m18 = document.querySelector('.m18');
let m19 = document.querySelector('.m19');
let m20 = document.querySelector('.m20');

let x1 = 0; let x2 = 0; let x3 = 0; let x4 = 0; let x5 = 0;
let x6 = 0; let x7 = 0; let x8 = 0; let x9 = 0; let x10 = 0; 
let x11 = 0; let x12 = 0; let x13 = 0; let x14 = 0; let x15 = 0;
let x16 = 0; let x17 = 0; let x18 = 0; let x19 = 0; let x20 = 0; 

m1.addEventListener('click', function() {  
    x1 += 1
    m1.classList.toggle("flipped");
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
m18.addEventListener('click', function() {  
    x18 += 1
    m18.classList.toggle("flipped");
})
m19.addEventListener('click', function() {  
    x19 += 1
    m19.classList.toggle("flipped");
})
m20.addEventListener('click', function() {  
    x20 += 1
    m20.classList.toggle('flipped');
})

function exclude() {
    for(let i=1;i<21;i++) {
        let check = eval('x'+i)%2
        if(check==1){
            delete myArray[i-1]
        } else {

        }
    }
    console.log(myArray);
}

let touch = 0;

function draw() {
    const ul = document.querySelector('.slide_box');
    
    if(touch==0){
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
            filtered  = myArray.filter(function(item) {
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
        //console.log(myArray);
        console.log(filtered);
        console.log(document.querySelector('.slide_box'));
    
        setTimeout(function() {
            console.log('stop');
            for(i=0;i<2;i++){
                ul.animate({
                    marginTop: '-1050px'
                },{
                    duration: 1500,
                    easing: "linear",
                    fill: "both"
                })
            }
            ul.animate({
                marginTop: '-1000px'
            },{
                duration: 1500,
                easing: "ease-out",
                fill: "both"
            })
        },100)
        touch += 1;
    } else {
        //alert("추첨은 한 번만 가능합니다.");
        alert("초기화해주시길 바랍니다.")
    }
}

function reset() {
    const slide = document.querySelector('.slide_box');
    
    slide.animate({
        marginTop: '0px'
    },{
        duration: 1,
        fill: "both"
    })
    touch -= 1;
}