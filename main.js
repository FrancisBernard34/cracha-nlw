const linksSocialMedia = {
  github: 'FrancisBernard34',
  youtube: 'UC5Qp6fClAv89TRMLjbY-EgQ',
  facebook: 'maykbrito',
  instagram: 'francisbernard_2',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userImage.src = data.avatar_url
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      github_user.textContent = data.login
    })
}

getGitHubProfileInfos()
