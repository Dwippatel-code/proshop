import bcrypt from 'bcryptjs'

const users =[
    {
    name: 'Admin user',
    email: 'admin@userexample.com',
    password: bcrypt.hashSync('123456', 10 ),
    isAdmin:true,
    },
    {
    name: 'Dwip',
    email: 'dwip@example.com',
    password: bcrypt.hashSync('123456', 10 ),
    
    },
    {
    name: 'Patel',
    email: 'patel@example.com',
    password: bcrypt.hashSync('123456', 10 ),
    
    },
]

export default users