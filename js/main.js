var question = document.querySelectorAll(".faq-column");
var answer = document.querySelectorAll(".faq-detail");


question.forEach(function (qn) {
    qn.addEventListener("click", function () {
        var b = qn.nextElementSibling.classList.contains("view");
        answer.forEach(function (ans) {
            ans.classList.remove("view");

        })
        if (b == true) {
            qn.nextElementSibling.classList.remove("view");
            qn.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("rotate1");
        }
        else {
            qn.nextElementSibling.classList.add("view");
            qn.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.classList.add("rotate");

        }
    })

})



