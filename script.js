const one=document.querySelector(".container")
const careers=["youtuber","Freelancer","Traveller","Web developer","Instructor"]
let careerindex=0

let characterindex=0

update()
function update(){
    characterindex++
    one.innerHTML=`<h1> I am ${careers[careerindex].slice(0,1)==="I"?"an":"a"} ${careers[careerindex].slice(0,characterindex)}</h1> `
    
    if(characterindex===careers[careerindex].length){
        careerindex++
        characterindex=0
    }
    if(careerindex===careers.length){
     careerindex=0
    }
    setTimeout(update,300)

}