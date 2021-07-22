var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

onload = function () {
    if (tarefas == null) {
        let lista = document.getElementById("ul");
        lista.style.display = "none";
    } else {
        function regist() {
            let lista = document.getElementById("ul");
            let conteudo = "";

            tarefas.forEach((elemento_array) => {
                conteudo += '<li>' + elemento_array + '</li>';
            });
            lista.innerHTML = conteudo;
        }
        regist();
    }
}

function addTask() {
    let inp = document.getElementById("tarefa").value;
    let hr = document.getElementById("hours").value;

    if (inp === "") {
        alert("Insira uma tarefa")
    } else if (hr === "") {
        alert("Insira um horário")
    } else {
        tarefas.push(inp + " - " + hr);
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
        location.reload();
    }
}
