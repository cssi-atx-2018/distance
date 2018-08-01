# -*- coding: utf-8 -*-

class Country:
    def __init__(self, name, lang, lang_amt, relig, relig_amt, eth, eth_amt, customs, taboos, curr_pow_time, regulations, government, photos = []):
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
        self.photos = photos
    def get_info(self):
        return ({"name":self.name, "lang":self.lang, "lang_amt":self.lang_amt, "relig":self.relig,
        "relig_amt":self.relig_amt, "eth":self.eth,"eth_amt":self.eth_amt, "customs":self.customs,
        "taboos":self.taboos,"curr_pow_time":self.curr_pow_time,"regulations":self.regulations,
        "government":self.government, "photos":self.photos})


israel = Country("Israel", ["Hebrew", "Arabic", "Russian"],[49, 18, 15],
    ["Jewish", "Muslim", "Christian"], [75, 18, 2], ["Jewish", "Arabic", "Other"], [75, 20, 5],
    "", "", ["Shekel", "H type plug", ["GMT+3"]],
    ["Passport Validity: No minimum, but your stay cannot exceed validity of passport and airlines may deny boarding if your passport has less than 6 months validity.",
    "Blank Passport Pages: 1 page, normally aren\'t stamped upon entry", "Tourist Visa: Only if staying longer than 90 days", "Vaccinations: None",
    "Currency Restrictions: ENTRY/EXIT: If leaving or arriving by air you must declare amounts above 50,000 shekels and 12,00 shekels if by you came by land."],
    "Parliamentary democracy", ["../png/israel1.png", "../png/israel2.png", "../png/israel3.png", "../png/israel4.png", "../png/israel5.png", "../png/israel6.png"])

brazil = Country("Brazil", ["Portugese"], [99],
    ["Roman Catholic", "No religion", "Assemblies of God", "Protestant"], [65, 8, 6, 4], ["White", "Multiracial", "Black"], [48, 43, 8],
    "", "", ["Brazilian Real", "110/220/240 V", ["GMT-2", "GMT-4", "GMT-5"]],
    ["Tourist Visa: Yes", "Vaccinations: None", "Currency Restrictions: ENTRY/EXIT:  If more than 10,000 BR it must be declared."],
    "Constitutional Republic", ["../png/brazil1.png", "../png/brazil2.png", "../png/brazil3.png", "../png/brazil4.png", "../png/brazil5.png", "../png/brazil6.png"])

france = Country("France", ["French", "Arabic", "Portugese"], [87, 4, 2],
    ["Christian","No religion", "Islam"], [51, 40, 6], ["French", "French by Acquisition", "Immigrants", "Foreigners"], [89, 4, 6, 9],
    "", "", ["Euro", "220/240 V", ["GMT+2"]],
    ["Passport Validity: Must be valid 3 months before departure", "Blank Passport Pages: at least one blank page", "Tourist Visa: Only if staying longer than 90 days.",
    "Vaccinations: None", "Currency Restrictions: ENTRY/EXIT: $10,000 euros"],
    "French Republic", ["../png/france1.png", "../png/france2.png", "../png/france3.png", "../png/france4.png", "../png/france5.png", "../png/france6.png"])

mexico = Country("Mexico", ["Spanish"], [96],
    ["Roman Catholic", "Other Christian", "No religion"], [83, 10, 3], ["White/European", "Indigenous", "Black"], [47, 22, 1],
    "", "", ["Pesos", "127 V", ["PDT", "GMT-6"]],
    ["Passport Validity: Must be valid at entry", "Blank Passport Pages: 1 page per stamp", "Tourist Visa: Yes, if visiting more than 180 days",
    "Vaccinations: None", "Currency Restrictions:ENTRY/EXIT: $10,000"],
    "Federal Republic", ["../png/mexico1.JPEG", "../png/mexico2.JPEG", "../png/mexico3.JPEG", "../png/mexico4.JPEG", "../png/mexico5.JPEG", "../png/mexico6.JPEG"])

china = Country("China", ["Mandarin"], [71],
    ["Chinese Folk Religion", "Buddhism", "Christianity"], [73.6, 15.9, 2.5], ["Han Chinese", "Zhuang", "Hui"], [91.6, 1.2, 0.8],
    "", "", ["Yuan", "220 V", ["GMT+8"]],
    ["Passport Validity: 6 months", "Blank Passport Pages: 2 pages per stamp", "Tourist visa: Yes", "Vaccinations: None",
    "Currency Restrictions:ENTRY/EXIT: Max RMB 20,000"],
    "Communist Government", ["../png/china1.JPEG", "../png/china2.JPEG", "../png/china3.JPEG", "../png/china4.JPEG", "../png/china5.JPEG", "../png/china6.JPEG"])

southafrica = Country("South Africa", ["Zulu", "Xhosa", "Afrikaans", "English", "Northern Sotho"], [22.7,16,13,10,9],
    ["Protestant", "No religion", "Catholic"], [73.2,14.9,7.4], ["Black African", "Coloured", "White", "Indian/Asian"], [80.2,8.8,8.4,2.5],
    "", "", ["Rand", "230v", ["GMT+2"]],
    ["Passport Validity: 30 days", "Blank Passport Pages: 2 consecutive empty pages per entry",
    "Tourist Visa: Required if visiting more than 90 days", "Vaccinations: Yellow Fever vaccine required at least 10 days before if travelling from certain countries",
    "Currency restrictions: ENTRY: ZAR 25,000; Foreign currency unlimited if declared; No Kruger coins. Exit: ZAR 25,000; Foreign currency unlimited if amount was declared on entry; Up to 15 Kruger coins if proof purchased with foreign currency"],
    "Parliamentary Democracy", ["../png/southafrica1.png", "../png/southafrica2.png", "../png/southafrica3.png", "../png/southafrica4.png", "../png/southafrica5.png", "../png/southafrica6.png"])


def return_country(name):
    if name == "Mexico":
        return mexico
    elif name == "France":
        return france
    elif name == "Israel":
        return israel
    elif name == "Brazil":
        return brazil
    elif name == "China":
        return china
    elif name == "South Africa":
        return southafrica
