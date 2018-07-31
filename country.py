# -*- coding: utf-8 -*-

class Country:
    def __init__(self, name, lang, lang_amt, relig, relig_amt, eth, eth_amt, customs, taboos, curr_pow_time, regulations, government):
        self.name = name
        self.lang = lang
        self.lang_amt = lang_amt
        self.relig = relig
        self.relig_amt = relig_amt
        self.eth = eth
        self.eth_amt = eth_amt
        self.customs = customs
        self.taboos = taboos
        self.curr_pow_time = curr_pow_time
        self.regulations = regulations
        self.government = government
    def get_info(self):
        return ({"name":self.name, "lang":self.lang, "lang_amt":self.lang_amt, "relig":self.relig,
        "relig_amt":self.relig_amt, "eth":self.eth,"eth_amt":self.eth_amt, "customs":self.customs,
        "taboos":self.taboos,"curr_pow_time":self.curr_pow_time,"regulations":self.regulations,
        "government":self.government})


israel = Country("Israel", ["Hebrew", "Arabic", "Russian"],[49, 18, 15],
    ["Jewish", "Muslim", "Christian"], [75, 18, 2], ["Jewish", "Arabic", "Other"], [75, 20, 5],
    "", "", ["Shekel", "H type plug", ["GMT+3"]],
    ["Passport Validity: No minimum, but your stay cannot exceed validity of passport and airlines may deny boarding if your passport has less than 6 months validity.",
    "Blank Passport Pages: 1 page, normally aren\'t stamped upon entry", "Tourist Visa: Only if staying longer than 90 days", "Vaccinations: None",
    "Currency Restrictions: ENTRY/EXIT: If leaving or arriving by air you must declare amounts above 50,000 shekels and 12,00 shekels if by you came by land."],
    "Parliamentary democracy")

brazil = Country("Brazil", ["Portugese"], [99],
    ["Roman Catholic", "No religion", "Assemblies of God", "Protestant"], [65, 8, 6, 4], ["White", "Multiracial", "Black"], [48, 43, 8],
    "", "", ["Brazilian Real", "110/220/240 V", ["GMT-2", "GMT-4", "GMT-5"]],
    ["Tourist Visa: Yes", "Vaccinations: None", "Currency Restrictions: ENTRY/EXIT:  If more than 10,000 BR it must be declared."],
    "Constitutional Republic")

france = Country("France", ["French", "Arabic", "Portugese"], [87, 4, 2],
    ["Christian","No religion", "Islam"], [51, 40, 6], ["French", "French by Acquisition", "Immigrants", "Foreigners"], [89, 4, 6, 9],
    "", "", ["Euro", "220/240 V", ["GMT+2"]],
    ["Passport Validity: Must be valid 3 months before departure", "Blank Passport Pages: at least one blank page", "Tourist Visa: Only if staying longer than 90 days.",
    "Vaccinations: None", "Currency Restrictions: ENTRY/EXIT: $10,000 euros"],
    "French Republic")

mexico = Country("Mexico", ["Spanish"], [96],
    ["Roman Catholic", "Other Christian", "No religion"], [83, 10, 3], ["White/European", "Indigenous", "Black"], [47, 22, 1],
    "", "", ["Pesos", "127 V", ["PDT", "GMT-6"]],
    ["Passport Validity: Must be valid at entry", "Blank Passport Pages: 1 page per stamp", "Tourist Visa: Yes, if visiting more than 180 days",
    "Vaccinations: None", "Currency Restrictions:ENTRY/EXIT: $10,000"],
    "Federal Republic")

def return_country(name):
    if name == "Mexico":
        return mexico
    elif name == "France":
        return france
    elif name == "Israel":
        return israel
    elif name == "Brazil":
        return brazil
