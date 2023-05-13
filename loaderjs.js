document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        setTimeout(function() {
            document.querySelector("#loader").style.display = "none";
        }, 3000); // 3000 milliseconds = 3 seconds
        document.querySelector("body").style.visibility = "visible";
    }
};
