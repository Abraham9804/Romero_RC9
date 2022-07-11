let cantidad
let meses
let total
let pagos
let interes
let insertar


class Prestamo{
    constructor(cantidad, meses, total, pagos){
        this.cantidad=cantidad
        this.meses=meses
        this.total=total 
        this.pagos=pagos
    }
    
}




const formulario = document.getElementById('idForm') 
const prestamos=[]

formulario.addEventListener('submit',(event) =>{	
	event.preventDefault()	
	cantidad = parseFloat((document.getElementById('idMonto').value))
	meses = parseFloat((document.getElementById('idMeses').value))
    totales()
    
    



	const prestamo1 = new Prestamo(cantidad, meses, total, pagos)
    prestamos.push(prestamo1)
    insertarDatos()
    console.log(prestamos)
    formulario.reset()

})



function totales(){
    if((meses <= 3) && (cantidad >= 1000 && cantidad <=50000)){
        interes = 0.10
        total = cantidad + (cantidad * interes)
        pagos = parseFloat((total / meses).toFixed(2))
        
    }

    else if((meses >3 && meses <= 6) && (cantidad >= 1000 && cantidad <=50000)) {
        interes = 0.25
        total = cantidad + (cantidad * interes)
        pagos = parseFloat((total / meses).toFixed(2))
       
    
    }

    else if((meses >6 && meses <= 12) && (cantidad >= 1000 && cantidad <=50000)) {
        interes = 0.50
        total = cantidad + (cantidad * interes)
        pagos = parseFloat((total / meses).toFixed(2))
       
    
    }
    
}


function insertarDatos(){

    if((meses >=1 && meses <= 12) && (cantidad >= 1000 && cantidad <=50000)){
prestamos.forEach(dato => {
    resultado.innerHTML =`
    <p>El prestamo solicitado es de: ${dato.cantidad} pesos a pagar en ${dato.meses} meses, 
    por lo que usted pagará un total de ${dato.total} pesos en cuotas de ${dato.pagos} mensuales</p>
    
    
    `
})} else if((meses >12) || (cantidad <1000 || cantidad >50000)) {
    resultado.innerHTML =`
    <p>Los datos ingresados no son correctos, intentelo nuevamente</p>
    
    
    `
}




}









