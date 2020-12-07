var x = '👩🏾‍💻🚧Site is Under Construction🚧👩🏾‍💻';
alert(x);

// let h1Element = document.createElement('h1');
// let spanElement = document.createElement('span');
// spanElement.innerText = 'Welcome to my World!';
// h1Element.appendChild(spanElement);
// document.body.appendChild(h1Element);

document.getElementById('btnScrollTop')
    .addEventListener('click', function(){

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    );