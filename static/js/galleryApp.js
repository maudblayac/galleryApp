console.log('📸 galleryApp')

// DOM 
const monImage = document.querySelector('#monImage')
const [btnPrev,btnPlay,btnNext] = document.querySelectorAll('div.buttons-container > button')
const thumbnailsParent = document.querySelector('.thumbnails-container')
const IMAGES_FOLDER = './static/img/wide/'
const THUMB_FOLDER  = './static/img/thumbnails/'
// DataSet 
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
	"sifnos.jpg" // idx 9
]

let compteur = 0
let maxIndex = images.length-1

// ?? quel est la valeur max de mon compteur ? 

const nextImage = ()=>{
	compteur<maxIndex?compteur++:compteur=0
	// ici j'affiche l'image suivante
	updateImage()
}
const prevImage = ()=>{
	if(compteur>0){
		compteur--
	}else{
		compteur=maxIndex
	}
	// ici j'affiche l'image précédente
	updateImage()
}

function updateImage(){
	monImage.src = IMAGES_FOLDER+images[compteur]
}

let monInterval = 0

function startDiaporama (){
	if(monInterval){
		clearInterval(monInterval)
		btnPlay.textContent = '▶'
		monInterval = 0
	}else{
		btnPlay.textContent = '⏸'
		monInterval = setInterval(nextImage,5000)
	}
	
}

btnNext.addEventListener('click',nextImage)
btnPrev.addEventListener('click',prevImage)
btnPlay.addEventListener('click',startDiaporama)



function createThumbnails(){

	images.forEach((thumbnail,idx)=>{
		const divTest      = document.createElement('div')
		const thumbnailImg = document.createElement('img')
		divTest.appendChild(thumbnailImg)
		thumbnailImg.addEventListener('click',()=>{
			console.log('thumbnail clické ',idx)
			compteur = idx
			updateImage()
		})
		thumbnailsParent.appendChild(divTest)
		thumbnailImg.src=THUMB_FOLDER+thumbnail
	})	


	// addEventListener
	// const allThumbnails = thumbnailsParent.querySelectorAll('div > img')
	// console.log(allThumbnails)


}
createThumbnails()