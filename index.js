function tabela(){
    const tabela = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const th_nome = document.createElement("th");
    th_nome.innerHTML = "nome";
    th_nome.colSpan = 5;
    thead.appendChild(th_nome);

    // ELEMENTOS TBODY
    const th_B = document.createElement("th");
    th_B.innerHTML = "B";
    const th_I = document.createElement("th");
    th_B.innerHTML = "I";
    const th_N = document.createElement("th");
    th_B.innerHTML = "N";
    const th_G = document.createElement("th");
    th_B.innerHTML = "G";
    const th_O = document.createElement("th");
    th_B.innerHTML = "O";

    tbody.appendChild(th_B);
    tbody.appendChild(th_I);
    tbody.appendChild(th_N);
    tbody.appendChild(th_G);
    tbody.appendChild(th_O);

    for (let i = 0; i < 5; i++) {
        const tr = document.createElement("tr");
        for (let ii = 0; ii < 5; ii++) {
            const td = document.createElement("td");
            td.innerHTML = "xx";
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    const body = document.querySelector("body");
    body.appendChild(tabela);

}