from email.message import EmailMessage
import smtplib
from flask import blueprints,request,jsonify
import base64,threading
from flask.wrappers import Response


GreetingMsg = "Thank you for contacting us,We got your message we'll get back to you."


#***** ? Blueprint of emial api **************************
emailApi = blueprints.Blueprint('emailApi',__name__)

#*  ___________________   Decoding base64 to original image    ___________________
def getDecodedImage(base64img):
    decodeImg  = base64.b64decode(base64img)
    
    return decodeImg
#* _____________  Formatting data from request _____________

def getDataFromRequest(data):
        try:
            if data:
                email = data['email']
                app_pwd = data['appPwd']
                name = data['name'],
                subject =data['subject']
                message = data['message']
                userMail = data['user_mail']
                if(data['base64_img']): #* checkign if image is sent 
                    img = getDecodedImage(data['base64_img'])
                else:
                    img = None    
                
                img_type = data['img_type']
                img_name = data['img_name']
                
                data = {
                    'email':email,
                    'app_pwd':app_pwd,
                    'user_mail':userMail,
                    'message':message,
                    'name':str(name),
                    'subject':subject,
                    'img':img,
                    'img_name':img_name,
                    'img_type':img_type
                    }
                return data; 

        except Exception as exec:
            
            return None


    
    
@emailApi.route('/send',methods=['POST'])
def send_mail():
    if request.method == 'POST':
        try:
            data = getDataFromRequest(request.get_json(force=True))
            if(data):
                email = data['email']
                pwd = data['app_pwd']
                userMail = data['user_mail']
                server = smtplib.SMTP("smtp.gmail.com",587)
                print(data)
                server.ehlo()
                server.starttls()
                server.ehlo()
                server.login(email,pwd)
                print("logged in")
                try:
                    greetingMsg = EmailMessage()
                    greetingMsg['From'] = email
                    greetingMsg['To'] = userMail
                    greetingMsg['Subject'] = 'Sai Roopa Studio'
                    greetingMsg.set_content(GreetingMsg)
                    server.send_message(greetingMsg)
                except Exception as exec:
                    print(exec)
                    return Response(status=500) , "Invalid Email"

                msg = EmailMessage()
                msg['From']  = email
                msg['To'] = email
                msg['Subject'] = data['subject']
                if (data['message'] and email):
                    msg.set_content("Message :\n"+data['message']+"\n\n Email: \n"+email)
                if (data['img'] and data['img_name'] and data['img_type']):
                    msg.add_attachment(data['img'],maintype='image',subtype=data['img_type'],filename=data['img_name'])
                try:
                    def senMessage():
                        server.send_message(msg)
                    threading.Thread(target=senMessage).start()
                    return Response(status=200)
                    
                except Exception as exec:   
                    return Response(status=400)  , 'SMTP Error!'
            else:
                return Response(status=400) ,'Data not found!'
        except Exception as exec:
            
            return Response(status=400)  , 'Internal server error!'
             
        