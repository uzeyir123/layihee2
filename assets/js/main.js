let myNodelist = document.getElementsByTagName("LI");


const filterButton = document.querySelector('.sekil');
const ul = document.querySelector('#myUL');
const lis = document.querySelector('#myUL').children;


ul.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
    }
})

filterButton.addEventListener("click", () => {
    let arr = []

    if (lis.length > 0) {
        for (let el of lis) {
            arr.push(el.firstChild.innerText)
        }
    }

    arr.sort();

    ul.innerHTML = ""
    arr.forEach(item => {
        ul.innerHTML += `  <li><p>${item}</p><span class="close">×</span></li>`
    })


})



for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}


let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}


let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("myInput").value;
    let s = document.createElement('p');
    s.innerText = inputValue

    //   let t = document.createTextNode(inputValue);
    //     li.appendChild(t);
    li.append(s)
    if (inputValue === '') {
        alert("Metni daxil edin");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}


let sekil1 = document.querySelector('.sekil1')


if (
    sekil1.addEventListener("click", () => {
        filterButton.style.display = "block";
        sekil1.style.display = "none";
        let arr = [];
        list.push(arr);
        arr.forEach((item) => {
            item.sort();
            item.reverse();
        });
    })
) {
}
if (
    filterButton.addEventListener("click", () => {
        sekil1.style.display = "block";
        filterButton.style.display = "none";
    })
) {
}


sekil1.addEventListener("click", () => {
    let arr = []

    if (lis.length > 0) {
        for (let el of lis) {
            arr.push(el.firstChild.innerText)
        }
    }

    arr.sort();
    arr.reverse()
    ul.innerHTML = ""
    arr.forEach(item => {
        ul.innerHTML += `  <li><p>${item}</p><span class="close">×</span></li>`
    })

    
})