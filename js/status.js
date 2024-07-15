const opened = true;

document.addEventListener('DOMContentLoaded', function() {
    const status = document.getElementById('com-status-span');
    const div = document.getElementById('commission-me-button');
    if (opened) {
        status.innerHTML = '🟢 opened';
        status.style.color = 'green';
    } else {
        status.innerHTML = '🔴 closed';
        status.style.color = 'red';
        div.style.display = 'none';
    }
});

