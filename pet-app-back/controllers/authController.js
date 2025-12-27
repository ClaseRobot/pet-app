// claves hardcodeadas
const MOCK_EMAIL = 'test@example.com';
const MOCK_PASSWORD = 'password123';


export const login = async (req, res) => {
  console.log('login back', req.body)
  const { email, password } = req.body;

  try {
    if(!email || !password) {
      return res.status(400).json({ message: "Email y password son requeridos" })
    }

    // Simulación de búsqueda en Base de Datos
    // Aquí harías: const user = await User.findOne({ email });
    if(email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      // Generar el JWT aca
      const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

      return res.status(200).json({
        token: mockToken,
        user: {
          id: 1,
          name: "Victor",
          email: "test@example.com"
        }
      });
    } else {
      return res.status(401).json({ message: "Credenciales invalidas" })
    }
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" })
  }
}