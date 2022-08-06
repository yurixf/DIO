function getAdmin(map){
    let admins = []
    for([key, valeu] of map){
        if (valeu ==='Admin'){
            admins.push(key)
        }
    }
    return admins
}

const usuarios = new Map()

usuarios.set('Yuri', 'Admin');
usuarios.set('Guilherme', 'User');
usuarios.set('Gabrielle', 'User');
usuarios.set('Airton', 'Admin');
usuarios.set('Vera', 'Admin');

console.log(getAdmin(usuarios))