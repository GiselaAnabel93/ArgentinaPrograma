window.onload = function () {
    let icono_twitter = document.getElementById("twitter");

    icono_twitter.onclick=function(){
        var win =window.open("https://twitter.com/Ieomessiok",'_blank')
        win.focus();

    }

    let icono_facebook = document.getElementById("facebook");

    icono_facebook.onclick=function(){
        var win =window.open("https://www.facebook.com/leomessi/?locale=es_LA",'_blank')
        win.focus();
        
    }

    let icono_linedin = document.getElementById("linkedin");

    icono_linedin.onclick=function(){
        var win =window.open("https://ar.linkedin.com/in/lionel-messi-8300b313a",'_blank');
        win.focus();
        
    }

    let icono_instagram = document.getElementById("instagram");

    icono_instagram.onclick=function(){
        var win =window.open("https://www.instagram.com/leomessi/",'_blank');
        win.focus();
        
    }

};