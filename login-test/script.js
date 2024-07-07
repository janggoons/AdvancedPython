document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const password = document.getElementById('password').value;
    const email = document.getElementById('email').value;

    if (id && password && email) {
        document.getElementById('message').textContent = '로그인되었습니다.';
    } else {
        document.getElementById('message').textContent = '모든 항목을 입력해주세요.';
    }
});
