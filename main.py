
#Import statements
import webapp2
import json
from google.appengine.api import urlfetch
import logging
import jinja2
from country import *
from form import Suggestion

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
        template = template_env.get_template('html/country.html')
        country_name = self.request.get("country_name")
        test = return_country(country_name)
        logging.info(str(test)+" "+str(type(test)))
        if test == "Nope!":
            self.response.write("We're sorry, this country is not yet supported. Please go to our homepage at globe-notes.com and use the sidebar to submit a suggestion.")
            return
        self.response.write(template.render(test.get_info()))

class Currency(webapp2.RequestHandler):
    """ Currency convertion page, uses currency api from apilayer
        and converts number to another currency
    """
    def getNames(self, search):
        # Our api url
        url = 'http://apilayer.net/api/list?access_key=26d090d35324a4b7dd821d34068f354d'

        #Try to access the internet to make a meme
        try:
            result = urlfetch.fetch(url)

            #Check that site could be reached
            if result.status_code == 200:

                #Change result.content from string to dictuionary and get a meme dictionary
                listDictionary = json.loads(result.content)

                # #Returns dictionary of currency ids and names
                # if original:
                #     return listDictionary["currencies"]
                currencies = {}
                count = 0
                countList = []
                #Returns dictionary of values and indexes
                # for othervalue in sorted(listDictionary["currencies"].values()):
                #     countList[count] = listDictionary["currencies"][othervalue]
                #     count+=1
                # count= 0
                for value in sorted(listDictionary["currencies"].values()):
                    currencies[count] = value
                    count+=1
                if search == "0":
                    return currencies
                else:
                    val = currencies[search]
                    val2 = [key for (key, value) in listDictionary["currencies"].items() if value == val][0]
                    #val2 = listDictionary["currencies"][val][0]
                    #hi = sorted(currencies)

                return val2
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
        self.response.write(template.render({"currencies":self.getNames("0")}))

    def post(self):
        """ Converts chosen currency amount to second currency
        """
        #Get initial data
        curr1 = int(self.request.get("curr1"))
        curr2 = int(self.request.get("curr2"))
        amount1 = self.request.get("amount1")
        all_currencies = self.getNames("0")

        #Get names of chosen currencies
        from1 = self.getNames(int(curr1))
        to1 = self.getNames(int(curr2))

        #Get both conversion factors
        convert_currencies1 = self.getConversion()["USD"+to1]
        convert_currencies2 = self.getConversion()["USD"+from1]
        amount2 = 0
        #
        # #Check that amount is valid
        if amount1 == "" or amount1 < 0:
            amount1 = 0
        else:
            conversion = float(convert_currencies1)/float(convert_currencies2)
            amount2 = float(amount1)*conversion
        template = template_env.get_template('html/currency.html')
        #
        # #Log info
        logging.info("CURRENCY INFO REQUEST from: "+from1+ " amt: "+str(amount1)+" to: "+to1+" amt: "+str(amount2))
        # #Send data to template
        self.response.write(template.render({"currencies":self.getNames("0"), "curr1":curr1, "curr2":curr2,"amt1":amount1, "amt2":amount2}))

class Suggestions(webapp2.RequestHandler):
    def get(self):
        template = template_env.get_template('html/suggestionstest.html')
        self.response.write(template.render())
class ThankYou(webapp2.RequestHandler):
    def post(self):
        template = template_env.get_template('html/thankyou.html')
        sugg_name = self.request.get("name-input")
        subj = self.request.get("subject-field")
        email = self.request.get("email-input")
        message = self.request.get("message")
        suggest = Suggestion(name=sugg_name, email=email, subject = subj, message=message)
        suggest.put()
        dictdict = {"sugg_name":sugg_name}
        self.response.write(template.render(dictdict))
class Misc(webapp2.RequestHandler):
    def get(self):
        template = template_env.get_template('html/misc.html')
        self.response.write(template.render())

class About(webapp2.RequestHandler):
    def get(self):
        template = template_env.get_template('html/about.html')
        self.response.write(template.render())
class Packing(webapp2.RequestHandler):
    def get(self):
        template = template_env.get_template('html/packinglist.html')
        self.response.write(template.render())

class Sources(webapp2.RequestHandler):
    def get(self):
        template = template_env.get_template('html/sources.html')
        self.response.write(template.render())
app = webapp2.WSGIApplication([
    ('/country_details', Countries), #Country details page
    ('/currency', Currency), #Currency converter page
    ('/suggestions', Suggestions),  #Suggestions form page
    ('/thankyou', ThankYou),
    ('/packing', Packing),
    ('/misc', Misc),    #Miscellaneous travel info page
    ('/about.*', About), #page about us
    ('/sources', Sources),
    ('/.*', MapPage),  #Main map page

], debug = True)
