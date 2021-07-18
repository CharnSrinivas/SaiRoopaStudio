from flask import Flask, app;
from SRStudios.EmailApi import emailApi;
from flask_cors import CORS


def create_app():
    app = Flask(__name__);

    #*#####################  (CORS) => Cross Origin Resources Shraing      ############################
                        #? It need to be enable to allow other web app to access api
    CORS(app);
    #*################################################################################################

    app.config['SECRET_KEY'] = '##95##71##38#256##';
    app.config['CORS_HEADERS'] = 'Content-Type';

    app.register_blueprint(emailApi,url_prefix='/srstudio/mail/');

    

    return app;

