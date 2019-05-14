function displayRandomWord() {
	var s = "Unité 7 - Lecture 6 1. Lis ces mots : chaque - pourtant - vraiment - surtout jamais - désormais -aussitôt - enfin 2. Lis ce texte : Désormais sur la planète Cacahouète réfléchit. Elle sort une graine de sa poche la dépose sur le sol. Rien ne se passe et Bouchon s'énerve et s'agite. Tiptaptop. Cacahouète demande à son ordinateur : Que faut-il pour faire germer des graines ? - De la terre répond l'ordinateur. Alors. Cacahouete consulte ses recettes magiques. Elle rassemble les produits nécessaires dans son chaudron. Puis elle le dépose délicatement sur le sol et prononce la formule magique. Aussitôtle mélange frémit et le chaudron malacticocorico roule de tous les côtés. Soudain quelque chose gronde et un bruit énorme retentit. C'est un volcan! De la lave et des roches brûlantes se répandent sur le sol. Trouve vite une formule supplie Bouchon qui entraine Cacahouète à l'abri dans la capsule. La sorcière tremble de tout son corps. Impossible de réfléchir... La lave s'approche de la capsule. Sauve qui peut ! hurle Bouchon. Les sorcieres et les cochons d'abord! ";
	var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?0-9«<>≪≫]/g,"");
	var finalString = punctuationless.replace(/\s{2,}/g," ");
	console.log(finalString);
	var items = finalString.split(' ');
//	console.log(s.match(/\S+/g));
//	var items = s.match(/\S+/g);
	var item = items[Math.floor(Math.random()*items.length)];

//add color change
	document.getElementById("word").innerHTML = item.toLowerCase();
 
 
}
