let username = prompt("Lütfen kulanıcı adınızı giriniz : ")
let get_username = document.querySelector("#myName")

get_username.innerHTML = username


function fix(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}

function showTime() {

    const date = new Date()
    const year = fix(date.getFullYear())
    const month = fix(date.getMonth() + 1)
    const day = fix(date.getDate())

    const hour = fix(date.getHours())
    const minute = fix(date.getMinutes())
    const second = fix(date.getSeconds())

    const history = day + "." + month + "." + year
    const clock = hour + ":" + minute + ":" + second
    document.getElementById("myClock").textContent = history + "     /     " + clock

}



let radio_ids = []

function todo() {
    const choice = prompt("Görev adı : ")
    if (choice) {
        const to_do = document.createElement("input");
        const label = document.createElement("label")
        const br = document.createElement("br")
        const hr = document.createElement("hr")
        to_do.type = "checkbox";

        let random_id = Math.floor(Math.random() * 1000000);
        while (radio_ids.includes(random_id)) {
            random_id = Math.floor(Math.random() * 1000000);
        }
        to_do.id = "radio" + random_id;
        radio_ids.push(random_id);
        to_do.classList.add("checkbox-container");

        label.htmlFor = to_do.id
        label.textContent = choice
        label.classList.add("label")

        const to_do_div = document.getElementById("to_do_div");

        to_do_div.appendChild(to_do);
        to_do_div.appendChild(label)
        to_do_div.appendChild(br)
        to_do_div.append(hr)
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.style.textDecoration = "line-through";
            } else {
                label.style.textDecoration = "none";
            }

        });
    });


}




setInterval(showTime, 1000)



