

export const sendPrayer = async (req, res)=>{
    const {nom , mess} = req.params;
    
    main(nom, mess);
    
}

function main (n,m){
    const nodemailer = require("nodemailer");
    let jConfig = {
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: 'apptabernaculomilagros@gmail.com', 
          pass: 'zwhhihktdaasbqsf',
        }
    };
    let email ={ 
        from: '"Pedido de Oración" <apptabernaculomilagros@gmail.com>', // mail de donde sale
        to: "pisarraguido@gmail.com", // mail/s que recibe/n 
        subject: "Pedido de oracion", // asunto
        text:'Solicita orar por ', // cuerpo
        html: n+' pide por: '+m, // 
    };

    let createTransport = nodemailer.createTransport(jConfig);    

    createTransport.sendMail(email, function (error, info) { 
        if(error){ 
             console.log("Error al enviar email"); 
        } else{ 
             console.log("Correo enviado correctamente"); 
        } 
        createTransport.close(); 
    });

  }
  export default sendPrayer;