console.log('📸 galleryApp')

// DOM 
const monImage = document.querySelector('#monImage')
const [btnPrev,btnNext] = document.querySelectorAll('div.buttons-container > button')
const IMAGES_FOLDER = './static/img/wide/'
const IMAGESthumbnails = './static/img/thumbnails/'
const thumbnails  = document.querySelector('.thumbnails-container')

// DataSet 
let compteur = 0

const images = [
	"gaby1.jpg",
	"gaby2.jpg",
	"hiroshima.jpg",
	"iceland1.jpg",
	"iceland2.jpg",
	"japan1.jpg",
	"jerusalem.jpg",
	"jocelyn.jpg",
	"lost.jpg",
	"sifnos.jpg" 
]

// IMAGESthumbnails
images.forEach(function(slide, index) {
    let div = document.createElement('div');
    thumbnails.appendChild(div);

    let img = document.createElement('img');
    img.src = IMAGESthumbnails + slide;
    div.appendChild(img);

    div.addEventListener('click', function() {
        // Mettre à jour l'image principale via le click 
        monImage.src = IMAGES_FOLDER + images[index];
        compteur = index;
    });
});
// nextImage

const nextImage = ()=>{
	

	if(compteur<images.length-1){
		compteur++
	}else{
		compteur=0
	}

	// ici j'affiche l'image suivante
	monImage.src = IMAGES_FOLDER+images[compteur]
}

// prevImage

const prevImage = ()=>{
	
	if(compteur>0){
		compteur--
	}else{
		compteur=images.length-1
	}
	// ici j'affiche l'image précédente
	monImage.src = IMAGES_FOLDER+images[compteur]
}

btnNext.addEventListener('click',nextImage)
btnPrev.addEventListener('click',prevImage)





