// Load Navigation Bar On All Pages

fetch("/Dependencies/nav.html")
    .then(res => res.text())
    .then(data => { document.getElementById("nav").innerHTML = data; })
    .then(() => {
        const checkbox = document.querySelector("#menu");
        const navList = document.querySelector(".navList");
        const label = document.querySelector(".label");
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                // navList.style.display = "flex";
                navList.style.left = "0";
                label.classList.remove("fa-bars")
                label.classList.add("fa-xmark")
            } else {
                // navList.style.display = "none";
                navList.style.left = "-100%";
                label.classList.remove("fa-xmark")
                label.classList.add("fa-bars")
            }
        })
    })
    .then(() => {
        const pageName = location.href.split("/").pop();
        const navLinks = document.querySelectorAll(".navLink");
        const homeLink = document.querySelector(".navLink");
        navLinks.forEach((link) => {
            if (link.getAttribute("href") == pageName) {
                link.classList.add("activeNavLink")
            } else if (
                pageName.includes("services") ||
                pageName.includes("techsupport") ||
                pageName.includes("training") ||
                pageName.includes("parts")
            ) {
                document.querySelector(".serviceDrop").classList.add("activeA");
                document.querySelector(".dropbtnSpecial2").classList.add("activeATwo");
                document.querySelectorAll(".thirdLink").forEach(link => {
                    if (pageName.includes(link.getAttribute("href").split("/").pop())) {
                        link.style.fontWeight = "800";
                        link.style.color = "var(--4)";
                        link.style.backgroundColor = "var(--1)";
                    }
                });
                document.querySelectorAll(".secondLinkSpecial").forEach(link => {
                    if (pageName.includes(link.getAttribute("href"))) {
                        link.style.fontWeight = "800";
                        link.style.color = "var(--4)";
                        link.style.backgroundColor = "var(--1)";
                    }
                });

            } else if (pageName == "") {
                homeLink.classList.add("activeNavLink")
            } else if (
                pageName.includes("products") ||
                pageName.includes("uv") ||
                pageName.includes("dtf") ||
                pageName.includes("ecosolvent") ||
                pageName.includes("sublimation") ||
                pageName.includes("laser") ||
                pageName.includes("plotter") ||
                pageName.includes("heattransfer") ||
                pageName.includes("inks") ||
                pageName.includes("material")
            ) {
                document.querySelector(".productDrop").classList.add("activeA");
                document.querySelector(".dropbtnSpecial").classList.add("activeATwo");
                document.querySelectorAll(".secondLink").forEach(link => {
                    if (pageName.includes(link.getAttribute("href").split("/").pop())) {
                        link.style.fontWeight = "800";
                        link.style.color = "var(--4)";
                        link.style.backgroundColor = "var(--1)";
                    }
                });
            }
        })
        const input = document.getElementById("search");
        const ul = document.getElementById("myUL");

        // Show dropdown on focus
        input.addEventListener("focus", () => {
            ul.style.display = "flex";
        });

        // Hide dropdown on click outside
        document.addEventListener("click", (e) => {
            if (!input.contains(e.target) && !ul.contains(e.target)) {
                ul.style.display = "none";
            }
        });

        const searchShowBtn = document.querySelector(".activeSearchBar");
        const searchBar = document.querySelector(".search2");
        let searchBarShowed = false;
        searchShowBtn.addEventListener("click", () => {
            if (searchBarShowed === false) {
                searchBar.style.top = "70px";
                searchBarShowed = true;
            } else if (searchBarShowed) {
                searchBar.style.top = "0";
                searchBarShowed = false;
            }
        });

        const ul1 = document.querySelector("#myUL");
        ul1.querySelectorAll(".searchBtn").forEach(btn => {
            btn.href = `${btn.href}#${btn.innerText.replaceAll(' ', '')}`;
        })

    });

// Load Search Bar For Mobile 

fetch("/Dependencies/search2.html")
    .then(res => res.text())
    .then(data => { document.getElementById("searchcontainer").innerHTML = data; })
    .then(() => {
        const input2 = document.getElementById("search2");
        const ul2 = document.getElementById("myUL2");
        input2.addEventListener("focus", () => {
            ul2.style.display = "flex";
        });
        document.addEventListener("click", (e) => {
            if (!input2.contains(e.target) && !ul2.contains(e.target)) {
                ul2.style.display = "none";
            }
        });

        ul2.querySelectorAll(".searchBtn").forEach(btn => {
            btn.href = `${btn.href}#${btn.innerText.replaceAll(' ', '')}`;
        })
    })