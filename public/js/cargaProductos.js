const formCargarProductos = document.querySelector("#formCargarProductos")

if(formCargarProductos instanceof HTMLFormElement){
    formCargarProductos.addEventListener('submit', event =>{
        event.preventDefault()
        const formData = new FormData(formCargarProductos)
        const data = {}
      

        formData.forEach((value,key) => (data[key] = value))
        console.log('data:  '+ JSON.stringify(data))
        fetch('/api/Productos', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        })
    })
}