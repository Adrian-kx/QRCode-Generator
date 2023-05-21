new Vue({
    el: "#app",
    data() {
        return {
            title: "Gerador de QRCode",
            text: "",
            qrcode: new QRious({size: 300}),
            color: '#000'
        }
    },
    computed: {
        newQRCode() {
            if (this.text && this.qrcode) {
                this.qrcode.value = this.text;
                this.qrcode.background = '#fff';
                this.qrcode.foreground = this.color;
                return this.qrcode.toDataURL();
            }
            return null;
        }
    }
})

(function (){
    function desativarDragDrop () {
      document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
      document.addEventListener('drop', (evento) => evento.preventDefault(), false)
    }
    desativarDragDrop()
  }())