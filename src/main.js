let root = document.getElementById('container')
root.style.color = "blue";

let button = document.createElement('button')
button.innerHTML = "CLICK ME!!!"
button.addEventListener('click', e => {
    import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;
        console.log(print);
        print();
    })
})
root.innerHTML = join(['hello', 'webpack'], '|| ');
root.appendChild(button)
