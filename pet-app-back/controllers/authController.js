const bcrypt = require('bcryptjs')
const User = require('../models/User')
// import bcrypt from 'bcryptjs';
// import User from '../models/User'

// claves hardcodeadas
const MOCK_EMAIL = 'test@example.com';
const MOCK_PASSWORD = 'password123';

exports.register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // 1. Verificar si el usuario ya existe
    let user = await User.findOne({email})
    if(user) {
      return res.status(400).json({ message: 'El usuario ya esta registrado' })
    }

    // 2. Crear la instancia del nuevo usuario
    user = new User({ name, email, password })

    // 3. Encriptar la contraseña
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(password, salt)

    // 4. Guardar en MongoDB Atlas
    await user.save()

    // 5. Responder con los datos del usuario (sin la contraseña)
    res.status(201).json({
      message: 'Usuario creado con esito',
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    })
  } catch (error) {
    console.error('Ocurrio un error en la creacion del usuario: ', error);
    res.status(500).json({ message: 'Error al registrar el usuario' })
  }
}


exports.login = async (req, res) => {
  console.log('login back', req.body)
  const { email, password } = req.body;

  try {
    if(!email || !password) {
      return res.status(400).json({ message: "Email y password son requeridos" })
    }

    const user = await User.findOne({ email })
    console.log('user', user)

    if(!user) {
      return res.status(401).json({ message: "El usuario no existe" })
    }

    if(user.password != password) {
      return res.status(401).json({ message: "Password incorrecto" })
    }

    const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

    res.json({
      token: mockToken,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

    console.log('user name', user.name)

    // Simulación de búsqueda en Base de Datos
    // Aquí harías: const user = await User.findOne({ email });
    // if(email === MOCK_EMAIL && password === MOCK_PASSWORD) {
      // Generar el JWT aca
      // const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

      // return res.status(200).json({
      //   token: mockToken,
      //   user: {
      //     id: 1,
      //     name: "Victor",
      //     email: "test@example.com"
      //   }
      // });
    // } else {
      // return res.status(401).json({ message: "Credenciales invalidas" })
    // }
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor" })
  }
}