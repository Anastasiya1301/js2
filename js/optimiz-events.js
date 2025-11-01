//Оптимізації подій

//Події - реакція браузера на дії користувача

//ПОШИРЕННЯ ПОДІЙ

//занурення до цільової точки і вспливає

//CAPTURE-занурення(подія почин. на window) і тоне
//  елем. проходить через всі елеме.предки до
//  найглибшого цільового елем. на якому відбув
//  подія


//TARGET-подія дійшла до цільового елем.
//містить повідом. елем. про те,
//  що на ньому відбулася дія


//BUBBLE-подія вспливає від найглибшого
//цільового  елем. через усі елем-предки до
//window



const refs = {
    parent: document.querySelector("#parent"),
    child: document.querySelector("#child"),
    innerChild: document.querySelector("#inner-child")
}

refs.parent.addEventListener("click", onParentClick);
refs.child.addEventListener("click", onChildClick);
refs.innerChild.addEventListener("click", onInnerChildClick);

function onParentClick(event){
    // console.log("onParentClick");
    console.log("onParentClick-event.target", event.target)
    console.log("onParentClick-event.currentTarget", event.currentTarget);
}
function onChildClick(event){
    // console.log("onChildClick");
     console.log("onChildClick-event.target", event.target);
    //  console.log("onChildClick-event.currentTarget", event.currentTarget);
}
function onInnerChildClick(event){
    // console.log("onInnerChildClick");
    console.log("onInnerChildClick-event.target", event.target);
    console.log("onInnerChild-event.currentTarget", event.currentTarget);
}



//ДЕЛЕГУВАННЯ ПОДІЙ

//коли замість 100 слухачів
// ставиться 1 на батьківський елем.


const container = document.querySelector(".js-container");
container.addEventListener("click", onButtonClick);

function onButtonClick(event) {
    console.log(event.target.textContent);
}
