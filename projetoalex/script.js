const titulo = document.querySelector('.titulo')
const perfilimagem = document.querySelector('.perfil-imagem')
const perfillocalidade= document.querySelector('.localidade')
const perfilbio = document.querySelector('.perfil-bio')
const perfilseg = document.querySelector('.perfil-seg')
const perfilrepos = document.querySelector('.perfil-repos')

const getInfos = async () =>{
    const response = await fetch('https://api.github.com/users/ArthurDEV24')
    const data = await response.json()
    console.log(data)
    titulo.innerHTML = data.name
    perfilimagem.setAttribute('src', data.avatar_url)
    perfillocalidade.innerHTML = data.location
    perfilbio.innerHTML = data.bio
    perfilseg.innerHTML = `Seguindo ${data.following} e ${data.followers} seguidores`
    perfilrepos.innerHTML = `${data.public_repos} Repositórios públicos`
    
    
}
getInfos()