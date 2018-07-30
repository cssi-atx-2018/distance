
#Import statements
import webapp2
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
        country_name = self.request.get("country_name")
        self.response.write("This is the page for "+country_name)

app = webapp2.WSGIApplication([
    ('/map', MapPage),  #Main map page
    ('/country_details', Countries) #Country details page

], debug = True)
