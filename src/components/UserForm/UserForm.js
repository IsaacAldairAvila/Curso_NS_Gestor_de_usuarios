import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import useFormulario from '../../hooks/useFormulario'
const UserForm = ({ submit }) => {
    const [formulario, handleChange, reset] = useFormulario(
        {
            name: '',
            lastname: '',
            email: '',
            password: ''
        }
    )

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input
                label={'Nombre'}
                name="name"
                placeholder="Nombre"
                value={formulario.name}
                onChange={handleChange}
                required
            />
            <Input
                label={'Apellido'}
                name="lastname"
                placeholder={'Apellido'}
                value={formulario.lastname}
                onChange={handleChange}
                required
            />
            <Input
                type="email"
                label={'Correo'}
                placeholder={'Correo'}
                name="email"
                value={formulario.email}
                onChange={handleChange}
                required
            />
            <Input
                type="password"
                placeholder={'Contraseña'}
                label={'Contraseña'}
                name="password"
                value={formulario.password}
                onChange={handleChange}
                required
            />
            <Button>Enviar</Button>
        </form>
    )
}

export default UserForm