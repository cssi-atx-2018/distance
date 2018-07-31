
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
    """ Currency convertion page, uses currency api from apilayer
        and converts number to another currency
    """
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

                #Returns dictionary of currency ids and names
                if original:
                    return listDictionary["currencies"]
                currencies = {}
                count = 0

                #Returns dictionary of values and indexes
                for value in listDictionary["currencies"].values():
                    currencies[count] = value
                    count+=1
                return currencies
        #Catch url not found errors
        except urlfetch.Error:
            logging.exception("Caught error")

    def getConversion(self):
        """ Helper function to get a certain conversion rate
        """
        url = "http://www.apilayer.net/api/live?access_key=26d090d35324a4b7dd821d34068f354d"

        try:
            result = urlfetch.fetch(url)
            if result.status_code == 200:
                listDictionary = json.loads(result.content)["quotes"]
                return listDictionary
        except urlfetch.Error:
            loggin.exception("Caught error")

    def get(self):
        """ Original currency page, shows the currency template
            with the names of each available currency
        """
        template = template_env.get_template('html/currency.html')
        self.response.write(template.render({"currencies":self.getNames(False)}))

    def post(self):
        """ Converts chosen currency amount to second currency
        """
        #Get initial data
        curr1 = self.request.get("curr1")
        curr2 = self.request.get("curr2")
        amount1 = self.request.get("amount1")
        all_currencies = self.getNames(True)

        #Get names of chosen currencies
        from1 = all_currencies.keys()[int(curr1)]
        to1 = all_currencies.keys()[int(curr2)]

        #Get both conversion factors
        convert_currencies1 = self.getConversion()["USD"+to1]
        convert_currencies2 = self.getConversion()["USD"+from1]
        amount2 = 0

        #Check that amount is valid
        if amount1 == "" or amount1 < 0:
            amount1 = 0
        else:
            conversion = float(convert_currencies1)/float(convert_currencies2)
            amount2 = float(amount1)*conversion
        template = template_env.get_template('html/currency.html')

        #Log info
        logging.info("CURRENCY INFO REQUEST from: "+from1+ " amt: "+str(amount1)+" to: "+to1+" amt: "+str(amount2))
        #Send data to template
        self.response.write(template.render({"currencies":self.getNames(False), "curr1":curr1, "curr2":curr2,"amt1":amount1, "amt2":amount2}))

class Suggestions(webapp2.RequestHandler):
    def get(self):
        template = template_env.get_template('html/suggestions.html')
        self.response.write(template.render())
class Misc(webapp2.RequestHandler):
    def get(self):
        template = template_env.get_template('html/misc.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/map', MapPage),  #Main map page
    ('/country_details', Countries), #Country details page
    ('/currency', Currency), #Currency converter page
    ('/suggestions', Suggestions),
    ('/misc', Misc),
], debug = True)
