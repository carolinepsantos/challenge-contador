document.getElementById("start-count").addEventListener('click', function count() {
    if(!document.getElementById("date-input").value) {
        alert("Esta não é uma data válida. Digite uma nova data.")
    } else {
        var dateStorage = JSON.stringify(new Date(document.querySelector("#date-input").value))
        sessionStorage.setItem('date-input', dateStorage)
        window.location = "contador.html"
    }
})