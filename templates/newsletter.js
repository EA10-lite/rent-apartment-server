
const subscription_cancelled = (email) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Account Verification</title>
            <style>
                /* Define your styles here */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f8f8f8;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                }
        
                .logo {
                }
        
                .button {
                    display: inline-block;
                    background-color: hsl(252, 30%, 10%);
                    color: #ffffff;
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                }
        
                .footer {
                    margin-top: 20px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="logo">
                    <h3> Rent Yo <br /> <span> Apartment </span> </h3>
                </div>
                <p>Dear ${ email } </p>
                <p> This email serves as confirmation that your subscription has been successfully canceled. You will no longer receive any further updates, news, or special offers from Rent Yo Apartment. </p>

                <p> We genuinely appreciate your support and interest in our content. If you ever change your mind in the future, we would be more than happy to welcome you back into our newsletter community. </p>

                <p> If you have any feedback or suggestions regarding our newsletter or your experience with us, please feel free to share. We value your opinion and are constantly striving to improve. </p>

                <p> Thank you once again for being a part of our community. Should you have any questions or need further assistance, please don't hesitate to reach out to us at <a href="mailto:rentyoapartment@gmail.com">rentyoapartment@gmailcom</a> </p>
            </div>
        </body>
        </html>    
    `
}
const subscription_successful = (email) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Account Verification</title>
            <style>
                /* Define your styles here */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f8f8f8;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #ffffff;
                }
        
                .logo {
                }
        
                .button {
                    display: inline-block;
                    background-color: hsl(252, 30%, 10%);
                    color: #ffffff;
                    text-decoration: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                }
        
                .footer {
                    margin-top: 20px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="logo">
                    <h3> Rent Yo <br /> <span> Apartment </span> </h3>
                </div>
                <p>Dear ${ email } </p>
                <p> Thank you for subscribing to our newsletter. We are thrilled to have you as part of our community! This email is to confirm that you have successfully subscribed to receive updates, news, and special offers from Rent Yo Aparment. </p>

                <p> As a subscriber, you can expect to receive regular updates about our latest products, upcoming events, industry insights, and exclusive promotions. We promise to keep you informed and provide valuable content that aligns with your interests. </p>

                <p> If at any time you wish to unsubscribe or update your subscription preferences, you can do so by clicking on the "Manage Subscription" link located at the bottom of our newsletter emails. </p>

                <p> <a href=""> Unscribe  </a> </p>

                <p> Thank you once again for being a part of our community. Should you have any questions or need further assistance, please don't hesitate to reach out to us at <a href="mailto:rentyoapartment@gmail.com">rentyoapartment@gmailcom</a> </p>
            </div>
        </body>
        </html>    
    `
}

module.exports = {
    subscription_cancelled,
    subscription_successful
}