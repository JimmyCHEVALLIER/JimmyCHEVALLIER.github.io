$(function() {
	
	// global variables
	var width = 600;
	var height = 400;
	var margin = {"left": 25, "bottom": 25, "right": 5}
	
	// x scale
	var xScale = d3.scale.linear()
		.domain([0, 100])
		.range([0, width - margin.left - margin.right])
		
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.ticks(0)
		.orient("bottom");
		
	// y scale
	var yScale = d3.scale.linear()
		.domain([0, 100])
		.range([height - margin.bottom, 0])
		
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.ticks(0)
		.orient("left");
		
	// creating the main svg
	var svg = d3.select("#canvas")
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("class", "svg")
	
	// axis and axis description
	svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(15," + (height - 15) + ")")
		.call(xAxis);
		
	var xLabel = svg.append("text")
		.attr("x", 100)
		.attr("y", 398)
		.attr("class", "axis wcm-label")
		.text("completeness of vision")
	
	svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(15, 10)")
		.call(yAxis);
		
	var yLabel = svg.append("text")
		.attr("x", 10)
		.attr("y", 325)
		.attr("class", "axis wcm-label")
		.text("ability to execute")
		.attr("transform", "rotate(270 10,325)")
		
	// wcm quadrant
	var quadrant_group = svg.append("g")
		.attr("transform", "translate(" + margin.left + ",0)")
	
	var quadrant_border = quadrant_group.append("rect")
		.attr("x", 0)
		.attr("y", 0)
		.attr("width", width - margin.left - margin.right)
		.attr("height", height - margin.bottom)
		.attr("rx", 20)
		.attr("ry", 20)
		.attr("class", "quadrant_border")
	
	// creating quadrant descriptions
	quadrant_group.append("text")
		.attr("x", xScale(25))
		.attr("y", yScale(25))
		.attr("text-anchor", "middle")
		.text("Niche Players")
		.attr("class", "quad-label")
		
	quadrant_group.append("text")
		.attr("x", xScale(25))
		.attr("y", yScale(75))
		.attr("text-anchor", "middle")
		.text("Challengers")
		.attr("class", "quad-label")
	
	quadrant_group.append("text")
		.attr("x", xScale(75))
		.attr("y", yScale(25))
		.attr("text-anchor", "middle")
		.text("Visionaries")
		.attr("class", "quad-label")
		
	quadrant_group.append("text")
		.attr("x", xScale(75))
		.attr("y", yScale(75))
		.attr("text-anchor", "middle")
		.text("Leaders")
		.attr("class", "quad-label")
		
	// creating the dividers
	quadrant_group.append("line")
		.attr("x1", 0)
		.attr("y1", yScale(50))
		.attr("x2", xScale(100))
		.attr("y2", yScale(50))
		.attr("class", "divider");
		
	quadrant_group.append("line")
		.attr("x1", xScale(50))
		.attr("y1", 0)
		.attr("x2", xScale(50))
		.attr("y2", yScale(0))
		.attr("class", "divider");
		
	// data for each wcm
	var data = [
		{
			"company": "Affectiva",
			"cov": 70,
			"ate": 70,
			"label_x": -1,
			"label_y": +2,
			"text_anchor": "end",
			"language": "startup",
			"description": "Affectiva en quelques chiffres ⇒  4 milliards d’images analysées, travaille avec 7 des 10 principaux constructeurs automobiles, utilisé par 25% de Global Fortune 500. Affectiva est une startup initialement spécialisée dans la collecte de données liées aux émotions au service du marketing, la publicité les vidéos ou encore les programmes télé. Ils se sont ensuite développés dans la sécurité automobile en appliquant leurs technologies aux services des constructeurs automobiles ou équipementiers.",
			"link": "http://www.affectiva.com/",
			"flag": "us",
			"product": "Startup IA",
			"strengths": [
			"Indice collaboration :  - Bien - La détection d’émotion étant leur spécialité, il est clair que Affectiva est en mesure d’apporter quelque chose à Hoomano. Une présence confirmée sur le marché, leur actualité concernant leur projet sur l’automobile, pourrait donner lieu à une collaboration. Leur situation reste délicate car ils s’identifient clairement comme un concurrent direct.",
			"Expérience: - Très bien- Affectiva a déjà à son actif différents projets avancés dans la reconnaissance d’émotion. En appliquant leur technologie dans des domaines très divers comme le marketing, la génération d’image ou encore la VR, Affectiva se montre clairement comme étant un précurseur dans leur domaine. Voir ⇒ https://www.affectiva.com/experience-it/ . Affectiva montre un intérêt certain pour le domaine de l’automobile et propose déjà leur propre solution à la vente. Voir ⇒ https://go.affectiva.com/auto .",
			"Innovation: - Très bien - Affectiva fait partie de MIT Media Lab. Une organisation spécialisée dans la recherche en IA qui regroupe énormément de projets innovants. Voir ⇒ <a href='https://www.media.mit.edu/'>site du MIT</a>"
				],
			"cautions": [
				"Indice concurrence : - Très concurrentiel - Affectiva correspond typiquement à ce que Hoomano pourrait souhaiter prétendre."
			],
			"conclusion": "Très bien - En conclusion, Affectiva est un acteur très important dans ce domaine. Aussi bien dans leur positionnement que dans leur intérêt pour la recherche dans le secteur de la sécurité embarquée, ils s’identifient aussi bien comme un concurrent potentiel qu’un futur collaborateur."
		},
		{
			"company": "Sensum",
			"cov": 60,
			"ate": 65,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"description": "Sensum travaille travaille depuis son commencement en 2012 sur la reconnaissance d’émotions dans différents domaines dont l’automobile. Elle est implantée dans 3 pays : l’Angleterre à Londres, aux États-Unis à San Francisco, quant à leur siège social il se situe à Belfast en Irlande.",
			"link": "http://www.Sensum.com/",
			"flag": "ir",
			"product": "Startup IA",
			"language": "startup",
			"strengths": [
				"Indice collaboration : - Bien - Étant donné la taille d’entreprise de Sensum, une quinzaine d’employés environ, et la niche du marché de l’intelligence artificielle sur laquelle elle se place, c’est à dire la détection d’émotions, Sensum peut s’avérer être un bon collaborateur. Cependant ils sont comme dit précédemment, sur le marché depuis quelques années et font l’objet de beaucoup de financement et n’ont à première vue pas besoins de collaborateurs.",
				"Expérience: - Très bien - La startup a été fondée en 2012 comme dit précédemment donc elle est en avance sur le marché au niveau de l'expérience par rapport aux premiers concurrents. Ils ont déjà développé des projets avec différentes grandes entreprises dont des équipementiers et des constructeurs automobiles. <a href='https://drive.google.com/file/d/1MwaaCGcR006rMNJn7jx2-mx-nIpxv8oT/view?usp=sharing'>Sensum book</a>",
				"Innovation: - Très bien -   La startup est en collaboration avec l’université de la reine à Belfast (Queen’s university of Belfast) et son secteur de la psychologie afin d’accéder à leurs connaissances en terme de détections d’émotions ils ont donc un avantage non négligeable pour ce qui est de la recherche."
			],
			"cautions": [
			"Indice concurrence : - Très Concurrentiel- Malgré le fait qu’ils aient une taille relativement équivalente à celle d’Hoomano, Sensum est sur ce marché qu’est la détection d'émotions depuis quelques temps et notamment dans l’automobile. En effet ils ont déjà pu collaborer avec des sociétés telles que Jaguar, Mitsubishi ou encore Ford. Pour ce qui est du monde de l’équipementier ils ont été en contact avec Valeo et ont travaillé sur une technologie nommée “empathic mobility tech”.",

				],
			"conclusion": "Note moyenne: - Bien -  La balance tend entre Bien et Très bien puisque l’entreprise, implantée sur le marché depuis quelques temps tout en développant des partenariats forts avec des entreprises de renom comme Ford ou Valeo"
		},
		{
			"company": "Valeo",
			"cov": 80,
			"ate": 70,
			"label_x": -1,
			"label_y": +2,
			"text_anchor": "end",
			"description": "TGE, Valeo emploie 111 600 salariés dans 33 pays répartis sur 184 sites de production, 24 centres de recherche, 34 centres de développement et 15 plates-formes de distribution. (ref <a href='https://fr.wikipedia.org/wiki/Valeo'>ici</a>),<br>Valeo est un fournisseur automobile et partenaire des constructeurs automobiles dans le monde entier. En tant que société concurrentielle, elle s’est spécialisée dans l’innovation automobile, avec un accent particulier sur les systèmes d’aides à la conduite et la réduction des émissions de CO₂. Le Groupe fournit et distribue également des pièces de rechange pour les constructeurs automobiles et les opérateurs indépendants du marché des pièces de rechange.",
			"link": "https://www.valeo.com/fr/valeo-ai/",
			"flag": "us",
			"product": "Équipementier",
			"language": "equipementier",
			"strengths": [
			
			"Expérience: - Bien - Valeo et Sensum développent une technologie baptisée \"empathic mobility tech\" (technologie de la mobilité empathique).",
			"Innovation: - Très bien -  De nouveau grâce à ses liens de partenariat, Valeo est clairement à la recherche de nouvelle solutions pour améliorer l'expérience au volant. Ils se classent à la première place du palmarès des déposants de brevets en France selon l'INPI avec 1 110 demandes de brevets publiées en 2017."

				],
			"cautions": [
				"Indice concurrence :  - Concurrentiel - Indirectement Valeo gagne du terrain sur le marché avec des partenaires comme Sensum. Il se peut qu’ils deviennent un concurrent direct si Hoomano développe une solution propre au secteur de l’automobile.",
				"Indice collaboration : - Mauvais - Au premier abord, Valeo est un acteur très avancé et déployé dans le monde entier. Avec un pôle “Systèmes de confort et d’aide à la conduite” (CDA), Valeo s’est spécialisé dans les véhicules connectés. Néanmoins, au vu du fait qu’une collaboration est déjà établie avec Sensum, un autre acteur présent dans notre rapport se rapprochant du profil d’Hoomano, il semble compliqué d’établir un lien de partenariat avec un acteur aussi bien établi. Cependant Valeo pourrait devenir un tremplin de taille pour Hoomano si un lien de collaboration se créait."

			],
			"conclusion": " - Bien -  Un acteur intéressant qui pourrait être une potentielle opportunité pour Hoomano."
		},
		{
			"company": "PSA x EPFL",
			"cov": 10,
			"ate": 15,
			"label_x": -1,
			"label_y": +2,
			"text_anchor": "end",
			"language": "collaboration",
			"description": "Projet en partenariat avec PSA basé sur la reconnaissance d’émotions dans une voiture en associant différentes approches. Le projet est avant tout basé sur un usage d’assistance à la conduite par l’intermédiaire de la détection d’émotions. Nous verrons dans un autre cas que l’EPFL mène aussi des études sur l’application de la détection d’émotion pour un usage plus marketing avec d’autres acteurs comme nViso.",
			"link": "https://lts5www.epfl.ch/research/face_analysis/",
			"flag": "us",
			"product": "Collaboration",
			"strengths": [
				"Innovation: - Très bien -  Ce projet de recherche touche à une problématique intéressante pour Hoomano."
			],
			"cautions": [
			],
			"conclusion": " - Neutre -   Peu de communication depuis 2014 mais un projet solide et annoncé comme étant sur du long terme.",
			"neutrals" :[
				"Indice collaboration",
				"Indice concurrence",
				"Expérience"
			] 
		},
		{
			"company": "Toyota Boshoku",
			"cov": 30,
			"ate": 25,
			"label_x": +18,
			"label_y": -4,
			"text_anchor": "end",
			"description": "Équipementier affilié à la marque japonaise Toyota. A développé et a présenté au CES 2018 une solution nommée ACES, un système de détection d’émotions qui peut déterminer votre humeur actuelle.",
			"link": "https://www.toyota-boshoku.com/global/index.html",
			"flag": "us",
			"product": "Équipementier",
			"language": "equipementier",
			"strengths": [
				"Innovation : - Très bien -  Présentant des prototype innovant au CES 2018, leur indice innovation n’est plus à prouver.",
				"Indice collaboration : - Bien - Un équipementier automobile à l'international, présent en France et en Europe pourrait être intéressant pour Hoomano. Leurs intérêts pour la reconnaissance d’émotion pourraient bien aller dans le sens de ce que recherche Hoomano.",
				"Expérience : - Très bien -  Avec la présentation de deux concepts de détection d’émotions pour véhicules autonomes, ils montrent clairement une connaissance du sujet et une maîtrise technique."
			],
			"cautions": [
			],
			"conclusion": " - Bien -  Un acteur intéressant pour Hoomano malgré le manque d’informations sur où se sont déroulés les projets, si ces derniers ont eu lieu au Japon ou dans une de leur filiales européenne.",
			"neutrals" :[
				"Indice concurrence : Étant encore à l’état de prototype nous n’avons pas trouvé d’informations sur la commercialisation de ce dernier. Il se pourrait qu’il le devienne (concurrentiel) à l’avenir."
			] 
		},
		{
			"company": "Argo IA",
			"cov": 40,
			"ate": 80,
			"label_x": -1,
			"label_y": +2,
			"text_anchor": "end",
			"description": "Argo AI est une société basée aux Etats-Unis spécialisée dans la conception de véhicules autonomes et l’amélioration de l'expérience de conduite afin de la rendre plus agréable, plus accessible et sécurisée. Bénéficie d’ 1 milliard de dollars de soutien de Ford.",
			"link": "https://www.argo.ai/blog/",
			"flag": "us",
			"product": "PME IA",
			"language": "pme",
			"strengths": [
				"Expérience: - Bien -  Actuellement capable de concurrencer les plus influents, cette startup sortie de l’obscurité laisse penser que leur expérience n’est plus à prouver. Leur site internet introduit leur produit et leurs applications.",
				"Innovation: - Très bien - Leur solution étant elle-même innovante, nous identifions un indice important pour cet acteur"
			],
			"cautions": [
			"Indice concurrence : - Très concurrentiel - Leur positionnement stratégique étant très avantageux et avec le soutien d’un grand constructeur comme Ford, Argo IA est un acteur redoutable sur le marché actuel."
			],
			"conclusion": "Bien -  Un acteur très intéressant avec une situation privilégié. Le soutien financier de Ford a clairement révélé cette startup qui est maintenant à la pointe de l’innovation dans le domaine de l’IA appliquée aux véhicules autonomes.",
			"neutrals" :[
				"Indice collaboration : Il est clair que Argo à les fonds et l’expérience pour susciter l'intérêt d’une entreprise comme Hoomano. Une prise de contact avec cet acteur permettrait d’en apprendre un peu plus sur leurs intentions et les possibilités de partenariat."
			] 
		},
		{
			"company": "NAUTO",
			"cov": 70,
			"ate": 80,
			"label_x": -1,
			"label_y": +2,
			"text_anchor": "end",
			"description": "Nauto est une entreprise spécialisée dans l'intelligence artificiel appliquée au domaine de l’automobile. Elle s’occupe aussi bien de construire une solution capable d’améliorer le confort, par des recommandations, que la sécurité. => https://www.nauto.com/product Nauto collabore avec la startup Newton Technologies et a eu d’importantes levées de fonds. </br> “Pear Ventures was an investor in Newton, while Nauto has currently raised $173.9 million from General Motors Ventures, Toyota AI Ventures and BMW i Ventures. In July 2017, Nauto raised a $159 million Series B round from SoftBank and Greylock” => https://www.pymnts.com/news/partnerships-acquisitions/2019/safe-driving-ai-startup-newton-nauto/",
			"link": " https://www.nauto.com/product",
			"flag": "us",
			"product": "PME IA",
			"language": "pme",
			"strengths": [
"Indice collaboration : - Très Bien - En Europe, au Japon ou aux US, Nauto est ouvert à créer des partenariats comme indiqué sur leur site. => https://www.nauto.com/contact",
"Expérience: - Très bien - Nauto montre une certaine expérience par la diversité de sa clientèle et applications de leur solution.",
"Innovation: - Très bien -  Projets de recherches et collaborations avec d’autres startups pour innover d’avantage.",
			],
			"cautions": [
			"Indice concurrence : - Très concurrentiel -  Nauto étant spécialisé dans l’amélioration de l'expérience au volant, ils pourraient être un concurrent direct."
			],
			"conclusion": "Très bien -  Dans l’ensemble, Nauto a tout d’un acteur sérieux et intéressant pour Hoomano.",
			"neutrals" :[
			] 
		},
		{
			"company": "KIA",
			"cov": 10,
			"ate": 10,
			"label_x": -1,
			"label_y": +2,
			"text_anchor": "end",
			"description": "Projet véhicule autonome avec détection d’émotions des passagers (CES 2019)",
			"link": "https://www.digitaltrends.com/cars/kia-emotion-recognition-ai-tech-at-ces-2019/",
			"flag": "us",
			"product": "Constructeur automobile",
			"language": "constructeur",
			"strengths": [
				"Innovation: - Bien -  Présentation d’un projet au CES 2019"
			],
			"cautions": [
				"Expérience: - Très mauvais -  Aucun projet n’a encore vraiment vu le jour sur le marché."

			],
			"conclusion": "Mauvais -  Mis à part un projet innovant, Kia reste dans l’ombre de Hyundai qui semble prendre les devants à cet égard. Pour rappel Kia est une filiale de Hyundai. => https://www.digitaltrends.com/cars/kia-emotion-recognition-ai-tech-at-ces-2019/",
			"neutrals" :[
				"Indice collaboration : - Neutre -  Trop peu d’informations",
				"Indice concurrence : - Neutre -  Trop peu d’informations",

			] 
		},
		{
			"company": "Nuance",
			"cov": 55,
			"ate": 85,
			"label_x": -1,
			"label_y": +2,
			"text_anchor": "end",
			"description": "Nuance est une multinationale américaine qui crée et commercialise des logiciels d’imagerie et de reconnaissance vocale. Ils sont maintenant spécialisés aussi dans le domaine de l’automobile et travaillent sur l’IA émotionnelle, les interactions multimodales en réalité augmentée, ou encore les capacités conversationnelles avancées. (Siège social : Burlington, Massachusetts, États-Unis)",
			"link": "https://www.nuance.com",
			"flag": "us",
			"product": "Editeur logiciels",
			"language": "editeur_logiciels",
			"strengths": [
				"Indice collaboration : - Très Bien - Leur domaine de compétence pourrait se lier à ce que souhaite faire Hoomano: “As innovation leaders in conversational AI, we’ve spent decades pursuing the possibilities of the human voice—including its potential to transform the relationship between people and cars. Because each voice is as unique as a fingerprint, we combine voice biometrics with intelligent speech signal processing to create a powerful environment for in-vehicle speech. The result is an optimal experience for each user and an infinite capacity for personalized comfort, elevating the satisfaction of everyone who rides in your cars.” (ref: https://www.nuance.com/fr-fr/automotive/voice-biometrics.html)",
				"Expérience: - Très bien -  Aujourd'hui, plus de 200 millions de voitures en circulation bénéficient des technologies Dragon Drive, leur produit phare.",
				"Innovation: - Très bien -  Nuance travail sur des sujets telles que l’IA émotionnelle, les interactions multimodales en réalité augmentée, ou encore les capacités de conversationnelles avancées (Homme/machine) se rapprochant des fonctionnalité que propose les robots de Hoomano. => https://www.nuance.com/fr-fr/about-us/newsroom/press-releases/nuance-automotive-fait-evoluer-lexperience-utilisateur-humanisee-pour-la-voiture-numerique-de-demain.html#!"			
			],
			"cautions": [
				"Indice concurrence : - Très concurrentiel - Surement dans les acteurs les plus implantés sur le marché."

			],
			"conclusion": "Très bien -  Incontestablement un acteur à ne pas manquer pour Hoomano car il pourrait bien être précurseur dans le domaine de la reconnaissance / échange vocal.",
			"neutrals" :[
			] 
		},
		{
			"company": "nViso",
			"cov": 52,
			"ate": 52,
			"label_x": -1,
			"label_y": +2,
			"text_anchor": "end",
			"description": "NVISO fournit des solutions d'intelligence artificielle capables de détecter, de comprendre et d'agir sur le comportement humain à l'aide de l'analyse des émotions.",
			"link": "https://www.nviso.com",
			"flag": "us",
			"product": "Startup IA",
			"language": "startup",
			"strengths": [
			"Indice collaboration : - Bien - Partenaire du Fancy Project, nViso traite aussi bien la reconnaissance faciale que l’analyse vocale. Ils sont localisés dans la cité de l’innovation à Lausanne.",
			"Indice concurrence : - Peu concurrentiel - nViso est plus spécialisé dans la détection faciale.",
			"Innovation: - Très bien -  Faisant partie d’un projet européen d’innovation et d’envergure, leur indice d’innovation est fort.",

				],
			"cautions": [

			],
			"conclusion": "Neutre - Peu de communications sur cet acteur mais le projet FANCY dont ils font partie pourrait être intéressant pour Hoomano.",
			"neutrals" :[
			"Expérience: Peu d'informations"
			] 
		},
		{
			"company": "Byton",
			"cov": 5,
			"ate": 5,
			"label_x": -1,
			"label_y": +2,
			"text_anchor": "end",
			"language": "constructeur",
			"description": "Byton est un constructeur automobile chinois fondé en 2018.",
			"link": "https://www.byton.com",
			"flag": "us",
			"product": "Constructeur automobile",
			"strengths": [
				"Innovation: - Très bien -  CES 2018 véhicule star du CES avec de nombreuse prouesses technologique dont l’assistance vocale très évoluée."
				],
			"cautions": [

			],
			"conclusion": "Neutre -  Beaucoup d’informations concernant le véhicule présenté au CES mais peu de communications sur la suite des évènements.",
			"neutrals" :[
				"Indice collaboration : - Neutre -",
				"Indice concurrence : - Neutre -  ",
				"Expérience: - Neutre -  "
			] 
		}

	]
	
	// creating the circles
	quadrant_group.selectAll("circle")
		.data(data)
		.enter()
		.append("circle")
		.attr("class", function(d) {
			return "circle item " + d.flag + " " + d.language + " " + d.company.toLowerCase().replace(/\s/g, "")
		})
		.attr("cx", function(d) {
			return xScale(d.cov);
		})
		.attr("cy", function(d) {
			return yScale(d.ate);
		})
		.attr("r", 7)
		.attr("opacity", 1)
		.on("mouseover", function() {
			d3.select(this).classed("circle-hover", true)
			d3.select("text." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("wcm-label-hover", true)
		})
		.on("click", function() {
			$(".init-info").hide()
			$(".init-hidden").show()
			var self = this;
			d3.select(".circle-selected").classed("circle-selected", false)
			d3.select(".wcm-label-selected").classed("wcm-label-selected", false)
			d3.select(self).classed("circle-selected", true)
			d3.select("text." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("wcm-label-selected", true)
			d3.select("#language").text(self.__data__.languageLong)
			d3.select("#product").text(self.__data__.product)
			d3.select("#link").html("<a href='" + self.__data__.link + "'>" + self.__data__.link + "</a>")
			d3.select("#flag").html("<img src='img/flags/" + self.__data__.flag + ".png'>")
			d3.select("#logo").html("<a class='thumbnail' href='" + self.__data__.link + "'><img src='img/logos/" + self.__data__.logo + "'></a>")
			d3.select("#description").html(self.__data__.description)
			d3.select("#name").html(self.__data__.company)
			d3.select("#neutral").html(function() {
				if(self.__data__.neutrals == undefined || self.__data__.neutrals.length==0){
					d3.select("#title_neutral").style("display", "none")
					return ""
				}
				d3.select("#title_neutral").style("display", "block")
				return "<ul>" + 
							self.__data__.neutrals.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#conclusion").html(self.__data__.conclusion)
			d3.select("#strengths").html(function() {
				if(self.__data__.strengths == undefined || self.__data__.strengths.length==0){
					d3.select("#title_strengths").style("display", "none")
					return ""
				}
				d3.select("#title_strengths").style("display", "block")
				return "<ul>" + 
							self.__data__.strengths.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#cautions").html(function() {
				if(self.__data__.cautions == undefined || self.__data__.cautions.length==0){
					d3.select("#title_cautions").style("display", "none")
					return ""
				}
				d3.select("#title_cautions").style("display", "block")
				return "<ul>" + 
							self.__data__.cautions.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
		})
		.on("mouseout", function() {
			d3.select(this).classed("circle-hover", false)
			d3.select("text." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("wcm-label-hover", false)
		})
	
	// creating the labels for the circles
	quadrant_group.selectAll(".wcm-label")
		.data(data)
		.enter()
		.append("text")
		.attr("opacity", 1)
		.attr("class", function(d) {
			return "wcm-label item " + d.flag + " " + d.language + " " + d.company.toLowerCase().replace(/\s/g, "")
		})
		.attr("x", function(d) {
			return xScale(d.cov + d.label_x);
		})
		.attr("y", function(d) {
			return yScale(d.ate + d.label_y);
		})
		.text(function(d) {
			return d.company
		})
		.attr("text-anchor", function(d) {
			return d.text_anchor
		})
		.on("mouseover", function() {
			d3.select(this).classed("wcm-label-hover", true)
			d3.select("circle." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("circle-hover", true)
		})
		.on("mouseout", function() {
			d3.select(this).classed("wcm-label-hover", false)
			d3.select("circle." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("circle-hover", false)
		})
		.on("click", function() {
			$(".init-info").hide()
			$(".init-hidden").show()
			var self = this;
			d3.select(".circle-selected").classed("circle-selected", false)
			d3.select(".wcm-label-selected").classed("wcm-label-selected", false)
			d3.select(self).classed("wcm-label-selected", true)
			d3.select("circle." + this.__data__.company.toLowerCase().replace(/\s/g, "")).classed("circle-selected", true)
			d3.select("#language").text(self.__data__.languageLong)
			d3.select("#product").text(self.__data__.product)
			d3.select("#test").html(self.__data__.test)
			d3.select("#name").html(self.__data__.company)
			d3.select("#link").html("<a href='" + self.__data__.link + "'>" + self.__data__.link + "</a>")
			d3.select("#flag").html("<img src='img/flags/" + self.__data__.flag + ".png'>")
			d3.select("#logo").html("<a class='thumbnail' href='" + self.__data__.link + "'><img src='img/logos/" + self.__data__.logo + "'></a>")
			d3.select("#description").html(self.__data__.description)
			d3.select("#neutral").html(function() {
				if(self.__data__.neutrals == undefined || self.__data__.neutrals.length==0){
					d3.select("#title_neutral").style("display", "none")
					return ""
				}
				d3.select("#title_neutral").style("display", "block")
				return "<ul>" + 
							self.__data__.neutrals.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#conclusion").html(self.__data__.conclusion)
			d3.select("#strengths").html(function() {
				if(self.__data__.strengths == undefined || self.__data__.strengths.length==0){
					d3.select("#title_strengths").style("display", "none")
					return ""
				}
				d3.select("#title_strengths").style("display", "block")
				return "<ul>" + 
							self.__data__.strengths.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#cautions").html(function() {
				if(self.__data__.cautions == undefined || self.__data__.cautions.length==0){
					d3.select("#title_cautions").style("display", "none")
					return ""
				}
				d3.select("#title_cautions").style("display", "block")
				return "<ul>" + 
							self.__data__.cautions.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
		})
		
	// click on the country dropdown
	$(".country-select").on("click", function(evt) {
		$(".country-top").html($(this).html())
		$(".language-top").html(' \
			<i class="icon-font"></i> \
			<span></span>  \
			<span>Select Language</span> \
		');
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
		d3.selectAll(".item:not(." + $(this).attr("id") + ")")
			.transition()
			.duration(1000)
			.attr("opacity", 0.1)
	})
	
	// click on country reset
	$(".country-reset").on("click", function(evt) {
		$(".country-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
	})


    // click on the type dropdown
	$(".type-select").on("click", function(evt) {
		$(".type-top").html($(this).html())
		// $(".language-top").html(' \
		// 	<i class="icon-font"></i> \
		// 	<span></span>  \
		// 	<span>Select Language</span> \
		// ');
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
		d3.selectAll(".item:not(." + $(this).attr("id").replace("_", " ") + ")")
			.transition()
			.duration(1000)
			.attr("opacity", 0.1)
	})
	
	// click on country reset
	$(".type-reset").on("click", function(evt) {
		$(".type-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
	})
	
	// click on language dropdown
	$(".language-select").on("click", function(evt) {
		$(".country-top").html(' \
			<i class="icon-globe"></i> \
			<span></span>  \
			<span>Select Country</span> \
		');
		$(".language-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
		d3.selectAll(".item:not(." + $(this).attr("id") + ")")
			.transition()
			.duration(1000)
			.attr("opacity", 0.1)
	})
	
	// click on language reset
	$(".language-reset").on("click", function(evt) {
		$(".language-top").html($(this).html())
		d3.selectAll(".item")
			.transition()
			.duration(1000)
			.attr("opacity", 1)
	})
	
	$(".init-hidden").hide();
	
});