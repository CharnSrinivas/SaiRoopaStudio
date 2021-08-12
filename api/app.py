from flask import Flask, app;
from SRStudios.EmailApi import emailApi;
from flask_cors import CORS




#*#####################  (CORS) => Cross Origin Resources Shraing      ############################
                    #? It need to be enable to allow other web app to access api
#*################################################################################################
def createapp():
    app:Flask = Flask(__name__);
    app.config['SECRET_KEY'] = '##95##71##38#256##';
    app.config['CORS_HEADERS'] = 'Content-Type';

    app.register_blueprint(emailApi,url_prefix='/srstudio/mail/');
    CORS(app);
    return app;
