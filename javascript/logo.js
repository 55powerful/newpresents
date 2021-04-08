//? This function, isolates local scopes and avoids global varialbes.

var logo = document.querySelector('logo');
var mql = window.matchMedia('(min-width: 1200px) and (max-width: 1756px)');
var boomboom = window.matchMedia('(max-width: 1200px)');


function render(x) {
    if (x.matches) {
        document.getElementById('logo').style.display = 'none';
    } else {
        document.getElementById('logo').style.display = 'inline';
    }
}

render(mql)
mql.addEventListener('change', render);
