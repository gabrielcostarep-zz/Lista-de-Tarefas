var tarefas = [];
onload = function () {
    let ta = JSON.parse(localStorage.getItem("tarefas"));
    if (ta == null) {
        let lista = document.getElementById("ul");
        lista.style.display = "none";
    } else {
        function regist() {
            let lista = document.getElementById("ul");
            let li = document.createElement("li");

            lista.appendChild(li);
            li.textContent = ta;
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
        tarefas.push(JSON.stringify(inp + " - " + hr));
        localStorage.setItem("tarefas", tarefas);
    }
}