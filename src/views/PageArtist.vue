<template>
	<div id="artist">
		<!-- hero -->
		<div
			id="artist-hero"
			class="align-center"
			v-bind:style="{
				backgroundImage: 'url(' + data.website.imgArtistHero + ')',
			}"
		>
			<h1
				class="text-secondary align-center setting-anim--fadeinup setting-anim--delayed"
			>
				L'artiste
			</h1>
		</div>
		<!-- /hero -->

		<div class="container section align-center">
			<img
				class="image-responsive"
				loading="lazy"
				v-bind:src="data.website.artist.photoA1"
				v-bind:srcset="data.website.artist.photoA2"
			/>
			<br />
			<p class="text-justify">
				D’origine Charentaise, j’ai toujours été passionnée de peinture et
				inspirée par l’univers de la puissance émotionnelle des couleurs et
				de ses contrastes, comme en ont témoigné les peintres
				impressionnistes et post- impressionnistes : C. Monet, P. Cézanne,
				Turner et Boudin, dont la couleur nous parle de l’émotion d’un
				instant, P. Bonnard, chez lequel les oranges et les violets
				raisonnent, les fabuleux contrastes dans les pastels de
				Toulouse-Lautrec, Degas, Vuillard, et parmi les peintres plus
				récents : Joan Mitchel, Rothko, Zao Wou Ki comme :« Le vent pousse
				la mer », les blancs colorés de Viera da Silva, lumineux de
				J.Truphémus, dont les contrastes complémentaires donnent à la
				lumière la plus chaude une incandescence plus mystérieuse, G.
				Sacksick, dont le travail est une exploration de la matière, une
				persistance rétinienne à la manière de la fresque, Les ors primitifs
				des peintres de la Renaissance italienne....
			</p>
			<p class="text-justify">
				Evocation de ces peintres, dont j’ai eu la chance de voir les
				oeuvres dans les galeries ou musées de Paris, Giverny, Vienne,
				New-York, Washington, Philadelphie...
			</p>
			<p class="text-justify">
				Venue à Paris par nécessité professionnelle pour travailler dans le
				secteur de l’Edition, je suis « entrée en peinture » à l’atelier de
				l’Association « Atexfo » fondée par J.Y. Guionet, dans les années
				1998-2000, d’abord formée à la gestuelle et à l’expression du modèle
				vivant (encres et fusains), puis à l’atelier « Terre et Feu » avec
				Daniel Lacomme, pour évoluer vers une libération gestuelle et
				matiérée (huile) de la peinture expressionniste et sensualiste,
				enseignée par J.Y.Guionet, et aller à la découverte de l’ébauche, au
				moyen des encres et pastels, en transparences colorées.
			</p>
			<br />
			<img
				class="image-responsive setting-shadow--motion"
				loading="lazy"
				v-bind:src="data.website.artist.photoB1"
				v-bind:srcset="data.website.artist.photoB2"
			/>
			<br />
			<br />
			<p class="text-justify">
				Nourrie de cette « philosophie » accompagnant une pratique
				picturale, j’ai réalisé une exposition en Charente en décembre 2012,
				intitulée« Traces du sensibles » à l’Hôtel Renard, de Jarnac, au
				sujet de laquelle l’article d’Alain Michaux paru dans Le Courrier
				Français, intitulait : « Le retour aux sources d’une artiste
				expressionniste ».
			</p>
			<p class="text-justify">
				A Paris, j’ai participé, avec mes amis peintres-expressionnistes de
				l’Association Atexfo, à quelques expositions (années 2009 à 2019),
				la derniere exposition collective, nov. 2019, s’intitulait « Les
				Peintres Sensualistes » 72 Art Gallery, à La Varenne.
			</p>
			<p class="text-justify">
				Le livre de l’Association Atexfo « ENTRER EN PEINTURE CREATIVE, Les
				gestes de l’émotion », publié en 2013, par les éditions Lelivredart,
				et écrit par Jean-Yves Guionet et Isabelle Rusher, rassemble les
				textes, exercices et reproductions d’oeuvres des peintres issus de
				ce mouvement Expressionniste-sensualiste, dont trois de mes oeuvres.
			</p>
			<p class="text-justify">
				Parallèlement, je reste une fervente pratiquante de l’aquarelle, et
				de croquis en extérieur ou sur le vif, notamment, au cours de stages
				de « Carnets de voyages » en France, et en Italie, depuis les années
				2008.
			</p>
		</div>
	</div>
</template>

<script>
	import Json from "../data/data.json";

	export default {
		data() {
			return {
				data: Json,
			};
		},
	};
</script>
