let disp = document.getElementById("timer-container");

setTimeout(() => {
    disp.innerHTML="<h2>10</h2>";
    setTimeout(() =>{
        disp.innerHTML="<h2>09</h2>";
        setTimeout(() => {
            disp.innerHTML="<h2>08</h2>";
            setTimeout(() => {
                disp.innerHTML="<h2>07</h2>";
                setTimeout(() => {
                    disp.innerHTML="<h2>06</h2>";
                    setTimeout(() =>{
                        disp.innerHTML="<h2>05</h2>";
                        setTimeout(() => {
                            disp.innerHTML="<h2>04</h2>";
                            setTimeout(() => {
                                disp.innerHTML="<h2>03</h2>";
                                setTimeout(() => {
                                    disp.innerHTML="<h2>02</h2>";
                                    setTimeout(() => {
                                        disp.innerHTML="<h2>01</h2>";
                                        setTimeout(() => {
                                            disp.innerHTML="<h2>Happy Independence Day</h2>";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000);