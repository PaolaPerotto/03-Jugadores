class CJugador{
    constructor(name,position,age,nacionality,hight,weith){
        this.nombre = name,
        this.pos = position,
        this.edad = age,
        this.est = hight,
        this.p = weith,
        this.nac = nacionality
    }

    getNombre() {
        return this.nombre
    }

    getPosition() {
        return this.pos
    }

    getEdad() {
        return this.edad
    }

    getEstatura() {
        return this.est
    }

    getPeso() {
        return this.p
    }

    getNacionalidad() {
        return this.nac
    }

    listarNacionalidad(array, nac){
        let lista = new Array(0)
    
        array.forEach(element => {
            if(element.getNacionalidad() == nac) lista.push(element)
        });
    
        return lista
    }

    listarPesoEntre(array, min, max){
        let lista = new Array(0)
    
        array.forEach(element => {
            if(element.getPeso() >= min && element.getPeso() <= max) lista.push(element)
        });
    
        return lista
    }

    buscarMasAlto(array){
        let alt = 0
        let lista = new Array(0)
    
        array.forEach(element => {
            if(element.getEstatura() == alt){
                lista.push(element)
            }
            if(element.getEstatura() > alt){
                lista = new Array(0)
                lista.push(element)
                alt = element.getEstatura()
            }
        });
    
        return lista
    }

    dataInTrow(){
        return "<tr><td>"+this.getNombre()+"</td><td>"+this.getPosition()+"</td><td>"+this.getEdad()+"</td><td>"+this.getEstatura()+"</td><td>"+this.getPeso()+"</td><td>"+this.getNacionalidad()+"</td></tr>"
    }
}

function JugadoresArgentinos(Jugadores){
    let listaArgentina = Jugadores[0].listarNacionalidad(Jugadores,"Argentina")
    let cont ="<table><th id='TableTitle'>Lista Jugadores Argentinos</th>"
        
    cont += "<tr><th>Nombre</th><th>POS</th><th>Edad</th><th>Est</th><th>P</th><th>NAC</th></tr>"
    
    listaArgentina.forEach(element => {
        cont += element.dataInTrow()
    });
    cont += "</table><br>"
    document.write(cont)
}

function JugadoresEntre75y60(Jugadores){
    let listaaltos = Jugadores[0].listarPesoEntre(Jugadores, 75, 80)
    let cont ="<table><th id='TableTitle'>Lista Jugadores entre 75kg y 80kg</th>"
        
    cont += "<tr><th>Nombre</th><th>POS</th><th>Edad</th><th>Est</th><th>P</th><th>NAC</th></tr>"
    
    listaaltos.forEach(element => {
        cont += element.dataInTrow()
    });
    cont += "</table><br>"
    document.write(cont)
}

function JugadoresMasAltos(Jugadores){
    let listaaltos = Jugadores[0].buscarMasAlto(Jugadores)
    let cont ="<table><th id='TableTitle'>Lista Jugadores Mas Altos</th>"
        
    cont += "<tr><th>Nombre</th><th>POS</th><th>Edad</th><th>Est</th><th>P</th><th>NAC</th></tr>"
    
    listaaltos.forEach(element => {
        cont += element.dataInTrow()
    });
    cont += "</table><br>"
    document.write(cont)
}

let Jugadores = new Array(0)

Jugadores.push(new CJugador("Fábio1","G", 43, "Brasil", 1.88, 86))
Jugadores.push(new CJugador("Marlon4","D", 28, "Brasil", 1.83, 78))
Jugadores.push(new CJugador("Marcelo12","D", 35, "Brasil", 1.73, 72))
Jugadores.push(new CJugador("Nino33","D", 26, "Brasil", 1.88, 82))
Jugadores.push(new CJugador("John Kennedy9","A", 21, "Brasil", 1.73, 71))
Jugadores.push(new CJugador("Keno11","A", 34, "Brasil", 1.78, 72))
Jugadores.push(new CJugador("Germán Cano14","A", 35, "Argentina", 1.78, 81))

JugadoresArgentinos(Jugadores)

JugadoresEntre75y60(Jugadores)

JugadoresMasAltos(Jugadores)