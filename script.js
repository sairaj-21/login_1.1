const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}
registerLink.onclick = () => {
    wrapper.classList.add('active');
    wrapper.querySelectorAll('.animation').forEach((el, index) => {
        el.style.transitionDelay = `${index * 0.05}s`;
    });
};
