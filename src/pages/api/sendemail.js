var nodemailer = require('nodemailer')


export default async function (req, res) {

const {firstName,lastName,email,phoneNumber,message} = req.body

    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        
        auth: {
          user: process.env.NODEMAILER_EMAIL,
          pass: process.env.NODEMAILER_PW,
          },
        secure: true,
      })
    
      const mailData = {
        from: email,
        to: process.env.NODEMAILER_EMAIL,
        subject: `Message From ${firstName} ${lastName} ${Math.floor(Math.random()*100)}`,
        text: message,
        html: `<div>


        <p>Name: ${firstName} ${lastName}</p>

        <p>Email: ${email}</p>

        <p>Phone Number: ${phoneNumber}</p>

        <p>Message: ${message}</p>

        <p>Source: From Bridget Barnes Therapy</p>

        
        </div>`
       }

       console.log(mailData,process.env.NODEMAILER_PW);
    
       await transporter.sendMail(mailData, function (error, info) {
       
        try {

          if(error){
            
            res.json({sent:false,message:'An error occured. Please try again.'})
          res.status(200)
          }else{
            // res.json()
        
            throw new Error('Checking')
          }
          
        } catch (error) {
        console.log(error);
        res.status(400)
          res.json({sent:true,message:`Thank you ${firstName} ${lastName} for contacting. Your message has been sent`})
        
        }

      })




 
    }
  