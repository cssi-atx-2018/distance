from google.appengine.ext import ndb

class Suggestion(ndb.Model):
    name = ndb.StringProperty()
    email = ndb.StringProperty()
    subject = ndb.StringProperty()
    message = ndb.StringProperty()
