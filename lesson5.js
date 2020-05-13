let srudents = [{
    Id: 1,
    Name: 'Anna',
    Age: 18,
    Grades: [5, 4, 5, 4],
}, {
    Id: 2,
    Name: 'Tanya',
    Age: 20,
    Grades: [4, 5, 3, 5],
}, {
    Id: 3,
    Name: 'Sasha',
    Age: 25,
    Grades: [4, 5, 3, 5],
}, {
    Id: 4,
    Name: 'Lena',
    Age: 22,
    Grades: [4, 5, 5, 4],
}, {
    Id: 5,
    Name: 'Misha',
    Age: 19,
    Grades: [3, 4, 2 ,5],
}];



let tableEl = document.createElement('table');

container.append(tableEl); // добавляет узлы или строки в конец 

tableEl.style = 'border: 1px solid grey';

let theadEl = document.createElement('thead');
let trEl = document.createElement('tr');



tableEl.append(theadEl);
theadEl.append(trEl);


for(let k in srudents[0]) {
    let thEl = document.createElement('th');
    thEl.innerHTML = k;
    trEl.append(thEl);
    thEl.style = 'border-bottom: 1px solid grey';
}

let tbodyEL = document.createElement('tbody');
tableEl.append(tbodyEL);


for(let i = 0; i<srudents.length; i++) {
    let trInTbodyEl = document.createElement('tr');
    tbodyEL.append(trInTbodyEl);
    for(let k in srudents[i]) {
        let tdEl = document.createElement('td');
        tdEl.innerHTML = srudents[i][k];
        trInTbodyEl.append(tdEl);
    }
}






