require("dotenv").config();

const app = require('./src/app');



const PORT = process.env.PORT || 5000;
const transporter = require('./src/config/email.config');

transporter.verify((error, success) => {
    if (error) {
        console.log('SMTP Error:', error);
    } else {
        console.log('SMTP Ready');
    }
});




app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
