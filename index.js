const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
    alert("Все данные выводятся в консоль, нажмите f12");
    createObjectCat();
    createObjectOwner();
});

function createObjectCat(){
    class Cat{
        constructor(nikename, sex, breed, food){
            this.nikename = nikename; //кличка кота
            this.sex = sex; //пол кота
            this.breed = breed; //порода кота
            this.food = food; //питание кота
        }
    }

    let nikename = document.getElementById('nikename').value;

    let sex = null; 
    let elementSex = document.getElementsByName('sex');
    for(let i=0; elementSex[i]; ++i){
        if(elementSex[i].checked){
            sex = elementSex[i].value;
            break;
        }
    }

    let breed = document.getElementById('breed').value;

    let food = " ";
    let elementFood = document.getElementsByName('food');
    for(let i=0; elementFood[i]; ++i){
        if(elementFood[i].checked){
            food = `${elementFood[i].value} ${food}`;
        }
    }
    let cat = new Cat(nikename, sex, breed, food);
    console.log("Котик")
    console.log(`Кличка: ${cat.nikename}`);
    console.log(`Пол: ${cat.sex}`);
    console.log(`Порода: ${cat.breed}`); 
    console.log(`Питание: ${cat.food}`);
}

function createObjectOwner(){
    class Owner{
        constructor(surname, name, patronymic, tel, address){
            this.surname = surname; //фамилия владельца
            this.name = name; //имя владельца
            this.patronymic = patronymic; //отчество владельца
            this.tel = tel; //телефон владельца
            this.address = address; //адрес владельца
        }
    }
    let surname = document.getElementById('lastname').value;
    let name = document.getElementById('firstname1').value;
    let patronymic = document.getElementById('firstname2').value;
    let tel = document.getElementById('tel').value;
    let address = document.getElementById('address').value;

    let owner = new Owner(surname, name, patronymic, tel, address);
    console.log("Владелец котика")
    console.log(`Фамилия: ${owner.surname}`);
    console.log(`Имя: ${owner.name}`);
    console.log(`Отчество: ${owner.patronymic}`); 
    console.log(`Телефон: ${owner.tel}`);
    console.log(`Адрес: ${owner.address}`);    
}