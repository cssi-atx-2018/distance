
#Import statements
import webapp2
import json
from google.appengine.api import urlfetch
import logging
import jinja2

#Creating variables for template loading
template_loader = jinja2.FileSystemLoader(searchpath="./")
template_env = jinja2.Environment(loader= template_loader)

class MapPage(webapp2.RequestHandler):
    """ Handles the main page (Map page), and renders it
    """
    def get(self):
        template=template_env.get_template('html/map.html')
        self.response.write(template.render())

class Countries(webapp2.RequestHandler):
    """ Handles calls to different countries for more info on them
    """
    def get(self):
        self.response.write("This page is not working yet");
    def post(self):
        template = template_env.get_template('html/country.html')
        country_name = self.request.get("country_name")
        self.response.write(template.render({"country_name":country_name}))

class Currency(webapp2.RequestHandler):
    def getNames(self, original):
        # Our api url
        url = 'http://apilayer.net/api/list?access_key=26d090d35324a4b7dd821d34068f354d'

        #Try to access the internet to make a meme
        try:
            result = urlfetch.fetch(url)

            #Check that site could be reached
            if result.status_code == 200:

                #Change result.content from string to dictuionary and get a meme dictionary
                listDictionary = json.loads(result.content)
                if original:
                    return listDictionary["currencies"]
                currencies = {}
                count = 0

                for value in listDictionary["currencies"].values():
                    currencies[count] = value
                    count+=1
                return currencies
        except urlfetch.Error:
            logging.exception("Caught error")
    def getConversion(self):
        url = "http://www.apilayer.net/api/live?access_key=26d090d35324a4b7dd821d34068f354d"

        try:
            result = urlfetch.fetch(url)
            if result.status_code == 200:
                listDictionary = json.loads(result.content)["quotes"]
                return listDictionary
        except urlfetch.Error:
            loggin.exception("Caught error")
    def get(self):
        template = template_env.get_template('html/currency.html')
        self.response.write(template.render({"currencies":self.getNames(False)}))
    def post(self):
        curr1 = self.request.get("curr1")
        curr2 = self.request.get("curr2")
        amount1 = self.request.get("amount1")
        all_currencies = self.getNames(True)
        from1 = all_currencies.keys()[int(curr1)]
        to1 = all_currencies.keys()[int(curr2)]
        convert_currencies1 = self.getConversion()["USD"+to1]
        convert_currencies2 = self.getConversion()["USD"+from1]
        if amount1 == "" or amount1 < 0:
            return
        amount2 = float(amount1)* float(convert_currencies1)
        conversion = float(convert_currencies1)/float(convert_currencies2)
        amount2 = float(amount1)*conversion
        # for key,item in all_currencies.items():
        #     if item == all_currencies[int(curr1)]:
        #         convert_amt = key
        # convert_amt = all_currencies[all_currencies[int(curr1)]]
        template = template_env.get_template('html/currency.html')
        logging.info(all_currencies)
        self.response.write(template.render({"currencies":self.getNames(False), "amt2":amount2}))

app = webapp2.WSGIApplication([
    ('/map', MapPage),  #Main map page
    ('/country_details', Countries), #Country details page
    ('/currency', Currency)
], debug = True)
