// tabs.js

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll("ul.tabs li");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(function(tab) {
        tab.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");

            tabs.forEach(function(item) {
                item.classList.remove("current");
            });

            tabContents.forEach(function(item) {
                item.classList.remove("current");
            });

            this.classList.add("current");
            document.getElementById(tabId).classList.add("current");
        });
    });
});
