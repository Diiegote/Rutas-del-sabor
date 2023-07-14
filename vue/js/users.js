window.addEventListener('load', () => {

    const app = Vue.createApp({
        data() {
            return {
                users: [],
                user: {
                    id: '',
                    name: '',
                    username: '',
                    email: ''
                },
                userIndex: -1,
                operation: "Registrar",
            }
        },
        created() {
            this.listUsers();
        },
        mounted() {
            this.$refs.name.focus();
        },
        methods: {
            listUsers: async function () {
                const res = await fetch('https://diego.pythonanywhere.com/usuarios');
                const data = await res.json();
                this.users = data;
            },
            processUser: async function (event) {
                event.preventDefault();
                if (this.shouldUpdate) {
                  await this.updateUser();
                } else {
                  await this.createUser();
                }
                this.clearFields();
                this.listUsers();
              },
              createUser: async function() {
                try {
                  const response = await fetch('https://diego.pythonanywhere.com/usuarios', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.user)
                  });
              
                  if (response.ok) {
                    console.log('Usuario creado exitosamente');
                  } else {
                    console.error('Error al crear el usuario');
                  }
                } catch (error) {
                  console.error('Error en la solicitud:', error);
                }
              },
              updateUser: async function() {
                try {
                  const response = await fetch(`https://diego.pythonanywhere.com/usuarios/${this.users[this.userIndex].id}`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.user)
                  });
              
                  if (response.ok) {
                    console.log('Usuario actualizado exitosamente');
                  } else {
                    console.error('Error al actualizar el usuario');
                  }
                } catch (error) {
                  console.error('Error en la solicitud:', error);
                }
              },
            editUser(id) {
                this.operation = "Update";
                const userFound = this.users.find((user, index) => {
                    this.userIndex = index;
                    return user.id === id;
                });
                this.user.name = userFound.name;
                this.user.username = userFound.username;
                this.user.email = userFound.email;
                this.shouldUpdate = true;
            },
            async updateUser() {
                try {
                    const response = await fetch(`https://diego.pythonanywhere.com/usuarios/${this.users[this.userIndex].id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(this.user)
                    });

                    if (response.ok) {
                        console.log('Usuario actualizado exitosamente');
                        this.clearFields();
                        this.listUsers();
                    } else {
                        console.error('Error al actualizar el usuario');
                    }
                } catch (error) {
                    console.error('Error en la solicitud:', error);
                }
            },
            deleteUser: function (id, event) {
                const confirmation = confirm('Estas seguro que quieres eliminar el usuario?');
                if (confirmation) {
                    fetch(`https://diego.pythonanywhere.com/usuarios/${id}`, { method: 'DELETE' })
                        .then(response => {
                            if (response.ok) {
                                this.users = this.users.filter(users => users.id !== id);
                                console.log('Producto eliminado correctamente.');
                            } else {
                                throw new Error('Error al eliminar el producto.');
                            }
                        })
                        .catch(error => console.log(error))
                } else {
                    event.preventDefault();
                }
            },
            clearFields: function () {
                this.user.id = "";
                this.user.name = "";
                this.user.username = "";
                this.user.email = "";
                this.operation = "Register";
                this.$refs.name.focus();
            }
        }
    });

    app.mount('#app');

});
