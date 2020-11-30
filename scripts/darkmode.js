let element = document.getElementById('darkmode');
        let lightmode = document.getElementById('lightmode');
        
        element.onclick = function () { 
            element.style.display = "none";
            lightmode.style.display = "initial";
            document.querySelector('#projects').style.backgroundColor = "black";
            document.querySelector('#aboutme').style.backgroundColor = "black";
            document.querySelector('#skills').style.backgroundColor = "black";
            document.querySelector('#skills').style.border = "1px solid black";
            document.querySelector('nav').style.backgroundColor = "black";
            document.querySelector('footer').style.color = "white";
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')";
            document.querySelector('.banner').style.backgroundImage = "url('https://images.unsplash.com/photo-1529753253655-470be9a42781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')";
             };

        lightmode.onclick = function () { 
            element.style.display = "initial";
            lightmode.style.display = "none";
            document.querySelector('#projects').style.backgroundColor = "white";
            document.querySelector('#aboutme').style.backgroundColor = "white";
            document.querySelector('#skills').style.backgroundColor = "white";
            document.querySelector('#skills').style.border = "1px solid white";
            document.querySelector('nav').style.backgroundColor = "white";
            document.querySelector('footer').style.color= "gray";
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')";
            document.querySelector('.banner').style.backgroundImage = "url('https://images.unsplash.com/photo-1487088678257-3a541e6e3922?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')";
             };