// tailwind.config.js
export default {
    // darkMode: "class", // Activa el modo oscuro con la clase "dark"
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1E40AF", // Azul en modo claro
                    dark: "#1E3A8A", // Azul más oscuro para el modo oscuro
                },
                secondary: {
                    DEFAULT: "#F59E0B", // Amarillo en modo claro
                    dark: "#D97706", // Naranja más oscuro en modo oscuro
                },
                background: {
                    DEFAULT: "#ffffff", // Fondo claro
                    dark: "#1F2937", // Fondo oscuro
                },
                text: {
                    DEFAULT: "#111827", // Texto oscuro en modo claro
                    dark: "#F3F4F6", // Texto claro en modo oscuro
                },
            },
        },
    },
    plugins: [],
}
