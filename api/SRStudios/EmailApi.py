from email.message import EmailMessage
import smtplib
from flask import blueprints,request,jsonify
import base64

from flask.wrappers import Response

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
                print('  +++++++++++++++++ email  \n      pwd     \n          naem  \n          subject     \n      message ')
                
                if(data['base64_img']): #* checkign if image is sent 
                    img = getDecodedImage(data['base64_img'])
                    print(' ++++ \n image recieved  +++++')
                else:
                    print(' ++++ \n image NOt recieved  +++++')
                    img = None    
                
                img_type = data['img_type']
                img_name = data['img_name']
                
                data = {
                    'email':email,
                    'app_pwd':app_pwd,
                    'message':message,
                    'name':name,
                    'subject':subject,
                    'img':img,
                    'img_name':img_name,
                    'img_type':img_type
                    }
                return data 

        except Exception as exec:
            
            return None
        
    
@emailApi.route('/send',methods=['POST'])
def send_mail():
    if request.method == 'POST':
        try:
            print('---------------      Response    ----------------------')
            data = getDataFromRequest(request.get_json(force=True))
            if(data):
                email = data['email']
                pwd = data['app_pwd']
                msg = EmailMessage()
                msg['From']  = email
                msg['To'] = email
                msg['Subject'] = data['subject']
                if (data['message']):
                    msg.set_content(data['message'])
                    
                if (data['img'] and data['img_name'] and data['img_type']):
                    msg.add_attachment(data['img'],maintype='image',subtype=data['img_type'],filename=data['img_name'])
                try:
                    server = smtplib.SMTP("smtp.gmail.com",587)
                    server.ehlo()
                    server.starttls()
                    server.ehlo()
                    server.login(email,pwd)
                    server.send_message(msg);
                    print('++++++++++ Mail Send  +++++++++++++++')
                    return Response(status=200)
                except Exception as exec:   
                    return Response(status=400)  , 'SMTP Error!'
            else:
                return Response(status=400) ,'Data not found!'
        except Exception as exec:
            
            return Response(status=400)  , 'Internal server error!'
             
        