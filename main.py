

import webapp2
import jinja2

template_loader = jinja2.FileSystemLoader(searchpath="./")
template_env = jinja2.Environment(loader= template_loader)


class MainHandler(webapp2.RequestHandler):
    def get(self):
        self.response.write("Welcome to Nyah's Online Portal")

class MapPage(webapp2.RequestHandler):
    def get(self):
        template=template_env.get_template('html/map.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/hello.*', MainHandler),
    ('/map', MapPage),

], debug = True)
