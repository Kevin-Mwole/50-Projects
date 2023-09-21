const insert = document.getElementById('insert');

window.addEventListener('keydown',(event) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small> Key</small>
    </div>
    <div class="key">
    ${event.keyCode}
    <small> Key Code </small>
    </div>
    <div class="key">
    ${event.code}
    <small> Code</small>
    </div>`
})
