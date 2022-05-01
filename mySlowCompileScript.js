function magenishCompile(){
    console.log("magenish script start");
    var container = document.getElementById("container");
    //container.innerHTML = '<span style="color:red;">magneish king</span>';
    var rndInt1 = Math.floor(Math.random() * 9) + 1;
    var rndInt2 = Math.floor(Math.random() * 9) + 1;
    var rndInt3 = Math.floor(Math.random() * 9) + 1;
    var rndInt4 = Math.floor(Math.random() * 9) + 1;
    var rndInt5 = Math.floor(Math.random() * 9) + 1;
    var rndInt6 = Math.floor(Math.random() * 9) + 1;
    var rndInt7 = Math.floor(Math.random() * 9) + 1;
    var rndInt8 = Math.floor(Math.random() * 9) + 1;
    if (rndInt1 == 1) {
        if (rndInt2 == 2) {
            if (rndInt3 == 3) {
                if (rndInt4 == 4) {
                    if (rndInt5 == 5) {
                        if (rndInt6 == 6) {
                            if (rndInt7 == 7) {
                                if (rndInt8 == 8) {
                                   // container.innerHTML = "This 1 magenish text comes from an external script.";
                                } else {
                                    //container.innerHTML ="This 2 magenish text comes from an external script.";
                                }
                            } else {
                                //container.innerHTML ="This 3 magenish text comes from an external script.";
                            }
                        } else {
                            //container.innerHTML ="This 4 magenish text comes from an external script.";
                        }
                    } else {
                        //container.innerHTML ="This 5 magenish text comes from an external script.";
                    }
                } else {
                   // container.innerHTML ="This 6 magenish text comes from an external script.";
                }
            } else {
                //container.innerHTML ="This 7 magenish text comes from an external script.";
            }
        } else {
            //container.innerHTML ="This 8 magenish text comes from an external script.";
        }
    } else {
        //container.innerHTML ="This 9 magenish text comes from an external script.";
    }
    console.log("magenish script end");
};

magenishCompile();
