let themeSwitchers = document.querySelectorAll(".website-header .theme .icon");

if (localStorage.getItem("theme"))
{
    document.body.classList = localStorage.getItem("theme");
    themeSwitchers.forEach(switcher=>{
        switcher.classList.remove("active");
        if(switcher.dataset.theme == localStorage.getItem("theme"))
        {
            switcher.classList.add("active");
        }
    })
}

themeSwitchers.forEach(switcher=>{
    switcher.addEventListener("click", function(){
        themeSwitchers.forEach(s=>s.classList.remove("active"));
        this.classList.add("active");
        let theme = this.dataset.theme;
        document.body.classList = theme;
        localStorage.setItem("theme", theme);
    })
})