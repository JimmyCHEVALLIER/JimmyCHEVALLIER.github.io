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
			"description": "Affectiva en quelques chiffres ⇒  4 milliards d’images analysées, travaille avec 7 des 10 principaux constructeurs automobiles, Utilisé par 25% de Global Fortune 500. </br>Affectiva est une startup initialement spécialisé dans la collecte de donnée lié au émotions au service du marketing, la publicité les vidéos ou encore les programmes télé. Ils se sont ensuite développé dans la sécurité automobile en appliquant leurs technologies au services des constructeurs automobile ou fournisseurs de pièces détachés.",
			"link": "http://www.affectiva.com/",
			"flag": "us",
			"product": "Startup IA",
			"strengths": [
			"Indice collaboration : - Bien - La détection d’émotion étant leur spécialité, il est clair que Affectiva est en mesure d’apporter quelque chose à Hoomano. Une présence confirmée sur le marché, leur actualité concernant leur projet sur l’automobile, pourrait donner lieu à une collaboration. Leur situation reste délicate car ils s’identifient clairement comme un concurrent direct.",
			"Expérience: - Très bien - Affectiva a déjà à son actif différent projet avancé dans la reconnaissance d’émotion.",
			"Innovation: - Très bien - Affectiva fait partie de MIT Media Lab. Une organisation spécialisé dans la recherche en IA qui regroupe énormément de projets innovants. Voir ⇒ https://www.media.mit.edu/"
				],
			"cautions": [
				"Indice concurrence : - Très concurrentiel - Affectiva correspond typiquement à ce que Hoomano pourrait souhaiter prétendre."
			],
			"conclusion": "Très bien - En conclusion, Affectiva est un acteur très important dans ce domaine. Aussi bien dans leur positionnement que dans leur intérêt pour la recherche."
		},
		{
			"company": "Sensum",
			"cov": 55,
			"ate": 60,
			"label_x": -2,
			"label_y": 0,
			"text_anchor": "end",
			"description": "Sensum travaille depuis son commencement en 2012 sur la reconnaissance d’émotions dans différents domaines dont l’automobile. Elle est implantée dans 3 pays : l’angleterre à Londres, aux états-unis à San Francisco, quant à leur siège social il se situe à Belfast en Irlande.",
			"link": "http://www.Sensum.com/",
			"flag": "ir",
			"product": "Startup IA",
			"strengths": [
				"Indice collaboration : - Très Bien - Étant donné la taille d’entreprise de Sensum, une quinzaine d’employés environ, et la niche du marché de l’intelligence artificielle sur laquelle elle se place, c’est à dire la détection d’émotions. Cependant ils sont comme dit précédemment, sur le marché depuis quelques années et font l’objet de beaucoup de financement. ",
				"Expérience: - Bien - La startup a été fondée en 2012 comme dit précédemment donc elle est en avance sur le marché au niveau de l'expérience par rapport aux premiers concurrents. Ils ont déjà développés des projets avec différentes grandes entreprises dont des équipementiers et des constructeurs automobiles.Sensum book",
				"Innovation: - Très bien -  La startup est en collaboration avec l’université de la reine à Belfast (Queen’s university of Belfast) et son secteur de la psychologie afin d’accéder à leurs connaissances en terme de détections d’émotions."
			],
			"cautions": [
			"Indice concurrence : - Très Concurrentiel- Malgré le fait qu’ils aient une taille relativement équivalente à celle d’Hoomano, Sensumest sur ce marché qu’est la détection d'émotions depuis quelques temps et notamment dans l’automobile. En effet ils ont déjà pu collaborer avec des sociétés telles que Jaguar, Mitsubishi ou encore Ford. Pour ce qui est du monde de l’équipementier ils ont été en contacte avec Valeo et ont travaillé sur une technologie nommé “empathic mobility tech”."
				],
			"conclusion": "Note moyenne: - Bien -  La balance tend entre Bien et Très bien puisque l’entreprise, implantée sur le marché depuis quelques temps tout en développant des partenariats forts avec des entreprises de renom comme Ford ou Valeo"
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
			d3.select("#conclusion").html(self.__data__.conclusion)
			d3.select("#strengths").html(function() {
				return "<ul>" + 
							self.__data__.strengths.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#cautions").html(function() {
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
			d3.select("#link").html("<a href='" + self.__data__.link + "'>" + self.__data__.link + "</a>")
			d3.select("#flag").html("<img src='img/flags/" + self.__data__.flag + ".png'>")
			d3.select("#logo").html("<a class='thumbnail' href='" + self.__data__.link + "'><img src='img/logos/" + self.__data__.logo + "'></a>")
			d3.select("#description").html(self.__data__.description)
			d3.select("#strengths").html(function() {
				return "<ul>" + 
							self.__data__.strengths.map(function(elem) {
								return "<li>" + elem + "</li>"
							}).join("") + 
						"</ul>"
			})
			d3.select("#cautions").html(function() {
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