var wordPairs = [
  ["Jazz", "Blues"],
  ["Reggae", "Ska"],
  ["Opera", "Ballet"],
  ["Rock", "Metal"],
  ["Pop", "Disco"],
  ["Acid Rain", "Smog"],
  ["Biodiversity", "Ecosystem"],
  ["Fossil Fuels", "Renewable Energy"],
  ["Global Warming", "Climate Change"],
  ["Recycling", "Composting"],
  ["Asteroid", "Comet"],
  ["Black Hole", "Pulsar"],
  ["Constellation", "Galaxy"],
  ["Eclipse", "Equinox"],
  ["Orbit", "Rotation"],
  ["Algebra", "Calculus"],
  ["Geometry", "Trigonometry"],
  ["Physics", "Chemistry"],
  ["Biology", "Zoology"],
  ["Geology", "Meteorology"],
  ["Archery", "Fencing"],
  ["Boxing", "Karate"],
  ["Diving", "Swimming"],
  ["Hiking", "Camping"],
  ["Rowing", "Sailing"],
  ["Ballet", "Modern Dance"],
  ["Graffiti", "Mural"],
  ["Sculpture", "Carving"],
  ["Sketch", "Portrait"],
  ["Watercolor", "Oil Painting"],
  ["Bass", "Tenor"],
  ["Chorus", "Solo"],
  ["Melody", "Harmony"],
  ["Rhythm", "Beat"],
  ["Verse", "Chorus"],
  ["Brick", "Stone"],
  ["Cement", "Concrete"],
  ["Granite", "Marble"],
  ["Plaster", "Drywall"],
  ["Tile", "Linoleum"],
  ["Broccoli", "Cauliflower"],
  ["Lettuce", "Spinach"],
  ["Peas", "Green Beans"],
  ["Potato", "Yam"],
  ["Zucchini", "Squash"],
  ["Apricot", "Peach"],
  ["Blackberry", "Raspberry"],
  ["Grapefruit", "Orange"],
  ["Melon", "Watermelon"],
  ["Pear", "Apple"],
  ["Canoe", "Kayak"],
  ["Jet Ski", "Speedboat"],
  ["Sailboat", "Catamaran"],
  ["Submarine", "Diving Bell"],
  ["Yacht", "Cruiser"],
  ["Analog Watch", "Digital Watch"],
  ["Bracelet", "Bangle"],
  ["Cufflinks", "Tie Clip"],
  ["Necktie", "Bow Tie"],
  ["Wallet", "Money Clip"],
  ["Cocktail", "Mocktail"],
  ["Espresso", "Latte"],
  ["Juice", "Smoothie"],
  ["Soda", "Lemonade"],
  ["Tea", "Herbal Tea"],
  ["Boulevard", "Avenue"],
  ["Bridge", "Tunnel"],
  ["Highway", "Freeway"],
  ["Path", "Trail"],
  ["Street", "Lane"],
  ["Castle", "Keep"],
  ["Dungeon", "Cellar"],
  ["Fort", "Barracks"],
  ["Palace", "Manor"],
  ["Temple", "Monastery"],
  ["Blizzard", "Snowstorm"],
  ["Cyclone", "Typhoon"],
  ["Fog", "Mist"],
  ["Lightning", "Thunder"],
  ["Rainbow", "Aurora"],
  ["Comic Books", "Graphic Novels"],
  ["Encyclopedia", "Dictionary"],
  ["Newspaper", "Magazine"],
  ["Novella", "Novelette"],
  ["Play", "Screenplay"],
  ["Appetizer", "Entrée"],
  ["Dessert", "Pastry"],
  ["Main Course", "Side Dish"],
  ["Salad", "Soup"],
  ["Snack", "Treat"],
  ["Ceramics", "Pottery"],
  ["Crochet", "Knitting"],
  ["Embroidery", "Sewing"],
  ["Quilting", "Weaving"],
  ["Sculpting", "Modeling"],
  ["Camel", "Llama"],
  ["Cheetah", "Leopard"],
  ["Gorilla", "Orangutan"],
  ["Penguin", "Puffin"],
  ["Rhinoceros", "Hippopotamus"],
  ["Kite", "Windsock"],
  ["Billiards", "Snooker"],
  ["Canopy", "Awning"],
  ["Diary", "Journal"],
  ["Fable", "Legend"],
  ["Myth", "Folklore"],
  ["Sonnet", "Limerick"],
  ["Thriller", "Mystery"],
  ["Biopic", "Documentary"],
  ["Silent Film", "Talkie"],
  ["Broadway", "Off-Broadway"],
  ["Concerto", "Symphony"],
  ["Solo", "Duet"],
  ["Acapella", "Choir"],
  ["Baroque", "Classical"],
  ["Sonata", "Rhapsody"],
  ["Blues", "Jazz"],
  ["Country", "Bluegrass"],
  ["Electronic", "Techno"],
  ["Hip Hop", "Rap"],
  ["Indie", "Alternative"],
  ["Pop", "Electropop"],
  ["Rock", "Punk"],
  ["Soul", "R&B"],
  ["Trance", "House"],
  ["Alley", "Lane"],
  ["Boulevard", "Drive"],
  ["Circle", "Square"],
  ["Court", "Plaza"],
  ["Road", "Street"],
  ["Attic", "Basement"],
  ["Balcony", "Patio"],
  ["Closet", "Wardrobe"],
  ["Garage", "Carport"],
  ["Kitchen", "Pantry"],
  ["Bungalow", "Cottage"],
  ["Chalet", "Cabin"],
  ["Mansion", "Estate"],
  ["Studio", "Loft"],
  ["Townhouse", "Duplex"],
  ["Aquarium", "Terrarium"],
  ["Hedge", "Fence"],
  ["Lawn", "Garden"],
  ["Porch", "Deck"],
  ["Shrubbery", "Topiary"],
  ["Curtain", "Drape"],
  ["Mattress", "Futon"],
  ["Recliner", "Armchair"],
  ["Rug", "Carpet"],
  ["Table", "Desk"],
  ["Chandelier", "Pendant Light"],
  ["Lantern", "Torch"],
  ["Sconce", "Lamp"],
  ["Spotlight", "Floodlight"],
  ["Candle", "Tealight"],
  ["Blender", "Mixer"],
  ["Freezer", "Refrigerator"],
  ["Oven", "Stove"],
  ["Toaster", "Grill"],
  ["Washer", "Dryer"],
  ["Notebook", "Laptop"],
  ["Smartphone", "Tablet"],
  ["Speaker", "Amplifier"],
  ["Television", "Monitor"],
  ["Webcam", "Camera"],
  ["Bridge", "Viaduct"],
  ["Ferry", "Tugboat"],
  ["Highway", "Expressway"],
  ["Railway", "Subway"],
  ["Tunnel", "Underpass"],
  ["Ballet", "Tap Dance"],
  ["Graffiti", "Street Art"],
  ["Mosaic", "Fresco"],
  ["Sculpture", "Statue"],
  ["Watercolor", "Acrylic"],
  ["Clarinet", "Saxophone"],
  ["Drums", "Bongos"],
  ["Flute", "Piccolo"],
  ["Guitar", "Banjo"],
  ["Piano", "Organ"],
  ["Accordion", "Harmonica"],
  ["Cello", "Viola"],
  ["Chimes", "Bell"],
  ["Harp", "Lyre"],
  ["Trombone", "Trumpet"],
  ["Baguette", "Ciabatta"],
  ["Croissant", "Danish"],
  ["Espresso", "Cappuccino"],
  ["Gelato", "Sorbet"],
  ["Macaron", "Macaroon"],
  ["Aster", "Dahlia"],
  ["Cactus", "Succulent"],
  ["Fern", "Moss"],
  ["Orchid", "Lily"],
  ["Rose", "Tulip"],
  ["Alpaca", "Vicuña"],
  ["Buffalo", "Bison"],
  ["Eel", "Serpent"],
  ["Falcon", "Hawk"],
  ["Gazelle", "Antelope"],
  ["Abacus", "Calculator"],
  ["Chronometer", "Stopwatch"],
  ["Compass", "Sextant"],
  ["Microscope", "Telescope"],
  ["Thermometer", "Barometer"],
  ["Meadow", "Prairie"],
  ["Estuary", "Delta"],
  ["Hurricane", "Tornado"],
  ["Lagoon", "Bay"],
  ["Peninsula", "Isthmus"],
  ["Glacier", "Iceberg"],
  ["Volcano", "Mountain"],
  ["Stream", "Creek"],
  ["Desert", "Tundra"],
  ["Forest", "Jungle"],
  ["Canyon", "Gorge"],
  ["Valley", "Ravine"],
  ["Lake", "Pond"],
  ["Island", "Atoll"],
  ["Ocean", "Sea"],
  ["River", "Brook"],
  ["Mars", "Venus"],
  ["Saturn", "Jupiter"],
  ["Star", "Planet"],
  ["Galaxy", "Nebula"],
  ["Comet", "Meteor"],
  ["Astronaut", "Cosmonaut"],
  ["Telescope", "Binoculars"],
  ["Observatory", "Planetarium"],
  ["Space", "Universe"],
  ["Atom", "Molecule"],
  ["Reactant", "Product"],
  ["Solid", "Liquid"],
  ["Gas", "Plasma"],
  ["Evaporation", "Condensation"],
  ["Freezing", "Melting"],
  ["Boiling", "Sublimation"],
  ["Ion", "Electron"],
  ["Acid", "Base"],
  ["Oxidation", "Reduction"],
  ["Theory", "Law"],
  ["Hypothesis", "Prediction"],
  ["Experiment", "Observation"],
  ["Variable", "Constant"],
  ["Control", "Sample"],
  ["Data", "Analysis"],
  ["Conclusion", "Abstract"],
  ["Research", "Study"],
  ["Journal", "Article"],
  ["Thesis", "Dissertation"],
  ["Lecture", "Seminar"],
  ["Class", "Course"],
  ["Textbook", "Manual"],
  ["Quiz", "Test"],
  ["Exam", "Assessment"],
  ["Homework", "Assignment"],
  ["Project", "Presentation"],
  ["Lab", "Workshop"],
  ["Theory", "Practice"],
  ["Knowledge", "Understanding"],
  ["Learning", "Education"],
  ["Scholar", "Student"],
  ["Teacher", "Instructor"],
  ["Professor", "Lecturer"],
  ["Campus", "University"],
  ["School", "College"],
  ["Graduate", "Undergraduate"],
  ["Major", "Minor"],
  ["Degree", "Certification"],
  ["Diploma", "Certificate"],
  ["Coursework", "Curriculum"],
  ["Semester", "Quarter"],
  ["Academic", "Vocational"],
  ["Elective", "Required"],
  ["Lecture", "Discussion"],
  ["Group", "Individual"],
  ["Online", "In-person"],
  ["Distance", "Remote"],
  ["Study", "Review"],
  ["Enroll", "Register"],
  ["Attend", "Participate"],
  ["Complete", "Finish"],
  ["Pass", "Fail"],
  ["Grade", "Mark"],
  ["Score", "Rating"],
  ["Feedback", "Critique"],
  ["Question", "Inquiry"],
  ["Answer", "Response"],
  ["Problem", "Solution"],
  ["Challenge", "Opportunity"],
  ["Success", "Achievement"],
  ["Effort", "Performance"],
  ["Skill", "Ability"],
  ["Talent", "Gift"],
  ["Interest", "Passion"],
  ["Motivation", "Drive"],
  ["Goal", "Objective"],
  ["Plan", "Strategy"],
  ["Decision", "Choice"],
  ["Option", "Alternative"],
  ["Path", "Route"],
  ["Journey", "Expedition"],
  ["Adventure", "Quest"],
  ["Experience", "Exposure"],
  ["Practice", "Training"],
  ["Preparation", "Readiness"],
  ["Study", "Investigation"],
  ["Research", "Exploration"],
  ["Discovery", "Finding"],
  ["Insight", "Perception"],
  ["Understanding", "Comprehension"],
  ["Knowledge", "Wisdom"],
  ["Thought", "Idea"],
  ["Concept", "Notion"],
  ["Perspective", "Viewpoint"],
  ["Opinion", "Belief"],
  ["Argument", "Debate"],
  ["Discussion", "Dialogue"],
  ["Conversation", "Talk"],
  ["Chat", "Discussion"],
  ["Message", "Communication"],
  ["Information", "Data"],
  ["Fact", "Detail"],
  ["Evidence", "Proof"],
  ["Example", "Instance"],
  ["Case", "Scenario"],
  ["Situation", "Condition"],
  ["Context", "Background"],
  ["Setting", "Environment"],
  ["Location", "Place"],
  ["Area", "Region"],
  ["Zone", "Sector"],
  ["District", "Neighborhood"],
  ["City", "Town"],
  ["Village", "Hamlet"],
  ["Country", "Nation"],
  ["State", "Province"],
  ["Territory", "Domain"],
  ["Land", "Realm"],
  ["World", "Globe"],
  ["Earth", "Planet"],
  ["Universe", "Cosmos"],
  ["Space", "Void"],
  ["Galaxy", "System"],
  ["Star", "Sun"],
  ["Moon", "Satellite"],
  ["Comet", "Asteroid"],
  ["Meteor", "Meteorite"],
  ["Orbit", "Path"],
  ["Launch", "Liftoff"],
  ["Flight", "Mission"],
  ["Exploration", "Voyage"],
  ["Journey", "Odyssey"],
  ["Adventure", "Expedition"],
  ["Quest", "Search"],
  ["Discovery", "Finding"],
  ["Uncovering", "Revelation"],
  ["Insight", "Understanding"],
  ["Knowledge", "Wisdom"],
  ["Learning", "Education"],
  ["Study", "Research"],
  ["Investigation", "Analysis"],
  ["Examination", "Inspection"],
  ["Observation", "Monitoring"],
  ["Review", "Assessment"],
  ["Evaluation", "Appraisal"],
  ["Judgment", "Opinion"],
  ["Conclusion", "Verdict"],
  ["Decision", "Determination"],
  ["Choice", "Preference"],
  ["Option", "Alternative"],
  ["Solution", "Answer"],
  ["Remedy", "Cure"],
  ["Relief", "Aid"],
  ["Help", "Assistance"],
  ["Support", "Backing"],
  ["Encouragement", "Motivation"],
  ["Inspiration", "Influence"],
  ["Impact", "Effect"],
  ["Change", "Transformation"],
  ["Growth", "Development"],
  ["Progress", "Advancement"],
  ["Improvement", "Enhancement"],
  ["Increase", "Gain"],
  ["Rise", "Growth"],
  ["Expansion", "Extension"],
  ["Extension", "Expansion"],
  ["Spread", "Proliferation"],
  ["Distribution", "Dissemination"],
  ["Circulation", "Broadcast"],
  ["Publication", "Release"],
  ["Announcement", "Declaration"],
  ["Statement", "Proclamation"],
  ["Expression", "Articulation"],
  ["Communication", "Transmission"],
  ["Transfer", "Exchange"],
  ["Movement", "Motion"],
  ["Action", "Activity"],
  ["Operation", "Function"],
  ["Performance", "Execution"],
  ["Implementation", "Application"],
  ["Employment", "Usage"],
  ["Utilization", "Exploitation"],
  ["Management", "Administration"],
  ["Organization", "Arrangement"],
  ["Coordination", "Integration"],
  ["Combination", "Mixture"],
  ["Blend", "Fusion"],
  ["Synthesis", "Composition"],
  ["Creation", "Invention"],
  ["Design", "Plan"],
  ["Scheme", "Strategy"],
  ["Approach", "Method"],
  ["Technique", "Tactic"],
  ["Procedure", "Process"],
  ["Routine", "Regimen"],
  ["Practice", "Custom"],
  ["Tradition", "Convention"],
  ["Norm", "Standard"],
  ["Criterion", "Benchmark"],
  ["Model", "Example"],
  ["Pattern", "Template"],
  ["Prototype", "Archetype"],
  ["Ideal", "Paragon"],
  ["Exemplar", "Model"],
  ["Guide", "Manual"],
  ["Handbook", "Guidebook"],
  ["Textbook", "Primer"],
  ["Introduction", "Overview"],
  ["Summary", "Abstract"],
  ["Outline", "Synopsis"],
  ["Review", "Critique"],
  ["Analysis", "Evaluation"],
  ["Assessment", "Appraisal"],
  ["Estimation", "Calculation"],
  ["Measurement", "Quantification"],
  ["Determination", "Ascertainment"],
  ["Identification", "Recognition"],
  ["Discovery", "Unearthing"],
  ["Finding", "Locating"],
  ["Search", "Hunt"],
  ["Quest", "Pursuit"],
  ["Exploration", "Investigation"],
  ["Inquiry", "Probe"],
  ["Examination", "Scrutiny"],
  ["Inspection", "Check"],
  ["Review", "Audit"],
  ["Survey", "Study"],
  ["Research", "Analysis"],
  ["Study", "Examination"],
  ["Learning", "Education"],
  ["Instruction", "Teaching"],
  ["Training", "Coaching"],
  ["Development", "Cultivation"],
  ["Enhancement", "Improvement"],
  ["Advancement", "Progress"],
  ["Growth", "Expansion"],
  ["Evolution", "Transformation"],
  ["Change", "Modification"],
  ["Alteration", "Adjustment"],
  ["Adaptation", "Acclimatization"],
  ["Adjustment", "Adaptation"],
  ["Modification", "Amendment"],
  ["Revision", "Correction"],
  ["Edit", "Update"],
  ["Amendment", "Alteration"],
  ["Refinement", "Polishing"],
  ["Improvement", "Enhancement"],
  ["Betterment", "Upgrade"],
  ["Advancement", "Progression"],
  ["Development", "Evolution"],
  ["Growth", "Maturation"],
  ["Expansion", "Extension"],
  ["Extension", "Expansion"],
  ["Spread", "Distribution"],
  ["Distribution", "Dissemination"],
  ["Dissemination", "Broadcast"],
  ["Broadcast", "Transmission"],
  ["Transmission", "Conveyance"],
  ["Delivery", "Provision"],
  ["Provision", "Supply"],
  ["Allocation", "Distribution"],
  ["Distribution", "Allocation"],
  ["Assignment", "Appropriation"],
  ["Appropriation", "Allocation"],
  ["Allotment", "Assignment"],
  ["Designation", "Nomination"],
  ["Nomination", "Selection"],
  ["Choice", "Option"],
  ["Option", "Alternative"],
  ["Alternative", "Substitute"],
  ["Substitute", "Replacement"],
  ["Replacement", "Successor"],
  ["Successor", "Heir"],
  ["Heir", "Inheritor"],
  ["Inheritor", "Beneficiary"],
  ["Beneficiary", "Recipient"],
  ["Recipient", "Receiver"],
  ["Receiver", "Consignee"],
  ["Consignee", "Addressee"],
  ["Addressee", "Recipient"],
  ["Participant", "Attendee"],
  ["Attendee", "Guest"],
  ["Guest", "Visitor"],
  ["Visitor", "Caller"],
  ["Caller", "Guest"],
  ["Companion", "Partner"],
  ["Partner", "Ally"],
  ["Ally", "Associate"],
  ["Associate", "Colleague"],
  ["Colleague", "Coworker"],
  ["Coworker", "Teammate"],
  ["Teammate", "Collaborator"],
  ["Collaborator", "Contributor"],
  ["Contributor", "Supporter"],
  ["Supporter", "Advocate"],
  ["Advocate", "Proponent"],
  ["Proponent", "Champion"],
  ["Champion", "Defender"],
  ["Defender", "Protector"],
  ["Protector", "Guardian"],
  ["Guardian", "Custodian"],
  ["Custodian", "Keeper"],
  ["Keeper", "Curator"],
  ["Curator", "Conservator"],
  ["Conservator", "Steward"],
  ["Steward", "Manager"],
  ["Manager", "Director"],
  ["Director", "Leader"],
  ["Leader", "Chief"],
  ["Chief", "Head"],
  ["Head", "Principal"],
  ["Principal", "Superintendent"],
  ["Superintendent", "Supervisor"],
  ["Supervisor", "Overseer"],
  ["Overseer", "Monitor"],
  ["Monitor", "Observer"],
  ["Observer", "Watcher"],
  ["Watcher", "Guardian"],
  ["Guardian", "Protector"],
  ["Protector", "Defender"],
  ["Defender", "Advocate"],
  ["Advocate", "Supporter"],
  ["Supporter", "Backer"],
  ["Backer", "Sponsor"],
  ["Sponsor", "Patron"],
  ["Patron", "Benefactor"],
  ["Benefactor", "Donor"],
  ["Donor", "Contributor"],
  ["Contributor", "Provider"],
  ["Provider", "Supplier"],
  ["Supplier", "Vendor"],
  ["Vendor", "Dealer"],
  ["Dealer", "Trader"],
  ["Trader", "Merchant"],
  ["Merchant", "Salesman"],
  ["Salesman", "Seller"],
  ["Seller", "Vendor"],
  ["Vendor", "Retailer"],
  ["Retailer", "Distributor"],
  ["Distributor", "Wholesaler"],
  ["Wholesaler", "Supplier"],
  ["Supplier", "Provider"],
  ["Provider", "Furnisher"],
  ["Furnisher", "Equipper"],
  ["Equipper", "Outfitter"],
  ["Outfitter", "Supplier"],
  ["Supplier", "Distributor"],
  ["Distributor", "Dispenser"],
  ["Dispenser", "Distributor"],
  ["Distributor", "Agent"],
  ["Agent", "Representative"],
];
