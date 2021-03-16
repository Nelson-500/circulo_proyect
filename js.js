const app = new Vue({
    el: '#app',
    data: {
        titulo: "Calculando el Área y Perímetro de un círculo con Vue.js",
        radio: "",
    },
    computed: {
        CalcularAreaCirculo: function () {
            let AreaCirculo = Math.PI * Math.pow(this.radio, 2);

            return this.area = AreaCirculo.toFixed(2);
        },
        CalcularPerimetro: function () {
            let Perimetro = Math.PI * this.radio * 2;

            return this.perimetro = Perimetro.toFixed(2);
        },
    }
})