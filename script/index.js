let ulList = document.querySelector(".saida-dados ul");
let inputElement = document.querySelector(".entrada-dados input");
let buttonElement = document.querySelector(".entrada-dados button");


let tarefa = JSON.parse(localStorage.getItem("@keyList")) || [];


function renderizarTarefa() {
    ulList.innerHTML = '';

    tarefa.map((lugar) =>{
        let li = document.createElement("li");
        let liText = document.createTextNode(lugar);

        let linkElement = document.createElement('a');
        linkElement.setAttribute("href", '#');
        let linkText = document.createTextNode("DELETAR");
        linkElement.appendChild(linkText);

        let hr = document.createElement("hr");
        hr.setAttribute('id', 'my-id');
        li.appendChild(hr);
        

        let posicao = tarefa.indexOf(lugar);
        
        linkElement.setAttribute('onclick', `deletarTarefa(${posicao})`)

        li.appendChild(liText);
        li.appendChild(linkElement)
        ulList.appendChild(li);
    })
}

buttonElement.onclick = function() {
    if(inputElement.value === ''){
        alert("CAMPO VAZIO, DIGITE UMA TAREFA");
    }else{
        let novaTarefa = inputElement.value;
        tarefa.push(novaTarefa);
        inputElement.value = '';
        renderizarTarefa()
        save()
    }
}

function deletarTarefa(posicao) {
    tarefa.splice(posicao, 1);
    renderizarTarefa()
    save()
}

renderizarTarefa()

function save() {
    localStorage.setItem('@keyList', JSON.stringify(tarefa));
}

