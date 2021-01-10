if(document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded',ready)
}else {
    ready()
}
var list=[]
var Total=0
var obj={'Seared slaughterfish':5,'Cooked boar meat':15,'Apple Pie':5,'Tomato':4,'SweetRoll':2}
function ready() {
    var buttonsAdd = document.getElementsByClassName('btn');
    for(i=0;i<buttonsAdd.length;i++) {
        var button = buttonsAdd[i];
        button.addEventListener('click',addToCart)
    }
}

function addToCart(event) {
    var button = event.target;

    var div=document.getElementsByClassName('items2buy')[0]
    itemname= button.parentElement.querySelector('p').innerText;
    itemprice= parseInt( button.parentElement.querySelector('div').innerText);
    if (!(list.includes(itemname)))
    {
        list.push(itemname) 
        var item = document.createElement('tr');
        item.innerHTML= `<td id='nm' style="display: flex;width:10vw;"><p>1</p><p>-</p><p>`+itemname+`</p></div></td><td><div class='linesprice'><div class='btns'><i class="fas fa-plus-square" onclick='add(this)' style="font-size:1.8em;" ></i><div class='total4item' style='display: flex;align-items: center;width:5vw;'><p>`+itemprice+`</p><img src='res/Septim_Skyrim.webp' alt='Septim_Skyrim'></div> <i class="far fa-minus-square" style="font-size:1.8em;" onclick='remove(this)'></i></div><i class="fas fa-trash-alt trash" onclick='deletee(this)'></i></div></td>` 
        div.appendChild(item);    
        document.getElementsByClassName('total')[0].innerText=parseInt(document.getElementsByClassName('total')[0].innerText)+itemprice

    }
}
function add(elem)
{   
    var m=elem.parentElement.parentElement.parentElement.parentElement.querySelector('td').querySelectorAll('p')[2].innerText;
    var n=elem.parentElement.parentElement.querySelectorAll('div')[1].querySelector('p');
    var s=elem.parentElement.parentElement.parentElement.parentElement.querySelector('td').querySelectorAll('p')[0];
    n.innerText=parseInt(n.innerText)+obj[m]
    s.innerText=parseInt(n.innerText)/obj[m]
    document.getElementsByClassName('total')[0].innerText=parseInt(document.getElementsByClassName('total')[0].innerText)+obj[m]    
}
function remove(elem)
{
    var m=elem.parentElement.parentElement.parentElement.parentElement.querySelector('td').querySelectorAll('p')[2].innerText;
    var n=elem.parentElement.parentElement.querySelectorAll('div')[1].querySelector('p');
    var s=elem.parentElement.parentElement.parentElement.parentElement.querySelector('td').querySelectorAll('p')[0];
    if (!(parseInt(n.innerText)==obj[m])){n.innerText=parseInt(n.innerText)-obj[m];document.getElementsByClassName('total')[0].innerText=parseInt(document.getElementsByClassName('total')[0].innerText)-obj[m]}
    s.innerText=parseInt(n.innerText)/obj[m]   
    
}
function liked(elem)
{
    if (elem.style.color=='pink'){elem.style.color='red'}
    else {elem.style.color='pink'}
}
function deletee(elem)
{   
    var divnam=elem.parentElement.parentElement.parentElement.parentElement.querySelector('td').querySelectorAll('p')[2].innerText;
    console.log(divnam)
    var elmdiv=elem.parentElement.parentElement.parentElement;
    var parntdiv=document.getElementsByClassName('items2buy');
    n=elem.parentElement.parentElement.querySelectorAll('div')[1].querySelector('p').innerText;
    console.log(parntdiv[0]);
    parntdiv[0].removeChild(elmdiv);
    delete list[list.indexOf(divnam)];
    document.getElementsByClassName('total')[0].innerText=parseInt(document.getElementsByClassName('total')[0].innerText)-parseInt(n)

}
function buy(){
    var T=parseInt(document.getElementsByClassName('total')[0].innerText)
    if(T>50){
        alert("you don't have enaugh gold")
    }
    else if(T==0){
        alert("please select your items")
    }
    else{
        document.getElementsByClassName('total')[0].innerText=0
    }
}
//<td style="display: flex;"><p>1</p><p>-</p><p>`+itemname+`</p></div></td><td><div class='linesprice'><div class='btns' style='padding-right:1.4em'><i class="fas fa-plus-square" onclick='add(this)' style="font-size:1.8em;" ></i><i class="far fa-minus-square" style="font-size:1.8em;padding-left:10px;" onclick='remove(this)'></i></div><div class='total4item' style='display: flex;align-items: center;'><p>`+itemprice+`</p><img src='res/Septim_Skyrim.webp' alt='Septim_Skyrim'></div><i class="fas fa-trash-alt trash" onclick='deletee(this)'></td></i></div>