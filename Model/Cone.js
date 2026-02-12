class Cone{
    constructor(raio,altura){
        this.raio = raio
        this.altura = altura
    }

    calcularArea(){
        // Área da base = π . r²
        let area = 0.0
        area = Math.PI * this.raio * this.raio
        return area 
    }

    calcularVolume(){
        // Área da base = π . r²
        // Volume = 1/3 * Ab . h 
        let volume = 0.0
        volume = (1/3) * this.calcularArea() * this.altura
        return volume
    }
}

module.exports = Cone