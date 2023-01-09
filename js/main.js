

// Background particles
window.onload = function () {
  Particles.init({
      selector: ".background",
      maxParticles: 450,
      color: 'black'
  });
};



// form validation
function PreventSubmission () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')



  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()

        // Order button event trigger
       
      } else {
        event.preventDefault()
        event.stopPropagation()
        makePayment()
      }

      form.classList.add('was-validated')
    }, false)
  })
}

PreventSubmission()

// Flutterwave API consumption
function makePayment() {
  FlutterwaveCheckout({
    public_key: "FLWPUBK_TEST-SANDBOXDEMOKEY-X",
    tx_ref: "titanic-48981487343MDI0NzMx",
    amount: 54600,
    currency: "NGN",
    payment_options: "card, mobilemoneyghana, ussd",
    redirect_url: "https://mummyserena.netlify.app",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "rose@unsinkableship.com",
      phone_number: "08102909304",
      name: "Rose DeWitt Bukater",
    },
    customizations: {
      title: "The Titanic Store",
      description: "Payment for an awesome cruise",
      logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    },
  });
}
