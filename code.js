// DOM
var titulo = document.getElementsByName("Titulo");
var contenido = document.getElementsByName("Contenido");
var task1 = document.getElementById("task1");
var task2 = document.getElementById("task2");
var task3 = document.getElementById("task3");
var task4 = document.getElementById("task4");
var task5 = document.getElementById("task5");
var task6 = document.getElementById("task6");
var task7 = document.getElementById("task7");
var task8 = document.getElementById("task8");
var task9 = document.getElementById("task9");
var task10 = document.getElementById("task10");
var tg = document.getElementById("tg");
var po = [0,1,2,3,4,5,6,7,8,9];
var b = 0;


//sound
var sound1 = buttonAdd.src = "sound/buttonAdd.wav";
var sound2 = buttonRemove.src = "sound/buttonRemove.wav";
var sound3 = clickError.src = "sound/clickError.wav";

//set
soundLocalStorage = ["sound1","sound2","sound3"]
soundLocalStorage[0] = localStorage.setItem("sound1", sound1);
soundLocalStorage[1] = localStorage.setItem("sound2", sound2);
soundLocalStorage[2] = localStorage.setItem("sound3", sound3);

//get
getSoundLocalStorage = ["sound1","sound2","sound3"];
getSoundLocalStorage[0] = localStorage.getItem("sound1");
getSoundLocalStorage[1] = localStorage.getItem("sound2");
getSoundLocalStorage[2] = localStorage.getItem("sound3");

//buttonAdd
function buttonAdd(){
  var buttonAdd = new Audio();
  buttonAdd.src = getSoundLocalStorage[0];
  buttonAdd.play();
}

//buttonRemove
function buttonRemove(){
  var buttonRemove = new Audio();
      buttonRemove.src = getSoundLocalStorage[1];
      buttonRemove.play();
}
//clickError
function clickError(){

  var clickError = new Audio();
  clickError.src = getSoundLocalStorage[2];
  clickError.play();

  setTimeout(() => {
    alert(`Deja de tacaño y compra la version PRO 😏`)
  }, 2000);

}


//setLocalStorage
var taskLocalStorage = ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "n10"];

// getLocalStorage
var getLocalStorage = ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8", "n9", "n10"];
    getLocalStorage[0] = localStorage.getItem("n1");
    getLocalStorage[1] = localStorage.getItem("n2");
    getLocalStorage[2] = localStorage.getItem("n3");
    getLocalStorage[3] = localStorage.getItem("n4");
    getLocalStorage[4] = localStorage.getItem("n5");
    getLocalStorage[5] = localStorage.getItem("n6");
    getLocalStorage[6] = localStorage.getItem("n7");
    getLocalStorage[7] = localStorage.getItem("n8");
    getLocalStorage[8] = localStorage.getItem("n9");
    getLocalStorage[9] = localStorage.getItem("n10");


// agregar
function agregar(){
  tituloT = titulo[0].value;
  contenidoT = contenido[0].value;
  b++;
  //array task
  var task = [
    
    `<div class=taskStyle>
          <span class ="idTj">ID_1</span>
          <h4>${tituloT}<h4>
          <p><em class= "contenido">${contenidoT}</em><p/>
          <div class="buttonTask"> 
            <a onclick="quitar(1)">Eliminar</a>
          </div>
    </div>`,
    
    `<div class=taskStyle2>
          <span class ="idTj">ID_2</span>
          <h4>${tituloT}<h4>
          <p><em class= "contenido">${contenidoT}</em><p/>
          <div class="buttonTask"> 
            <a onclick="quitar(2)">Eliminar</a>
          </div>
    </div>`,
    
  `<div class=taskStyle3>
          <span class ="idTj">ID_3</span>
          <h4>${tituloT}<h4>
          <p><em class= "contenido">${contenidoT}</em><p/>
          <div class="buttonTask"> 
            <a onclick="quitar(3)">Eliminar</a>
          </div>
    </div>`,

  `<div class=taskStyle4>
          <span class ="idTj">ID_4</span>
          <h4>${tituloT}<h4>
          <p><em class= "contenido">${contenidoT}</em><p/>
          <div class="buttonTask"> 
            <a onclick="quitar(4)">Eliminar</a>
          </div>
    </div>`,

  `<div class=taskStyle5>
          <span class ="idTj">ID_5</span>
          <h4>${tituloT}<h4>
          <p><em class= "contenido">${contenidoT}</em><p/>
          <div class="buttonTask"> 
            <a onclick="quitar(5)">Eliminar</a>
          </div>
    </div>`,
    

  `<div class=taskStyle6>
        <span class ="idTj">ID_6</span>
        <h4>${tituloT}<h4>
        <p><em class= "contenido">${contenidoT}</em><p/>
        <div class="buttonTask"> 
          <a onclick="quitar(6)">Eliminar</a>
        </div>
  </div>`,

  `<div class=taskStyle7>
        <span class ="idTj">ID_7</span>
        <h4>${tituloT}<h4>
        <p><em class= "contenido">${contenidoT}</em><p/>
        <div class="buttonTask"> 
          <a onclick="quitar(7)">Eliminar</a>
        </div>
  </div>`,

  `<div class=taskStyle8>
        <span class ="idTj">ID_8</span>
        <h4>${tituloT}<h4>
        <p><em class= "contenido">${contenidoT}</em><p/>
        <div class="buttonTask"> 
          <a onclick="quitar(8)">Eliminar</a>
        </div>
  </div>`,

  `<div class=taskStyle9>
        <span class ="idTj">ID_9</span>
        <h4>${tituloT}<h4>
        <p><em class= "contenido">${contenidoT}</em><p/>
        <div class="buttonTask"> 
          <a onclick="quitar(9)">Eliminar</a>
        </div>
  </div>`,

  `<div class=taskStyle10>
        <span class ="idTj">ID_10</span>
        <h4>${tituloT}<h4>  
        <p><em class= "contenido">${contenidoT}</em><p/>
        <div class="buttonTask"> 
          <a onclick="quitar(10)">Eliminar</a>
        </div>
  </div>`
  ];

  if (b<11){
    if (po[0] === 0){
          po[0]++;
          task1.innerHTML = task[0];
          taskLocalStorage[0] = localStorage.setItem("n1", task[0]);
          tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[0]}</span>`;
          `${titulo[0].value = ""}${contenido[0].value = ""}`
          buttonAdd();

    }else  if (po[1] === 1){
            po[1]++;
            task2.innerHTML = task[1];
            taskLocalStorage[1] = localStorage.setItem("n2", task[1]);
            tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[1]}</span>`;
            `${titulo[0].value = ""}${contenido[0].value = ""}`
            buttonAdd();
    }else  if (po[2] === 2){
            po[2]++;
            task3.innerHTML = task[2];
            taskLocalStorage[2] = localStorage.setItem("n3", task[2]);
            tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[2]}</span>`;
            `${titulo[0].value = ""}${contenido[0].value = ""}`
            buttonAdd();
    }else  if (po[3] === 3){
            po[3]++;
            task4.innerHTML = task[3];
            taskLocalStorage[3] = localStorage.setItem("n4", task[3]);
            tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[3]}</span>`;
            `${titulo[0].value = ""}${contenido[0].value = ""}`
            buttonAdd();
    }else  if (po[4] === 4){
            po[4]++;
            task5.innerHTML = task[4];
            taskLocalStorage[4] = localStorage.setItem("n5", task[4]);
            tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[4]}</span>`;
            `${titulo[0].value = ""}${contenido[0].value = ""}`
            buttonAdd();
    }else  if (po[5] === 5){
            po[5]++;
            task6.innerHTML = task[5];
            taskLocalStorage[5] = localStorage.setItem("n6", task[5]);
            tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[5]}</span>`;
            `${titulo[0].value = ""}${contenido[0].value = ""}`
            buttonAdd();
    }else  if (po[6] === 6){
            po[6]++;
            task7.innerHTML = task[6];
            taskLocalStorage[6] = localStorage.setItem("n7", task[6]);
            tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[6]}</span>`;
            `${titulo[0].value = ""}${contenido[0].value = ""}`
            buttonAdd();
    }else  if (po[7] === 7){
            po[7]++;
            task8.innerHTML = task[7];
            taskLocalStorage[7] = localStorage.setItem("n8", task[7]);
            tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[7]}</span>`;
            `${titulo[0].value = ""}${contenido[0].value = ""}`
            buttonAdd();
    }else  if (po[8] === 8){
            po[8]++;
            task9.innerHTML = task[8];
            taskLocalStorage[8] = localStorage.setItem("n9", task[8]);
            tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[8]}</span>`;
            `${titulo[0].value = ""}${contenido[0].value = ""}`
            buttonAdd();
    }else  if (po[9] === 9){
            po[9]++;
            task10.innerHTML = task[9];
            taskLocalStorage[9] = localStorage.setItem("n10", task[9]);
            tg.innerHTML = `Tarea guardada en <span class ="tgId">ID_${po[9]}</span>`;
            `${titulo[0].value = ""}${contenido[0].value = ""}`
            buttonAdd();
      }
    }else{
     b = 10;
     clickError();
    }
}

// quitar
function quitar(n1){
  buttonRemove();
  b--;
  switch (n1) {
       case 1:
          task1.innerHTML = ""
          localStorage.removeItem("n1");
          po[0]--;
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
          break;

       case 2:
          task2.innerHTML = ""
          localStorage.removeItem("n2");
          po[1]--;
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
            break; 
                 
       case 3:
          task3.innerHTML = ""
          localStorage.removeItem("n3");
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
          po[2]--;
          break;

       case 4:
          task4.innerHTML = ""
          localStorage.removeItem("n4");
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
          po[3]--;
            break;  

       case 5:
          task5.innerHTML = ""
          localStorage.removeItem("n5");
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
          po[4]--;
          break;

       case 6:
          task6.innerHTML = ""
          localStorage.removeItem("n6");
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
          po[5]--;
            break; 
                 
       case 7:
          task7.innerHTML = ""
          localStorage.removeItem("n7");
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
          po[6]--;
          break;

       case 8:
          task8.innerHTML = ""
          localStorage.removeItem("n8");
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
          po[7]--;
            break;
                 
       case 9:
          task9.innerHTML = ""
          localStorage.removeItem("n9");
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
          po[8]--;
          break;

       case 10:
          task10.innerHTML = ""
          localStorage.removeItem("n10");
          tg.innerHTML = `Tarea <span class ="tgId">ID_${n1}</span> eliminada`;
          po[9]--;
            break;                     
  
       default:
            break;
    }
 }

 //tareasSaves
 function tareasSaves(){
  if (getLocalStorage[0]){
    task1.innerHTML = getLocalStorage[0];
    po[0]++;
    b++;
  }if (getLocalStorage[1]) {
    task2.innerHTML = getLocalStorage[1];
    po[1]++;
    b++;
  }if (getLocalStorage[2]) {
    task3.innerHTML = getLocalStorage[2];
    po[2]++;
    b++;
  }if (getLocalStorage[3]) {
    task4.innerHTML = getLocalStorage[3];
    po[3]++;
    b++;
  }if (getLocalStorage[4]) {
    task5.innerHTML = getLocalStorage[4];
    po[4]++;
    b++;
  }if (getLocalStorage[5]) {
    task6.innerHTML = getLocalStorage[5];
    po[5]++;
    b++;
  }if (getLocalStorage[6]) {
    task7.innerHTML = getLocalStorage[6];
    po[6]++;
    b++;
  }if (getLocalStorage[7]) {
    task8.innerHTML = getLocalStorage[7];
    po[7]++;
    b++;
  }if (getLocalStorage[8]) {
    task9.innerHTML = getLocalStorage[8];
    po[8]++;
    b++;
  }if (getLocalStorage[9]) {
    task10.innerHTML = getLocalStorage[9];
    po[9]++;
    b++;
  }
 }

 tareasSaves();


//  function onKeyUp(event) {
//   var keycode = event.keyCode;
//   if(keycode == '13'){

//       contenido[0].value = "...";
//   }
// }