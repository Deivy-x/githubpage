 document.getElementById('forgotPassword').addEventListener('click', function(e) {
            e.preventDefault();
            alert('Por favor, contacta al administrador para recuperar tu contraseña.');
        });

        document.getElementById('contactBtn').addEventListener('click', function() {
            window.location.href = "mailto:soporte@tudominio.com?subject=Ayuda%20con%20usuario%20y%20contraseña%20-%20Red%20de%20Egresados";
        });

        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const user = document.getElementById('username').value.trim();
            const pass = document.getElementById('password').value.trim();
            if (!user || !pass) {
                alert('Por favor, completa ambos campos.');
                return;
            }
            alert('Intentando iniciar sesión con:\nUsuario: ' + user);
        });